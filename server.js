const express = require('express')
const app = express()
const router = require('./routes/model-routes')
const Tutorial = require('./models/tutorial')
const Comment = require('./models/comments')
const sequelize = require('./models/sqlize')
Tutorial.hasMany(Comment,{as:"comments"})
Comment.belongsTo(Tutorial, {
    foreignKey: "tutorial_Id",
    as: "tutorial",
  })
sequelize.sync()
app.use(express.json())
app.listen(8080,()=>{
    console.log("app started listening");
})
app.use('/api',router);