import { Request, Response } from "express";
import memberModel from "../model/MembersModel";


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
export const registerMember = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      surname,
      email,
      phoneNumber,
      educationalQualification,
      address,
      emergencyContactName,
      emergencyContactRelationship,
      emergencyContactNumber,
    } = req.body;

    const checkExist = await memberModel.findOne({ email });

    if (checkExist) {
      return res.status(500).json({
        message: "This email has been used",
      });
    } else {

      const users = await memberModel.create({
        firstName,
        surname,
        email,
        phoneNumber,
        address,
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
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get register member",
      data: error?.message,
    });
  }
};


