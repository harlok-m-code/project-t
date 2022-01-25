const { Tasks } = require('../model/models');
const jwt = require('jsonwebtoken');

class taskController {

    async addTask (req, res){
        try {
            const { task, userId } = req.body;
            const createTask = await Tasks.create({
                task,
                userId
            });

            res.json(createTask)
        } catch (error) {
            console.log(error)
        } 
        
    }


    async getTasksById (req, res) {
        try {
            const { id } = req.query;
            const tasks = await Tasks.findAll({ where:{userId: id} });
            
            res.json(tasks)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteTask (req, res){
        const { id } = req.params;
        const tasks = await Tasks.destroy({where: {id: id}})

        res.json(tasks)
    }

}


module.exports = new taskController();