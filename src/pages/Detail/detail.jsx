import React from "react";
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from "react-router-dom";

export default function Detail(){
    const { name } = useParams();
    
    return(
        <div className="w-100 h-100">
            <Navbar />
        </div>
    )
}
