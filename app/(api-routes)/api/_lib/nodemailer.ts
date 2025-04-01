import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export class ABCMailTransport {
  private _transport: nodemailer.Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>;

  private _host: string | undefined;
  constructor() {
    const MAIL_USR = process.env.MAIL_USR;
    const MAIL_PWD = process.env.MAIL_PWD;

    if (!MAIL_PWD && !MAIL_PWD) throw new Error('Missing smtp authentication info');

    this._transport = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: MAIL_USR,
        pass: MAIL_PWD,
      },
    });
    
    this._host = MAIL_USR;
  }


  sendMail( msg: string, subject: string = 'NEW INQUIRY', addr?: string)
  {
    return new Promise( async( resolve, reject ) =>
    {
        try {
          const res = await this._transport.sendMail( {
            from: 'inquires@abcbuildingblockspreschool.org',
            to: addr || this._host,
            subject: subject,
            text: msg
          } )
          
          resolve( res.messageId )

        } catch ( error )
        {
          
          reject( error )
        }
     } )
  }
}
