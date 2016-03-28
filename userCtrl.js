var UserModel = require('./user');
module.exports.getUser = function(req, res) {
    return UserModel.find(function (err, users){
        if (err) {
            return next(err);
        }
        return res.send(users);
    });
};

module.exports.getUserId = function(req, res) {
    return UserModel.findById(req.params.id, function(err, users) {
        if(!users) {
            res.statusCode = 404;
            return res.send({ error: 'Not found'});
        }
        else {
            res.statusCode = 500;
            log.error('Internal error($d): $s', res.statusCode, err.message);
            return res.send({ error: 'Server error'});
        }
    });
};

module.exports.postUser = function (req, res) {
    var user = new UserModel({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });
    user.save(function (err) {
        if(!err) {
            log.info('User created');
            return res.send({ status: 'OK', user:user});
        }
        else {
            console.log(err);
            if (err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({ error: 'Validation Error'});
            }
            else {
                res.statusCode = 500;
                res.send({ error: 'Server Error'});
            }
            log.error ('Internal error(%d): $s', res.statusCode, err.message);
        }
    });
};

module.exports.putUser = function (req, res) {
    return UserModel.findById(req.params.id, function(err, user) {
        if(!user) {
            res.statusCode = 404;
            return res.send({ error: 'Not found'});
        }
        user.userName = req.body.userName;
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        return user.save(function (err) {
            if(!err) {
                log.info('user updated');
                return res.send({ status: 'OK', user: user});
            }
            else {
                if (err.name == 'ValidationError') {
                    res.statusCode = 400;
                    res.send({ error: 'Validation Error'});
                }
                else {
                    res.statusCode = 500;
                    res.send({ error: 'Server Error'});
                }
                log.error ('Internal error(%d): $s', res.statusCode, err.message);
            }
        });
    });
};

module.exports.deleteUser = function (req, res) {
    return UserModel.findById(req.params.id, function (err, user) {
        if(!user) {
            res.statusCode = 404;
            return res.send({ error: 'Not found'});
        }
        return user.remove(function (err) {
            if(!err) {
                log.info('User removed');
                return res.send({ status: 'OK'});
            }
            else {
                res.statusCode = 500;
                log.error('Internal error(%d): %s', res.statusCode, err.message);
                return res.send({ error: 'Server error'});
            }
        });
    });
};

