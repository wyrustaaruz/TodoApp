import { getApps } from "firebase/app";
import firebase from "firebase/compat";

class FirebaseStorage {
  constructor() {
    this.init();
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

  get ref() {
    return firebase.database().ref("messages");
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  init = () => {
    if (!getApps().length) {
      const firebaseConfig = {
        apiKey: "AIzaSyBIbyPJECtYcrjW47ienoEXk5HmeyYofxo",
        authDomain: "todoapp-ddb78.firebaseapp.com",
        databaseURL: "https://todoapp-ddb78-default-rtdb.firebaseio.com",
        projectId: "todoapp-ddb78",
        storageBucket: "todoapp-ddb78.appspot.com",
        messagingSenderId: "200955702492",
        appId: "1:200955702492:web:5cf7c6463f063730151819",
      };
      firebase.initializeApp(firebaseConfig);
    }
  };

  onAuthStateChanged = async (user) => {
    if (!user) {
      try {
        let uid = "";
        await firebase
          .auth()
          .signInAnonymously()
          .then((res) => {
            uid = res.user.uid;
          });
        return uid;
      } catch ({ message }) {
        alert(message);
      }
    }
  };

  parse = (snapshot) => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    return {
      _id,
      timestamp,
      text,
      user,
    };
  };

  on = (callback: (messages: any) => void) =>
    this.ref
      .limitToLast(50)
      .on("child_added", (snapshot) => callback(this.parse(snapshot)));

  send = (messages) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = (message) => this.ref.push(message);

  off() {
    this.ref.off();
  }
}

const instance = new FirebaseStorage();

export default instance;
