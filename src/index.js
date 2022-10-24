const port = 3100
const hostname = '127.0.0.1'
const http = require('http')
const axios = require('axios')

axios.get('https://lupic.cdn.bcebos.com/20200412/3046534862_14_747_533.jpg')
  .then(res => {
    console.log(res)
  })

const server = http.createServer((req, res) => {
  console.log('server runing')
})

server.listen(port, hostname, () => {
  console.log('server runing at ' + hostname + ':' + port)
})