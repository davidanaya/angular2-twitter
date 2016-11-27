export class Tweet {
    id: string;
    face: string;
    uid: string;
    username: string;
    text: string;

  constructor(
    uid: string,
    face: string,
    username: string,
    text: string) { 
      this.face = face;
      this.uid = uid;
      this.username = username;
      this.text = text;
  }

}