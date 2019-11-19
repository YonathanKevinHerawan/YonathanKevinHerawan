import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
  .initializeApp({databaseURL:'https://vueandfirebase-f8c53.firebaseio.com' })
  .database()

export const dessertsRef = db.ref('desserts')