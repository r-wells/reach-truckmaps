"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("./controller/user.controller");
var assets_controller_1 = require("./controller/assets.controller");
var session_controller_1 = require("./controller/session.controller");
var middleware_1 = require("./middleware");
var user_schema_1 = require("./schema/user.schema");
function default_1(app) {
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.get("/healthcheck", function (req, res) { return res.sendStatus(200); });
    // Register user
    app.post("/api/users", middleware_1.validateRequest(user_schema_1.createUserSchema), user_controller_1.createUserHandler);
    // Login
    app.post("/api/sessions", middleware_1.validateRequest(user_schema_1.createUserSessionSchema), session_controller_1.createUserSessionHandler);
    // Get the user's sessions
    app.get("/api/sessions", middleware_1.requiresUser, session_controller_1.getUserSessionsHandler);
    // Logout
    app.delete("/api/sessions", middleware_1.requiresUser, session_controller_1.invalidateUserSessionHandler);
    // GET the asstes from Samsara
    // Store these assets to the database
    // Return the assets in a response
    app.get("/assets", middleware_1.requiresUser, assets_controller_1.getVehicleAssetsHandler);
    app.delete("/assets", middleware_1.requiresUser, assets_controller_1.deleteVehicleAssetDataHandler);
}
exports.default = default_1;
