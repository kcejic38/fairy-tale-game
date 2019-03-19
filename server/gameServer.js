const express = require('express')
const app = express()
const PORT = 3000

var path = require('path')

app.use('/compiled', express.static(path.join(__dirname, '../compiled')));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/images', express.static(path.join(__dirname, '../images')));
app.use('/audio', express.static(path.join(__dirname, '../audio')));

app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.get('/', (req, res) => res.sendFile(path.resolve('public', 'index.html')))
app.listen(PORT, () => console.log(`Fairy tale app listening on port ${PORT}!`))
