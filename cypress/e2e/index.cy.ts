/// <reference types="cypress" />

import isFontInstalled, {isFontInstalledCyrillic} from "../../src";
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

  it('test basic fonts in cyrillic', () => {
    assert.equal(isFontInstalledCyrillic('adcasdcasdcasdc'), false);
    assert.equal(isFontInstalledCyrillic('Arial'), true);
    assert.equal(isFontInstalledCyrillic('Comic Sans MS'), true);
    // maybe you do not have the font loved by james cameron and ryan gosling
    // https://www.youtube.com/watch?v=jVhlJNJopOQ
    if(isFontInstalled('Papyrus')) {
      assert.equal(isFontInstalledCyrillic('Papyrus'), false);
    }
  })
})
