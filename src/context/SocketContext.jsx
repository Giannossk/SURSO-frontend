import React, { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';
import { API_BASE_URL } from '../config';

const SocketContext = createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    let newSocket;
    if (user) {
      newSocket = io(API_BASE_URL, {
        withCredentials: true,
      });

      newSocket.on('connect', () => {
        newSocket.emit('user:join', { userId: user._id || user.id });
      });

      // Exposing the socket synchronously (not from a callback) is required here:
      // consumers attach their own 'connect' listeners as soon as they receive the
      // socket, and a delayed setSocket would make them miss an already-fired 'connect'.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSocket(newSocket);
    }

    return () => {
      if (newSocket) {
        newSocket.disconnect();
      }
    };
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};
