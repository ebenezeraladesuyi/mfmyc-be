import { Request, Response } from "express";
import DWCSubscribeModel from "../model/DWCsubscribeModel";
// import swysSubscribeModel from "../model/SwysSubscribe";


export const DWCallSubscribed = async (req: Request, res: Response) => {
  try {
    const users = await DWCSubscribeModel.find();

    return res.status(200).json({
      message: "gotten all subscribed",
      data: users,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all subscribed",
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
export const DWCSubscribe = async (req: Request, res: Response) => {
  try {
    const {
        fullName,
        email,
    } = req.body;

    const checkExist = await DWCSubscribeModel.findOne({ email });

    if (checkExist) {
      return res.status(500).json({
        message: "This email has already subscribed",
      });
    } else {

      const users = await DWCSubscribeModel.create({
        fullName,
        email,
      });
  
      return res.status(200).json({
        message: "successfully subscribed",
        data: users,
      });
    }
  } catch (error: any) {
    return res.status(400).json({
      message: "failed to subscribe",
      data: error?.message,
    });
  }
};


