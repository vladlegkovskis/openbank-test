context('End to end test for the application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  describe('Information page', () => {
    it('assert text on the page', () => {
      cy.contains(/crea tu password manager/i).should('exist');
      cy.contains(/cómo funciona/i).should('exist');
      cy.contains(/qué datos puedes guardar/i).should('exist');
    });
  });

  describe('Password page', () => {
    beforeEach(() => {
      cy.contains(/acepto los términos y condiciones/i).click();
      cy.contains(/siguente/i).click();
    });
    it('assert text on the page', () => {
      cy.contains(/crea tu contraseña maestra/i).should('exist');
      cy.contains(/repite tu contraseña maestra/i).should('exist');
    });
    it('goes back to info on Cancel action', () => {
      cy.contains(/cancelar/i).click();
      cy.contains(/cómo funciona/i).should('exist');
      cy.contains(/qué datos puedes guardar/i).should('exist');
    });
    it('shows error when no password is entered', () => {
      cy.get('input[placeholder="Crea tu contraseña"]').focus().blur();
      cy.contains(/se requiere contraseña/i).should('exist');
    });
    it('shows error when no repeated password is entered', () => {
      cy.get('input[placeholder="Repite tu contraseña"]').focus().blur();
      cy.contains(/se requiere contraseña repetida/i).should('exist');
    });
    it('shows error if password RegEx does not match', () => {
      cy.get('input[placeholder="Crea tu contraseña"]').type('srtpswd').blur();
      cy.contains(/mínimo 8 car, una mayúscula y un dígito/i).should('exist');
    });
    it('shows error when passwords do not much', () => {
      cy.get('input[placeholder="Crea tu contraseña"]').type('Password100');
      cy.get('input[placeholder="Repite tu contraseña"]')
        .type('Password101')
        .blur();
      cy.contains(/la contraseña repetida debe coincidir/i).should('exist');
    });
    it('submit button is active when password match', () => {
      cy.get('input[placeholder="Crea tu contraseña"]').type('Password100');
      cy.get('input[placeholder="Repite tu contraseña"]')
        .type('Password100')
        .blur();
      cy.contains(/enviar/i).should('not.be.disabled');
    });
    it('loading spinner appears on submit', () => {
      cy.get('input[placeholder="Crea tu contraseña"]').type('Password100');
      cy.get('input[placeholder="Repite tu contraseña"]').type('Password100');
      cy.contains(/enviar/i).click();
      cy.contains(/loading.../i).should('exist');
    });
    it('shows resolve feedback', () => {
      cy.get('input[placeholder="Crea tu contraseña"]').type('Password100');
      cy.get('input[placeholder="Repite tu contraseña"]').type('Password100');
      cy.contains(/enviar/i).click();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(3500); // replace with intercept when endpoint created
      cy.contains(/¡tu password manager ya está creado!/i).should('exist');
    });
    it('shows reject feedback', () => {
      cy.get('input[placeholder="Crea tu contraseña"]').type('pruebaKO123');
      cy.get('input[placeholder="Repite tu contraseña"]').type('pruebaKO123');
      cy.contains(/enviar/i).click();
      // eslint-disable-next-line cypress/no-unnecessary-waiting
      cy.wait(3500); // replace with intercept when endpoint created
      cy.contains(/ha habido un error/i).should('exist');
    });
  });
});
