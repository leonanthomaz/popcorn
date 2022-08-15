const router = require('express').Router()
const User = require("../models/User");
const bcrypt = require("bcrypt");
require('dotenv').config()

//Cadastro
router.post("/register", async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if(!username){
        return res.status(403).json({ msg: "Campo username requerido!"})
    }
    if(!email){
        return res.status(403).json({ msg: "Campo username requerido!"})
    }
    if(!password){
        return res.status(403).json({ msg: "Campo senha requerido!"})
    }
    if(password !== confirmPassword){
        return res.status(403).json({ msg: "Senhas não conferem"})
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
    
        await newUser.save();
        res.status(200).json({msg: 'Usuário inserido com sucesso!'});
        } catch (err) {
        res.status(500).json({msg: 'Erro ao cadastrar.. Tente novamente...'});
        }
});

//Login
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(!user){
            return res.status(404).json({ msg: "Usuário não encontrado"})
        }

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword){
            return res.status(404).json({ msg: "Erro ao logar. Tente novamente"})
        }

        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
        return res.status(500).json({msg: 'Erro ao logar.. Tente novamente...'});
    }
});


module.exports = router