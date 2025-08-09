import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { TriviaContext } from "../Context/TriviaContext";
import styles from "../styles/Results.module.css";
import { useContext } from "react";

const Results: NextPage = () => {
  const { preguntas, puntajeAcumulado, preguntasRespondidas, reiniciarJuego } = useContext(TriviaContext);
  const porcentaje = preguntas.length > 0 ? Math.round((puntajeAcumulado / (preguntas.length * 10)) * 100) : 0;

  const manejarReiniciar = () => {
    reiniciarJuego();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Resultados - Trivia App</title>
        <meta name="description" content="Resultados de la trivia" />
      </Head>

      <div className={styles.resultsContainer}>
        <h1 className={styles.titulo}>¡Trivia Completada!</h1>
        
        <div className={styles.resultadosCard}>
          <div className={styles.puntajeFinal}>
            <h2>Puntaje Final</h2>
            <div className={styles.puntaje}>{puntajeAcumulado}</div>
          </div>
          
          <div className={styles.estadisticas}>
            <div className={styles.estadistica}>
              <span className={styles.etiqueta}>Preguntas respondidas:</span>
              <span className={styles.valor}>{preguntasRespondidas} de {preguntas.length}</span>
            </div>
            
            <div className={styles.estadistica}>
              <span className={styles.etiqueta}>Porcentaje de aciertos:</span>
              <span className={styles.valor}>{porcentaje}%</span>
            </div>
          </div>

          <div className={styles.mensaje}>
            {porcentaje >= 80 && <p>Excelente trabajo</p>}
            {porcentaje >= 60 && porcentaje < 80 && <p>Buen trabajo</p>}
            {porcentaje >= 40 && porcentaje < 60 && <p>No está mal, pero puedes mejorar 💪</p>}
            {porcentaje < 40 && <p>Sigue practicando</p>}
          </div>
        </div>

        <div className={styles.acciones}>
          <Link 
            href="/" 
            onClick={manejarReiniciar}
            className={styles.reiniciarButton}
          >
            Jugar de Nuevo
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;
