"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genreRouter = void 0;
const express_1 = __importDefault(require("express"));
const genreHandler_1 = require("../handlers/genreHandler");
const multer_1 = require("../utils/multer/multer");
exports.genreRouter = express_1.default.Router();
/**
 * @swagger
 * /api/genre:
 *   get:
 *     description: Testing for get api
 *     responses:
 *       200:
 *         description: Returns hello genre
 */
exports.genreRouter.post("/addgenre", multer_1.genreUpload.single('genreImage'), genreHandler_1.addGenre);
exports.genreRouter.get("/genres", genreHandler_1.getAllGenres);
exports.genreRouter.get("/genre/:id", genreHandler_1.getGenreById);
exports.genreRouter.patch("/edit/:id", multer_1.genreUpload.single('genreImage'), genreHandler_1.editGenre);
exports.genreRouter.delete("/delete/:id", genreHandler_1.deleteGenre);
//# sourceMappingURL=genre.js.map