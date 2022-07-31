import React, { useState, useEffect } from "react";

const permanenciaInicial = {
    id: 0,
    crianca: "",
    responsavel: "",
    dataEntrada: "",
    dataSaida: "",
    descricao: "",
    status: "0",
}

export default function PermanenciaForm(props) {

    const [permanencia, setPermanencia] = useState(permanenciaAtual());

    useEffect(() => {
        if (props.permanenciaSelecionada.id !== 0) {
            setPermanencia(props.permanenciaSelecionada);
        }
    }, [props.permanenciaSelecionada]);

    const inputTextHandler = (e) => {
        const { name, value } = e.target;
        setPermanencia({ ...permanencia, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.permanenciaSelecionada.id !== 0) {
            props.atualizarPermanencia(permanencia);
        } else {
            props.addPermanencia(permanencia);
        }
        setPermanencia(permanenciaInicial);
    }

    const handleCancelar = (e) => {
        e.preventDefault();
        props.cancelarPermaencia();
        setPermanencia(permanenciaInicial);
    }

    const handleCadastrarCrianca = (e) => {
        e.preventDefault();
    }

    const handleCadastrarResponsavel = (e) => {
        e.preventDefault();
    }

    function permanenciaAtual() {
        if (props.permanenciaSelecionada.id !== 0) {
            return props.permanenciaSelecionada;
        } else {
            return permanenciaInicial;
        }
    }

    return (
        <>
            <h1>
                Controle de Permanencias
            </h1>
            <form className='row g3 bg-secondary bg-opacity-10 shadow p-3 mb-5 rounded' onSubmit={handleSubmit}>
                <h4>
                    Permanencia {permanencia.id !== 0 ? permanencia.id : ""}
                </h4>
                <div className='col-md-6'>
                    <label className='form-label'>Criança</label>
                    <input
                        id="crianca"
                        type="text"
                        name="crianca"
                        value={permanencia.crianca}
                        onChange={inputTextHandler}
                        className='form-control'
                    />
                    <button
                        className='btn btn-outline-secondary mt-1'
                        onClick={handleCadastrarCrianca}
                    >
                        <i className="fas fa-plus me-2"></i>
                        Criança
                    </button>
                </div>
                <div className='col-md-6'>
                    <label className='form-label'>Responsável</label>
                    <input
                        id="responsavel"
                        type="text"
                        name="responsavel"
                        value={permanencia.responsavel}
                        onChange={inputTextHandler}
                        className='form-control'
                    />
                    <button
                        className='btn btn-outline-secondary mt-1'
                        onClick={handleCadastrarResponsavel}
                    >
                        <i className="fas fa-plus me-2"></i>
                        Responsável
                    </button>
                </div>
                <div className='col-md-6 mt-3'>
                    <label className='form-label'>Data entrada</label>
                    <input
                        id="dataEntrada"
                        type="date"
                        name="dataEntrada"
                        value={permanencia.dataEntrada}
                        onChange={inputTextHandler}
                        className='form-control'
                    />
                </div>
                <div className='col-md-6 mt-3'>
                    <label className='form-label'>Data saída</label>
                    <input
                        id="dataSaida"
                        type="date"
                        name="dataSaida"
                        value={permanencia.dataSaida}
                        onChange={inputTextHandler}
                        className='form-control'
                    />
                </div>
                <div className="col-md-4 mt-2">
                    <label className="form-label">Status</label>
                    <select
                        id="status"
                        name="status"
                        value={permanencia.status}
                        onChange={inputTextHandler}
                        className="form-select"
                    >
                        <option defaultValue="0">Selecionar...</option>
                        <option value="1">Aberta</option>
                        <option value="2">Fechada</option>
                    </select>
                </div>
                <div className='col-md-12 mt-3'>
                    <label className='form-label'>Descrição</label>
                    <textarea
                        id="descricao"
                        type="text"
                        name="descricao"
                        value={permanencia.descricao}
                        onChange={inputTextHandler}
                        className='form-control'
                    />
                </div>
                <div className='col-md-2 mt-2 mx-auto'>
                    {permanencia.id === 0 ? (
                        <button
                            className='btn btn-outline-secondary mt-2'
                            type="submit"
                        >
                            <i className="fas fa-plus me-2"></i>
                            Permanência
                        </button>
                    ) : (
                        <>
                            <button
                                className='btn btn-outline-success mt-2 me-2 col-md-8'
                                type="submit"
                            >
                                <i className="fa fa-plus me-2"></i>
                                Salvar
                            </button>
                            <button
                                className='btn btn-outline-secondary mt-2'
                                onClick={handleCancelar}
                            >
                                <i className="fas fa-plus me-2"></i>
                                Cancelar
                            </button>
                        </>
                    )}
                </div>
            </form>
        </>
    )
}