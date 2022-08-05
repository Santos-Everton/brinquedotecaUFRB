import React from "react";
import { Table } from "react-bootstrap";

const backEndUrl = "http://localhost:5000/";

class PermanenciaHome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            cpf: "",
            guardian: "",
            entry_date: "",
            exit_date: "",
            obs: "",
            status: "0",
            permanencia: [
                {
                    "id": 2,
                    "name": "Pedro",
                    "cpf": 789123,
                    "guardian": "ffsdfsf",
                    "entry_date": "2001-01-01",
                    "exit_date": "2001-01-01",
                    "obs": "hghfgh",
                    "status": "1",
                }
            ]
        }
    }

    componentDidMount() {
        this.buscarPermanencia();
    }

    componentWillUnmount() {

    }

    buscarPermanencia = () => {
        fetch(`${backEndUrl}permanence`)
            .then(resposta => resposta.json())
            .then(dados => {
                this.setState({ permanencia: dados })
                //alert(this.state.permanencia);
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
        fetch(`${backEndUrl}permanence/` + id, { method: "GET" })
            .then(resposta => resposta.json())
            .then(permanencia => {
                this.setState({
                    id: permanencia.id,
                    name: permanencia.state.name,
                    cpf: permanencia.state.cpf,
                    guardian: permanencia.state.guardian,
                    entry_date: permanencia.state.entry_date,
                    exit_date: permanencia.state.exit_date,
                    obs: permanencia.state.obs
                })
            })
    }

    adicionarPermanencia = (permanencia) => {
        fetch(`${backEndUrl}permanence`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(permanencia)
        }).then(resposta => {
            alert(resposta.ok)
            if (resposta.ok) {                
                this.buscarPermanencia();
                alert("Permanência adicionada!");
            } else {
                alert("Não foi possível adicionar a permanência!");
            }
        })
        .catch(erro => {alert(erro)});
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
            alert("chegou em criar permanencia");
            const permanencia = {
                //nome: this.state.nome,
                //cpfrg: this.state.cpfrg,
                //responsavel: this.state.responsavel,
                //dataEntrada: this.state.dataEntrada,
                //dataSaida: this.state.dataSaida,
                //descricao: this.state.descricao,
                entry_date: this.state.entry_date,
                obs: this.state.obs,
                childrenId: this.state.name,
                guardianEntranceId: this.state.cpf
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
            name: "",
            cpf: "",
            guardian: "",
            entry_date: "",
            exit_date: "",
            obs: "",
        })
    }

    inputNome = (e) => {
        this.setState({ name: e.target.value });
    }
    inputCpfRg = (e) => {
        this.setState({ cpf: e.target.value });
    }
    inputDataEntrada = (e) => {
        this.setState({ entry_date: e.target.value });
    }
    inputDataSaida = (e) => {
        this.setState({ exit_date: e.target.value });
    }
    inputDescricao = (e) => {
        this.setState({ obs: e.target.value });
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

    renderTabela() {
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID Permanência</th>
                        <th>Data de Entrada</th>
                        <th>Data de Saída</th>
                        <th>ID Criança</th>
                        <th>ID Responsável da Entrada</th>
                        <th>ID Responsável da Saída</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.permanencia.map((permanencia) =>
                            <tr>
                                <td> {permanencia.id} </td>
                                <td> {permanencia.entry_date} </td>
                                <td> {permanencia.exit_date} </td>
                                <td> {permanencia.children_id} </td>
                                <td> {permanencia.guardian_entrance_id} </td>
                                <td> {permanencia.guardian_exit_id} </td>
                                <td>
                                    <button className='btn btn-sm btn-outline-primary me-2'
                                        data-cy='buttonEditar'
                                        onClick={() => this.carregarDados(permanencia.id)}>
                                        <i className='fa-solid fa-pen me-2'></i>
                                        Editar
                                    </button>
                                    <button className='btn btn-sm btn-outline-danger'
                                        onClick={() => this.excluirPermanencia(permanencia.id)}>
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
                <h1>Permanências</h1>
                <form className="row g3 bg-secondary bg-opacity-10 shadow p-3 mb-5 rounded">
                    <div className="col-md-6">
                        <label className="form-label">ID Criança</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={this.state.name}
                            onChange={this.inputNome}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">ID Responsável</label>
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
                        <label className='form-label'>Data Entrada</label>
                        <input
                            id="dataEntrada"
                            data-cy="dataEntry"
                            type="date"
                            className='form-control'
                            value={this.state.entry_date}
                            onChange={this.inputDataEntrada}
                        />
                    </div>
                    <div className='col-md-6 mt-1'>
                        <label className='form-label'>Data saída</label>
                        <input
                            id="dataEntrada"
                            data-cy="dataSaida"
                            type="date"
                            className='form-control'
                            value={this.state.exit_date}
                            onChange={this.inputDataSaida}
                        />
                    </div>
                    <div className='col-md-12 mt-3'>
                        <label className='form-label'>Descrição</label>
                        <textarea
                            id="descricao"
                            type="text"
                            className='form-control'
                            value={this.state.obs}
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
                    <hr className="mt-4" />

                    <div className='col-md-2'>
                        {this.state.id === 0 ? (
                            <button
                                className='btn btn-outline-secondary mt-2 mx-auto'
                                data-cy='buttonPermanence'
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
                {this.renderTabela()}
            </div>
        )
    }   
}
export default PermanenciaHome;