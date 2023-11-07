describe('App view', () => {
  const baseClass = 'main-app';

  beforeEach(() => {
    cy.visit('/');
  });

  it('Displays the elements on the page', () => {
    cy.get(`.${baseClass}__title`).should('exist');
    cy.get(`.${baseClass}__content`).should('exist');
    cy.get(`.${baseClass}__content-count`).should('exist');
    cy.get(`.${baseClass}__content-buttons`).should('exist');
    cy.get(`.${baseClass}__content-button`).its('length').should('eq', 2);
    cy.get(`.${baseClass}__content-buttons`).should('exist');
    cy.get(`.${baseClass}__reset-button`).should('not.exist');
  });

  it('Shows the title and count value', () => {
    cy.get(`.${baseClass}__title`).contains('Welcome, User!');
    cy.get(`.${baseClass}__content-count`).contains('The count is: 0');
  });

  describe('Content buttons', () => {
    it('Add 1 to count on click', () => {
      cy.get(`.${baseClass}__content-count`).contains(0);
      cy.get('[data-test=add-button]').click();
      cy.get(`.${baseClass}__content-count`).contains(1);
    });

    it('Subtract 1 to count on click', () => {
      cy.get(`.${baseClass}__content-count`).contains(0);
      cy.get('[data-test=subtract-button]').click();
      cy.get(`.${baseClass}__content-count`).contains(-1);
    });
  });

  describe('Reset button', () => {
    it('Is not visible when counter has initial value', () => {
      cy.get(`.${baseClass}__reset-button`).should('not.exist');
    });

    it('Is visible when counter value is different from the initial one', () => {
      cy.get('[data-test=add-button]').click();
      cy.get(`.${baseClass}__reset-button`).should('exist');
    });

    it('Resets the value of the count on click', () => {
      cy.get(`.${baseClass}__content-count`).contains(0);
      cy.get('[data-test=add-button]').click();
      cy.get(`.${baseClass}__content-count`).contains(1);
      cy.get(`.${baseClass}__reset-button`).click();
      cy.get(`.${baseClass}__content-count`).contains(0);
    });
  });
});
