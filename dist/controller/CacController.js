"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCac = exports.registerCac = void 0;
const CacRegModel_1 = require("../model/CacRegModel");
const registerCac = async (req, res) => {
    try {
        const { fullName, email, phoneNumber } = req.body;
        const checkExist = await CacRegModel_1.cacModel.findOne({ email });
        if (checkExist) {
            return res.status(500).json({
                message: 'This email has been used'
            });
        }
        else {
            const unizikUser = await CacRegModel_1.cacModel.create({
                fullName, email, phoneNumber
            });
            return res.status(200).json({
                message: "Registered successfully",
                data: unizikUser,
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            message: "Error while registering",
            data: error
        });
    }
};
exports.registerCac = registerCac;
const getAllCac = async (req, res) => {
    try {
        const getAllRegistered = await CacRegModel_1.cacModel.find();
        return res.status(200).json({
            message: "All registered gotten",
            data: getAllRegistered,
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "Unable to get all registered",
            data: error,
        });
    }
};
exports.getAllCac = getAllCac;
