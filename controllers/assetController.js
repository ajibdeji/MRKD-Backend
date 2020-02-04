var assetModel = require('../models/assetModel.js');

/**
 * assetController.js
 *
 * @description :: Server-side logic for managing assets.
 */
module.exports = {

    /**
     * assetController.list()
     */
    list: function (req, res) {
        assetModel.find(function (err, assets) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting asset.',
                    error: err
                });
            }
            return res.json(assets);
        });
    },

    /**
     * assetController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        assetModel.findOne({_id: id}, function (err, asset) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting asset.',
                    error: err
                });
            }
            if (!asset) {
                return res.status(404).json({
                    message: 'No such asset'
                });
            }
            return res.json(asset);
        });
    },

    /**
     * assetController.create()
     */
    create: function (req, res) {
        var asset = new assetModel({
			name : req.body.name,
			description : req.body.description,
			category : req.body.category,
			value : req.body.value,
			tokenId : req.body.tokenId

        });
        console.log(req.body);
        asset.save(function (err, asset) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating asset',
                    error: err
                });
            }
            return res.status(201).json(asset);
        });
    },

    /**
     * assetController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        assetModel.findOne({_id: id}, function (err, asset) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting asset',
                    error: err
                });
            }
            if (!asset) {
                return res.status(404).json({
                    message: 'No such asset'
                });
            }

            asset.name = req.body.name ? req.body.name : asset.name;
			asset.description = req.body.description ? req.body.description : asset.description;
			asset.category = req.body.category ? req.body.category : asset.category;
			asset.value = req.body.value ? req.body.value : asset.value;
			asset.tokenId = req.body.tokenId ? req.body.tokenId : asset.tokenId;
			
            asset.save(function (err, asset) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating asset.',
                        error: err
                    });
                }

                return res.json(asset);
            });
        });
    },

    /**
     * assetController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        assetModel.findByIdAndRemove(id, function (err, asset) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the asset.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
