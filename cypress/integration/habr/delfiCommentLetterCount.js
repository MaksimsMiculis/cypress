describe("Number of letters in comment per group", () => {
    it('Navigate to the homepage', () => {
        cy.visit("https://www.delfi.lv/");
    });

    it("Navigate to the comments of second article", () => {

        cy.get(".comment-count text-red-ribbon").eq(2).click;

        });

        
    });

    //cy.get(".comment-count text-red-ribbon").each(($el)=>{
        //cy.wrap.apply($el).click(2);

    //cy.get('#portal-main-content > section:nth-child(1) > div:nth-child(2) > article.col-12.col-md-6.headline.mb-md-4.mb-3 > div > span > a.comment-count.text-red-ribbon');
        //cy.get('.col-12.col-md-6 > div > .d-block > .comment-count').click()

    //cy.get(".list-article__comment").click()
    //document.querySelectorAll('.comment-count text-red-ribbon')[1].click();
    //var matches = document.querySelectorAll("comment-count text-red-ribbon").click(2);
    //y.get('.comment-count text-red-ribbon')
    //.eq(1) // to get 2nd element. array index (counting) starts from 0
    //.should('have.text','()').click;
