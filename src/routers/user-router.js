"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var userModel = __importStar(require("../models/user_model"));
var user_middleware_1 = require("../middleware/user-middleware");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var dotenv_1 = __importDefault(require("dotenv"));
var uuid_1345_1 = __importDefault(require("uuid-1345"));
dotenv_1.default.config();
exports.userRouter = express_1.default.Router();
//this was just practice, try/catch works better with ts
// userRouter.get("/user", (req, res) => {
//     user.get()
//     .then((users: any) => {
//         res.json(users);
//     })
//     .catch((err: any) => {
//         res.status(500).json({
//             message:"Failed to get user"
//         })
//     })
// })
//READ
exports.userRouter.get("/user", user_middleware_1.restrict(), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, err_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, userModel.get()];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                err_1 = _c.sent();
                next(err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
//CREATE
exports.userRouter.post("/register", user_middleware_1.validateUser(), function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, newUser, _b, _c, err_2;
    var _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                _c = (_b = userModel).create;
                _d = {
                    username: username
                };
                return [4 /*yield*/, bcryptjs_1.default.hash(password, 15)];
            case 1: return [4 /*yield*/, _c.apply(_b, [(_d.password = _e.sent(),
                        _d.user_ID = uuid_1345_1.default.v4(),
                        _d)])];
            case 2:
                newUser = _e.sent();
                if (newUser) {
                    return [2 /*return*/, res.status(201).json({
                            message: "The user has been created! Hooray!"
                        })];
                }
                return [3 /*break*/, 4];
            case 3:
                err_2 = _e.sent();
                next(err_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.userRouter.post('/login', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, user, authenticated, payload, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                return [4 /*yield*/, userModel.getBy(username)];
            case 1:
                user = _b.sent();
                if (!user) {
                    return [2 /*return*/, res.status(401).json({
                            message: "invalid credentials"
                        })];
                }
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 2:
                authenticated = _b.sent();
                if (!authenticated) {
                    return [2 /*return*/, res.status(401).json({
                            message: "invalid credentials"
                        })];
                }
                payload = {
                    userId: user.user_ID,
                    username: username,
                };
                if (!process.env.JWT_SECRET)
                    throw new Error("Missing Secret");
                res.cookie('token', jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET));
                res.json({
                    message: "Welcome, " + username + ". We missed you!"
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                next(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.userRouter.put('/user/:id', user_middleware_1.restrict(), user_middleware_1.validateUpdate, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, username, password, updatedUser, newUpdatedUser, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 3, , 4]);
                _a = req.body, username = _a.username, password = _a.password;
                _b = {
                    username: username
                };
                return [4 /*yield*/, bcryptjs_1.default.hash(password, 15)];
            case 1:
                updatedUser = (_b.password = _c.sent(),
                    _b.user_ID = req.user_ID,
                    _b);
                return [4 /*yield*/, userModel.update(updatedUser)];
            case 2:
                newUpdatedUser = _c.sent();
                res.status(200).json(newUpdatedUser);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _c.sent();
                next(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
