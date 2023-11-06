// https://on.cypress.io/api

describe('App view', () => {
  const baseClass = 'main-app';

  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the title and content of the page', () => {
    cy.get(`.${baseClass}__title`).should('exist');
    cy.get(`.${baseClass}__content`).should('exist');
    cy.get(`.${baseClass}__content-count`).should('exist');
    cy.get(`.${baseClass}__content-buttons`).should('exist');
    cy.get(`.${baseClass}__content-button`).its('length').should('eq', 2);
    cy.get(`.${baseClass}__content-buttons`).should('exist');
    cy.get(`.${baseClass}__reset-button`).should('not.exist');
  });

  describe('Reset button', () => {
    it('is not visible when counter has initial value', () => {
      cy.get(`.${baseClass}__reset-button`).should('not.exist');
    });

    it('is visible when counter value is different from the initial one', () => {
      cy.get('[data-test=add-button]').click();
      cy.get(`.${baseClass}__reset-button`).should('exist');
    });
  });
});
