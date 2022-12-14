import Router from '@koa/router'
import * as UserControllers from '#components/user/user-controllers.js'

const users =  new Router()

users.post('/register', UserControllers.register)
users.post('/login', UserControllers.login)

export default users