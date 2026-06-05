import mongoose from "mongoose";
const dbconnect = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log("Db Connected");
        
    } catch (error) {
        console.log(`Db not connected due to ${error}`);
        
    }
}
export default dbconnect