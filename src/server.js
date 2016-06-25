express = require("express")
//Include react transpiler
react = require("express-react-views")

server = express()

server.engine("jsx", react.createEngine())
server.set("view engine", "jsx")

server.set("views", __dirname + "/components")



server.get("/", (req, resp) => {

	resp.status(200)
	resp.render("index")

})


server.listen(3000)


//Live reload server for development
livereload = require("livereload")
liveserver = livereload.createServer()
liveserver.watch(__dirname + "/components")