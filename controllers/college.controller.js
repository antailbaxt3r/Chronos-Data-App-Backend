var config = require("../config/config")
var db = require('../db/models/db')

module.exports.getAllColleges = async (req, res) => {
    try{
        const colleges = await db.models.colleges.findAll()
        res.status(200).json({
            success: true,
            colleges: colleges
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

module.exports.getCollege = async (req, res) => {
    try{
        const college = await db.models.colleges.findOne({
            where:{
                id: req.body.id
            }
        })
        if(college){
            res.status(200).json({
                success: true,
                college: college
            })
        }else{
            res.status(404).json({
                success: false,
                message: "College not found"
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

module.exports.createCollege = async (req, res) => {
    try{
        const newCollege = {
            name: req.body.name
        }
        const college = await db.models.colleges.create(newCollege)
        res.status(200).json({
            success: true,
            message: "College created successfully!",
            college: college
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

module.exports.deleteCollege = async (req, res) => {
    try{
        const college = await db.models.colleges.findOne({
            where:{
                id: req.body.id
            }
        })
        if(college){
            await db.models.colleges.destroy({
                where: {
                    id: college.id
                }
            })
            res.status(200).json({
                success: true,
                message: "College deleted successfully!"
            })
        }else{
            res.status(404).json({
                success: false,
                message: "College not found"
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

module.exports.updateCollege = async (req, res) => {
    try{
        const college = await db.models.colleges.findOne({
            where:{
                id: req.body.id
            }
        })
        const updates = {
            name: req.body.name
        }
        if(college){
            await db.models.colleges.update(
                updates,
                { where: { id: college.id }}
            )
            res.status(200).json({
                success: true,
                message: "College updated successfully!"
            })
        }else{
            res.status(404).json({
                success: false,
                message: "College not found"
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