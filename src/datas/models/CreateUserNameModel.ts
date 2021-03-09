export class CreateUserNameModel {
  readonly username: string;

  constructor(username: string) {
    this.username = username;
  }

  static empty(): CreateUserNameModel {
    return new CreateUserNameModel('');
  }
}
