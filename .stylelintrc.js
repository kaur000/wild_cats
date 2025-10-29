module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-hex-length': 'short',
    'declaration-block-no-redundant-longhand-properties': null,
    'no-descending-specificity': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'font-family-no-missing-generic-family-keyword': true,
    'unit-allowed-list': ['px', '%', 'em', 'rem', 's', 'ms', 'deg', 'vh', 'vw', 'fr']
  }
};
