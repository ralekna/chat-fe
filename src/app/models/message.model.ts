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
      | MessageType.JOIN = MessageType.MESSAGE,
  ) {

  }

}

export enum MessageType {
  MESSAGE = "message",
  NOTIFICATION = "notification",
  CONNECTION = "connection",
  DISCONNECT = "disconnect",
  JOIN = "join"
}
