const path = require("path");

const DIST_DIR = path.resolve(__dirname, "client");
const SRC_DIR = path.resolve(__dirname, "app");

const config = {
    entry: SRC_DIR + "/App.jsx",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    },
    devServer: {
        // proxy URLs to backend development server
        proxy: {
            "/api/auth": "http://localhost:3000"
        }
    }
};

module.exports = config;
