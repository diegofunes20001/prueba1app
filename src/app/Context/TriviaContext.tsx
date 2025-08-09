import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Pregunta {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: string;
}

interface TriviaContextType {
  preguntas: Pregunta[];
  agregarPregunta: (pregunta: Pregunta) => void;
}

const TriviaContext = createContext<TriviaContextType | undefined>(undefined);

export const useTriviaContext = (puntajeAcumulado: any) => {
  const context = useContext(TriviaContext);
  if (!context) {
    throw new Error('useTriviaContext must be used within a TriviaProvider');
  }
  return context;
};

export const TriviaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);

  const agregarPregunta = (pregunta: Pregunta) => {
    setPreguntas((prev) => [...prev, pregunta]);
  };

  return (
    <TriviaContext.Provider value={{ preguntas, agregarPregunta }}>
      {children}
    </TriviaContext.Provider>
  );
};
