export default function(rooms = [
    { id: '1', name: 'Room1' },
    { id: '2', name: 'Room2' },
    { id: '3', name: 'Room3' },
    { id: '4', name: 'Room4' }
], action) {
    switch(action.type) {
        default: return rooms
    }
}