const User = require('../models/user');


async function getAllUsersHandler(req, res) {
    const allUserData = await User.find({})
    return res.status(200).json(allUserData);
}
async function getAllUserHtml(req, res) {
    const allUserData = await User.find({})
    const html = `<ul>${allUserData.map(user=>`<li> <b>Name: </b>${user.firstName} ${user.lastName} <b>Email: </b> ${user.email} `).join("")} </ul>`
    return res.status(200).send(html);
}


async function addUser(req, res) {
    const body =req.body;
    if(!body || 
    !body.first_name||
    !body.last_name ||
    !body.email ||
    !body.gender||
    !body.job_title){
        return res.status(400).json({msg:"All fields are required"});
    }
    try{
        const result =  await User.create({
            firstName:body.first_name,
            lastName:body.last_name,
            email:body.email,
            gender:body.gender,
            jobTitle:body.job_title,
        })
        console.log('result: ',result);
        return res.status(201).json({msg:'user created!'})
    }catch(err){
        console.log(err," ",new Error('Duplicate email'))
        return res.status(400).json({msg:'user already exists'})
    }

  
}
async function updateUser(req, res) {
    try {
        const body = req.body;
        if (!body || !body.email) {
          res.status(400).json({ msg: 'Email is required!' });
          return;
        }
    
        const getUserByEmail = await User.updateOne({ email: req.params.email }, {
          firstName: body.first_name,
          lastName: body.last_name,
          email: body.email,
          gender: body.gender,
          jobTitle: body.job_title,
        });
    
        if (getUserByEmail.matchedCount === 0) { //matchedCount : if filter not match any value it will return 0
          res.status(404).json({ msg: 'User not found!' });
          return;
        }
    
        res.status(200).json({ msg: 'Successfully updated!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error updating user!' });
      }
}
async function deleteUser(req, res) {
    try {
        const getUserByEmail = await User.deleteOne({ email: req.params.email });
    
        if (getUserByEmail.deletedCount === 0) {
          res.status(404).json({ msg: 'User not found!' });
          return;
        }
    
        res.status(200).json({ msg: 'Successfully Deleted!' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error in deleting the user!' });
      }
}

module.exports = {
    getAllUsersHandler,
    getAllUserHtml,
    addUser,
    updateUser,
    deleteUser
    
}
