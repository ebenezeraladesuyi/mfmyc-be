"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerWorker = exports.getAllWorkers = void 0;
const WorkersModel_1 = __importDefault(require("../model/WorkersModel"));
const getAllWorkers = async (req, res) => {
    try {
        const users = await WorkersModel_1.default.find();
        return res.status(200).json({
            message: "gotten all workers",
            data: users,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get all workers",
            data: error,
        });
    }
};
exports.getAllWorkers = getAllWorkers;
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
const registerWorker = async (req, res) => {
    try {
        const { firstName, surname, email, phoneNumber, departmentInChurch, maritalStatus, dateOfBirth, educationalQualification, address, emergencyContactName, emergencyContactRelationship, emergencyContactNumber, } = req.body;
        const checkExist = await WorkersModel_1.default.findOne({ email });
        if (checkExist) {
            return res.status(500).json({
                message: "This email has been used",
            });
        }
        else {
            const users = await WorkersModel_1.default.create({
                firstName,
                surname,
                email,
                phoneNumber,
                departmentInChurch,
                maritalStatus,
                dateOfBirth,
                educationalQualification,
                address,
                emergencyContactName,
                emergencyContactRelationship,
                emergencyContactNumber,
            });
            return res.status(200).json({
                message: "worker account registered",
                data: users,
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "failed to get register worker",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
};
exports.registerWorker = registerWorker;
