const router = require('express').Router()
const User = require('../models/User')
require('dotenv').config()

//Pegando todos os usuarios
router.get("/all", async (req, res) => {
    try {
      const user = await User.find();
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({msg: "Erro ao listar usuarios!"});
    }
});

//Pegando usuario por id
router.get("/:userId", async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({msg: "Erro ao listar usuario!"});
    }
});

module.exports = router