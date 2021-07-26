"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("config"));
var logger_1 = __importDefault(require("../logger"));
var process_1 = __importDefault(require("process"));
function connect() {
    var dbUri = process_1.default.env.MONGO_URI || config_1.default.get("dbUri");
    return mongoose_1.default
        .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(function () {
        logger_1.default.info("Database connected");
    })
        .catch(function (error) {
        logger_1.default.error("db error", error);
        process_1.default.exit(1);
    });
}
exports.default = connect;
