const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')

const app = express();

// Connect to database
connectDB();

app.use(cors())
app.use(express.json({ extended: false }));

// Define routes
app.use('/', require('./routes/index'));
app.use('/api', require('./routes/url'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => console.log(`Server running at port: ${PORT}`) );