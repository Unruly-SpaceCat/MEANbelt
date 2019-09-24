var Survey = require('../models/survey');

module.exports = {

    get_all: function(req, res){
        //console.log("get all")
        surveys = Survey.find()
        .then(surveys=>  {
            res.json(surveys)
        })
        .catch(err => res.json(err))
    },
    create_one: function(req, res){
        //console.log(req.body)
        const newsurvey = new Survey()
        newsurvey.name = req.body.name
        newsurvey.question = req.body.question
        newsurvey.option1 = req.body.option1
        newsurvey.option2 = req.body.option2
        newsurvey.option3 = req.body.option3
        newsurvey.option4 = req.body.option4
        //newsurvey.votes = {
        //    "option1": 0,
        //    "option2": 0,
        //    "option3": 0,
        //    "option4": 0
        //}
        newsurvey.save()
        .then(newSurvey => {
            //console.log("new survey saved", newSurvey)
            res.json(newSurvey)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
    },
    update_one: function(req, res){
        const { id } = req.params
        //console.log(req.body.option)
        Survey.findOne({_id: id })
        .then(survey => {
            survey[req.body.option]+=1
            return survey.save()
        })
        .then(updatedSurvey => {
            //console.log("updated survey", updatedSurvey)
            res.json(updatedSurvey)
        })
        .catch(err => res.json(err))
    },
    delete_one: function(req, res){
        const { id } = req.params       
        Survey.deleteOne({_id: id })
        .then(deletedsurvey => {
            //console.log("deleted", deletedsurvey)
            res.json(deletedsurvey)
        })
         .catch(err => {
             res.json(err)
        })
    },
    get_one: function(req, res){
        const { id } = req.params
        //console.log(id)
        Survey.findOne({_id: id })
        .then(survey => {
            //console.log(product)
            res.json(survey)
        })
        .catch(err => {
            res.json(err)
        })
    }
}