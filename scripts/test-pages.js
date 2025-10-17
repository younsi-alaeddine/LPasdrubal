#!/usr/bin/env node

/**
 * Script de test simple pour vérifier que toutes les pages se chargent
 * Usage: node scripts/test-pages.js
 */

const http = require('http');
const https = require('https');

const BASE_URL = 'http://localhost:3000';
const LOCALES = ['fr', 'ar'];

const PAGES = [
  '',
  '/about',
  '/programs',
  '/admissions',
  '/school-life',
  '/news',
  '/gallery',
  '/contact',
  '/portal/parent',
  '/portal/student',
  '/portal/teacher',
  '/virtual-tour',
  '/legal/terms',
  '/legal/privacy'
];

const API_ENDPOINTS = [
  '/api/contact',
  '/api/admissions',
  '/api/sitemap',
  '/api/robots'
];

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          success: res.statusCode >= 200 && res.statusCode < 400,
          size: data.length
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
    
    req.setTimeout(5000, () => {
      req.destroy();
      reject({
        url,
        error: 'Timeout',
        success: false
      });
    });
  });
}

async function testPages() {
  console.log('🧪 Test des pages du Lycée Privé Asdrubal\n');
  console.log('📍 Serveur:', BASE_URL);
  console.log('🌍 Langues:', LOCALES.join(', '));
  console.log('📄 Pages:', PAGES.length);
  console.log('🔌 APIs:', API_ENDPOINTS.length);
  console.log('\n' + '='.repeat(60) + '\n');

  const results = {
    pages: { success: 0, failed: 0, total: 0 },
    apis: { success: 0, failed: 0, total: 0 }
  };

  // Test des pages
  console.log('📄 TEST DES PAGES\n');
  
  for (const locale of LOCALES) {
    console.log(`\n🌍 Langue: ${locale.toUpperCase()}`);
    console.log('-'.repeat(40));
    
    for (const page of PAGES) {
      const url = `${BASE_URL}/${locale}${page}`;
      results.pages.total++;
      
      try {
        const result = await makeRequest(url);
        
        if (result.success) {
          console.log(`✅ ${page || '/'} - ${result.status} (${result.size} bytes)`);
          results.pages.success++;
        } else {
          console.log(`❌ ${page || '/'} - ${result.status}`);
          results.pages.failed++;
        }
      } catch (error) {
        console.log(`❌ ${page || '/'} - ${error.error}`);
        results.pages.failed++;
      }
    }
  }

  // Test des APIs
  console.log('\n\n🔌 TEST DES APIs\n');
  console.log('-'.repeat(40));
  
  for (const endpoint of API_ENDPOINTS) {
    const url = `${BASE_URL}${endpoint}`;
    results.apis.total++;
    
    try {
      const result = await makeRequest(url);
      
      if (result.success) {
        console.log(`✅ ${endpoint} - ${result.status} (${result.size} bytes)`);
        results.apis.success++;
      } else {
        console.log(`❌ ${endpoint} - ${result.status}`);
        results.apis.failed++;
      }
    } catch (error) {
      console.log(`❌ ${endpoint} - ${error.error}`);
      results.apis.failed++;
    }
  }

  // Résumé
  console.log('\n\n📊 RÉSUMÉ DES TESTS\n');
  console.log('='.repeat(60));
  
  console.log(`📄 Pages: ${results.pages.success}/${results.pages.total} réussies`);
  console.log(`🔌 APIs: ${results.apis.success}/${results.apis.total} réussies`);
  
  const totalSuccess = results.pages.success + results.apis.success;
  const totalTests = results.pages.total + results.apis.total;
  const successRate = Math.round((totalSuccess / totalTests) * 100);
  
  console.log(`\n🎯 Taux de réussite: ${successRate}%`);
  
  if (successRate >= 90) {
    console.log('🎉 Excellent ! Le site fonctionne parfaitement.');
  } else if (successRate >= 70) {
    console.log('✅ Bon ! Quelques améliorations possibles.');
  } else {
    console.log('⚠️  Attention ! Des problèmes détectés.');
  }
  
  console.log('\n' + '='.repeat(60));
}

// Vérifier si le serveur est en cours d'exécution
async function checkServer() {
  try {
    await makeRequest(`${BASE_URL}/`);
    return true;
  } catch (error) {
    return false;
  }
}

async function main() {
  console.log('🔍 Vérification du serveur...');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('❌ Serveur non accessible sur', BASE_URL);
    console.log('💡 Assurez-vous que le serveur de développement est démarré:');
    console.log('   npm run dev');
    process.exit(1);
  }
  
  console.log('✅ Serveur accessible !\n');
  
  await testPages();
}

main().catch(console.error);
