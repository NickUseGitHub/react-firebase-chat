import app from 'firebase/app'
import database from 'firebase/database'
import firebaseConf from '../../config/firebase'

export default app.initializeApp(firebaseConf)