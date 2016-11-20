export class User {
  uid: string;
  email: string;
  username: string;
  image: string;
  bio: string;
  
  constructor(
    uid: string,
    email: string,
    username?: string,
    image?: string,
    bio?: string) {
      this.uid = uid;
      this.email = email;
      this.username = username || this.email.split('@')[0];
      this.image = image || 'http://smileculture.com/wp-content/uploads/2015/11/avatar.png';
      this.bio = bio || 'No bio information.';
  }

}