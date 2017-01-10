export function initFirebaseDb(firebaseDB) {
    return {
        type: 'INIT_DB',
        payload: { firebaseDB }
    }
}