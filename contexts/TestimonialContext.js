import React, {useState, useContext, createContext, useEffect} from 'react';

import {johnny, paul, mary} from './imports';

export const TestimonialContext = createContext();


export const TestimonialProvider = ({ children }) => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        const clientTestimonials = [
            {id: 1, name: "Paul Simon", picture: paul, position:"Founder", company: "MegaCorp" },
            {id: 2, name: "Johnny B.Goode", picture: johnny, position:"CEO", company: "Getting Things Done" },
            {id: 3, name: "Mary Jane", picture: mary, position:"CEO", company: "Design Matters" }
        ]
        setTestimonials(clientTestimonials)
    }, [])


    return (
        <TestimonialProvider.Provider value={{testimonials}}>
            {children}
        </TestimonialProvider.Provider>
    )

}



