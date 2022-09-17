import "../styles/globals.css";
import { createClient, Provider } from "urql";
import Navbar from "../components/Navbar";
import { StateContext } from "../lib/context";

const client = createClient({ url: process.env.NEXT_PUBLIC_BACKEND_API });

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Provider value={client}>
        <Navbar />

        <Component {...pageProps} />
      </Provider>
    </StateContext>
  );
}

export default MyApp;
