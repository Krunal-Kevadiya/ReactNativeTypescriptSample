export class CreateProfileModel {
  readonly source: string;

  readonly fileName: string;

  readonly data?: string | null;

  constructor(source: string, fileName: string, data?: string | null) {
    this.source = source;
    this.fileName = fileName;
    this.data = data;
  }

  static empty(source: string = '', fileName: string = '', data: string | null = null): CreateProfileModel {
    return new CreateProfileModel(source, fileName, data);
  }
}
