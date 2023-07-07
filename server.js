const express = require('express');
const connectDB = require('./db/db');

const bodyParser = require('body-parser');

const app = express();

const workRoutes = require('./routes/workRoutes');

connectDB();

app.use(express.json());
app.use(bodyParser.json());

app.use('/work', workRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started and listening on PORT: ${PORT}`);
});