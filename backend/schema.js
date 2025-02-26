const mongoose=require('mongoose')



const UserSchema=new mongoose.Schema({
    store: { type: String, required: true },
    place: { type: String, required: true },
    items: { type: Array, default: [] },

});

const User=mongoose.model('User',UserSchema);

module.exports=User;