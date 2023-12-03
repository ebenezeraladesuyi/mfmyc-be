"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerMember = void 0;
const MembersModel_1 = __importDefault(require("../model/MembersModel"));
// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await UserModel.find();
//     return res.status(200).json({
//       message: "gotten all users",
//       data: users,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: "failed to get all users",
//       data: error,
//     });
//   }
// };
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
const registerMember = async (req, res) => {
    try {
        const { firstName, surname, email, phoneNumber, educationalQualification, dateOfBirth, address, emergencyContactName, emergencyContactRelationship, emergencyContactNumber, } = req.body;
        const checkExist = await MembersModel_1.default.findOne({ email });
        if (checkExist) {
            return res.status(500).json({
                message: "This email has been used",
            });
        }
        else {
            const users = await MembersModel_1.default.create({
                firstName,
                surname,
                email,
                phoneNumber,
                address,
                dateOfBirth,
                educationalQualification,
                emergencyContactName,
                emergencyContactRelationship,
                emergencyContactNumber,
            });
            return res.status(200).json({
                message: "member registered",
                data: users,
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get register member",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
};
exports.registerMember = registerMember;
