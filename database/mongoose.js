const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/FacebookApi',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
