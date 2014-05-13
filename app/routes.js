module.exports = function (app) {

    var router = app.Router();

    router.get('/', function (req, res) {
        res.json({
            'message': 'API WORKING'
        });
    });

    router.use(function (req, res, next) {
        console.log('stuff happened');
        next();
    });

    app.use('/api', router);

};