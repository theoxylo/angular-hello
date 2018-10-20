export interface IMessage {
  title: string;
  body?: string;
}

export class Message implements IMessage {
  constructor(
    public title,
    public body?
  ) {}
}
