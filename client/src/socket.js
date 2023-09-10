import io from 'socket.io-client';
const URL = process.env.NODE_ENV === 'production' ? ''  : 'http://localhost:12345'

export const socket = io(URL, { transports: ['websocket'], autoConnect: false })