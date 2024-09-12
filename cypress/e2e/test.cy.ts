// describe('test', () =>{
//     it('open the test page', () => {
//         cy.visit('http://localhost:4200/')
//     })
// })
describe('Email Preferences Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/'); // Visit the root url where your component is rendered
  });

  it('should display the email preferences header', () => {
    cy.contains('Email Preferences').should('exist');
  });

  it('should toggle the switch and confirm its state', () => {
    // Capture the toggle switch element at a higher level
    cy.get(':nth-child(1) > .toggle-wrapper > .p-element > .p-inputswitch', { timeout: 10000 })
      .should('exist') // Make explicit that we expect it to exist
      .within(() => {
        // Check whether the switch starts checked or not
        cy.get('input', { timeout: 5000 })
          .then(($input) => {
            const isChecked = $input.prop('checked');
            // Toggle the switch
            cy.get('.p-inputswitch-slider').click();
            // Assert that its checked state has toggled
            cy.get('input').should('have.prop', 'checked', !isChecked);
          });
      });
  });
  it('should toggle the switch and confirm its state', () => {
    // Capture the toggle switch element at a higher level
    cy.get(':nth-child(2) > .toggle-wrapper > .p-element > .p-inputswitch', { timeout: 10000 })
      .should('exist') // Make explicit that we expect it to exist
      .within(() => {
        // Check whether the switch starts checked or not
        cy.get('input', { timeout: 5000 })
          .then(($input) => {
            const isChecked = $input.prop('checked');
            // Toggle the switch
            cy.get('.p-inputswitch-slider').click();
            // Assert that its checked state has toggled
            cy.get('input').should('have.prop', 'checked', !isChecked);
          });
      });
  });
  it('should toggle the switch and confirm its state', () => {
    // Capture the toggle switch element at a higher level
    cy.get(':nth-child(3) > .toggle-wrapper > .p-element > .p-inputswitch', { timeout: 10000 })
      .should('exist') // Make explicit that we expect it to exist
      .within(() => {
        // Check whether the switch starts checked or not
        cy.get('input', { timeout: 5000 })
          .then(($input) => {
            const isChecked = $input.prop('checked');
            // Toggle the switch
            cy.get('.p-inputswitch-slider').click();
            // Assert that its checked state has toggled
            cy.get('input').should('have.prop', 'checked', !isChecked);
          });
      });
  });
  it('should toggle the switch and confirm its state', () => {
    // Capture the toggle switch element at a higher level
    cy.get(':nth-child(4) > .toggle-wrapper > .p-element > .p-inputswitch', { timeout: 10000 })
      .should('exist') // Make explicit that we expect it to exist
      .within(() => {
        // Check whether the switch starts checked or not
        cy.get('input', { timeout: 5000 })
          .then(($input) => {
            const isChecked = $input.prop('checked');
            // Toggle the switch
            cy.get('.p-inputswitch-slider').click();
            // Assert that its checked state has toggled
            cy.get('input').should('have.prop', 'checked', !isChecked);
          });
      });
  });
  it('should toggle the switch and confirm its state', () => {
    // Capture the toggle switch element at a higher level
    cy.get(':nth-child(5) > .toggle-wrapper > .p-element > .p-inputswitch', { timeout: 10000 })
      .should('exist') // Make explicit that we expect it to exist
      .within(() => {
        // Check whether the switch starts checked or not
        cy.get('input', { timeout: 5000 })
          .then(($input) => {
            const isChecked = $input.prop('checked');
            // Toggle the switch
            cy.get('.p-inputswitch-slider').click();
            // Assert that its checked state has toggled
            cy.get('input').should('have.prop', 'checked', !isChecked);
          });
      });
  });
  it('should toggle the switch and confirm its state', () => {
    // Capture the toggle switch element at a higher level
    cy.get(':nth-child(1) > .toggle-wrapper > .p-element > .p-inputswitch', { timeout: 10000 })
      .should('exist') // Make explicit that we expect it to exist
      .within(() => {
        // Check whether the switch starts checked or not
        cy.get('input', { timeout: 5000 })
          .then(($input) => {
            const isChecked = $input.prop('checked');
            // Toggle the switch
            cy.get('.p-inputswitch-slider').click();
            // Assert that its checked state has toggled
            cy.get('input').should('have.prop', 'checked', !isChecked);
          });
      });
  });

  it('should have all toggle switches off by default', () => {
    cy.get('p-inputswitch').each(($el) => {
      // Verifies that each toggle switch is off
      cy.wrap($el).should('not.have.class', 'ui-inputswitch-checked');
    });
  });

  it('should update preferences when form is submitted', () => {
    cy.get('button.update-button').click(); // Click to submit the form

    // Optionally, verify some expected state or API call
    cy.window().then((win) => {
      const savedPreferences = JSON.parse(win.localStorage.getItem('emailPreferences'));
      expect(savedPreferences).to.exist;
      expect(savedPreferences.emailMarketing).to.be.true;
    });
  });

  it('should format labels correctly according to titlecase', () => {
    cy.get('.card-title').each(($el) => {
      const text = $el.text();
      // Expect the first letter to be uppercase
      expect(text.charAt(0)).to.match(/[A-Z]/);
    });
  });
});