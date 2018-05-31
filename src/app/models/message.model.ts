export default class Message {
  constructor(
    public text: string,
    public room: string | string[],
    public user?: string,
    public timestamp: Date = new Date(),
    public type: MessageType.MESSAGE
      | MessageType.CONNECTION
      | MessageType.NOTIFICATION
      | MessageType.DISCONNECT
      | MessageType.NICK
      | MessageType.JOIN = MessageType.MESSAGE,
    public htmlText?: string,
    public data?: any
  ) {

  }

}

export enum MessageType {
  MESSAGE = "message",
  NOTIFICATION = "notification",
  CONNECTION = "connection",
  DISCONNECT = "disconnect",
  JOIN = "join",
  NICK = "nick"
}
