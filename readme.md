# Venting Forum

#### By Quentin Bartholomew, Jerathel Jean, and Ras Au-t Amam

## Project Summary

This project is a forum with a theme based around venting, whether that be about programming or just life. The page will have a social media style display to give users a familiar feel.  This forum project is a three-person group project and each person gets assigned a specific task  to work on.


<a href="https://penguin-project-3-backend.herokuapp.com/">Live link</a>

### Technologies used

1- Express/Node
2- Mongo/Mongoose
3- Dotenv
4- Cors
5- Morgan
6- React

### List of dependencies

```js
require('dotenv').config()
const { PORT = 3002, DATABASE_URL } = process.env
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
```

### Model

```js
// The forum schema
const ForumSchema = new mongoose.Schema(
{
userName: String,
about: String,
date: Date,
time: String,
message: String,
url: String,
startRating: Number

},
{ timestamps: true }
)
// Creating the forum model
const Messages = mongoose.model('Messages', ForumSchema)

```

### Middleware

```Js
/_ MIDDLEWARE _/
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
```




### Backend Route Table

| url                | method | action                                   |
| --------------- | ------   | -----------------------------------|
| /message/     | get       | get all the messages (index) |
| /message      | post     | create a new message           |
| /message/:id | put      | update a message                  |
| /message/:id | delete  | delete a message                   |


## User Stories

A user should be greeted with a welcome message on the homepage

A user should be able to view all of the messages currently posted on the forum

A user should be able to post a new message to the forum

A user should be able to edit a message on the forum

A user should be able to delete a message on the forum

// Potential user stories beyond MVP //

A user should be able to log in

A user should only be able to delete their own messages

A user should only be able to edit their own messages

A user should be able to 'upvote' a message posted on the forum

A user should see the 'most popular' message - the message with the most upvotes

## Challenges
This time I just didn't know where exactly to start because I felt kind of overwhelmed, but everything else went well.

## List of Technologies

- CSS

- JS/JSX/JQuery

- Express

- React

- Mongoose

