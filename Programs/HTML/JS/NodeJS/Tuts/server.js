// Import the 'http' module
import http from 'node:http'; // Built-in modules often have the 'node:' prefix
import {greet} from './Module.js';

// Now you can use the functionalities provided by the 'http' module
// For example, creating a server:
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`Hello, Node.js with ESM! ${greet('nik')}`);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000 (ESM)');
});
// processInfo.js
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Architecture:', process.arch);
console.log('Process ID (PID):', process.pid);
console.log('Current working directory:', process.cwd());
console.log('Environment variables:', process.env.NODE_ENV); // Accessing an environment variable

// You can also access command-line arguments:
console.log('Command-line arguments:', process.argv);

// Example of exiting the process (usually based on some condition):
// setTimeout(() => {
//   console.log('Exiting process after 3 seconds.');
//   process.exit(0); // 0 indicates success
// }, 3000);