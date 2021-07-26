"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var AssetsSchema = new mongoose_1.default.Schema({
    id: { type: Number, default: 0 },
    name: { type: String, default: "No name provided" },
    cable: { type: Object, default: null },
    engineHours: { type: Number, default: 0 },
    assetSerialNumber: { type: Number, default: 0 },
    location: { type: Array, default: null },
}, { timestamps: true });
var AssetsDocumentsSchema = new mongoose_1.default.Schema({
    assets: [
        {
            id: { type: Number, default: 0 },
            name: { type: String, default: "No name provided" },
            cable: { type: Object, default: null },
            engineHours: { type: Number, default: 0 },
            assetSerialNumber: { type: Number, default: 0 },
            location: { type: Array, default: null },
        },
        { timestamps: true }
    ]
});
var Assets = mongoose_1.default.model("Assets", AssetsDocumentsSchema);
exports.default = Assets;
