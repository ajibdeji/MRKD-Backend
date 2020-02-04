var express = require('express');
var router = express.Router();
var assetController = require('../controllers/assetController.js');

/*
 * GET
 */
router.get('/', assetController.list);

/*
 * GET
 */
router.get('/:id', assetController.show);

/*
 * POST
 */
router.post('/', assetController.create);

/*
 * PUT
 */
router.put('/:id', assetController.update);

/*
 * DELETE
 */
router.delete('/api/asset/:id', assetController.remove);

module.exports = router;
