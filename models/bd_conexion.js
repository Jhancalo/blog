const mongoose=require("mongoose");
const conexion=async()=>{
try{
await mongoose.connect("mongodb://127.0.0.1:27017/Blog")

}


}