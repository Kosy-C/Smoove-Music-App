import { Response, Request, NextFunction } from "express";
export declare const CreatePlayedMusic: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const DisplayPlayedMusic: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
