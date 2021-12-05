import { Router } from 'express'
import array from './array'

let api = Router()

api.get('/', (req, res) => {
    res.json({ hi: 'project tips' })
})

api.use('/array', array)

export default api
