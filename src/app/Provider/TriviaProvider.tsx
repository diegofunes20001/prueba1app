import { TriviaProvider } from '../Context/TriviaContext';
import Layoutglobal from '../Components/Layoutglobal';

function TriviaProvider({ Component, pageProps }: TriviaProviderProps) {
  return (
    <TriviaProvider>
      <Layoutglobal>
        <Component {...pageProps} />
      </Layoutglobal>
    </TriviaProvider>
  )
}

export default TriviaProvider;