# Requisitos
***
<font color=red size=3px> Sempre pensar no MVP (Produto Mínimo Viável)</font>

### Documentos relacinados
[Vídeo entrevista 1](https://drive.google.com/drive/folders/1Or46q_-2OVtlj0Ld-N480jH8o_340p-u?usp=sharing)

[Transcrição entrevista 1](https://docs.google.com/document/d/1xFBG9e23nWkiTlMNSxKEHTME_qj5OxC8/edit?usp=sharing&ouid=110166493521473478854&rtpof=true&sd=true)

## Qual o problema a ser resolvido?
__Gerenciar e registrar os dados de frequencia, controle de acesso, quantidade de tempo presente, controle de inventário, dentre outros, para prestar contas e estabelecer provas do impacto da brinquedoteca na qualidade de vida e recuperação das crianças.__

### Requisitos não-funcionais (qualidade que o software deve ter)
* Ser acessível a maior quantidade de usuários possível;
* Capaz de ser acessado em diferentes ambientes, ou seja, diferentes dispositivos;

### Requisitos funcionais (funcionalidades)
* O sistema deve ser capaz de:
  * registrar os dados das crianças/adolescentes atendidos;
  * registrar a frequância e quantidade de tempo que esta criança/adolescente permaneceu na brinquedoteca;
  * controle de inventário e categorias dos briquedos;
  * gerar dados formatados e gráficos.
* Cadastro do responsável por resgatar a criança após estadia na briquedoteca;

## Detalhamento das funcionalidades
1. Registrar os dados das crianças/adolescentes atendidos a fim de manter uma informação detalhada do número de atendidos e quem são. Estas informações é a documentação básica da criança, foto, responsável e observações avaliativas sobre elas. As informações avaliativas são: no caso da brinquedoteca hospitalar, qual estado de saúde ou tratamento, estado emocional, comportamento, e qualquer outra observação do monitor.

2. Registrar a frequância e quantidade de tempo que esta criança/adolescente permaneceu na brinquedoteca a fim de ter um dado quantitativo da periodicidade e o tempo que a criança ficou brincando. Registro diário da hora que ela entra no espaço e da hora que ela sai do espaço pela recepcionista. 

3. Controle de inventário e categorias dos briquedos a fim de saber o patrimônio da brinquedoteca e a faixa etária de cada brinquedo destinado a cada criança. Informações de quantidade do brinquedo, faixa etária, validade ou estado, se foi doado ou comprado.

4. Gerar dados formatados e gráficos a fim de estabalecer o impacto da brinquedoteca na qualidade de vida e recuperação das crianças. Gerar tabelas e gráficos da quantidade de crianças, frequência das crianças, quantidade de tempo de cada criança na brinquedoteca, dentre outros.

5. Cadastro do responsável por resgatar a criança após estadia na briquedoteca a fim de manter a segurança da criança e em caso de emergencia saber quem informar. Registrar documentação básica, número de telefone, e-mail, foto, e vincular este registro com os dados da criança.

<br>

## Especificação das funcionalidades
<br>

| ID | RF01 | 
| :--- | :--- |
| Nome | Registro de criança no sistema |
| Descrição | Usuário cadastrado registra a criança e o responsável no sistema. |
| Req. Relacionados | Login, Atualização de registro de criança, Controle de permanência |
| Ator | Responsável pela criança ou adolescente |

| Passo | Ação do usuário | Resposta do sistema |
| :---: | :---: | :--- |
| 1 | Login no sistema | Após o usuário efetuar o login é apresentado um ambiente onde o usuário pode fazer um novo registro ou atualizar um registro existente. |
| 2 | Novo registro | Após o usuário clicar em novo registro é apresentado um formulário de registro onde o usuário irá preencher com seus dados e dados da criança. |
| 3 | Confirmação de registro | Após o usuário preencher o formulário de registro é apresentado a confirmação dos dados e o sistema confirma o novo registro. Após, é apresentado o ambiente inicial de novo registro e atualização. | 

<br><br>

| ID | RF02 | 
| :--- | :--- |
| Nome | Atualização de registro de criança |
| Descrição | Usuário cadastrado atualiza o registro da criança e ou do responsável no sistema. |
| Req. Relacionados | Login, Controle de permanência |
| Ator | Responsável pela criança ou adolescente |

| Passo | Ação do usuário | Resposta do sistema |
| :---: | :---: | :--- |
| 1 | Login no sistema | Após o usuário efetuar o login é apresentado um ambiente onde o usuário pode fazer um novo registro ou atualizar um registro existente. |
| 2 | Atualização de registro | Após o usuário clicar em atualização de registro é apresentado uma lista com registros do usuário onde ele escolherá qual será atualizado e irá preencher com seus dados e ou dados da criança. |
| 3 | Confirmação de atualização de registro | Após o usuário preencher o formulário com as atualizações é apresentado a confirmação dos dados e o sistema confirma a atualização do registro. Após, é apresentado o ambiente inicial de novo registro e atualização. |

<br><br>

| ID | RF03 | 
| :--- | :--- |
| Nome | Login |
| Descrição | Permite que um usuário cadastrado acesse o sistema. |
| Req. Relacionados | Cadastro de usuários |
| Ator | Usuário |

| Passo | Ação do usuário | Resposta do sistema |
| :---: | :---: | :--- |
| 1 | Acessar a url do sistema | O sistema mostra a tela de login com os campos de usuário e senha a serem preenchidos. |
| 2 | O usuário preenche os campos solicitados | O sistema valida os campos preenchidos e mostra o ambiente incial com novo registro e atualização. |

<br><br>
