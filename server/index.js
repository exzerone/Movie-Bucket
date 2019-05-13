const express = require('express');
const app = express();
const morgan = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const key = require('../config')
const mysql = require('mysql');
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'student',
  database: 'chris'
})

connection.connect()



app.use(jsonParser);
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.urlencoded({extended: false}));

app.post('/movies', (req, res) => {
  var searchvalue = req.body.search
  var token = key.key['api']
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${token}&query=${searchvalue}`)
  .then((data)=>{
    var array = [];
    data.data.results.forEach((result)=>{
      var poster = result['poster_path'];
      var obj = {
        title: result.title,
        image: `https://image.tmdb.org/t/p/w500/${poster}`
      };
      if (poster !== null && obj['title'] !== null){
        array.push(obj)
      }
    })
    res.send(array.slice(0, 8));
  })
  .catch((err)=>{
    res.send(err)
  })
});

app.get('/', (req, res)=>{
  res.end('Hello World')
})

app.listen(port, () => {
	console.log(`Connected to Port ${port}`);
});
