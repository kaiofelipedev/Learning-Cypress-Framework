describe('Newsletter Subscrible Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('allows users to subscribe to the email list', () => {
        cy.getByData('email-input').type('tom@aol.com') // comando personalizado!
        cy.getByData('submit-button').click()           // comando personalizado!
        cy.getByData('success-message')                 // comando personalizado!
            .should('exist')
            .and('contain.text', 'tom@aol.com')
    });

    it('does NOT allow an invalid email address', () => {
        cy.getByData('email-input').type('tom')             // comando personalizado!
        cy.getByData('submit-button').click()               // comando personalizado!
        cy.getByData('success-message').should('not.exist') // comando personalizado!
    });

    it('does NOT allow already subscribed email address', () => {
        cy.getByData('email-input').type('john@example.com')    // comando personalizado!
        cy.getByData('submit-button').click()                   // comando personalizado!
        cy.getByData('server-error-message')                    // comando personalizado!
            .should('exist')
            .and('contain.text', 'already exists. Please use a different email address.')
    });
});