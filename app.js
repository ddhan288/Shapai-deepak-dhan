const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = 8800;
app.use(body_parser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.post('/', (req, res) => {
	var n1 = Number(req.body.num1);
	var n2 = Number(req.body.num2);
	var result = n1 + n2;
	console.log(result);
	res.send(`Addition = ${result}`);
});

app.listen(port, () => {
	console.log(`Server Has Started On Port ${port}`);
});
