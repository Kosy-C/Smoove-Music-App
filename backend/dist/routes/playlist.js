"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistRoute = void 0;
// import { getPlaylistSongs, addSongToPlaylist } from './../handlers/playlistHandler/playlistHandler';
const express_1 = require("express");
// import { auth } from "../middleware/auth/auth";
exports.playlistRoute = (0, express_1.Router)();
/**
 * @swagger
 * /api/playlist:
 *   get:
 *     description: Testing for get api
 *     responses:
 *       200:
 *         description: Returns hello playlist
 */
// playlistRoute
//   .get("/getPlaylists", auth, getPlaylistSongs)
//   .post("/addToPlaylist/:songId", auth, addSongToPlaylist)
// .put("/update/:id", () => {})
// .delete("/delete/:id", () => {});
//# sourceMappingURL=playlist.js.map