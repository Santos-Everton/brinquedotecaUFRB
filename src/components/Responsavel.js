import React from "react";
import { Table, Modal } from "react-bootstrap";

const backEndUrl = "http://localhost:5000/";

class Responsavel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            cpf: "",
            birthDate: "",
            address: "",
            email: "",
            phone: "",
            photo_url: "",
            modal: false,
            responsavel: [
                /*
                {
                    "id": 1,
                    "nome": "João",
                    "cpfrg": 123456,
                    "dataNascimento": "",
                    "endereco": "",
                    "email": "",
                    "telefone": "123456789",
                },
                {
                    "id": 2,
                    "nome": "Pedro",
                    "cpfrg": 789123,
                    "dataNascimento": "",
                    "endereco": "",
                    "email": "",
                    "telefone": "123456789",
                }
                */
            ]
        }
    }

    componentDidMount() {
        this.buscarResponsavel();
    }

    componentWillUnmount() {

    }

    buscarResponsavel = () => {
        fetch(`${backEndUrl}guardian`)
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ responsavel: dados })
            });
    }

    excluirResponsavel = (id) => {
        fetch("URL do back" + id, { method: "DELETE" })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarResponsavel();
                }
            });
    }

    carregarDados = (id) => {
        fetch("URL do back" + id, { method: "GET" })
            .then(resposta => resposta.json())
            .then(crianca => {
                this.setState({
                    id: crianca.id,
                    nome: crianca.state.nome,
                    cpfrg: crianca.state.cpfrg,
                    dataNascimento: crianca.state.dataNascimento,
                    endereco: crianca.state.endereco,
                    email: crianca.state.email,
                    telefone: crianca.state.telefone
                })
                this.abrirModal();
            })
    }

    adicionarResponsavel = (responsavel) => {
        fetch(`${backEndUrl}guardian`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(responsavel)
        }).then(resposta => {
            if (resposta.ok) {
                this.buscarResponsavel();
            } else {
                alert("Não foi possível adicionar o responsável!");
            }
        });
    }

    editarResponsavel = (crianca) => {
        fetch("URL do back", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            boddy: JSON.stringify(crianca)
        }).then(resposta => {
            if (resposta.ok) {
                this.buscarResponsavel();
            } else {
                alert("Não foi possível editar dados da criança!");
            }
        });
    }

    salvarResponsavel = () => {

        if (this.state.id === 0) {
            const responsavel = {
                name: this.state.name,
                cpf: this.state.cpf,
                birthDate: this.state.birthDate,
                address: this.state.address,
                email: this.state.email,
                photo_url: '',
                phone: this.state.phone,
            }
            this.adicionarResponsavel(responsavel);
        } else {
            const responsavel = {
                id: this.id,
                name: this.state.name,
                cpf: this.state.cpf,
                birthDate: this.state.birthDate,
                address: this.state.address,
                email: this.state.email,
                photo_url: '',
                phone: this.state.phone,
            }
            this.editarResponsavel(responsavel);
        }
        this.fecharModal();
    }

    reset = () => {
        this.setState({
            id: 0,
            name: "",
            cpf: "",
            birthDate: "",
            address: "",
            email: "",
            phone: "",
        })
        this.abrirModal();
    }

    inputNome = (e) => {
        this.setState({ name: e.target.value });
    }
    inputCpfRg = (e) => {
        this.setState({ cpf: e.target.value });
    }
    inputDataNascimento = (e) => {
        this.setState({ birthDate: e.target.value });
    }
    inputEndereco = (e) => {
        this.setState({ address: e.target.value });
    }
    inputemail = (e) => {
        this.setState({ email: e.target.value });
    }
    inputTelefone = (e) => {
        this.setState({ phone: e.target.value });
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

    inserirCrianca = () => {
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
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.responsavel.map((responsavel) =>
                            <tr>
                                <td> {responsavel.name} </td>
                                <td> {responsavel.cpf} </td>
                                <td> {responsavel.birthDate} </td>
                                <td> {responsavel.address} </td>
                                <td> {responsavel.email} </td>
                                <td> {responsavel.phone} </td>
                                <td>
                                    <button className='btn btn-sm btn-outline-primary me-2'
                                        onClick={() => this.carregarDados(responsavel.id)}>
                                        <i className='fa-solid fa-pen me-2'></i>
                                        Editar
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger'
                                        onClick={() => this.excluirResponsavel(responsavel.id)}>
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
                <h1>Responsáveis</h1>
                <Modal show={this.state.modal} onHide={this.fecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Dados do Responsável</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="row g3 bg-secondary bg-opacity-10 shadow p-3 mb-5 rounded">
                            <div className="col-md-6">
                                <label className="form-label">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    value={this.state.name}
                                    onChange={this.inputNome}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">CPF/RG</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cpfrg"
                                    placeholder="CPF ou RG do responsável."
                                    value={this.state.cpf}
                                    onChange={this.inputCpfRg}
                                />
                            </div>
                            <div className='col-md-6 mt-1'>
                                <label className='form-label'>Data de nascimento</label>
                                <input
                                    id="dataNascimento"
                                    type="date"
                                    className='form-control'
                                    value={this.state.birthDate}
                                    onChange={this.inputDataNascimento}
                                />
                            </div>
                            <div className="col-md-6 mt-1">
                                <label className="form-label">Endereço</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="endereco"
                                    value={this.state.address}
                                    onChange={this.inputEndereco}
                                />
                            </div>
                            <div className='col-md-6 mt-3'>
                                <label className='form-label'>Telefone</label>
                                <input
                                    id="telefone"
                                    type="tel"
                                    className='form-control'
                                    value={this.state.phone}
                                    onChange={this.inputTelefone}
                                />
                            </div>
                            <div className='col-md-12 mt-3'>
                                <label className='form-label'>E-mail</label>
                                <input
                                    id="mail"
                                    type="email"
                                    className='form-control'
                                    value={this.state.email}
                                    onChange={this.inputemail}
                                />
                            </div>
                            <div className="col-md-12">
                                <label className='form-label mt-3'>Crianças por quem é responsável:</label>
                                <ul className="list-group">
                                    <li className="list-group-item">Primeira criança</li>
                                    <li className="list-group-item">Segunda criança</li>
                                </ul>
                                <div>
                                    <button
                                        className='btn btn-outline-secondary mt-2'
                                        onClick={this.inserirCrianca}
                                    >
                                        <i className="fas fa-plus me-2"></i>
                                        Criança
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
                            onClick={this.salvarResponsavel}
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
                    Responsável
                </button>
                <button
                    className='btn btn-outline-secondary mt-2'
                    type="submit"
                    onClick={this.buscarResponsavel}
                >
                    Buscar Responsável
                </button>
                <hr />

                {this.renderTabela()}
            </div>
        )
    }
}
export default Responsavel;