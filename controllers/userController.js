exports.registerUser = (req, res) => {
    res.status(200).send({ message: 'User created successfully'})
}

exports.loginUser = (req, res) => {
    res.status(200).send({ message: 'User logged in successfully'})
}