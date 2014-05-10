var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'us-zipcode',
  'description': 'A zipcode in the U.S.A.',
  'schema': "string"
});
