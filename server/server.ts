import connectDb from "./utils/db";
import { app } from "./app";
require("dotenv").config();
//create a server

app.listen(process.env.PORT, () => {
    console.log(`Server started at PORT: ${process.env.PORT}`)
    connectDb();
});
