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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
function seed(knex) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Deletes ALL existing entries
                return [4 /*yield*/, knex("user").del()];
                case 1:
                    // Deletes ALL existing entries
                    _a.sent();
                    return [4 /*yield*/, knex("recipes").del()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, knex("ingredients").del()
                        // Inserts seed entries
                    ];
                case 3:
                    _a.sent();
                    // Inserts seed entries
                    return [4 /*yield*/, knex("user").insert([
                            { user_ID: "12b3a227-a64b-413f-bd20-e8f3d83e6ff2", username: "Jane", password: "JanePass" },
                            { user_ID: "d734fdd3-202f-4ef1-87ea-8a1607d049d2", username: "John", password: "JohnPass" },
                            { user_ID: "2ab8b480-ecdf-472c-9303-2b0d6e7ddd9e", username: "Jack", password: "JackPass" }
                        ])];
                case 4:
                    // Inserts seed entries
                    _a.sent();
                    return [4 /*yield*/, knex("recipes").insert([
                            { recipe_ID: "65bc8ec8-9cdb-4f81-b9af-7658a8b0af79", user_ID: "12b3a227-a64b-413f-bd20-e8f3d83e6ff2", name: "Cranberry pecan upside-down cake", category: "dessert" },
                            { recipe_ID: "25c29e5c-697d-4e6c-bbdc-d21db253f1dd", user_ID: "12b3a227-a64b-413f-bd20-e8f3d83e6ff2", name: "Buttermilk Blueberry Cake", category: "dessert" },
                            { recipe_ID: "c632f6b3-7fcd-4f9d-b786-c2d0b2ceb873", user_ID: "d734fdd3-202f-4ef1-87ea-8a1607d049d2", name: "Thai coconut chicken curry", category: "Dinner" },
                            { recipe_ID: "22756da8-f45d-42bc-9cdb-99edaddc7e09", user_ID: "d734fdd3-202f-4ef1-87ea-8a1607d049d2", name: "Lingonberry & ginger cheesecake pots", category: "dessert" },
                            { recipe_ID: "15aee1b9-5177-48ae-b458-3b523a2df6c4", user_ID: "2ab8b480-ecdf-472c-9303-2b0d6e7ddd9e", name: "Bacon-wrapped Chicken with BBQ Saucek", category: "Lunch" },
                            { recipe_ID: "7d1c080f-f559-49e9-9e6a-536507c275c2", user_ID: "2ab8b480-ecdf-472c-9303-2b0d6e7ddd9e", name: "Chicken stir fry special", category: "dinner" },
                        ])];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, knex("ingredients").insert([
                            { ingredient_ID: "3388e643-7051-427f-982f-c31e5db422b7", recipe_ID: "65bc8ec8-9cdb-4f81-b9af-7658a8b0af79", name: "cranberries", amount: "1-9oz bag" },
                            { ingredient_ID: "a6b02944-c179-47e2-8a35-2b42544cffee", recipe_ID: "65bc8ec8-9cdb-4f81-b9af-7658a8b0af79", name: "pecans", amount: "1-8oz bag" },
                            { ingredient_ID: "e0f08613-893d-4643-9ed5-c9eaa1e32d1d", recipe_ID: "25c29e5c-697d-4e6c-bbdc-d21db253f1dd", name: "blueberries", amount: "1-7oz box" },
                            { ingredient_ID: "d68e529e-ea1d-4f96-875d-cd98896a7e05", recipe_ID: "25c29e5c-697d-4e6c-bbdc-d21db253f1dd", name: "buttermilk", amount: "16oz" },
                            { ingredient_ID: "bb8e3e2b-71cd-4646-80f7-2405599473df", recipe_ID: "c632f6b3-7fcd-4f9d-b786-c2d0b2ceb873", name: "coconut shavings", amount: "1-5oz bag" },
                            { ingredient_ID: "dd79846e-4d48-4554-ab05-20f77ef7e6c7", recipe_ID: "c632f6b3-7fcd-4f9d-b786-c2d0b2ceb873", name: "chicken", amount: "5" },
                            { ingredient_ID: "2d0bd9cd-6adb-45ce-a9a8-592a28919c3b", recipe_ID: "22756da8-f45d-42bc-9cdb-99edaddc7e09", name: "ginger", amount: "1" },
                            { ingredient_ID: "f8ecf456-a902-4369-b06e-3a293647e436", recipe_ID: "22756da8-f45d-42bc-9cdb-99edaddc7e09", name: "lingonberry", amount: "2" },
                            { ingredient_ID: "8bc96e85-032f-4176-934b-85a0b1a001d4", recipe_ID: "15aee1b9-5177-48ae-b458-3b523a2df6c4", name: "bacon", amount: "5 slices" },
                            { ingredient_ID: "ef02700b-a890-47ef-8820-eee9cda4de3e", recipe_ID: "15aee1b9-5177-48ae-b458-3b523a2df6c4", name: "bbq", amount: "1 bottle" },
                            { ingredient_ID: "4cff8e02-7917-4d85-b3ff-6b6fb7dbb784", recipe_ID: "7d1c080f-f559-49e9-9e6a-536507c275c2", name: "chicken", amount: "4" },
                            { ingredient_ID: "11c05c49-d52b-4841-974f-deec05a4c774", recipe_ID: "7d1c080f-f559-49e9-9e6a-536507c275c2", name: "noodles", amount: "1 box" },
                        ])];
                case 6:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.seed = seed;
;
