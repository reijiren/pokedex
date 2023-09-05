import React from "react";

export default function Card({ pokemon, loading }){
    const handleClick = () => {

    }

    return(
        <div className="d-flex flex-row flex-wrap gap-3 my-3">
            {loading ? <h2>Loading...</h2> : pokemon?.map((item) => {
                return(
                    <div className="card" key={item.id} onClick={handleClick}>
                        <h2>{item.name}</h2>
                        <img src={item.sprites.front_default}></img>
                        <div>
                            Abilities :
                            {/* {item.abilities?.map((i, e) => {
                                return(<div key={i}>{e.name}</div>)
                            })} */}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}