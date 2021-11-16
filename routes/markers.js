const router = require('express').Router();
const {
  createMarker,
  getMarkers,
  modifyMarker,
  deleteMarker
} = require('../controllers/markers')

router.get('/', getMarkers)
router.post('/', createMarker)
router.put('/:id', modifyMarker)
router.delete('/:id', deleteMarker)

module.exports = router;
