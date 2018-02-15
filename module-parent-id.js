/*
 * Module parent id.
 *
 * Returns id of current module parent.
 */

'use strict';

/*
 * Load useful dependencies.
 */
const parentModules = require('parent-modules');

/**
 * Return module parent id.
 *
 * @param {string} upLevel -Level of parent.
 */
module.exports = (upLevel) => {
  upLevel = upLevel && Number.isInteger(upLevel) && upLevel >= 0 ? upLevel + 1 : 2;
  const options = {
    indexes: [upLevel]
  };
  const parent = parentModules(options);
  return parent.length === 0 ? null : parent[0];
};
