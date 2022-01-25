const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if(req.methods === "OPTIONS"){
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1];

        if(!token){
            return res.status(401).json({message:"Не авторизован !"})
        }
        const decode = jwt.verify(token, process.env.KEY);
        // req.user = decode;
        next()
    } catch (error) {
        res.status(401).json({message: "Не авторизован!"})
    }
}