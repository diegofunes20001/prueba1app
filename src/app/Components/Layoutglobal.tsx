import React, { ReactNode } from 'react';
import { useTriviaContext } from '../Context/TriviaContext';
import styles from './Layout.module.css';


interface LayoutglobalProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutglobalProps> = ({ children }) => {
  const { puntajeAcumulado } = useTriviaContext(0); // Default value for puntajeAcumulado

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1>Trivia App</h1>
        <div className={styles.puntaje}>
          Puntaje Actual: {puntajeAcumulado}
        </div>
      </header>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;