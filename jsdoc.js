'use strict';

module.exports = {
    plugins: [ 'jsdoc' ],
    rules: {
        'jsdoc/check-param-names': 'error',
        'jsdoc/check-tag-names': 'error',
        'jsdoc/newline-after-description': 'error',
        'jsdoc/require-description-complete-sentence': 'error',
        'jsdoc/require-hyphen-before-param-description': 'error',
        'jsdoc/require-param': 'error',
        'jsdoc/require-param-type': 'error',
        'jsdoc/require-returns-type': 'error'
    }
};
