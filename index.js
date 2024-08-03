const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const sequelize = require('./db');
const userController = require('./controllers/user.controller');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", userRoutes)

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
