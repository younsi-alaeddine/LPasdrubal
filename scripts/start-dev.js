#!/usr/bin/env node

/**
 * Script de démarrage optimisé pour le développement
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Démarrage du serveur de développement optimisé...\n');

// Vérifier que nous sommes dans le bon répertoire
if (!fs.existsSync('package.json')) {
  console.error('❌ Erreur: package.json non trouvé. Assurez-vous d\'être dans le répertoire du projet.');
  process.exit(1);
}

// Vérifier que node_modules existe
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installation des dépendances...');
  const install = spawn('npm', ['install'], { stdio: 'inherit' });
  
  install.on('close', (code) => {
    if (code !== 0) {
      console.error('❌ Erreur lors de l\'installation des dépendances');
      process.exit(1);
    }
    startDevServer();
  });
} else {
  startDevServer();
}

function startDevServer() {
  console.log('🔧 Démarrage du serveur de développement...');
  
  // Variables d'environnement
  const env = {
    ...process.env,
    NODE_ENV: 'development',
    NEXT_TELEMETRY_DISABLED: '1',
  };
  
  // Démarrer le serveur Next.js
  const devServer = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    env,
    shell: true
  });
  
  devServer.on('close', (code) => {
    if (code !== 0) {
      console.log(`\n⚠️  Serveur arrêté avec le code ${code}`);
    } else {
      console.log('\n✅ Serveur arrêté proprement');
    }
  });
  
  // Gestion des signaux d'arrêt
  process.on('SIGINT', () => {
    console.log('\n🛑 Arrêt du serveur...');
    devServer.kill('SIGINT');
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Arrêt du serveur...');
    devServer.kill('SIGTERM');
  });
  
  console.log('\n📝 Serveur démarré !');
  console.log('🌐 URL: http://localhost:3000');
  console.log('📱 Test mobile: http://localhost:3000 (responsive)');
  console.log('\n💡 Conseils:');
  console.log('  - Utilisez Ctrl+C pour arrêter le serveur');
  console.log('  - Le serveur se rechargera automatiquement lors des modifications');
  console.log('  - Vérifiez la console pour les erreurs\n');
}
