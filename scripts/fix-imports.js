#!/usr/bin/env node

/**
 * Script pour corriger tous les imports incorrects dans le projet
 */

const fs = require('fs');
const path = require('path');

const COMPONENTS_TO_FIX = [
  'Button',
  'Input', 
  'Textarea',
  'Select'
];

const PAGES_DIR = 'src/app/[locale]';

function findFiles(dir, extension = '.tsx') {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findFiles(fullPath, extension));
    } else if (item.endsWith(extension)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Corriger les imports de composants
  COMPONENTS_TO_FIX.forEach(component => {
    const namedImportRegex = new RegExp(`import\\s*{\\s*${component}\\s*}\\s*from\\s*['"]@/components/ui/${component}['"];?`, 'g');
    const defaultImport = `import ${component} from '@/components/ui/${component}';`;
    
    if (namedImportRegex.test(content)) {
      content = content.replace(namedImportRegex, defaultImport);
      modified = true;
      console.log(`✅ Corrigé ${component} dans ${filePath}`);
    }
  });
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`📝 Fichier modifié: ${filePath}`);
  }
  
  return modified;
}

function main() {
  console.log('🔧 Correction des imports dans le projet...\n');
  
  const pageFiles = findFiles(PAGES_DIR);
  let totalFixed = 0;
  
  pageFiles.forEach(file => {
    if (fixImports(file)) {
      totalFixed++;
    }
  });
  
  console.log(`\n📊 Résumé:`);
  console.log(`📄 Fichiers traités: ${pageFiles.length}`);
  console.log(`✅ Fichiers corrigés: ${totalFixed}`);
  console.log(`🎯 Imports corrigés: ${COMPONENTS_TO_FIX.join(', ')}`);
  
  if (totalFixed > 0) {
    console.log('\n🚀 Tous les imports ont été corrigés !');
  } else {
    console.log('\n✨ Aucune correction nécessaire.');
  }
}

main();
