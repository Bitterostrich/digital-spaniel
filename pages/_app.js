


import { Open_Sans, Raleway } from "next/font/google";
import NavBar from '@/components/navbar/NavBar';
import '../app/globals.css';

import {TestimonialProvider} from '../contexts/TestimonialContext'


const openSans = Open_Sans({subsets: ["latin"]})
const raleway = Raleway({subsets: ["latin"]}) 

function MyApp({ Component, pageProps }) {



  return (

    <>
    <TestimonialProvider>
       <NavBar/>
          <Component {...pageProps}></Component>

    </TestimonialProvider>


    </>

  );
}

export default MyApp;