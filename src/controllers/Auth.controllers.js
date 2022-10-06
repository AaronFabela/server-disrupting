import User from '../models/User.model.js'

export const login = async (req, res) => {
  const { user, password } = req.body
  const userFound = await User.findOne({ user: user })

  if (!userFound)
    return res.status(400).json({ message: 'Usuario no encontrado' })

  if (userFound.password === password) {
    res.json({ user: userFound.user })
  } else {
    return res.status(400).json({ message: 'Password invalido' })
  }
}

export const signup = async (req, res) => {
  try {
    const { user, email, password } = req.body
    const userAux = new User({
      user,
      email,
      password,
    })
    await userAux.save()
    res.json({ user: userAux.user })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}
