"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUnveiling = exports.getAllRegUnveiling = void 0;
const Unveiling_1 = __importDefault(require("../model/Unveiling"));
const getAllRegUnveiling = async (req, res) => {
    try {
        const users = await Unveiling_1.default.find();
        return res.status(200).json({
            message: "gotten all registered",
            data: users,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get all registered",
            data: error,
        });
    }
};
exports.getAllRegUnveiling = getAllRegUnveiling;
//get one user
// export const getOneUser = async (req: Request, res: Response) => {
//   try {
//     const users = await UserModel.findById(req.params.userId);
//     return res.status(200).json({
//       message: "gotten one user",
//       data: users,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: "failed to get all users",
//       data: error,
//     });
//   }
// };
//register a user
const registerUnveiling = async (req, res) => {
    try {
        const { fullName, email, phoneNumber, department, level, haveYou, expectations, } = req.body;
        const checkExist = await Unveiling_1.default.findOne({ email });
        if (checkExist) {
            return res.status(500).json({
                message: "This email has been used",
            });
        }
        else {
            const users = await Unveiling_1.default.create({
                fullName,
                email,
                phoneNumber,
                department,
                level,
                haveYou,
                expectations,
            });
            return res.status(200).json({
                message: "successfully registered",
                data: users,
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get register attendee",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
};
exports.registerUnveiling = registerUnveiling;
