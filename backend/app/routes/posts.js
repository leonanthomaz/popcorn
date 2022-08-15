const router = require('express').Router()
const Post = require('../models/Post')
const User = require("../models/User");
require('dotenv').config()

//Novo post
router.post("/", async (req, res) => {

    if(!req.body.desc || !req.body.movieId || !req.body.userId){
      return res.status(403).json({msg: "Falha ao enviar post. Tente novamente!"});
    }
    
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json({msg: "Falha ao enviar post", err});
    }
});

//Pegando todos os posts
router.get("/all", async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({msg: "Erro ao listar posts!"});
  }
});

//Pegando um post especifico por id do filme
router.get("/:movieId", async (req, res) => {
  try {
    const post = await Post.find({ movieId: req.params.movieId});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({msg: "Erro ao listar posts!"});
  }
});

//like / dislike
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json({msg: "Like enviado com sucesso!"});
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json({msg: "Dislike enviado com sucesso!"});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Deletando post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    await post.deleteOne();
    res.status(200).json({msg: "Post deletado com sucesso!"});
  } catch (err) {
    res.status(500).json({msg: "Falha ao deletar post",err});
  }
});


module.exports = router