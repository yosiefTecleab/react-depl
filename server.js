const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("react-fstack/dist"));

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const product = getProduct(id);

  if (!product) {
    res.status(404).send({ error: `Product ${id} not found` });
  } else {
    res.send({ data: product });
  }
});

function getProduct(id) {
  const products = [
    {
      id: 1,
      name: "Klaus Störtebeker",
      active: "1392-1401",
      country: "Germany",
    },
    {
      id: 2,
      name: "Kristoffer Trondson",
      active: "1535-1542",
      country: "Norwaay",
    },
    { id: 3, name: "Jan de Bouff", active: "1602", country: "Netherlands" },
    { id: 4, name: "Jean Bart", active: "1672-1697", country: "France" },
    {
      id: 5,
      name: "Tuanku Abbas",
      active: "to 1844",
      country: "Malay Archipel",
    },
  ];
  return products.find((p) => p.id == id);
}
