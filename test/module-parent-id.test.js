/*
 * Module parent id test.
 */

'use strict';

const path = require('path');
const assert = require('assert');
const parentIdOfModuleTwo = require('../example/module-one');

/*
 * Start testing.
 */
describe('module-parent-id', () => {
  describe('Default upLevel', () => {
    it(`Should return ID of 'module-two'`, () => {
      assert.equal(parentIdOfModuleTwo(), path.resolve(__dirname, '../example/module-two.js'));
    });
  });
  describe('upLevel equals 2', () => {
    it(`Should return ID of 'module-one'`, () => {
      assert.equal(parentIdOfModuleTwo(2), path.resolve(__dirname, '../example/module-one.js'));
    });
  });
});
