const jwt = require("jsonwebtoken");
const  dotenv = require("dotenv");
dotenv.config();

const middleware = (req, res, next) => {
try {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return  res.status(401).json({meassage : "token is not present"});
  };

  const token = authHeader.split(" ")[1];

  const decode = jwt.verify(token, process.env.JWT_Secret_Key);

  req.userdetail = decode;
  next();

} catch (error) {
  res.status(401).json({meassage : "token not verify"})
  
}

};

module.exports = middleware;