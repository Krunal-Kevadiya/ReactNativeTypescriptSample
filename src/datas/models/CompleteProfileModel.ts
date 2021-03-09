export class CompleteProfileModel {
  readonly username: string;

  readonly source: string;

  readonly fileName: string;

  readonly data?: string | null;

  constructor(username: string, source: string, fileName: string, data?: string | null) {
    this.username = username;
    this.source = source;
    this.fileName = fileName;
    this.data = data;
  }

  static empty(
    username: string = '',
    source: string = '',
    fileName: string = '',
    data: string | null = null
  ): CompleteProfileModel {
    return new CompleteProfileModel(username, source, fileName, data);
  }
}
