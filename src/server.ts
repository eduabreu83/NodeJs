import {createServer} from 'node:http';

const server = createServer((req, res) => {
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});