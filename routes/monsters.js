const router = require('express').Router();
const {
  createMonster,
  getMonsters,
  modifyMonster,
  deleteMonster
} = require('../controllers/monsters')

router.get('/', getMonsters)
router.post('/', createMonster)
router.put('/:id', modifyMonster)
router.delete('/:id', deleteMonster)

module.exports = router;