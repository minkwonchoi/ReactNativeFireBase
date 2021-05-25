import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDqBj_yZb29IKZscxGbrRF48vrkt9_PqM0',
  authDomain: 'voteyourcoin-00.firebaseapp.com',
  databaseURL: 'https://voteyourcoin-00-default-rtdb.firebaseio.com/',
  projectId: 'voteyourcoin-00',
  storageBucket: 'voteyourcoin-00.appspot.com',
  messagingSenderId: '508445584450',
  appId: '1:508445584450:ios:db9f48e7aef20db36051db',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().enablePersistence()

}

export { firebase };