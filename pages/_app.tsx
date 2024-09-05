import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Provider store={store}> */}
      <div className="bg-bg">
        <Navbar/>
    <Component {...pageProps} />
      </div>
      <Footer />
    {/* </Provider> */}
    </>
  );
}
