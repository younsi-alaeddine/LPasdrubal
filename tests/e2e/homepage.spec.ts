import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check if the page loads without errors
    await expect(page).toHaveTitle(/Lycée Privé Asdrubal/);
    
    // Check if main elements are present
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    
    // Check hero section content
    await expect(page.locator('h1')).toContainText('Excellence & Bienveillance');
    await expect(page.locator('text=S\'inscrire')).toBeVisible();
    await expect(page.locator('text=Visite virtuelle')).toBeVisible();
  });

  test('should display features section', async ({ page }) => {
    await page.goto('/');
    
    // Check features section
    await expect(page.locator('text=Nos Atouts')).toBeVisible();
    await expect(page.locator('text=Pédagogie Innovante')).toBeVisible();
    await expect(page.locator('text=Sécurité & Bienveillance')).toBeVisible();
    await expect(page.locator('text=Activités Enrichissantes')).toBeVisible();
    await expect(page.locator('text=Excellents Résultats')).toBeVisible();
  });

  test('should display news section', async ({ page }) => {
    await page.goto('/');
    
    // Check news section
    await expect(page.locator('text=Actualités Récentes')).toBeVisible();
    await expect(page.locator('text=Voir toutes les actualités')).toBeVisible();
  });

  test('should display testimonials section', async ({ page }) => {
    await page.goto('/');
    
    // Check testimonials section
    await expect(page.locator('text=Témoignages')).toBeVisible();
    await expect(page.locator('text=Ce que disent les parents')).toBeVisible();
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation links
    await page.click('text=À propos');
    await expect(page).toHaveURL(/.*about/);
    
    await page.click('text=Formations');
    await expect(page).toHaveURL(/.*programs/);
    
    await page.click('text=Admissions');
    await expect(page).toHaveURL(/.*admissions/);
    
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
  });

  test('should have working language switcher', async ({ page }) => {
    await page.goto('/');
    
    // Click on language switcher
    await page.click('[data-testid="language-switcher"]');
    
    // Switch to Arabic
    await page.click('text=العربية');
    await expect(page).toHaveURL(/.*ar/);
    
    // Check if RTL is applied
    const html = await page.locator('html');
    await expect(html).toHaveAttribute('dir', 'rtl');
    
    // Switch back to French
    await page.click('[data-testid="language-switcher"]');
    await page.click('text=Français');
    await expect(page).toHaveURL(/.*fr/);
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check if mobile menu button is visible
    await expect(page.locator('[data-testid="mobile-menu-button"]')).toBeVisible();
    
    // Test mobile menu
    await page.click('[data-testid="mobile-menu-button"]');
    await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible();
    
    // Test mobile navigation
    await page.click('text=À propos');
    await expect(page).toHaveURL(/.*about/);
  });

  test('should have working CTA buttons', async ({ page }) => {
    await page.goto('/');
    
    // Test primary CTA
    await page.click('text=S\'inscrire');
    await expect(page).toHaveURL(/.*admissions/);
    
    // Go back to homepage
    await page.goto('/');
    
    // Test secondary CTA
    await page.click('text=Visite virtuelle');
    // Note: This would typically open a modal or navigate to a virtual tour page
  });

  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /Lycée Privé Asdrubal/);
    
    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Lycée Privé Asdrubal/);
    
    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute('content', /enseignement de qualité/);
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');
    
    // Check if main navigation has proper ARIA attributes
    const nav = page.locator('nav');
    await expect(nav).toHaveAttribute('role', 'navigation');
    
    // Check if main content has proper landmark
    const main = page.locator('main');
    await expect(main).toHaveAttribute('role', 'main');
    
    // Check if footer has proper landmark
    const footer = page.locator('footer');
    await expect(footer).toHaveAttribute('role', 'contentinfo');
  });

  test('should load images properly', async ({ page }) => {
    await page.goto('/');
    
    // Check if images are loaded
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toBeVisible();
      // Check if image has proper alt text
      const alt = await img.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should have working search functionality', async ({ page }) => {
    await page.goto('/');
    
    // If there's a search functionality on the homepage
    const searchInput = page.locator('[data-testid="search-input"]');
    if (await searchInput.isVisible()) {
      await searchInput.fill('admission');
      await searchInput.press('Enter');
      
      // Check if search results are displayed
      await expect(page.locator('[data-testid="search-results"]')).toBeVisible();
    }
  });
});
