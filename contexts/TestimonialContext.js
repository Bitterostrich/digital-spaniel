import React, {useState, useContext, createContext, useEffect} from 'react';

import {johnny, paul, mary} from './imports';

export const TestimonialContext = createContext();


export const TestimonialProvider = ({ children }) => {
    const [testimonials, setTestimonials] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        const loadTestimonials = async () => {
            setLoading(true)

            try {
                const data = await new Promise((resolve) => {
                    // using setTimeout to simulate a fetch request.
                    
                    setTimeout(() => {
                        const clientTestimonials = [
                            {id: 1, name: "Paul Simon", picture: paul, position:"Founder", company: "MegaCorp" },
                            {id: 2, name: "Johnny B.Goode", picture: johnny, position:"CEO", company: "Getting Things Done" },
                            {id: 3, name: "Mary Jane", picture: mary, position:"CEO", company: "Design Matters" }
                        ]
                        resolve(clientTestimonials)
                    }, 500);
                });
                setTestimonials(data)


            } catch (error) {
                console.error('Failed to load testimonials', error)
            } finally {
                setLoading(false)
            }
        }

        loadTestimonials()
    }, [])


    return (
        <TestimonialContext.Provider value={{testimonials, loading}}>
            {children}
        </TestimonialContext.Provider>
    )

}



