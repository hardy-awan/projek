const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');    

const app = express()



mongoose.Promise = global.Promise
let db = 'mongodb://hardy-awan:rocketv1963@cluster0-shard-00-00-0pvol.mongodb.net:27017,cluster0-shard-00-01-0pvol.mongodb.net:27017,cluster0-shard-00-02-0pvol.mongodb.net:27017/projek-baba?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(db)

.then(db => console.log('db connected'))
.catch(err => console.log())


app.use(morgan('dev'));


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, PATCH, GET');
        return res.status(200).json({})
    }
    next();
});


require('./api/router/router')(app)
// app.use('/login', loginUser);

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>{
    console.log('Berhasil Terhubung ke PORT = ${PORT}')
})

