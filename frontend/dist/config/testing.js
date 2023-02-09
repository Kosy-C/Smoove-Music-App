"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    GMAIL_PASS: process.env.TEST_GMAIL_PASS,
    GMAIL_USER: process.env.TEST_GMAIL_USER,
    FROM_ADMIN_EMAIL: process.env.TEST_FROM_ADMIN_EMAIL,
    userSubject: process.env.TEST_userSubject,
    port: process.env.TEST_PORT,
    BASE_URL: process.env.TEST_BASE_URL,
    FRONTEND_BASE_URL: process.env.TEST_FRONTEND_BASE_URL,
    DATABASE_URL: process.env.TEST_DATABASE_URL,
    APP_SECRETE: process.env.TEST_APP_SECRETE,
    JWT_SECRETE: process.env.TEST_JWT_SECRETE,
    DATABASE_USERNAME: process.env.TEST_DATABASE_USERNAME,
    DATABASE_HOST: process.env.TEST_DATABASE_HOST,
    DATABASE_DATABASE_NAME: process.env.TEST_DATABASE_DATABASE_NAME,
    DATABASE_PASSWORD: process.env.TEST_DATABASE_PASSWORD,
    DATABASE_PORT: process.env.TEST_DATABASE_PORT,
    GOOGLE_CLIENT_SECRET: process.env.TEST_GOOGLE_CLIENT_SECRET,
    GOOGLE_CALLBACK_URL: process.env.TEST_GOOGLE_CALLBACK_URL,
    GOOGLE_CLIENT_ID: process.env.TEST_GOOGLE_CLIENT_ID,
    FACEBOOK_CLIENT_ID: process.env.TEST_FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.TEST_FACEBOOK_CLIENT_SECRET,
    CALL_BACK_kURL: process.env.TEST_CALL_BACK_kURL,
    SESSION_SECRET: process.env.TEST_SESSION_SECRET,
    CLOUD_NAME: process.env.TEST_CLOUD_NAME,
    CLOUD_API_KEY: process.env.TEST_CLOUD_API_KEY,
    CLOUD_API_SECRET: process.env.TEST_CLOUD_API_SECRET,
};
console.log("running testing mode");
//# sourceMappingURL=testing.js.map