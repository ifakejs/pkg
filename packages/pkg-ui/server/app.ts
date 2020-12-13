import http from 'http'
import Koa from 'koa'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import KoaRouter from '@koa/router'
import socketIo from 'socket.io'
import { run } from './run'

const app: Koa = new Koa()
const server = http.createServer(app.callback())
// @ts-ignore
const io = socketIo(server, {
  transports: ['websocket']
})
const router = new KoaRouter()

app.use(helmet())
app.use(cors())

router.get('/', ctx => {
  ctx.body = 200
})

app.use(router.middleware())
app.use(router.allowedMethods())

io.on('connection', (socket: any) => {
  socket.on('GET_CURRENT_PATH', () => {
    socket.emit('GET_CURRENT_PATH', process.env.parentCwd)
  })
  socket.on('RESOLVE_DATA', async (data: any) => {
    await run(data, process.env.parentCwd)
    socket.emit('CREATE_DONE')
  })
})

server.listen(9986, () => {
  console.log(`Server is running at http://localhost:9986`)
})

export default server
