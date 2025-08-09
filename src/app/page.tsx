"use client";
import Layoutglobal from "./Components/Layoutglobal";
import Resultados from "./Pagina/Resultados";
import  Index from "./Pagina/Index";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="text-3xl font-bold">Prueba Juego de Trivia</h1>
          <p className="text-lg">Pon a prueba tus conocimientos y diviértete jugando.</p>
         <Layoutglobal>
         <Index></Index>
          <Resultados></Resultados>
         </Layoutglobal>
         
        </div>
      </main>
    </div>
  );
}
