// import fs from 'fs';
import fs from 'fs/promises';

// readFile
// fs.readFile('./test.txt', 'utf8', (err, data) => {
// 	if(err) throw err;
// 	console.log(data);
// });

// readFileSync
// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data)

// readFile() - promise
// fs.readFile('./test.txt', 'utf8')
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err));

// readFile() - async/await
const readFile = async() => {
	try {
		const data = await fs.readFile('./test.txt', 'utf8');
		console.log(data)
	} catch(err) {
		console.log(err)
	}
}

// writeFile()
const writeFile = async() => {
	try {
		await fs.writeFile('./test.txt', 'I am written to this file')
		console.log('File is written to...')
	} catch(err) {
		console.log(err)
	}
}

// appendfile()
const appendFile = async () => {
	try {
		await fs.appendFile('./test.txt', '\nThis is appended text');
		console.log('File appended to...')
	} catch(err) {
		console.log(err)
	}
}

writeFile();
appendFile();
readFile();