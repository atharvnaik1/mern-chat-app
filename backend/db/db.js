import mongoose from "mongoose"



const connectDB = async () =>{

  try {

    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB")
    
  } catch (error) {
    console.log("Unable to connect to MONGODB",error)
    
  }
}

export default connectDB;