import React from "react";

export default function Permanencia(props) {

    function statusPermanencia(parametro) {
        switch (parametro) {
            case '1': return 'Aberta';
            case '2': return 'Fechada';
            default: return 'Aberta';
        }
    }

    function estiloPermanencia(parametro) {
        switch (parametro) {
            case '1': return 'danger';
            case '2': return 'success';
            default: return 'danger';
        }
    }

    return (
        <div className="card mb-2 shadow-sm" >
            <div className='card-body'>
                <div className='d-flex justify-content-between'>
                    <h5 className='card-title'>
                        <span className="badge bg-secondary me-1">
                            {props.perm.id}
                        </span>
                        - {props.perm.crianca}
                    </h5>
                    <h6>
                        <span className={"badge me-1 bg-" + estiloPermanencia(props.perm.status)}>
                            Status: {statusPermanencia(props.perm.status)}
                        </span>
                    </h6>
                </div>
                <p className='card-text'>
                    {props.perm.descricao}
                </p>
                <p className='card-text'>
                    {props.perm.dataEntrada}
                </p>
                <p className='card-text'>
                    {props.perm.dataSaida}
                </p>
                <p className='card-text'>
                    {props.perm.responsavel}
                </p>
                <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                    <button className='btn btn-sm btn-outline-primary me-2' onClick={() => props.editarPermanencia(props.perm.id)}>
                        <i className='fa-solid fa-pen me-2'></i>
                        Editar Permanência
                    </button>
                    <button className='btn btn-sm btn-outline-danger' onClick={() => props.fecharPermanencia(props.perm.id)}>
                        <i className='fa-solid fa-trash me-2'></i>
                        Fechar Permanência
                    </button>
                </div>
            </div>
        </div>
    )
}