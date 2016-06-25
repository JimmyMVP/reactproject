express = require("express")
//Include react transpiler
react = require("express-react-views")
server = express()

webpackDev = require("webpack-dev-middleware")
webpackHot = require("webpack-hot-middleware")
webpackConfig = require("../webpack.dev.config")
compiler = require("compiler")(webpackConfig)



//Adding transpiler engine to the server
server.engine("jsx", react.createEngine())
server.set("view engine", "jsx")

//Change views default directory to components
server.set("views", __dirname + "/components")


server.use(webpackDev(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}))

server.use(webpackHot(compiler))

server.get("/", (req, resp) => {

	resp.status(200)
	resp.render("index")

})


server.listen(3000)