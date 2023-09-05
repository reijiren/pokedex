import React from "react";
import styles from "./style.module.css";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function Card({ pokemon, loading }){
    const handleClick = () => {

    }

    console.log(pokemon)
    return(
        <div className="d-flex flex-row flex-wrap m-3">
            {
                loading ? <h2>Loading...</h2> : pokemon.length > 0 ? pokemon?.map((item) => {
                    return(
                        <div className={`${styles.card} d-flex flex-column align-items-center`} key={item.id} onClick={handleClick}>
                            <h5>{item.name}</h5>
                            <TransformWrapper defaultScale={1} defaultPositionX={75} defaultPositionY={100}>
                                <TransformComponent>
                                    <img src={item.sprites.front_default} height={150} />
                                </TransformComponent>
                            </TransformWrapper>
                            <div>
                                <div className="mb-2">
                                    Abilities :
                                </div>
                                {
                                    item.abilities.length != 0 ? 
                                        item.abilities.map((e)=>{
                                            return(
                                                <div className={`d-flex align-self-start`}>
                                                    <ul className={`${styles.list} align-self-start`}>
                                                        <li>{e.ability.name}</li>
                                                    </ul>
                                                </div>
                                            )
                                        }) : <h4>No ability</h4>
                                }
                            </div>
                        </div>
                    )
                }) : <h2>No Data</h2>
            }
        </div>
    )
}