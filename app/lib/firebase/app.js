import app from 'firebase/app'
import 'firebase/database'
import firebaseConf from '../../config/firebase'

export default app.initializeApp(firebaseConf)