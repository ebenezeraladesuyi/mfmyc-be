import { Request, Response } from "express";
import { cacModel } from "../model/CacRegModel";


export const registerCac = async (req: Request, res: Response) => {
    try {
        const {fullName, email, phoneNumber} = req.body;

        const checkExist = await cacModel.findOne({email})

        if (checkExist) {
            return res.status(500).json({
                message: 'This email has been used'
            })
        } else {
            const unizikUser = await cacModel.create({
                fullName, email, phoneNumber
            });

            return res.status(200).json({
                message: "Registered successfully",
                data: unizikUser,
            })
        }
    } catch (error) {
        return res.status(400).json({
            message: "Error while registering",
            data: error
        })
    }
};



export const getAllCac = async (req: Request, res: Response) => {
    try {
        const getAllRegistered = await cacModel.find()

        return res.status(200).json({
            message: "All registered gotten",
            data: getAllRegistered,
        })
    } catch (error) {
        return res.status(400).json({
            message: "Unable to get all registered",
            data: error,
        })
    }
}