export function initDb(firebaseDB) {
    return {
        type: 'INIT_DB',
        payload: { firebaseDB }
    }
}