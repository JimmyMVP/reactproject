express = require("express")
//Include react transpiler
react = require("express-react-views")
//Include sass transpiler
sasstrans = require("node-sass-middleware")

server = express()

//Set the jsx view engine for jsx tranpiling
server.engine("jsx", react.createEngine())
server.set("view engine", "jsx")



server.set("views", __dirname + "/components")

server.use(sasstrans({src: __dirname + "/public/styles"}))
server.use(express.static(__dirname + "/public"))


server.get("/", (req, resp) => {

	resp.status(200)
	resp.render("index")

})


server.listen(3000)


//Live reload server for development
console.log("Starting livereload for " + __dirname)
livereload = require("livereload")
liveserver = livereload.createServer({exts: ["jsx", "html", "css", "sass", "js"]})
liveserver.watch([__dirname + "/components", __dirname + "/public"])