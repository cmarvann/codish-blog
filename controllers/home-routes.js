const router = require('express').Router();
const { Site, Cherry } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const SiteData = await Site.findAll({
      include: [
        {
          model: Site,
          attributes: ['displayname', 'description'],
        },
      ],
    });

    const sites = dbSitesData.map((site) =>
      site.get({ plain: true })
    );

    res.render('homepage', {
      sites,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/site/:id', withAuth, async (req, res) => {
  try {
    const dbSiteData = await Site.findByPk(req.params.id, {
      include: [
        {
          model: Cherry,
          attributes: [
            'id',
            'title',
            'photographer',
            'taken_date',
            'displayname',
            'description',
          ],
        },
      ],
    });

    const site = dbSiteData.get({ plain: true });
    res.render('site', { site, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/cherry/:id', withAuth, async (req, res) => {
  try {
    const dbCherryData = await Cherry.findByPk(req.params.id);

    const cherry = dbCherryata.get({ plain: true });

    res.render('cherry', { cherry, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
