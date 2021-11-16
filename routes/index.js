var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('bigfoottracker is live');
});

router.use('/markers', require('./markers'));
router.use('/monsters', require('./monsters'));


module.exports = router;
