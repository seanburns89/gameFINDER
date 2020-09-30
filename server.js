const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const db_name="projectdb"

require('./server/config/mongoose.config')(db_name);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

require('./server/routes/project.routes')(app);
app.listen(port,  () => {
    console.log("you are now listening on port 8000")
})