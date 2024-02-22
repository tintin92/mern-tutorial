const asyncHanlder = require("express")

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const  getGoals = asyncHanlder (async (req, res) => {
    res.status(200).json({message: "Get goals"})
})

// @desc    set goal
// @route   POST /api/goal
// @access  Private
const  setGoal = asyncHanlder (async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }
    res.status(200).json({message: "Set goal"})
})

// @desc    Update goal
// @route   PUT /api/goal/:id
// @access  Private
const  updateGoal = asyncHanlder (async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})
// @desc    Delete goal
// @route   DELETE /api/goal/:id
// @access  Private
const  deleteGoal = asyncHanlder (async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal,
}