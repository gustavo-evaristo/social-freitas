module.exports= {

  async userAuth(req, res , next){
    if(req.session.user == null || req.session.user == undefined ){
      return res.redirect('/login')
      
    } else {
      next()
      
    }
  },

  async adminAuth(req, res , next){
    
  }

}