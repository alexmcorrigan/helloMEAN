module.exports = function(app) {

    app.get('/api/supportStaff', function(req, res) {
        res.json({
            'type' : 'supportStaff'
        });
    });

    app.get('/api/consultants', function(req, res) {
        res.json({
            'type' : 'consultants'
        });
    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

};