describe("Flipkart Cypress Test Using XPath", () => {
   
  

    it("Opens first product and adds to cart", () => {
      cy.visit("https://www.flipkart.com/");
     // cy.xpath('//button[text()="✕"]').click({ force: true });
  
      cy.xpath('//input[@title="Search for Products, Brands and More"]').type("vivo mobile 5g{enter}");
  
      cy.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div/div/a').first().then(($link) => {
        const href = $link.attr("href");
        cy.visit(`https://www.flipkart.com${href}`);
      });
  
      cy.xpath('//*[@id="container"]/div/div[3]/div/div/div[2]/div/ul/li/button', { timeout: 10000 }).click();
      cy.wait(2000);
      cy.log("✅ Product added to cart");
    });
  });
  