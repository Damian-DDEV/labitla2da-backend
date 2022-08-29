let express = require('express');
let router = express.Router();

const usersRouter = require('./src/modules/users/users.routes');

router.use('/users', usersRouter);



module.exports = router; 