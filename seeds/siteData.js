const { Site } = require('../models');

const sitedata = [
  {
    name: 'Branch Brook Park, Newrak, NJ #1',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'Chapel Ave, Cherry Hill, NJ #2',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'New Jersey Botanical Gardens - Ringwood, NJ #3',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'Verona Park, Verona NJ #4',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'Warinanco Park, Linden, NJ #5',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'David C. Shaw Arboretum, Holmdel, NJ #6',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'Spring Lake, NJ #7',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'Rayway River Park, Rayway NJ #8',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'Frelinghuysen Arboretum, Morris Township NJ #9',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'Reeves-Reed Arboretum, Summit NJ #10',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
  {
    name: 'Sayen Gardens, Hamilton NJ #11',
    starting_date: 'March 15, 20222 07:00:00',
    ending_date: 'April 15, 2022 17:00:00',
  },
];

const seedSite = () => Site.bulkCreate(sitedata);

module.exports = seedSite;
