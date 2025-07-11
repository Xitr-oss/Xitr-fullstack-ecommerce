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
  mongoose.connection.on("connected", () => {
    console.log("DB Connected");
  });

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "e-commerce", // 👈 Specify the DB name here
    });
  } catch (error) {
    console.error("DB connection error:", error);
  }
};

export default connectDB;


