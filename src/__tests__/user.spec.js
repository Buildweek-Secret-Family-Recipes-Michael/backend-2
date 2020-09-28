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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../../index");
var dbConfig_1 = require("../database/dbConfig");
var supertest_1 = __importDefault(require("supertest"));
describe('end point tests mvp', function () {
    describe('/register /login', function () {
        var _this = this;
        beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, dbConfig_1.db('users').truncate()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        //should return status 201
        it('registers a new user', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, supertest_1.default(index_1.server)
                            .post('/register')
                            .send({ username: "michelletest", password: "michelletest" })
                            .then(function (res) {
                            console.log(res.body);
                            expect(res.status).toBe(201);
                            expect(res.body.username).toBe(res.body.username);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        // #2 UMMMMM WHAT?? I AM LITERALLY SO CONFUSED WHAT DO YOU MEANNNNN
        // it('registers a new user', async() => {
        //     await supertest(server)
        //             .post('/api/auth/register')
        //             .send({ username: "michelle1" , password: "michelle1" })
        //             .then(res => {
        //               expect(res.statusCode).toBe(201);
        //               expect(res.body).toStrictEqual({
        //                 message: "The user has been created.",
        //                 })
        //             })
        // })
        // //login i guess im literally so fustrated with this testing stuff man
        // it('logs you in', async() => {
        //     await supertest(server)
        //             .post('/api/auth/login')
        //             .send({ username: 'michelle1', password: 'michelle1' })
        //             .then(res => {
        //                 expect(res.status).toBe(200)
        //             })
        //         })
        //         //atleast this one works, thats all i care about now
        //         it('gives a welcome message', async() => {
        //             await supertest(server).post('/api/auth/login')
        //             .send({username: 'michelle9', password: 'michelle9'})
        //             .then(res => {
        //                     expect(res.body).toEqual({message: `WELCOME michelle9!!!!!!!!!!!`})
        // })
        // })           
    });
});
