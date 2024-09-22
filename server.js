import http from 'http';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
	// res.setHeader('Content-Type', 'text/html')
	try {
		if(req.method === 'GET') {
			if(req.url === '/') {
				res.writeHead(200, {'Content-Type': 'text/html'})
				res.end('<h1>Homepage</h1>');
			} else if(req.url === '/about') {
				res.writeHead(200, {'Content-Type': 'text/html'})
				res.end('<h1>About</h1>');
			} else {
				res.writeHead(404, {'Content-Type': 'text/html'})
				res.end('<h1>Not Found</h1>');
			}
		} else {
			throw new Error('Method not allowed');
		}
	} catch {
		res.writeHead(500, {'Content-Type': 'text/plain'})
		res.end('Server Error');
	}

	// res.end(JSON.stringify({message: 'Server Error'}));
})

server.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
})