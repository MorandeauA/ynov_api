import Router from '@koa/router'
import * as TaskControllers from '#components/task/task-controllers.js'

const tasks = new Router()

tasks.get('/', TaskControllers.index)
tasks.get('/:id', TaskControllers.id)
tasks.get('/lists/:listId', TaskControllers.getAllByList)
tasks.post('/', TaskControllers.create)
tasks.put('/:id', TaskControllers.update)
tasks.del('/:id', TaskControllers.destroy)

export default tasks