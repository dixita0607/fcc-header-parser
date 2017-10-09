# fcc-header-parser
Request Header Parser Microservice

This project is developed using [**glitch**](https://glitch.com/).

It uses proxy servers. Hence, [Client IP Address](https://nodejs.org/api/http.html#http_response_socket) can not be read using `res.socket.remoteAddress`.

**glitch** provides a list of IP Addresses of client and proxies in `x-forwarded-for` header.
