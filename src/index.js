import express from "express";
import cors from "cors";
import config from "./config.js";

const app = express();
const port = config.PORT;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/',(req,res)=>{
    res.send('API is running');
})

// Server Start 
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});
