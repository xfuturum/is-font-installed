/// <reference types="cypress" />

import isFontInstalled from "../../src";
describe('tests', () => {
  beforeEach(() => {
    cy.visit('test/index.html')
  })

  it('test basic fonts', () => {
    assert.equal(isFontInstalled('adcasdcasdcasdc'), false);
    assert.equal(isFontInstalled('Arial'), true);
    assert.equal(isFontInstalled('Comic Sans MS'), true);
    assert.equal(isFontInstalled('Times New Roman'), true);
  })
})
