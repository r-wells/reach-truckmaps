"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAssetData = exports.saveAssetData = void 0;
var assets_model_1 = __importDefault(require("../model/assets.model"));
function saveAssetData(data) {
    return assets_model_1.default.create({ assets: data.assets });
}
exports.saveAssetData = saveAssetData;
function deleteAssetData() {
    return assets_model_1.default.remove({});
}
exports.deleteAssetData = deleteAssetData;
