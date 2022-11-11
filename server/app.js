const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const { hashPass, comPass, signToken, verifToken } = require("./helpers/index");
const {User} = require('./models');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/users', async(req, res, next) => {
    try {
        const data = await User.findAll()
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

app.post('/api/users', async(req, res, next) => {
    try {
        await User.create({
            ...req.body
        })
        res.status(201).json({
            msg: 'User Created'
        })
    } catch (err) {
        next(err)
    }
})

app.get('/api/users/:id', async(req, res, next) => {
    try {
        const id = +req.params.id
        const data = await User.findByPk(id)
        res.status(200).json(data)
    } catch (err) {
        next(err)
    }
})

app.delete('/api/users/:id', async(req, res, next) => {
    try {
        const id = +req.params.id
        const data = await User.destroy({
            where: {
                id
            }
        })
        res.status(200).json({
            msg: `User with id ${id} has been deleted`
        })
    } catch (err) {
        next(err)
    }
})

app.post('/api/login', async(req, res, next) => {
    try {
        const {email, password} = req.body
        if (!email) {
            throw {message: `Email is required`}
        }
        if (!password) {
            throw {message: `Password is required`}
        }
        const data = await User.findOne({
            where: {
                email
            }
        })
        if (!data) {
            throw {message: `Invalid email/password`} 
        }
        const isValid = comPass(password, data.password)
        if (!isValid) {
            throw {message: `Invalid email/password`}       
        }
        const payload = {
            id: data.id,
            email: data.email,
        }
        const access_token = signToken(payload)
        res.status(200).json({
            access_token,
            role: data.role
        })
        
    } catch (err) {
        next(err)
    }
})


app.use((err, req, res, next) => {
  let code = 500;
  let msg = `Internal Server Error`;

  switch (err.name) {
    case `Bad Request`:
      code = 400;
      msg = err.name;
      break;
    case `Unathorized`:
      code = 401;
      msg = err.name;
      break;
    default:
      break;
  }

  res.status(code).json({
    msg,
  });
});

app.listen(port, () => {
  console.log(`Bismillah lancar`, port);
});
