var express = require('express'),
  router = express.Router(),
  logger = require('../../config/logger');
module.exports = function (app, config) {
	app.use('/api', router);

	router.route('/todos').get(function(req, res, next){
        logger.log('Get all ToDo lists', 'verbose');

        res.status(200).json({message: "Get all ToDo lists"});
    });
    
    router.route('/todos/todoNumber').get(function(req, res, next){
        logger.log('Get ToDo ' + req.params.todoNumber, 'verbose');
        
        res.status(200).json({message: "Get ToDo " + req.params.todoNumber});
    });
    
    router.route('/todos').post(function(req, res, next){
        logger.log('Create ToDo', 'verbose');

        res.status(201).json({message: "Create ToDo"});
    });

    router.route('/todos').put(function(req, res, next){
        logger.log('Update ToDo', 'verbose');

        res.status(200).json({message: "Update ToDo"});
    });

    router.route('/todos').delete(function(req, res, next){
        logger.log('Delete ToDo'+ req.params.todoNumber, 'verbose');

        res.status(200).json({message: 'Delete ToDo ' + req.params.todoNumber});
    });
};