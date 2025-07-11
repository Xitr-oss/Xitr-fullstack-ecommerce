// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected',() => {
//         console.log("DB Connected");
//     })

//     await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)

// }

// export default connectDB;
import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log("DB Connected");
  });

  mongoose.connection.on('error', (err) => {
    console.error("DB Connection Error:", err);
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'e-commerce',
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("DB Connection Error:", error);
  }
};

export default connectDB;




