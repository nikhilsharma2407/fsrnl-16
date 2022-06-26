const {genSalt,hash,compare} = require("bcrypt");


const generatePassword = async (password) =>{
    const salt = await genSalt();
    const hashedPassword = await hash(password,salt);
    console.log("hashed password",hashedPassword);
    return hashedPassword;
};

const verifyPassword = async (password,passwordHash)=>{
    return compare(password,passwordHash);
}

module.exports = {generatePassword,verifyPassword};