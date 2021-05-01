const mongoose = require("mongoose");
const Square = mongoose.model("squares");

module.exports = (app) => {
  app.get(`/api/square`, async (req, res) => {
    let squares = await Square.find();
    return res.status(200).send(squares);
  });

  app.post(`/api/square`, async (req, res) => {
    let square = await Square.create(req.body);
    return res.status(201).send({
      error: false,
      square,
    });
  });

  app.put(`/api/square/:id`, async (req, res) => {
    const { id } = req.params;

    let square = await Square.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      square,
    });
  });

  app.delete(`/api/square/:id`, async (req, res) => {
    const { id } = req.params;

    let square = await Square.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      square,
    });
  });
};
