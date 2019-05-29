const User = require('../models/User');

const signup=(req,res)=>{
    const userData = req.body;
    const newUser = new User(userData);
    User.findOne({username:userData.username},(err,user)=>{
        if(err){
            res.json({error:'Something went wrong'});
        }else{
            if(user){
                res.json({error:'User already Exists',user})
            }else{
                newUser.save((err,user)=>{
                    if(err) {res.json({error:'Something went wrong to save'})}
                    else{
                        if(user){
                            res.json({success:'Register successfull',user});
                        }
                    }
                })
            }
        }
    })

}

const getAllUsers = (req,res)=>{
    User.find((err,users)=>{
        if(err) res.json({error:"something went wrong"})
        else{
            res.json(users);
        }
    })
}

const deleteUser = (req,res)=>{
    const userId = req.body;
    User.deleteOne({_id:userId.id},(err)=>{
        if(err){res.json({error:'Something went wrong'})}
        else{
            res.json({success:"Deleted Successfully"});
        }
    })
}

const updateUser = (req,res)=>{
    const userDate = req.body;
    User.updateOne({_id:userDate._id},{admin:userDate.admin},(err,updateRes)=>{
        if(err) res.json({error:'Somethig went wrong'});
        else {
            if(updateRes.ok)
                res.json({success:'Updated successfully'});
            else 
                res.json({error:'Can not update'})
        }
    })
}

const UserController ={
    signup,
    getAllUsers,
    deleteUser,
    updateUser
}

module.exports=UserController;