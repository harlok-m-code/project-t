require('dotenv').config();
const { User } = require('../model/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const key = process.env.KEY;

const genToken = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        key,
        {expiresIn: "24h"}
    );
}

class userController {
    
    async registration (req, res){
        try {
            const { name, email, password, role } = req.body;
            const errors = validationResult(req);
            const hashPassword = await bcrypt.hash(password, 7);
            const checkEmail = await User.findOne({ where: {email} });

            if(checkEmail){
                return res.status(400).json("Данный email уже заригестрирован !");
            }
            if(!errors.isEmpty()){
                return res.status(401).json({message: "Error", errors})
            }

            const user = await User.create({
                name,
                email,
                password: hashPassword
            })
            
            const token = await genToken(user.id, user.email, user.role);

            res.json(token);
        } catch (error) {
            console.log(error)
        }
    }

    async login (req, res) {
        const { email, password } = req.body;
        const candidate = await User.findOne({where: {email}})
        const comparePassword = await bcrypt.compare(password, candidate.password);
        const id = await candidate.id;

        if(!candidate){
            return res.status(400).json(`Данный ${email} не заригестрирован !`)
        }
        if(!comparePassword){
            return res.status(400).json("Пароль не верный !")
        }
        const token = genToken(candidate.id, candidate.email, candidate.role);
        
        res.json({token, id})
    }

}


module.exports = new userController();