const jsonServer = require('json-server');
const ip = require('ip').address();
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const createDB = require('./db.js');
const mounted = require('./route');
const DB = createDB();
const router = jsonServer.router(DB);

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    console.log('req:', req.url);
    if (req.method === 'POST' && req.url === '/login') {
        // req.body.createdAt = Date.now()
        res.sendStatus(200);
    } else {
        // Continue to JSON Server router
        next()
    }

})

mounted(server, DB);
server.use(router);

server.listen(
   {
      host: ip,
      port: 3167
   },
   function() {
      console.log(`JSON Server is running in http://${ip}:3167`);
   }
);
