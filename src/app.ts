import express from "express";
import cors from 'cors';
import router from "./routes";

export function createApp(){
    const app = express();
    app.use(express.json())
    app.use(cors());

    app.use("/api", router);
    app.get("/", (req, res) => {
        res.send("Api running.")
    });

    return app;
    
    
}
