import { FullConfig } from '@playwright/test';

async function globalTeardown(config: FullConfig) {
  console.log('🧹 Cleaning up test environment...');
  
  // Add any cleanup logic here
  // For example, clearing test data, closing connections, etc.
  
  console.log('✅ Test environment cleanup completed');
}

export default globalTeardown;
