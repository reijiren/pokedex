import React, { useEffect, useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import axios from "axios";
import Card from "../../components/Card/Card";

export default function Home(){
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [isLoading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [next, setNext] = useState(null);
    const [previous, setPrevious] = useState(null);
    const [pokeData, setPokeData] = useState([]);

    const fetchPokemon = async() => {
        setLoading(true);
        setPokeData([]);

        axios.get(`${url}?offset=${(page - 1) * 20}&limit=20`)
        .then((res) => {
            setNext(res.data.next);
            setPrevious(res.data.previous);
            getPokemonInfo(res.data.results);
        })
        .catch((err) => {
            console.log(err);
        })

        setLoading(false);
    }

    const getPokemonInfo = async(res) => {
        res.map(async(item) => {
            axios.get(item.url)
            .then((result) => {
                setPokeData(state => {
                    state=[...state, result.data];
                    state.sort((a, b) => a.id > b.id ? 1 : -1);
                    return state;
                })
            })
            // const result = await axios.get(item.url);

            // setPokeData(state => {
            //     state=[...state, result.data];
            //     state.sort((a, b) => a.id > b.id ? 1 : -1);
            //     return state;
            // })
        })
    }

    useEffect(() => {
        fetchPokemon();
    }, [page]);

    return(
        <div className="w-100 h-100">
            <Navbar />
            <div className="w-100 d-flex align-items-center flex-column">
                <Card pokemon={pokeData} loading={isLoading} />
            </div>
            <div className="p-2 m-3">
                <button onClick={() => {setPage(page - 1)}} disabled={previous == null}>Previous</button>
                <button onClick={() => {setPage(page + 1)}} disabled={next == null}>Next</button>
            </div>
            
        </div>
    )
}
