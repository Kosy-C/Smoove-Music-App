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
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_premium = void 0;
const model_1 = require("../../model");
const is_premium = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const isPremium = (_a = req.user) === null || _a === void 0 ? void 0 : _a.is_premium;
        const { email, id } = req.user;
        if (!isPremium)
            throw { code: 401, message: "please upgrade to Premuim Account" };
        const user = (yield model_1.UserInstance.findOne({
            where: {
                id: id,
                email: email,
            },
        }));
        if (!user.is_premium || user.role !== "admin")
            throw { code: 401, message: "please upgrade to Premuim Account " };
        next();
    }
    catch (error) {
        console.log(error);
        next({ code: 401, message: "unAuthorised access" });
    }
});
exports.is_premium = is_premium;
//# sourceMappingURL=is_premium.js.map