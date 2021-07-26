"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config_1 = __importDefault(require("config"));
var connect_1 = __importDefault(require("./db/connect"));
var routes_1 = __importDefault(require("./routes"));
var middleware_1 = require("./middleware");
var cors_1 = __importDefault(require("cors"));
// const port = 3000;
var port = config_1.default.get("port");
var host = config_1.default.get("host");
var app = express_1.default();
app.use(middleware_1.deserializeUser);
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// app.listen(port, host, () => {
//   log.info(`Server listing at http://${host}:${port}`);
// });
app.listen(3000, function () {
    console.log('Listening on port 3000');
    connect_1.default();
    routes_1.default(app);
});
