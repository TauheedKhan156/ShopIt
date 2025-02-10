import mongoose from 'mongoose';

const connectDB = async () => {

    
    // mongoose.connection.on('connected',()=>{
    //     console.log("DB connected");
    // })

    mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
    .then(()=>console.log(`DB connected`))
    .catch((e)=>console.log(`Some error occured while connecting to DB`));
}

export default connectDB