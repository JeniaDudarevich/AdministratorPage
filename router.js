var userCtrl = require ('./userCtrl');
module.exports = function(app) {
    app.get ('/users', userCtrl.getUser);
    app.get('/users/:id', userCtrl.getUserId);
    app.post ('/users', userCtrl.postUser);
    app.put ('/users/:id', userCtrl.putUser);
    app.delete('/user/:id', userCtrl.deleteUser);
};
