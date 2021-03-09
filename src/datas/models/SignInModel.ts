export class SignInModel {
  readonly emailOrPhone: string;

  constructor(emailOrPhone: string) {
    this.emailOrPhone = emailOrPhone;
  }

  static empty(emailOrPhone: string = ''): SignInModel {
    return new SignInModel(emailOrPhone);
  }
}
