const sequelize = require('../config/connection');
const seedSites = require('./siteData');
const seedCherrys = require('./cherryData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSites();

  await seedCherrys();

  process.exit(0);
};

seedAll();
