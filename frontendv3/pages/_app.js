import { UserContextProvider } from '../context/context';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
