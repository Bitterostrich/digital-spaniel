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
                            {id: 1, name: "Paul Simon", testimony:"Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me informed and included from the start. Super pleased with the end results too!", picture: paul, position:"Founder", company: "MegaCorp" },
                            {id: 2, name: "Johnny B.Goode", testimony:"Advice and support from DigiSpan was second to none. Always willing to help and offer advice and solutions. A very good and rapid understanding of our requirements was key to this.", picture: johnny, position:"CEO", company: "Getting Things Done" },
                            {id: 3, name: "Mary Jane", testimony: "We needed a creative and unique brand which could compete against established products. Digital Spaniel delivered in spades and we’ve seen a huge response to the product launch.", picture: mary, position:"CEO", company: "Design Matters" }
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



