const express = require('express')
const app = express()
const port = 3000


app.use(express.static('static'))

function handle404Error(req, res, next) {
	res.status(404);

	res.redirect('/404')
}


app.get("/", function (req, res) {
	res.sendFile(__dirname + '/static/index.html')
});

app.get("/grades", function (req, res) {
	res.sendFile(__dirname + '/static/classes.html')
});

app.get("/404", function (req, res) {
	res.sendFile(__dirname + '/static/404.html')
});


app.use(handle404Error)

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
});




app.listen(port, '0.0.0.0', () => {
	console.log(`Example app listening on port ${port}`)
})