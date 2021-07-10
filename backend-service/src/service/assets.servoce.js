"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveAssetData = void 0;
var assets_model_1 = __importDefault(require("../model/assets.model"));
function saveAssetData(input) {
    return assets_model_1.default.create(input);
}
exports.saveAssetData = saveAssetData;
