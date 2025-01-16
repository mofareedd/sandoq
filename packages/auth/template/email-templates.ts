export const getOtpTemplate = ({
  otp,
  name,
}: { otp: string; name: string }) => ({
  subject: 'Verify Email Adress',
  text: 'Complete Your Registration with Sandooq',
  html: `<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="ie=edge"http-equiv=X-UA-Compatible><title>Static Template</title><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"rel=stylesheet><body style=margin:0;font-family:Poppins,sans-serif;background:#fff;font-size:14px><div style="max-width:680px;margin:0 auto;padding:45px 30px 60px;background:#f4f7ff;background-image:url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);background-repeat:no-repeat;background-size:800px 452px;background-position:top center;font-size:14px;color:#434343"><header><table style=width:100%><tr style=height:0><td><p style=font-size:16px;line-height:30px;color:#fff>Sandooq</table></header><main><div style="margin:0;margin-top:70px;padding:92px 30px 115px;background:#fff;border-radius:30px;text-align:center"><div style="width:100%;max-width:489px;margin:0 auto"><p style=margin:0;margin-top:17px;font-size:16px;font-weight:500>Hey ${name},<p style=margin:0;margin-top:17px;font-weight:500;letter-spacing:.56px>Thank you for signing up with Sandooq! To complete your registration, please verify your email address by entering the One-Time Password (OTP) below. This code is valid for the next <span style=font-weight:600;color:#1f1f1f>24 hours</span>. Do not share this code with others.<p style=margin:0;margin-top:60px;font-size:40px;font-weight:600;letter-spacing:25px;color:#ba3d4f>${otp}</div></div></main></div>`,
});
export const getVerifyEmailTemplate = ({
  link,
  name,
}: { link: string; name: string }) => ({
  subject: 'Verify Email Adress',
  text: 'Complete Your Registration with Sandooq',
  html: `<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="ie=edge"http-equiv=X-UA-Compatible><title>Static Template</title><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"rel=stylesheet><body style=margin:0;font-family:Poppins,sans-serif;background:#fff;font-size:14px><div style="max-width:680px;margin:0 auto;padding:45px 30px 60px;background:#f4f7ff;background-image:url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);background-repeat:no-repeat;background-size:800px 452px;background-position:top center;font-size:14px;color:#434343"><main><div style="margin:0;margin-top:70px;padding:88px 30px 122px;background:#fff;border-radius:30px;text-align:center"><div style="width:100%;max-width:422px;margin:0 auto"><h1 style=margin:0;font-size:24px;color:#1f1f1f>Confirm New Email address</h1><p style=margin:0;margin-top:17px;font-size:16px;font-weight:500>Hey ${name},<p style=margin:0;margin-top:17px;font-weight:500>Please confirm your email address. This ensures we have the right email in case we need to contact you.</p><a href=${link} target=_blank><button style=width:100%;max-width:288px;height:45px;margin-top:60px;border:none;border-radius:30px;background:#499fb6;color:#fff;font-size:14px;font-weight:600;cursor:pointer>Verify New Email</button></a></div></div></main></div>`,
});

export const getForgetPasswordTemplate = ({
  link,
  name,
}: { link: string; name: string }) => ({
  subject: 'Reset Your Password',
  text: 'Need Help Accessing Your Account?',
  html: `<!doctypehtml><html lang=en><meta charset=UTF-8><meta content="width=device-width,initial-scale=1"name=viewport><meta content="ie=edge"http-equiv=X-UA-Compatible><title>Static Template</title><link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"rel=stylesheet><body style=margin:0;font-family:Poppins,sans-serif;background:#fff;font-size:14px><div style="max-width:680px;margin:0 auto;padding:45px 30px 60px;background:#f4f7ff;background-image:url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);background-repeat:no-repeat;background-size:800px 452px;background-position:top center;font-size:14px;color:#434343"><main><div style="margin:0;margin-top:70px;padding:88px 30px 122px;background:#fff;border-radius:30px;text-align:center"><div style="width:100%;max-width:422px;margin:0 auto"><h1 style=margin:0;font-size:24px;color:#1f1f1f>Confirm New Email address</h1><p style=margin:0;margin-top:17px;font-size:16px;font-weight:500>Hey ${name},<p style=margin:0;margin-top:17px;font-weight:500>We received a request to reset the password for your account. If you made this request, please click the button below to set a new password:</p><a href=${link} target=_blank><button style=width:100%;max-width:288px;height:45px;margin-top:60px;border:none;border-radius:30px;background:#499fb6;color:#fff;font-size:14px;font-weight:600;cursor:pointer>Reset My Password</button></a></div></div></main></div>`,
});
