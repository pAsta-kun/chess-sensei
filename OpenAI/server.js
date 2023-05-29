import express from 'express'
import cors from 'cors'
import { config } from "dotenv"
config()

import { Configuration, OpenAIApi } from "openai"

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
)

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/', (req, res)=> {
  res.send('Chess Sensei Server');
})

app.listen(port, () => console.log("i hope this works"))

app.post('/', async (req, res) => {

  const requestData = req.body;

  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "user", content: requestData.message},
    ],
  })

  res.status(200).send({
    bot: response.data.choices[0].message.content
  })
});