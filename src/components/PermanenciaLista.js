import React from "react";
import Permanencia from './Permanencia';

export default function PermanenciaLista(props){
    return(
        <div className="mt-3">
                {props.permanencias.map(perm => (
                    <Permanencia key={perm.id} perm={perm} fecharPermanencia={props.fecharPermanencia} editarPermanencia={props.editarPermanencia}/>
                ))}
            </div>
    )
}