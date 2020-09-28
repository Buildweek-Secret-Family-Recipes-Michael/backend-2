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
exports.validateUpdate = exports.validateUser = exports.restrict = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var userModel = __importStar(require("../models/user_model"));
var uuid_1345_1 = __importDefault(require("uuid-1345"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function restrict() {
    var _this = this;
    return function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var authError, token;
        return __generator(this, function (_a) {
            authError = {
                message: "Invalid Credentials..."
            };
            try {
                token = req.cookies.token;
                if (!token) {
                    return [2 /*return*/, res.status(401).json(authError)];
                }
                jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, function (err, decoded) {
                    if (err) {
                        return res.status(401).json(authError);
                    }
                    req.token = decoded;
                    next();
                });
            }
            catch (err) {
                next(err);
            }
            return [2 /*return*/];
        });
    }); };
}
exports.restrict = restrict;
function validateUser() {
    var _this = this;
    return function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
        var _a, username, password, user, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, username = _a.username, password = _a.password;
                    if (!username || !password)
                        return [2 /*return*/, res.status(400).json({
                                message: "Missing username and/or password..."
                            })];
                    return [4 /*yield*/, userModel.getBy({ username: username, password: password, user_ID: uuid_1345_1.default.v4() })];
                case 1:
                    user = _b.sent();
                    if (user)
                        return [2 /*return*/, res.status(409).json({
                                message: "Username is taken..."
                            })];
                    req.user = user;
                    next();
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _b.sent();
                    next(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
}
exports.validateUser = validateUser;
function validateUpdate(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, validateUuid, validatedUser, validatedUsername, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    _a = req.body, username = _a.username, password = _a.password;
                    if (!username || password)
                        return [2 /*return*/, res.status(400).json({
                                message: "Missing username and/or password"
                            })];
                    validateUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
                    if (!req.params.id.validate(validateUuid))
                        return [2 /*return*/, res.status(400).json({
                                message: "Not a valid uuid..."
                            })];
                    return [4 /*yield*/, userModel.getById(req.params.id)];
                case 1:
                    validatedUser = _b.sent();
                    if (!validatedUser)
                        return [2 /*return*/, res.status(400).json({
                                message: "Invalid id..."
                            })];
                    if (!(req.body.username === validatedUser.username)) return [3 /*break*/, 2];
                    return [2 /*return*/, next()];
                case 2:
                    if (!(req.body.username !== validatedUser.username)) return [3 /*break*/, 4];
                    return [4 /*yield*/, userModel.getBy(username)];
                case 3:
                    validatedUsername = _b.sent();
                    if (validatedUsername)
                        return [2 /*return*/, res.status(400).json({ error: "Username is already taken..." })];
                    _b.label = 4;
                case 4:
                    next();
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _b.sent();
                    console.log(e_1.stack);
                    next();
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.validateUpdate = validateUpdate;
