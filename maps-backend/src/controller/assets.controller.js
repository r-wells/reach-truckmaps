"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVehicleAssetDataHandler = exports.saveVehicleAssetDataHandler = exports.getVehicleAssetsHandler = void 0;
var assets_service_1 = require("../service/assets.service");
function getVehicleAssetsHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    data = {
                        assets: [
                            {
                                id: 123,
                                name: 'First Location',
                                cable: {
                                    assetType: 'Truck'
                                },
                                engineHours: 200,
                                location: [{
                                        location: '',
                                        latitude: 35.931037,
                                        longitude: -95.388679
                                    }]
                            },
                            {
                                id: 1234,
                                name: 'Second Location',
                                cable: {
                                    assetType: 'Truck'
                                },
                                engineHours: 200,
                                location: [{
                                        location: '',
                                        latitude: 38.931037,
                                        longitude: -91.388679
                                    }]
                            },
                            {
                                id: 1235,
                                name: 'Third Location',
                                cable: {
                                    assetType: 'Truck'
                                },
                                engineHours: 200,
                                location: [{
                                        location: '',
                                        latitude: 37.67720383498678,
                                        longitude: -110.72316138806556
                                    }]
                            },
                            {
                                id: 1233,
                                name: 'Fourth Location',
                                cable: {
                                    assetType: 'Truck'
                                },
                                engineHours: 200,
                                location: [{
                                        location: '',
                                        latitude: 44.83436223593597,
                                        longitude: -98.55031125033116
                                    }]
                            },
                            {
                                id: 1236,
                                name: 'Fifth Location',
                                cable: {
                                    assetType: 'Truck'
                                },
                                engineHours: 200,
                                location: [{
                                        location: '',
                                        latitude: 40.407130393031984,
                                        longitude: -80.97218830775444
                                    }]
                            },
                            {
                                id: 12,
                                name: 'Sixth Location',
                                cable: {
                                    assetType: 'Truck'
                                },
                                engineHours: 200,
                                location: [{
                                        location: '',
                                        latitude: 46.70400296141882,
                                        longitude: -120.83058208004718
                                    }]
                            },
                            {
                                id: 12363,
                                name: 'Seventh Location',
                                cable: {
                                    assetType: 'Truck'
                                },
                                engineHours: 200,
                                location: [{
                                        location: '',
                                        latitude: 44.08157969567491,
                                        longitude: -84.97121127719063
                                    }]
                            },
                        ]
                    };
                    return [4 /*yield*/, saveVehicleAssetDataHandler(data)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, res.send({ data: data })];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [2 /*return*/, res.sendStatus(401)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getVehicleAssetsHandler = getVehicleAssetsHandler;
function saveVehicleAssetDataHandler(data) {
    return __awaiter(this, void 0, void 0, function () {
        var err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, assets_service_1.saveAssetData(data)];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.saveVehicleAssetDataHandler = saveVehicleAssetDataHandler;
function deleteVehicleAssetDataHandler(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, assets_service_1.deleteAssetData()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, res.send(200)];
                case 2:
                    err_3 = _a.sent();
                    console.error(err_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteVehicleAssetDataHandler = deleteVehicleAssetDataHandler;
