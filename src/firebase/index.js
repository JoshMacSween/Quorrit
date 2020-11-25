import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAjI6k06BZpfKfZCBD_2UStnKduZ9wDAz4',
  authDomain: 'quorrit-project.firebaseapp.com',
  databaseURL: 'https://quorrit-project.firebaseio.com',
  projectId: 'quorrit-project',
  storageBucket: 'quorrit-project.appspot.com',
  messagingSenderId: '96746657311',
  appId: '1:96746657311:web:282805b361531355d0272a',
}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const db = app.database()
export const auth = app.auth()
