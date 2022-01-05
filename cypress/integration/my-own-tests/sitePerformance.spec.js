describe("Blog", () => {

  beforeEach(()=> {

    cy.visit("/")
  })
  it('should run lighthouse performance audits using default thresholds', () => {
      
    cy.lighthouse();
  })

  it.only('should run performance audits using custom thresholds', () => {

    const customThresholds = {
      performance: 70,
      accessibility: 50,
      seo: 60,
      'first-contentful-paint': 2000,
      'largest-contentful-paint': 3000,
      'cumulative-layout-shift': 0.1,
      'total-blocking-time': 500,
    };

    const desktopConfig = {
      formFactor: 'desktop',
      screenEmulation: { disabled: true },
    };
    
    cy.lighthouse(customThresholds, desktopConfig);
  });
})