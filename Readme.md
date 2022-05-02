# TODO Project

This is a Todo application with react native.

## Technologies
* Redux
* Redux thunk
* Firebase
* React Navigation
* Jest (Testing)
* Expo

## Installation

Firstly You need to change your configuration of firebase.

```bash
/src/data/FirebaseStorage.js -> init function
```


```javascript
 init = () => {
    if (!getApps().length) {
      const firebaseConfig = {
        apiKey: "...",
        authDomain: "...",
        databaseURL: "...",
        projected: "...",
        storageBucket: "...",
        messagingSenderId: "...",
        appId: "...",
      };
      firebase.initializeApp(firebaseConfig);
    }
  };
```

## Project Detail
The login page has 3 inputs (Username, First name, Last name)
when trying to log in the firebase anonymous authentication method will run.

We store the tasks inside the real-time database.

You can add a new task, Edit a task and delete a task.

## Using

At the root of the project, run 'yarn' wait until the installation of dependencies after that run 'expo start' or 'yarn start' in the terminal.
When the browser opens you select one of these: Run on Android device/emulator or
Run on iOS simulator.

## Dependencies

* Expo
* Xcode
* Android Studio


## License
[HRU](http://hasanrizauzuner.com/)