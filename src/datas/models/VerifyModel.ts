export class VerifyModel {
  readonly otp: string;

  constructor(otp: string) {
    this.otp = otp;
  }

  static empty(): VerifyModel {
    return new VerifyModel('');
  }
}
