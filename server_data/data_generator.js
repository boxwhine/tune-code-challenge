var faker = require('faker');

module.exports = function() {
  var results = [];

  function capital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  for (var i = 0; i < 100; i++) {
    results.push({
      name             : capital(faker.company.companyName()),
      shortDescription : faker.company.catchPhrase(),
      description      : faker.lorem.paragraphs(),
      thumbnailUrl     : faker.image.technics(180, 260),
      imageUrl         : faker.image.technics(350, 400),
      rating           : faker.helpers.randomNumber(5),
      id               : i + 1,
      price            : '$' + faker.finance.amount()
    });
  }
  return {products : results};
};
