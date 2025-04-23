const encrypt = (payload, secret) => {
  // your code here and return token
  try{
    const token = jwt.sign(payload,secret,{
      expiresIn: '2hr'
    })
    console.log('sucess ')
    return token
  }catch(err){
    throw new Error(`Error encrypting payload: ${err.message}`);
  }
};

module.exports = encrypt;
