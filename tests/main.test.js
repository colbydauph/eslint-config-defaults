'use strict';

// modules
const { expect } = require('chai');

const node = require('../node');
const nodeTest = require('../node-test');
const react = require('../react');
const reactTest = require('../react-test');

describe('eslint-config-defaults', () => {
  
  it('should have node config', () => {
    expect(node).to.be.an('object');
  });
  
  it('should have react config', () => {
    expect(react).to.be.an('object');
  });
  
  it('should have node test config', () => {
    expect(nodeTest).to.be.an('object');
  });
  
  it('should have react test config', () => {
    expect(reactTest).to.be.an('object');
  });
  
});
