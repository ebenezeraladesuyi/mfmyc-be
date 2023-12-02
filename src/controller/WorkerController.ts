import { Request, Response } from "express";
import workerModel from "../model/WorkersModel";


export const getAllWorkers = async (req: Request, res: Response) => {
  try {
    const users = await workerModel.find();

    return res.status(200).json({
      message: "gotten all workers",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all workers",
      data: error,
    });
  }
};


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
export const registerWorker = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      surname,
      email,
      phoneNumber,
      departmentInChurch,
      maritalStatus,
      educationalQualification,
      address,
      emergencyContactName,
      emergencyContactRelationship,
      emergencyContactNumber,
    } = req.body;

    const checkExist = await workerModel.findOne({ email });

    if (checkExist) {
      return res.status(500).json({
        message: "This email has been used",
      });
    } else {

      const users = await workerModel.create({
        firstName,
        surname,
        email,
        phoneNumber,
        departmentInChurch,
        maritalStatus,
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
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get register worker",
      data: error?.message,
    });
  }
};


