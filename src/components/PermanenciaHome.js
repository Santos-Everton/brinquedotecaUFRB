import React from "react";

class PermanenciaHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            nome: "",
            cpfrg: "",
            responsavel: "",
            dataEntrada: "",
            dataSaida: "",
            descricao: "",
            status: "0",
            permanencia: []
        }
    }

    componentDidMount() {
        //this.buscarPermanencia();
    }

    componentWillUnmount() {

    }

    buscarPermanencia = () => {
        fetch("URL do back")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ permanencia: dados })
            });
    }

    excluirPermanencia = (id) => {
        fetch("URL do back" + id, { method: "DELETE" })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarPermanencia();
                }
            });
    }

    carregarDados = (id) => {
        fetch("URL do back" + id, { method: "GET" })
            .then(resposta => resposta.json())
            .then(permanencia => {
                this.setState({
                    id: permanencia.id,
                    nome: permanencia.state.nome,
                    cpfrg: permanencia.state.cpfrg,
                    responsavel: permanencia.state.responsavel,
                    dataEntrada: permanencia.state.dataEntrada,
                    dataSaida: permanencia.state.dataSaida,
                    descricao: permanencia.state.descricao
                })
            })
    }

    adicionarPermanencia = (permanencia) => {
        fetch("URL do back", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            boddy: JSON.stringify(permanencia)
        }).then(resposta => {
            if (resposta.ok) {
                this.buscarPermanencia();
            } else {
                alert("Não foi possível adicionar a permanência!");
            }
        });
    }

    editarPermanencia = (permanencia) => {
        fetch("URL do back", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            boddy: JSON.stringify(permanencia)
        }).then(resposta => {
            if (resposta.ok) {
                this.buscarPermanencia();
            } else {
                alert("Não foi possível editar dados da criança!");
            }
        });
    }

    salvarPermanencia = () => {
        this.reset();
        if (this.state.id === 0) {
            const permanencia = {
                nome: this.state.nome,
                cpfrg: this.state.cpfrg,
                responsavel: this.state.responsavel,
                dataEntrada: this.state.dataEntrada,
                dataSaida: this.state.dataSaida,
                descricao: this.state.descricao,
            }
            this.adicionarPermanencia(permanencia);
        } else {
            const permanencia = {
                nome: this.state.nome,
                cpfrg: this.state.cpfrg,
                responsavel: this.state.responsavel,
                dataEntrada: this.state.dataEntrada,
                dataSaida: this.state.dataSaida,
                descricao: this.state.descricao,
            }
            this.editarPermanencia(permanencia);
        }
    }

    reset = () => {
        this.setState({
            id: 0,
            nome: "",
            cpfrg: "",
            responsavel: "",
            dataEntrada: "",
            dataSaida: "",
            descricao: "",
        })
    }

    inputNome = (e) => {
        this.setState({ nome: e.target.value });
    }
    inputCpfRg = (e) => {
        this.setState({ cpfrg: e.target.value });
    }
    inputDataEntrada = (e) => {
        this.setState({ dataEntrada: e.target.value });
    }
    inputDataSaida = (e) => {
        this.setState({ dataSaida: e.target.value });
    }
    inputDescricao = (e) => {
        this.setState({ descricao: e.target.value });
    }

    buscarResponsavel = () => {
        alert("Falta buscar responsável");
    }

    estiloPermanencia = (parametro) => {
        switch (parametro) {
            case '1': return 'danger';
            case '2': return 'success';
            default: return 'danger';
        }
    }

    statusPermanencia = (parametro) => {
        switch (parametro) {
            case '1': return 'Aberta';
            case '2': return 'Fechada';
            default: return 'Aberta';
        }
    }

    render() {
        return (
            <div>
                <h1>Permanências</h1>
                <form className="row g3 bg-secondary bg-opacity-10 shadow p-3 mb-5 rounded">
                    <div className="col-md-6">
                        <label className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={this.state.nome}
                            onChange={this.inputNome}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">CPF/RG</label>
                        <input
                            type="text"
                            className="form-control"
                            id="cpfrg"
                            placeholder="CPF ou RG da criança."
                            value={this.state.cpfrg}
                            onChange={this.inputCpfRg}
                        />
                    </div>
                    <div className='col-md-6 mt-1'>
                        <label className='form-label'>Data Entrada</label>
                        <input
                            id="dataEntrada"
                            type="date"
                            className='form-control'
                            value={this.state.dataEntrada}
                            onChange={this.inputDataEntrada}
                        />
                    </div>
                    <div className='col-md-6 mt-1'>
                        <label className='form-label'>Data saída</label>
                        <input
                            id="dataEntrada"
                            type="date"
                            className='form-control'
                            value={this.state.dataSaida}
                            onChange={this.inputDataSaida}
                        />
                    </div>
                    <div className='col-md-12 mt-3'>
                        <label className='form-label'>Descrição</label>
                        <textarea
                            id="descricao"
                            type="text"
                            className='form-control'
                            value={this.state.descricao}
                            onChange={this.inputDescricao}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className='form-label mt-3'>Responsáveis</label>
                        <ul className="list-group">
                            <li className="list-group-item">Primeiro responsavel</li>
                            <li className="list-group-item">Segundo responsavel</li>
                        </ul>
                        <div>
                            <button
                                className='btn btn-outline-secondary mt-2'
                                onClick={this.buscarResponsavel}
                            >
                                <i className="fas fa-plus me-2"></i>
                                Responsável
                            </button>
                        </div>
                    </div>
                    <hr className="mt-4"/>

                    <div className='col-md-2'>
                        {this.state.id === 0 ? (
                            <button
                                className='btn btn-outline-secondary mt-2 mx-auto'
                                onClick={this.salvarPermanencia}
                            >
                                <i className="fas fa-plus me-2"></i>
                                Permanência
                            </button>
                        ) : (
                            <>
                                <button
                                    className='btn btn-outline-success mt-2 me-2 col-md-8'
                                    onClick={this.salvarPermanencia}
                                >
                                    <i className="fa fa-plus me-2"></i>
                                    Salvar
                                </button>
                                <button
                                    className='btn btn-outline-secondary mt-2'
                                    onClick={this.reset}
                                >
                                    <i className="fas fa-plus me-2"></i>
                                    Cancelar
                                </button>
                            </>
                        )}
                    </div>
                </form>
                <hr />

                <div className="card mb-2 shadow-sm" >
                    <div className='card-body'>
                        <div className='d-flex justify-content-between'>
                            <h5 className='card-title'>
                                <span className="badge bg-secondary me-1">
                                    {this.state.id}
                                </span>
                                - {this.state.nome}
                            </h5>
                            <h6>
                                <span className={"badge me-1 bg-" + this.estiloPermanencia(this.state.status)}>
                                    Status: {this.statusPermanencia(this.state.status)}
                                </span>
                            </h6>
                        </div>
                        <p className='card-text'>
                            {this.state.descricao}
                        </p>
                        <p className='card-text'>
                            {this.state.dataEntrada}
                        </p>
                        <p className='card-text'>
                            {this.state.dataSaida}
                        </p>
                        <p className='card-text'>
                            {this.state.responsavel}
                        </p>
                        <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                            <button className='btn btn-sm btn-outline-primary me-2' onClick={() => this.carregarDados(this.state.id)}>
                                <i className='fa-solid fa-pen me-2'></i>
                                Editar Permanência
                            </button>
                            <button className='btn btn-sm btn-outline-danger' onClick={() => this.excluirPermanencia(this.state.id)}>
                                <i className='fa-solid fa-trash me-2'></i>
                                Fechar Permanência
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default PermanenciaHome;