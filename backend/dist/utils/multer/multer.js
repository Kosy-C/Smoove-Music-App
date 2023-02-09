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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.musicUpload = exports.genreUpload = void 0;
const multer_1 = __importDefault(require("multer"));
const cloudinary = require("cloudinary").v2;
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
// import config from "../../config";
cloudinary.config({
    cloud_name: "demsd5fjh",
    api_key: "873193439176723",
    api_secret: "Wz4Ihy_OjbCLxi9gfwxHPHkD2cY",
});
// cloud_name: config.CLOUD_NAME,
//   api_key: config.CLOUD_API_KEY,
//   api_secret: config.CLOUD_API_SECRET,
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => __awaiter(void 0, void 0, void 0, function* () {
        return {
            folder: "ADMIINMUSIC",
            resource_type: "auto",
        };
    }),
});
const musicstorage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => __awaiter(void 0, void 0, void 0, function* () {
        return {
            format: "mp3",
            folder: "SMOOVEAPPMUSIC",
        };
    }),
});
const genrestorage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary,
    params: (req, file) => __awaiter(void 0, void 0, void 0, function* () {
        return {
            folder: "GENREIMAGE",
        };
    }),
});
exports.genreUpload = (0, multer_1.default)({ storage: genrestorage });
exports.musicUpload = (0, multer_1.default)({ storage: musicstorage });
exports.upload = (0, multer_1.default)({ storage: storage });
//# sourceMappingURL=multer.js.map