import { createServer } from "node:http";
import { createApp, eventHandler, toNodeListener } from "h3";
import mongoose from 'mongoose'
import { defineCorsEventHandler } from '@nozomuikuta/h3-cors'

const dbUrl = 'mongodb://localhost:27017/amazonApi'

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => createServer(toNodeListener(app)).listen(process.env.PORT || 3001))

const app = createApp();
app.use(defineCorsEventHandler({
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}))

const Schema = new mongoose.Schema({
    name: String,
    thumbnail: String,
    price: String,
})

const Products = mongoose.model('Products', Schema)


app.use(
    "/api/kahve",
    eventHandler(async () => {

        const result = await Products.find({});

        return result
    })
);

