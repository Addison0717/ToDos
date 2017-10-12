var express = require('express'),
  router = express.Router(),
  logger = require('../../config/logger');
module.exports = function (app, config) {
	app.use('/api', router);

	router.route('/users').get(function(req, res, next){
        logger.log('Get all users', 'verbose');

        res.status(200).json({message: "Get all users"});
    });
    
    router.route('/users/userId').get(function(req, res, next){
        logger.log('Get user ' + req.params.userId, 'verbose');
        
        res.status(200).json({message: "Get user " + req.params.userId});
    });
    
    router.route('/users').post(function(req, res, next){
        logger.log('Create user', 'verbose');

        res.status(201).json({message: "Create user"});
    });

    router.route('/users').put(function(req, res, next){
        logger.log('Update user', 'verbose');

        res.status(200).json({message: "Update user"});
    });

    router.route('/users/password/userId').put(function(req, res, next){
        logger.log('Update user password ' + req.params.userId, 'verbose');

        res.status(200).json({message: 'Update user password ' + req.params.userId});
    });

    router.route('/users').delete(function(req, res, next){
        logger.log('Delete user'+ req.params.userId, 'verbose');

        res.status(200).json({message: 'Delete user ' + req.params.userId});
    });
};
