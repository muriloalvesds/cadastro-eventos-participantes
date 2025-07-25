"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

type AppState = {
  events: any[];
  setEvents: (events: any[]) => void;
  participants: any[];
  setParticipants: (participants: any[]) => void;
};

const AppContext = createContext<AppState | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<any[]>([]);
  const [participants, setParticipants] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ events, setEvents, participants, setParticipants }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}
