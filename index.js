const http = require('http');

const server = http.createServer((req, res) => {
  const acceptLanguage = req.headers['accept-language'];
  const userAgent = req.headers['user-agent'];
  const xForwardedFor = req.headers['x-forwarded-for'];
  res.end(JSON.stringify({
    ipadress: xForwardedFor.slice(0, xForwardedFor.indexOf(',')),
    language: acceptLanguage.slice(0, acceptLanguage.indexOf(',')),
    software: userAgent.slice(userAgent.indexOf('(') + 1, userAgent.indexOf(')'))
  }));
});

server.listen(8080);
