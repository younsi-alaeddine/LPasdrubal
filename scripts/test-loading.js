#!/usr/bin/env node

const axios = require('axios');
const path = require('path');

const SERVER_URL = 'http://localhost:3000';
const LOCALES = ['fr', 'ar'];

const PAGES_WITH_LOADING = [
  '/',
  '/about',
  '/contact',
  '/admissions',
  '/gallery',
  '/news'
];

async function testPageLoading(url) {
  try {
    console.log(`🔍 Test de chargement: ${url}`);
    
    const startTime = Date.now();
    const response = await axios.get(url, { 
      timeout: 10000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const loadTime = Date.now() - startTime;
    
    console.log(`✅ ${url} - ${response.status} (${loadTime}ms, ${response.data.length} bytes)`);
    
    // Vérifier la présence d'éléments de chargement
    const hasLoadingElements = response.data.includes('loading') || 
                              response.data.includes('animate-spin') ||
                              response.data.includes('transition') ||
                              response.data.includes('framer-motion');
    
    if (hasLoadingElements) {
      console.log(`   🎨 Éléments de chargement détectés`);
    } else {
      console.log(`   ⚠️  Aucun élément de chargement détecté`);
    }
    
    return { success: true, loadTime, hasLoading: hasLoadingElements };
  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.error(`❌ ${url} - Timeout (plus de 10s)`);
    } else if (error.response) {
      console.error(`❌ ${url} - ${error.response.status}`);
    } else {
      console.error(`❌ ${url} - Erreur: ${error.message}`);
    }
    return { success: false, error: error.message };
  }
}

async function testLoadingFeatures() {
  console.log('\n🚀 TEST DES FONCTIONNALITÉS DE CHARGEMENT\n');
  console.log(`📍 Serveur: ${SERVER_URL}`);
  console.log(`🌍 Langues: ${LOCALES.join(', ')}`);
  console.log(`📄 Pages à tester: ${PAGES_WITH_LOADING.length}`);
  console.log('\n============================================================\n');

  let totalTests = 0;
  let successfulTests = 0;
  let totalLoadTime = 0;
  let pagesWithLoading = 0;

  for (const locale of LOCALES) {
    console.log(`🌍 Langue: ${locale.toUpperCase()}`);
    console.log('----------------------------------------');
    
    for (const page of PAGES_WITH_LOADING) {
      const url = `${SERVER_URL}/${locale}${page === '/' ? '' : page}`;
      const result = await testPageLoading(url);
      
      totalTests++;
      if (result.success) {
        successfulTests++;
        totalLoadTime += result.loadTime;
        if (result.hasLoading) {
          pagesWithLoading++;
        }
      }
      
      // Pause entre les tests pour éviter la surcharge
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    console.log('\n');
  }

  console.log('📊 RAPPORT FINAL - CHARGEMENT & TRANSITIONS\n');
  console.log('============================================================');
  console.log(`📄 Pages testées: ${successfulTests}/${totalTests} réussies`);
  console.log(`⏱️  Temps de chargement moyen: ${Math.round(totalLoadTime / successfulTests)}ms`);
  console.log(`🎨 Pages avec animations: ${pagesWithLoading}/${successfulTests}`);
  console.log(`📈 Taux de réussite: ${Math.round((successfulTests / totalTests) * 100)}%`);

  const avgLoadTime = Math.round(totalLoadTime / successfulTests);
  const loadingScore = avgLoadTime < 2000 ? 'Excellent' : avgLoadTime < 3000 ? 'Bon' : 'À améliorer';
  
  console.log(`🏆 Performance: ${loadingScore} (${avgLoadTime}ms)`);
  console.log(`🎭 Animations: ${pagesWithLoading > successfulTests * 0.8 ? 'Très bien intégrées' : 'Partiellement intégrées'}`);

  if (successfulTests === totalTests && pagesWithLoading > successfulTests * 0.8) {
    console.log('\n🎉 FÉLICITATIONS ! Le système de chargement et transitions fonctionne parfaitement !');
  } else if (successfulTests === totalTests) {
    console.log('\n✅ Le site fonctionne bien, mais certaines animations peuvent être améliorées.');
  } else {
    console.log('\n❌ Des problèmes ont été détectés. Vérifiez les logs ci-dessus.');
  }
  
  console.log('\n============================================================\n');
}

// Fonction pour tester les composants de chargement spécifiques
async function testLoadingComponents() {
  console.log('\n🧪 TEST DES COMPOSANTS DE CHARGEMENT\n');
  console.log('============================================================');
  
  const components = [
    { name: 'Loading.tsx', path: 'src/components/ui' },
    { name: 'PageTransition.tsx', path: 'src/components/ui' }, 
    { name: 'ProgressBar.tsx', path: 'src/components/ui' },
    { name: 'ImageWithLoading.tsx', path: 'src/components/ui' },
    { name: 'useLoading.ts', path: 'src/hooks' },
    { name: 'GlobalLoading.tsx', path: 'src/components/layout' }
  ];
  
  let componentsFound = 0;
  
  for (const component of components) {
    const componentPath = path.join(process.cwd(), component.path, component.name);
    try {
      require('fs').accessSync(componentPath);
      console.log(`✅ ${component.name} - Présent`);
      componentsFound++;
    } catch (error) {
      console.log(`❌ ${component.name} - Manquant`);
    }
  }
  
  console.log(`\n📊 Composants: ${componentsFound}/${components.length} présents`);
  
  if (componentsFound === components.length) {
    console.log('🎉 Tous les composants de chargement sont présents !');
  } else {
    console.log('⚠️  Certains composants de chargement sont manquants.');
  }
  
  console.log('\n============================================================\n');
}

async function runAllTests() {
  try {
    await testLoadingComponents();
    await testLoadingFeatures();
  } catch (error) {
    console.error('❌ Erreur lors des tests:', error.message);
  }
}

// Vérifier si le serveur est accessible
async function checkServer() {
  try {
    await axios.get(SERVER_URL, { timeout: 5000 });
    return true;
  } catch (error) {
    console.error('❌ Serveur non accessible sur', SERVER_URL);
    console.log('💡 Assurez-vous que le serveur de développement est démarré:');
    console.log('   npm run dev');
    return false;
  }
}

async function main() {
  console.log('🎯 TEST COMPLET DU SYSTÈME DE CHARGEMENT');
  console.log('============================================================');
  
  const serverRunning = await checkServer();
  if (!serverRunning) {
    console.log('\n📋 Test des composants uniquement...\n');
    await testLoadingComponents();
    return;
  }
  
  await runAllTests();
}

main();
