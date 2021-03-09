export class SignUpModel {
  readonly realName: string;

  readonly emailOrPhone: string;

  readonly userName: string;

  constructor(realName: string, emailOrPhone: string, userName: string) {
    this.realName = realName;
    this.emailOrPhone = emailOrPhone;
    this.userName = userName;
  }

  static empty(emailOrPhone: string = ''): SignUpModel {
    return new SignUpModel('', emailOrPhone, '');
  }
}
