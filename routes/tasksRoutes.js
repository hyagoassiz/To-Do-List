const express = require("express")
const router = express.Router()
const TaskController = require("../controllers/TaskController")



router.get("/", TaskController.showTasks)
router.get("/task/:id", TaskController.showTask)
router.get("/add", TaskController.addTask)
router.post("/add", TaskController.addTaskSave)
router.get("/edit/:id", TaskController.updateTask)
router.post("/edit", TaskController.updateTaskPost)
router.post("/remove", TaskController.removeTask)
router.post("/updatestatus", TaskController.toggleTaskStatus)



module.exports = router