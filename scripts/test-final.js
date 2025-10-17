#!/usr/bin/env node

/**
 * Script de test final pour valider le projet
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const LOCALES = ['fr', 'ar'];

const CRITICAL_PAGES = [
  '',
  '/about',
  '/programs',
  '/contact',
  '/admissions',
];

const OPTIONAL_PAGES = [
  '/school-life',
  '/news',
  '/gallery',
  '/portal/parent',
  '/portal/student',
  '/portal/teacher',
  '/virtual-tour',
  '/legal/terms',
  '/legal/privacy'
];

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          success: res.statusCode >= 200 && res.statusCode < 400,
          size: data.length,
          hasContent: data.length > 1000
        });
      });
    });
    
    req.on('error', (err) => {
      reject({
        url,
        error: err.message,
        success: false
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject({
        url,
        error: 'Timeout (10s)',
        success: false
      });
    });
  });
}

async function testCriticalPages() {
  console.log('🔍 TEST DES PAGES CRITIQUES\n');
  
  const results = [];
  
  for (const locale of LOCALES) {
    console.log(`🌍 Langue: ${locale.toUpperCase()}`);
    console.log('-'.repeat(40));
    
    for (const page of CRITICAL_PAGES) {
      const url = `${BASE_URL}/${locale}${page}`;
      
      try {
        const result = await makeRequest(url);
        results.push(result);
        
        if (result.success && result.hasContent) {
          console.log(`✅ ${page || '/'} - ${result.status} (${result.size} bytes)`);
        } else {
          console.log(`❌ ${page || '/'} - ${result.status} ${!result.hasContent ? '(contenu insuffisant)' : ''}`);
        }
      } catch (error) {
        results.push(error);
        console.log(`❌ ${page || '/'} - ${error.error}`);
      }
    }
    console.log('');
  }
  
  return results;
}

async function testAPIs() {
  console.log('🔌 TEST DES APIs\n');
  console.log('-'.repeat(40));
  
  const apis = ['/api/sitemap', '/api/robots'];
  const results = [];
  
  for (const api of apis) {
    const url = `${BASE_URL}${api}`;
    
    try {
      const result = await makeRequest(url);
      results.push(result);
      
      if (result.success) {
        console.log(`✅ ${api} - ${result.status} (${result.size} bytes)`);
      } else {
        console.log(`❌ ${api} - ${result.status}`);
      }
    } catch (error) {
      results.push(error);
      console.log(`❌ ${api} - ${error.error}`);
    }
  }
  
  console.log('');
  return results;
}

function checkProjectStructure() {
  console.log('📁 VÉRIFICATION DE LA STRUCTURE\n');
  console.log('-'.repeat(40));
  
  const requiredFiles = [
    'package.json',
    'next.config.js',
    'tailwind.config.js',
    'tsconfig.json',
    'src/app/layout.tsx',
    'src/app/page.tsx',
    'src/components/ui/Button.tsx',
    'src/components/ui/Card.tsx',
    'src/messages/fr.json',
    'src/messages/ar.json',
    'public/images',
    'scripts/test-pages.js',
    'README.md'
  ];
  
  let missingFiles = [];
  let existingFiles = [];
  
  requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
      existingFiles.push(file);
      console.log(`✅ ${file}`);
    } else {
      missingFiles.push(file);
      console.log(`❌ ${file} - MANQUANT`);
    }
  });
  
  console.log('');
  return { missingFiles, existingFiles };
}

function generateReport(pageResults, apiResults, structureCheck) {
  console.log('📊 RAPPORT FINAL\n');
  console.log('='.repeat(60));
  
  // Statistiques des pages
  const successfulPages = pageResults.filter(r => r.success && r.hasContent).length;
  const totalPages = pageResults.length;
  const pageSuccessRate = Math.round((successfulPages / totalPages) * 100);
  
  // Statistiques des APIs
  const successfulAPIs = apiResults.filter(r => r.success).length;
  const totalAPIs = apiResults.length;
  const apiSuccessRate = Math.round((successfulAPIs / totalAPIs) * 100);
  
  // Statistiques de la structure
  const totalFiles = structureCheck.existingFiles.length + structureCheck.missingFiles.length;
  const structureRate = Math.round((structureCheck.existingFiles.length / totalFiles) * 100);
  
  console.log(`📄 Pages critiques: ${successfulPages}/${totalPages} (${pageSuccessRate}%)`);
  console.log(`🔌 APIs: ${successfulAPIs}/${totalAPIs} (${apiSuccessRate}%)`);
  console.log(`📁 Structure: ${structureCheck.existingFiles.length}/${totalFiles} (${structureRate}%)`);
  
  const overallSuccess = Math.round((pageSuccessRate + apiSuccessRate + structureRate) / 3);
  
  console.log(`\n🎯 Score Global: ${overallSuccess}%`);
  
  // Évaluation
  if (overallSuccess >= 90) {
    console.log('\n🎉 EXCELLENT ! Le projet est prêt pour la production.');
    console.log('✅ Toutes les fonctionnalités critiques fonctionnent');
    console.log('✅ Structure complète et bien organisée');
    console.log('✅ APIs opérationnelles');
  } else if (overallSuccess >= 70) {
    console.log('\n✅ BON ! Le projet est fonctionnel avec quelques améliorations possibles.');
    console.log('⚠️  Vérifiez les éléments marqués comme manquants ou défaillants');
  } else if (overallSuccess >= 50) {
    console.log('\n⚠️  MOYEN ! Des problèmes significatifs détectés.');
    console.log('🔧 Corrigez les erreurs critiques avant le déploiement');
  } else {
    console.log('\n❌ CRITIQUE ! Le projet nécessite des corrections majeures.');
    console.log('🛠️  Travaillez sur les éléments essentiels avant de continuer');
  }
  
  // Recommandations
  console.log('\n💡 RECOMMANDATIONS:');
  
  if (pageSuccessRate < 100) {
    console.log('📄 Corrigez les pages qui retournent des erreurs');
  }
  
  if (apiSuccessRate < 100) {
    console.log('🔌 Vérifiez la configuration des APIs');
  }
  
  if (structureCheck.missingFiles.length > 0) {
    console.log('📁 Créez les fichiers manquants pour une structure complète');
  }
  
  if (overallSuccess >= 90) {
    console.log('🚀 Prêt pour le déploiement !');
    console.log('📈 Considérez l\'ajout de fonctionnalités avancées');
    console.log('🎨 Personnalisez le contenu et les images');
  }
  
  console.log('\n' + '='.repeat(60));
}

async function main() {
  console.log('🧪 TEST FINAL DU PROJET LYCEÉ ASDRUBAL\n');
  console.log('📍 Serveur:', BASE_URL);
  console.log('🌍 Langues:', LOCALES.join(', '));
  console.log('📄 Pages critiques:', CRITICAL_PAGES.length);
  console.log('🔌 APIs:', 2);
  console.log('\n' + '='.repeat(60) + '\n');
  
  // Vérifier si le serveur est accessible
  try {
    await makeRequest(`${BASE_URL}/`);
    console.log('✅ Serveur accessible !\n');
  } catch (error) {
    console.log('❌ Serveur non accessible sur', BASE_URL);
    console.log('💡 Assurez-vous que le serveur de développement est démarré:');
    console.log('   npm run dev');
    console.log('\n📋 Vérification de la structure uniquement...\n');
    
    const structureCheck = checkProjectStructure();
    generateReport([], [], structureCheck);
    process.exit(1);
  }
  
  // Tests
  const pageResults = await testCriticalPages();
  const apiResults = await testAPIs();
  const structureCheck = checkProjectStructure();
  
  // Rapport final
  generateReport(pageResults, apiResults, structureCheck);
}

main().catch(console.error);
