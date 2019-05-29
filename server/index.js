const mongoose = require('mongoose');
const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const API = require('./routes/api');
app.use(cors());
app.use(bodyParser.json());
app.use('/api',API);

app.get('/',(req,res)=>{
    res.send('Use /api to access API');
})


const port = 9000;
mongoose.connect(`mongodb+srv://rtest:Linux@123@cluster0-pwlta.mongodb.net/userWithFilter?retryWrites=true`,{useNewUrlParser: true},(err)=>{
    if(err) throw err;
    else{
        console.log('MongoDB successfully connected');
        app.listen(port,()=>{
            console.log(`Server listing on ${port}`);
        })
    }
})


