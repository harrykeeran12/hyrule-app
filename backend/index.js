const express = require('express');
const request = require('request');
const app = express();
app.use(express.json());




app.get('/food/names', (req, res) => {

  request('https://botw-compendium.herokuapp.com/api/v2', function (error, response, body) {
    var parsed = JSON.parse(body);
    var food = parsed['data']['creatures']['food'];
    var food_names = [];
    for (let i = 0; i < food.length; i++) {
      food_names.push(food[i].name);
    }
    food_names.sort()
    res.send(food_names)
  })
})
app.get('/nonfood/names', (req, res) => {

  request('https://botw-compendium.herokuapp.com/api/v2', function (error, response, body) {
    var parsed = JSON.parse(body);
    var non_food = parsed['data']['creatures']['non_food'];
    var non_food_names = [];
    for (let i = 0; i < non_food.length; i++) {
      non_food_names.push(non_food[i].name);
    }
    non_food_names.sort()
    res.send(non_food_names)
  })
})

app.get('/monsters/names', (req, res) => {
  request('https://botw-compendium.herokuapp.com/api/v2', function (error, response, body) {
    var parsed = JSON.parse(body);
    var monsters = parsed['data']['monsters'];
    var monster_names = [];
    for (let i = 0; i < monsters.length; i++) {
      monster_names.push(monsters[i].name);
    }
    monster_names.sort()
    res.send(monster_names)
  })
})

app.get('/api/names', (req,res) => {
  request('https://botw-compendium.herokuapp.com/api/v2', function (error, response, body) {
    var parsed = JSON.parse(body);
    var non_food = parsed['data']['creatures']['non_food'];
    var food = parsed['data']['creatures']['food'];
    var monsters = parsed['data']['monsters'];
    var all_names = [];
    for (let i = 0; i < food.length; i++) {
      all_names.push(food[i].name);
    }
    for (let i = 0; i < non_food.length; i++) {
      all_names.push(non_food[i].name);
    }
    for (let i = 0; i < monsters.length; i++) {
      all_names.push(monsters[i].name);
    }
    all_names.sort()
    res.send(all_names)
  })
})

app.get('/api/:name', (req,res) => {
  request(`https://botw-compendium.herokuapp.com/api/v2/entry/${req.params.name}`, function (error, response, body) {
    var parsed = JSON.parse(body);
    res.send(parsed)
  }
)
})



const port = process.env.PORT || 3001
app.listen(port, () => console.log(`listening on port ${port}...`))