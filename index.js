const express = require('express')
const app = express()
const port = 5000
const fs = require("fs");
const path = require("path");
var hbs = require('hbs');

const template_path = path.join(__dirname, 
  "/templates/views")
const partial_path = path.join(__dirname, 
  "/templates/partials")
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partial_path)
// console.log(path.join(__dirname, "/public"));
const staticPath = path.join(__dirname, "/public");
app.use(express.static(staticPath));

app.get('', (req, res) => {
  res.render('index')
})
app.get('/home', (req, res) => {
  res.render('index')
})
app.get('/about', (req, res) => {
  res.render('about')
})
app.get('/weather', (req, res) => {
  res.render('weather')
})
app.get("*", (req,res) => {
  res.render("404error", {
    errMsg: "Opps! Page not found."
  })
});

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`)
  })