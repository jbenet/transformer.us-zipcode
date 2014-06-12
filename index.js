var Type = require('transformer-type');

module.exports = Type({
  // @context and type filled in automatically.
  'id': 'us-zipcode',
  'description': 'A zipcode in the U.S.A.',
  'schema': "string"
});
