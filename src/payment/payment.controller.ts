import { Controller, Post, Request } from '@nestjs/common';
import querystring from 'qs';
import crypto from 'crypto';
@Controller('payment')
export class PaymentController {
  @Post('/')
  async payment(@Request() req) {
    function formatTime(date: Date): string {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${year}${month}${day}${hours}${minutes}${seconds}`;
    }

    const date = new Date();
    const formattedTime = formatTime(date);
var vnp_Params = {};
    const ipAddr =
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;

    const tmnCode = '87NYNIDN';
    const secretKey = 'TJZCJNTITHOYJRDIPNPKTNDXTCLWINQG';
    let vnpUrl = 'https://sandbox.vnpayment.vn/paymentv2/vpcpay.html';
    const createDate = formattedTime;
    const orderId = formattedTime;
    const amount = req.body.amount;
    const bankCode = req.body.bankCode;

    const orderInfo = req.body.orderDescription;
    const orderType = req.body.orderType;
    let locale = req.body.language;
    if (!locale || locale === '') {
      locale = 'vn';
    }

    const currCode = 'VND';
    const vnpParams = {
      vnp_Version: '2.0.1',
      vnp_Command: 'pay',
      vnp_TmnCode: '87NYNIDN',
      vnp_Locale: 'vn',
      vnp_CurrCode: currCode,
      vnp_TxnRef: orderId,
      vnp_OrderInfo: 'Thanh toán hóa đơn điện nước',
      vnp_OrderType: 100000,
      vnp_Amount: 1000000,
      vnp_ReturnUrl: 'http://localhost:3000',
      vnp_IpAddr: 'localhost',
      vnp_CreateDate: createDate,
    };

    if (bankCode && bankCode !== '') {
      vnpParams['vnp_BankCode'] = bankCode;
    }

     var signData = querystring.stringify(vnpParams, { encode: false });
     var crypto = require('crypto');
     var hmac = crypto.createHmac('sha512', secretKey);
     var signed = hmac.update(new Buffer(signData, 'utf-8')).digest('hex');
     vnpParams['vnp_SecureHash'] = signed;
     vnpUrl += '?' + querystring.stringify(vnpParams, { encode: false });


    return {
      vnpUrl,
      ipAddr,
      vnpParams,
    };
  }
}
