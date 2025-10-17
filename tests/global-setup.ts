import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    // Wait for the application to be ready
    await page.goto('http://localhost:3000');
    await page.waitForLoadState('networkidle');
    
    console.log('✅ Application is ready for testing');
  } catch (error) {
    console.error('❌ Application failed to start:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

export default globalSetup;
