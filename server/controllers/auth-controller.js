
const User = require("../models/user-model"); 
const bcrypt=require("bcryptjs");
const home = async(req, res)=>{
    try {
        res.status(200).json("welcome back");
        
    } catch (error) {
        console.log(error);
        
    }
}

const register = async(req, res)=>{
    try {
        const {username,email,phone,password} = req.body;

        const userExist= await User.findOne({email:email });
        if(userExist){
            return res.status(400).json({msg:"email already registered"}); 
        }
        // const saltRound=14;
        // const hash_password= await bcrypt.hash(password,saltRound);

        

        const userCreated= await User.create({username,email,phone,password});     
           res.status(201).json({msg:"registration suucessful", token: await userCreated.generateToken(),userId:userCreated._id.toString() } );
        
    } catch (error) {
        console.log(error);
        
    }
}

const login = async (req,res) =>{
    try {
        const {email,password}= req.body;
        const userExist= await User.findOne({email});
        if(!userExist){
            return res.status(400).json({message:"invalid credentials"}); 
        }

        const user= await userExist.comparePassword(password);
        if(user){
        res.status(200).json({msg:"Login suucessful", token: await userExist.generateToken(),userId:userExist._id.toString() } );

        }
        else{
            res.status(401).json({message:"invalid email or password"})
        }
         
        
    } catch (error) {
        res.status(500).json("internal server error");

        
    }
}
 



module.exports= {home,register,login}; 