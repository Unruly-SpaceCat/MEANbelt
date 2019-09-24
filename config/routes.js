var controller = require('../controllers/controller');

module.exports = function(app) {
    app.get('/allsurveys', controller.get_all);
    app.put('/survey/edit/:id', controller.update_one);
    app.post('/survey/new', controller.create_one);
    app.delete('/survey/edit/:id', controller.delete_one);
    app.get('/survey/:id', controller.get_one)
}