var config = require("../config/config")
var db = require('../db/models/db')

module.exports.getAllTasks = async (req, res) => {
    try{
        const tasks = await db.models.tasks.findAll()
        res.status(200).json({
            success: true,
            tasks: tasks
        })
    }catch (e){
        console.log(e)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            details: e.message
        })
    }
}

module.exports.getTask = async (req, res) => {
    try{
        const task = await db.models.tasks.findOne({
            where:{
                id: req.body.id
            }
        })
        if(task){
            res.status(200).json({
                success: true,
                task: task
            })
        }else{
            res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }
    }catch (e){
        console.log(e)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            details: e.message
        })
    }
}

module.exports.createTask = async (req, res) => {
    try{
        const newTask = {
            story_id: req.body.story_id,
            project_id: req.body.project_id,
            due_datetime: req.body.due_datetime,
            task_meta_id: req.body.task_meta_id,
            task_type_id: req.body.task_type_id,
        }
        const task = await db.models.tasks.create(newTask)
        res.status(200).json({
            success: true,
            message: "Task created successfully!",
            task: task
        })
    }catch (e){
        console.log(e)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            details: e.message
        })
    }
}

module.exports.deleteTask = async (req, res) => {
    try{
        const task = await db.models.tasks.findOne({
            where:{
                id: req.body.id
            }
        })
        if(task){
            await db.models.tasks.destroy({
                where: {
                    id: task.id
                }
            })
            res.status(200).json({
                success: true,
                message: "Task deleted successfully!"
            })
        }else{
            res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }
    }catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            details: e.message
        })
    }
}

module.exports.updateTask = async (req, res) => {
    try{
        const task = await db.models.tasks.findOne({
            where:{
                id: req.body.id
            }
        })
        const updates = {
            story_id: req.body.story_id,
            project_id: req.body.project_id,
            due_datetime: req.body.due_datetime,
            task_meta_id: req.body.task_meta_id,
            task_type_id: req.body.task_type_id,
        }
        if(task){
            await db.models.tasks.update(
                updates,
                { where: { id: task.id }}
            )
            res.status(200).json({
                success: true,
                message: "Task updated successfully!"
            })
        }else{
            res.status(404).json({
                success: false,
                message: "Task not found"
            })
        }
    }catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            details: e.message
        })
    }
}

module.exports.filterUser = async (req, res) => {
    try {
        const userId = req.body.userId;
        const tasks = await db.models.tasks.findAll({
            where: {
                userId: userId
            }
        })
        res.status(200).json({
            success: true,
            tasks: tasks
        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            success: false,
            message: "Internal server error",
            details: e.message
        })
    }
}