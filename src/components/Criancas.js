import React from "react";
import { Table, Modal } from "react-bootstrap";


const backEndUrl = "http://localhost:5000/";

class Criancas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            cpf: "",
            birthDate: "",
            address: "",
            obs: "",
            guardian: "",
            modal: false,
            criancas: [
/*

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
*/
            ]
        }
    }

    componentDidMount() {
        this.buscarCrianca();
    }

    componentWillUnmount() {

    }

    buscarCrianca = () => {
        fetch(`${backEndUrl}children`)
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ criancas: dados })
            });
    }

    excluirCrianca = (id) => {
        fetch(`${backEndUrl}children/` + id, { method: "DELETE" })
            .then(resposta => {
                if (resposta.ok) {
                    this.buscarCrianca();
                }
            });
    }

    carregarDados = (id) => {
        fetch(`${backEndUrl}children/` + id, { method: "GET" })
            .then(resposta => {
                resposta.json()
                alert(resposta.json())
            })
            .then(crianca => {
                alert(crianca)
                this.setState({
                    id: crianca.id,
                    name: crianca.state.name,
                    cpf: crianca.state.cpf,
                    birthdate: crianca.state.birthDate,
                    address: crianca.state.address,
                    obs: crianca.state.obs,
                    guardian: crianca.state.guardian,
                    modal: crianca.state.modal
                })
                this.abrirModal();
            })
            .catch(erro => {alert(erro)})   
            
    }

    adicionarCrianca = (crianca) => {
        alert(crianca.stringify)
        fetch(`${backEndUrl}children`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(crianca)
        }).then(resposta => {            
            if (resposta.ok) {
                this.buscarCrianca();
                alert("Criança adicionada !");
            } else {
                alert("Não foi possível adicionar a criança!");
            }
        });
    }

    editarCrianca = (crianca) => {
        fetch("URL do back", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(crianca)
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
                name: this.state.name,
                cpf: this.state.cpf,
                birthDate: this.state.birthDate,
                address: this.state.address,
                obs: this.state.obs
                /* guardians: this.state.guardian*/
            }            
            this.adicionarCrianca(crianca);
        } else {
            const crianca = {
                id: this.id,
                name: this.state.name,
                cpf: this.state.cpf,
                birthDate: this.state.birthDate,
                address: this.state.address,
                obs: this.state.obs
               /* guardians: this.state.guardian*/
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
    inputObservacao = (e) => {
        this.setState({ obs: e.target.value });
    }

    fecharModal = () => {
        this.setState({
            modal: false
        })
    }

    abrirModal = () => {
        alert('fui chamado')
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
                                <td> {crianca.name} </td>
                                <td> {crianca.cpf} </td>
                                <td> {crianca.birthdate} </td>
                                <td> {crianca.address} </td>
                                <td> {crianca.obs} </td>
                                <td> {crianca.guardian} </td>
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
                <h1>Crianças</h1>
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
                                    placeholder="CPF ou RG da criança."
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
                            <div className='col-md-12 mt-3'>
                                <label className='form-label'>Observação</label>
                                <textarea
                                    id="observacao"
                                    type="text"
                                    className='form-control'
                                    value={this.state.obs}
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
                            onClick={this.salvarCrianca}
                            data-cy="buttonSalvar"
                        >
                            Salvar
                        </button>
                    </Modal.Footer>
                </Modal>

                <button
                    className='btn btn-outline-primary me-2 mt-2'
                    type="submit"
                    data-cy="buttonCrianca"
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