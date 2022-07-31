import React from "react";
import { Table, Modal } from "react-bootstrap";

class Criancas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            nome: "",
            cpfrg: "",
            dataNascimento: "",
            endereco: "",
            observacao: "",
            responsavel: "",
            modal: false,
            criancas: [
                {
                    "id": 1,
                    "nome": "João",
                    "cpfrg": 123456,
                    "dataNascimento": "",
                    "endereco": "",
                    "observacao": "",
                    "responsavel": "Maria",
                },
                {
                    "id": 2,
                    "nome": "Pedro",
                    "cpfrg": 789123,
                    "dataNascimento": "",
                    "endereco": "",
                    "observacao": "",
                    "responsavel": "Joana",
                }
            ]
        }
    }

    componentDidMount() {
        //this.buscarCrianca();
    }

    componentWillUnmount() {

    }

    buscarCrianca = () => {
        fetch("recebe do back")
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ criancas: dados })
            });
    }

    excluirCrianca = (id) => {
        fetch("recebe do back" + id, { method: "DELETE" })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarCrianca();
                }
            });
    }

    carregarDados = (id) => {
        fetch("recebe do back" + id, { method: "GET" })
            .then(resposta => resposta.json())
            .then(crianca => {
                this.setState({
                    id: crianca.id,
                    nome: crianca.state.nome,
                    cpfrg: crianca.state.cpfrg,
                    dataNascimento: crianca.state.dataNascimento,
                    endereco: crianca.state.endereco,
                    observacao: crianca.state.observacao,
                    responsavel: crianca.state.responsavel
                })
                this.abrirModal();
            })
    }

    adicionarCrianca = (crianca) => {
        fetch("recebe do back", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            boddy: JSON.stringify(crianca)
        }).then(resposta => {
            if (resposta.ok) {
                this.buscarCrianca();
            } else {
                alert("Não foi possível adicionar a criança!");
            }
        });
    }

    editarCrianca = (crianca) => {
        fetch("recebe do back", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            boddy: JSON.stringify(crianca)
        }).then(resposta => {
            if (resposta.ok) {
                this.buscarCrianca();
            } else {
                alert("Não foi possível editar dados da criança!");
            }
        });
    }

    salvarCrianca = () => {

        if (this.state.id === 0) {
            const crianca = {
                nome: this.state.nome,
                cpfrg: this.state.cpfrg,
                dataNascimento: this.state.dataNascimento,
                endereco: this.state.endereco,
                observacao: this.state.observacao,
                responsavel: this.state.responsavel,
            }
            this.adicionarCrianca(crianca);
        } else {
            const crianca = {
                id: this.id,
                nome: this.state.nome,
                cpfrg: this.state.cpfrg,
                dataNascimento: this.state.dataNascimento,
                endereco: this.state.endereco,
                observacao: this.state.observacao,
                responsavel: this.state.responsavel,
            }
            this.editarCrianca(crianca);
        }
        this.fecharModal();
    }

    reset = () => {
        this.setState({
            id: 0,
            nome: "",
            cpfrg: "",
            dataNascimento: "",
            endereco: "",
            observacao: "",
            responsavel: "",
        })
        this.abrirModal();
    }

    inputNome = (e) => {
        this.setState({ nome: e.target.value });
    }
    inputCpfRg = (e) => {
        this.setState({ cpfrg: e.target.value });
    }
    inputDataNascimento = (e) => {
        this.setState({ dataNascimento: e.target.value });
    }
    inputEndereco = (e) => {
        this.setState({ endereco: e.target.value });
    }
    inputObservacao = (e) => {
        this.setState({ observacao: e.target.value });
    }

    fecharModal = () => {
        this.setState({
            modal: false
        })
    }

    abrirModal = () => {
        this.setState({
            modal: true
        })
    }

    buscarResponsavel = () => {
        alert("Falta buscar responsável");
    }

    renderTabela() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF/RG</th>
                        <th>Data de nascimento</th>
                        <th>Endereço</th>
                        <th>Observação</th>
                        <th>Responsáveis</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.criancas.map((crianca) =>
                            <tr>
                                <td> {crianca.nome} </td>
                                <td> {crianca.cpfrg} </td>
                                <td> {crianca.dataNascimento} </td>
                                <td> {crianca.endereco} </td>
                                <td> {crianca.observacao} </td>
                                <td> {crianca.responsavel} </td>
                                <td>
                                    <button className='btn btn-sm btn-outline-primary me-2'
                                        onClick={() => this.carregarDados(crianca.id)}>
                                        <i className='fa-solid fa-pen me-2'></i>
                                        Editar
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger'
                                        onClick={() => this.excluirCrianca(crianca.id)}>
                                        <i className='fa-solid fa-trash me-1'></i>
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }

    render() {
        return (
            <div>
                <h1>Criancas</h1>
                <Modal show={this.state.modal} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dados da Criança</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
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
                                <label className='form-label'>Data de nascimento</label>
                                <input
                                    id="dataNascimento"
                                    type="date"
                                    className='form-control'
                                    value={this.state.dataNascimento}
                                    onChange={this.inputDataNascimento}
                                />
                            </div>
                            <div className="col-md-6 mt-1">
                                <label className="form-label">Endereço</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="endereco"
                                    value={this.state.endereco}
                                    onChange={this.inputEndereco}
                                />
                            </div>
                            <div className='col-md-12 mt-3'>
                                <label className='form-label'>Observação</label>
                                <textarea
                                    id="observacao"
                                    type="text"
                                    className='form-control'
                                    value={this.state.observacao}
                                    onChange={this.inputObservacao}
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
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button
                            className='btn btn-outline-secondary'
                            type="submit"
                            onClick={this.fecharModal}
                        >
                            Cancelar
                        </button>
                        <button
                            className='btn btn-outline-success'
                            type="submit"
                            onClick={this.salvarCrianca}
                        >
                            Salvar
                        </button>
                    </Modal.Footer>
                </Modal>

                <button
                    className='btn btn-outline-primary me-2 mt-2'
                    type="submit"
                    onClick={this.reset}
                >
                    <i className="fas fa-plus me-2"></i>
                    Criança
                </button>
                <button
                    className='btn btn-outline-secondary mt-2'
                    type="submit"
                    onClick={this.buscarCrianca}
                >
                    Buscar Criança
                </button>
                <hr />

                {this.renderTabela()}
            </div>
        )
    }
}
export default Criancas;