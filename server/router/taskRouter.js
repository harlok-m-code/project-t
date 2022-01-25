const taskController = require('../controller/taskController');
const { Router } = require('express');
const loginMiddlle = require('../middleware/login');

const router = Router();

router.post('/add', taskController.addTask)
router.get('/', taskController.getTasksById)
router.delete('/:id', taskController.deleteTask)



module.exports = router;