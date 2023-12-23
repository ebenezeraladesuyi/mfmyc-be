import { Request, Response } from "express";
import dateModel from "../model/MyDateeModel";


//register a date
export const dateReply = async (req: Request, res: Response) => {
    try {
      const {
        date,
      } = req.body;
  
        const myDate = await dateModel.create({
          date,
        });

        return res.status(200).json({
            message: "date question answered",
            data: myDate
        })

    } catch (error: any) {
      return res.status(400).json({
        message: "failed to get date reply",
        data: error?.message,
      });
    }
  };
  