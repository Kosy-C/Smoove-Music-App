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
exports.paymentMethod = void 0;
const model_1 = require("../../model");
const paymentMethod = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.user.id;
        const paystackResponse = req.body;
        if (paystackResponse === "success") {
            const updatedUser = yield model_1.UserInstance.patch({
                is_premium: true
            }, { where: { id: id } });
            if (updatedUser) {
                const User = yield model_1.UserInstance.findOne({ where: { id: id } });
                return res.status(200).json({
                    message: "Congratulations, you are now a Premium User",
                    User
                });
            }
            return res.status(400).json({
                Error: "Error occured"
            });
        }
        else {
            return res.status(400).json({
                Error: "Your Payment Failed"
            });
        }
    }
    catch (err) {
        next(err);
    }
});
exports.paymentMethod = paymentMethod;
// import * as fs from 'fs';
// let amount: any;
// const params = JSON.stringify({
//   name: 'Monthly Retainer',
//   interval: 'monthly',
//   amount: amount * 100,
//   invoice_limit: 0
// });
// const options: https.RequestOptions = {
//   hostname: 'api.paystack.co',
//   port: 443,
//   path: '/plan',
//   method: 'POST',
//   headers: {
//     Authorization: process.env.SECRET_KEY,
//     'Content-Type': 'application/json',
//   },
// };
// let req = https.request(options, (res) => {
//   var data = '';
//   res.on('data', (chunk) => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     console.log(JSON.parse(data));
//   });
// }).on('error', (error) => {
// //let myplan = JSON.parse($data, true);
// let myplan: any;          //I used this line to make myplan become global variable, so that plan under params can make use of it
// fs.readFile('file.json', (err, data) => {
//     if (err) throw err;
//     myplan = JSON.parse(data.toString());
// });
// const params = JSON.stringify({
//   email: 'customer@email.com',
//   amount: amount * 100,
//   plan: myplan['plan_code'],
// });
// const options: https.RequestOptions = {
//   hostname: 'api.paystack.co',
//   port: 443,
//   path: '/transaction/initialize',
//   method: 'POST',
//   headers: {
//     Authorization: process.env.SECRET_KEY,
//     'Content-Type': 'application/json',
//   },
// };
// const req = https.request(options, (res) => {
//   let data = '';
//   res.on('data', (chunk) => {
//     data += chunk;
//   });
//   res.on('end', () => {
//     console.log(JSON.parse(data));
//   });
// }).on('error', (error) => {
//   console.error(error);
// });
// req.write(params);
// req.end();
// });
// req.write(params);
// req.end();
//# sourceMappingURL=index.js.map