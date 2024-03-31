import { Request, Response } from "express";
import unveilingModel from "../model/Unveiling";


export const getAllRegUnveiling = async (req: Request, res: Response) => {
  try {
    const users = await unveilingModel.find();

    return res.status(200).json({
      message: "gotten all registered",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all registered",
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
export const registerUnveiling = async (req: Request, res: Response) => {
  try {
    const {
        fullName,
        email,
        phoneNumber,
        department,
        level,
        haveYou,
        expectations,
    } = req.body;

    const checkExist = await unveilingModel.findOne({ email });

    if (checkExist) {
      return res.status(500).json({
        message: "This email has been used",
      });
    } else {

      const users = await unveilingModel.create({
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
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to get register attendee",
      data: error?.message,
    });
  }
};




