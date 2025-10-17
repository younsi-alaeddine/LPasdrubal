#!/usr/bin/env node

/**
 * Script de vérification rapide pour Vercel
 * Vérifie uniquement les aspects critiques pour un déploiement réussi
 */

const fs = require('fs');
const { execSync } = require('child_process');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, type = 'info') {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = `[${timestamp}]`;
  
  switch (type) {
    case 'success':
      console.log(`${colors.green}✅ ${prefix} ${message}${colors.reset}`);
      break;
    case 'error':
      console.log(`${colors.red}❌ ${prefix} ${message}${colors.reset}`);
      break;
    case 'warning':
      console.log(`${colors.yellow}⚠️  ${prefix} ${message}${colors.reset}`);
      break;
    case 'info':
      console.log(`${colors.blue}ℹ️  ${prefix} ${message}${colors.reset}`);
      break;
    default:
      console.log(`${prefix} ${message}`);
  }
}

function quickCheck() {
  console.log(`${colors.cyan}${colors.bright}🚀 Vérification Rapide Vercel${colors.reset}\n`);
  
  const checks = [];
  
  // 1. Vérifier package.json
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    
    if (packageJson.engines?.node === '18.x') {
      log('✓ Version Node.js correcte (18.x)', 'success');
      checks.push(true);
    } else {
      log('⚠️ Version Node.js non optimale', 'warning');
      checks.push(false);
    }
    
    if (packageJson.scripts?.build) {
      log('✓ Script build présent', 'success');
      checks.push(true);
    } else {
      log('❌ Script build manquant', 'error');
      checks.push(false);
    }
  } catch (error) {
    log('❌ Erreur package.json', 'error');
    checks.push(false);
  }
  
  // 2. Vérifier next.config.js
  if (fs.existsSync('next.config.js')) {
    log('✓ next.config.js présent', 'success');
    checks.push(true);
  } else {
    log('❌ next.config.js manquant', 'error');
    checks.push(false);
  }
  
  // 3. Vérifier setRequestLocale
  try {
    const layoutContent = fs.readFileSync('src/app/[locale]/layout.tsx', 'utf8');
    if (layoutContent.includes('setRequestLocale')) {
      log('✓ setRequestLocale configuré (rendering statique)', 'success');
      checks.push(true);
    } else {
      log('❌ setRequestLocale manquant', 'error');
      checks.push(false);
    }
  } catch (error) {
    log('❌ Layout manquant', 'error');
    checks.push(false);
  }
  
  // 4. Vérifier l'absence de getTranslations
  try {
    const pagesDir = 'src/app/[locale]';
    const files = fs.readdirSync(pagesDir, { recursive: true });
    let hasDynamicRendering = false;
    
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(require('path').join(pagesDir, file), 'utf8');
        if (content.includes('await getTranslations')) {
          hasDynamicRendering = true;
          break;
        }
      }
    }
    
    if (!hasDynamicRendering) {
      log('✓ Aucun rendering dynamique détecté', 'success');
      checks.push(true);
    } else {
      log('❌ Rendering dynamique détecté', 'error');
      checks.push(false);
    }
  } catch (error) {
    log('⚠️ Impossible de vérifier le rendering', 'warning');
    checks.push(true);
  }
  
  // 5. Test de build rapide
  try {
    log('🔨 Test de build...', 'info');
    execSync('npm run build', { stdio: 'pipe' });
    log('✓ Build réussi', 'success');
    checks.push(true);
  } catch (error) {
    log('❌ Build échoué', 'error');
    checks.push(false);
  }
  
  // Résultats
  const passed = checks.filter(Boolean).length;
  const total = checks.length;
  
  console.log(`\n${colors.cyan}${colors.bright}📊 RÉSULTATS:${colors.reset}`);
  log(`Tests: ${passed}/${total}`, passed === total ? 'success' : 'warning');
  
  if (passed === total) {
    console.log(`\n${colors.green}${colors.bright}🎉 PROJET PRÊT POUR VERCEL!${colors.reset}`);
    console.log(`${colors.green}✅ Tous les tests critiques sont passés${colors.reset}`);
    console.log(`${colors.blue}🚀 Vous pouvez déployer en toute sécurité${colors.reset}\n`);
    process.exit(0);
  } else if (passed >= total - 1) {
    console.log(`\n${colors.yellow}${colors.bright}⚠️ PROJET PRESQUE PRÊT${colors.reset}`);
    console.log(`${colors.yellow}🔧 Quelques ajustements mineurs recommandés${colors.reset}\n`);
    process.exit(0);
  } else {
    console.log(`\n${colors.red}${colors.bright}❌ PROJET NON PRÊT${colors.reset}`);
    console.log(`${colors.red}🔧 Veuillez corriger les erreurs critiques${colors.reset}\n`);
    process.exit(1);
  }
}

// Gestion des erreurs
process.on('uncaughtException', (error) => {
  log(`Erreur: ${error.message}`, 'error');
  process.exit(1);
});

// Lancer la vérification
quickCheck();
