import { injectable } from "tsyringe";
import nodemailer from "nodemailer";

import { IMailProvider } from "../IMailProvider";

@injectable()
export class EtherealMailProvider implements IMailProvider {
  constructor(){

  }

  sendMail(to: string, subject: string, body: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

}