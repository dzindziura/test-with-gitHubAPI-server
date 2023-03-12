const User = require('../model/User')

const createUser = async (req, res) => {
    const filter = { login: req.body.login }
    const update = { followers: req.body.followers, 
                     blog: req.body.blog,
                     name: req.body.name,
                     public_repos: req.body.public_repos
                    }
    const options = { new: true, upsert: true }
  
    User.findOneAndUpdate(filter, update, options, function(err, user) {
      if (err) {
        console.error(err)
        res.status(500).json({ error: 'Failed to create/update user' })
      } else {
        res.json({ message: 'User created/updated', user })
      }
    })
  }

module.exports = {
    createUser
  };