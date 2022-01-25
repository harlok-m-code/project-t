const { Router } = require('express');
const user = require('./userRoute');
const task = require('./taskRouter');

const router = Router();

router.use('/user', user);
router.use('/task', task)


module.exports = router;