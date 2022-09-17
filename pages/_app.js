import "../styles/globals.css";
import { createClient, Provider } from "urql";
import Navbar from "../components/Navbar";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Navbar />

      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
