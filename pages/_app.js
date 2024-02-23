


import { Open_Sans, Raleway } from "next/font/google";

import '../app/globals.css'


const openSans = Open_Sans({subsets: ["latin"]})
const raleway = Raleway({subsets: ["latin"]}) 

function MyApp({ Component, pageProps }) {



  return (

    <>
        <Component {...pageProps} />

    </>

  );
}

export default MyApp;