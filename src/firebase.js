import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHELNGgXjm3T9sagLpABHZjYeruNU_pUQ",
  authDomain: "galealg-web.firebaseapp.com",
  projectId: "galealg-web",
  storageBucket: "galealg-web.firebasestorage.app",
  messagingSenderId: "589914113162",
  appId: "1:589914113162:web:6453a4437bfcd5ec76d973"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)