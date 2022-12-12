import React, {createContext,useState} from 'react';
export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies,setMovies]=useState([
        {
            name:'Thunivu',
            price:'Rs.100',
            id:'001',
        },
        {
            name:'Varisu',
            price:'Rs.100',
            id:'002',
        },
        {
            name:'VTK',
            price:'Rs.250',
            id:'003',
        }
    ]);
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};