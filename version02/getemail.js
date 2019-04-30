function getemail(users, name){
  const user = users.filter(userObj=>{
    return userObj.name === name;
  });
  return user[0].email;
}

module.exports = getemail;