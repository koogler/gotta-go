const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const app = express();
const db = require("./db.js");

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

//fetch ALL locations
app.get('/locations', async (req, res) => {
  const results = await db.query(`SELECT * FROM locations`)
  res.status(200).json({
    status: "it went through",
    data: { locations: results.rows }
  })

})

//fetch SINGLE location
app.get('/locations/:id', async (req, res) => {
  const results = await db.query("SELECT * FROM locations WHERE id = $1", [req.params.id])

  const reviewResults = await db.query("SELECT * FROM reviews WHERE location_id = $1", [req.params.id])

  res.status(200).json({
    status: "it went through",
    data: { locations: results.rows[0], reviews: reviewResults.rows }
  })
})

//create location

app.post('/locations', async (req, res) => {

  const results = await db.query(
    "INSERT INTO locations (name, address, latitude, longitude, open_time, close_time, accessible, changing_table, sharps_disposal, requires_purchase, privacy_rating) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
    [req.body.name, req.body.address, req.body.latitude, req.body.longitude, req.body.open_time, req.body.close_time, req.body.accessible, req.body.changing_table, req.body.sharps_disposal, req.body.requires_purchase, req.body.privacy_rating])
  res.status(200).json({
    status: "it went through",
    data: { locations: results.rows[0] }
  })
})


app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));