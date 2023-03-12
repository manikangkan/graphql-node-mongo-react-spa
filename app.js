const express = require("express");
const bodyParser = require("body-parser");
const PORT = 4000;

const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

app.use(bodyParser.json());

// app.get("/", (req, res, next) => res.send("Hello Manikangkan👷🏻‍♂️"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: buildSchema(`
        schema{
            query:
            mutation:
        }
    `),
    rootValue: {},
  })
);

app.listen(PORT, () => console.log(`Server up & running in ${PORT}🎊`));
