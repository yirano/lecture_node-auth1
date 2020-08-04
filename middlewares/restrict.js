const usersModel = require('../users/users-model')

const bcrypt = require('bcryptjs')

// export default function restrict() {
//   return async (req, res, next) => {
//     try {
//       const { username, password } = req.headers
//       const user = await usersModel.findBy({ username }).first()
//       const password = await bcrypt.compare(password, user.password)

//       if (!password) {
//         return res.status(401).json({ message: "Invalid Credentials" })
//       }
//       next()
//     } catch (error) {
//       next(error)
//     }
//   }
// }

function restrict() {
  const authError = { message: "Invalid credentials" }
  return async (req, res, next) => {
    try {
      // const { username, password } = req.headers

      // if (!username || !password) {
      //   return res.status(401).json(authError)
      // }

      // const user = await usersModel.findBy({ username }).first()
      // // make sure the user exists in the db
      // if (!user) {
      //   return res.status(401).json(authError)
      // }

      // const passwordValid = bcrypt.compare(password, user.password)
      // // make sure the pw is correct
      // if (!passwordValid) {
      //   return res.status(401).json(authError)
      // }

      if (!req.session || !req.session.user) {
        return res.status(401).json(authError)
      }

      // if we reach this point, the user is considered authorized
      next()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = restrict