const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1/Dynamic_web", (er)=>{
    if(er)
    {
        console.log("Database is not connect" +er);
    }
    else{
        console.log("Database is connect");
    }
});


// const

// Now create the schema or mongoose.Collection of db 


const schema_db = new mongoose.Schema({
    
    name1 : {
       type: String , 
       required: true
    },
    gmail:{
        type: String , 
        required: true,
      
    },
    mess:{
        type : String, 
        required: true
    },
    Date:{
        type:Date,
        default: Date.now
    }

})

const Sch_model = new mongoose.model("FeedBack_data" , schema_db);

module.exports = Sch_model;