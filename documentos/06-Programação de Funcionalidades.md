# Programação de Funcionalidades

### Tela de cadastro de vagas - Etapa 1

Responsável: Amanda Caroline

O acesso da Tela de cadastro de vagas - Etapa 1 poderá ser feito através da opção "Gerenciar Vagas" disponível no perfil da ONG.

Exemplo da Tela de cadastro de vagas - Etapa 1:

<img width="1352" height="625" alt="Captura de tela 2026-05-20 190512" src="https://github.com/user-attachments/assets/9cc38bdd-929e-4bee-b12d-cef3f91bb9f3" />

#### Requisito atendido

Rf-05: O sistema deve permitir que ONGs publiquem oportunidades de voluntariado.

#### Artefatos da Funcionalidade

●  etapa1.html

●  etapa1.css

●  etapa1.js


#### Instruções de acesso

<hr>

### Tela de cadastro de vagas - Etapa 2

Responsável: Bruno Pereira Gomes

O acesso da Tela de cadastro de vagas - Etapa 2 poderá ser feito através da opção "Gerenciar Vagas" disponível no perfil da ONG e depois de concluir a primeira etapa de cadastro de vagas.

Exemplo da Tela de cadastro de vagas - Etapa 2:

<img width="1333" height="632" alt="image" src="https://github.com/user-attachments/assets/830a7813-53df-497e-9ec1-e101533f67f5" />

#### Requisito atendido

Rf-05: O sistema deve permitir que ONGs publiquem oportunidades de voluntariado.

#### Artefatos da Funcionalidade

●  Etapa2.html

●  Etapa2.css

●  Etapa2.js


#### Instruções de acesso

<hr>

### Tela de cadastro de vagas - Etapa 2 (Continuação)

Responsável: Amanda Caroline

O acesso da Tela de cadastro de vagas - Etapa 2 poderá ser feito através da opção "Gerenciar Vagas" disponível no perfil da ONG e depois de concluir a primeira e segunda etapa de cadastro de vagas.

Exemplo da Tela de cadastro de vagas - Etapa 2:

<img width="1351" height="630" alt="image" src="https://github.com/user-attachments/assets/b8f3c03e-0c33-4389-97a8-c579a93a9856" />

#### Requisito atendido

Rf-05: O sistema deve permitir que ONGs publiquem oportunidades de voluntariado.

#### Artefatos da Funcionalidade

●  etapa2C.html

●  etapa2C.css

●  etapa2C.js


#### Instruções de acesso

<hr>

### Tela de Vagas

Responsável: Bruno Pereira Gomes

O acesso da Tela Vagas, poderá ser feito através da opção "Vagas" disponível no Cabeçalho.

Exemplo da Tela Vagas

<img width="1366" height="625" alt="chrome_CGU3TF1WU5" src="https://github.com/user-attachments/assets/6dd48167-cf9b-4b03-bf78-d1b922f09d5a" />

#### Requisito atendido

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

#### Artefatos da Funcionalidade

●  Vagas.html

●  Vagas.css

●  Vagas.js


#### Instruções de acesso

<hr>

### Tela Saiba mais ONG

Responsável: Denilson

O acesso da Tela Saiba mais ONG é feito através do link "Saiba mais" disponível em cada card da Tela de Vagas. Apresenta os detalhes completos da vaga publicada pela ONG (descrição, atividades, requisitos, carga horária, modalidade e período) e indica se a vaga aceita Prestadores de Serviço à Comunidade (PSC). O botão "Quero me inscrever" registra a candidatura do voluntário para a vaga.

Exemplo da Tela Saiba mais ONG:

<img width="1366" height="625" alt="Tela Saiba mais ONG" src="https://github.com/user-attachments/assets/32e257f3-c241-4645-b93c-bde86d734ec2" />

#### Requisito atendido

RF-07: O sistema deve permitir que voluntários se candidatem às vagas disponíveis.

RF-10: O sistema deve permitir que PSC encontrem organizações que aceitam prestação de serviços comunitários.

#### Artefatos da Funcionalidade

●  saibaMaisOng.html

●  saibaMaisOng.css

●  saibaMaisOng.js


#### Instruções de acesso

A partir da Tela de Vagas, o usuário clica em "Saiba mais" no card de uma vaga. A URL aceita o parâmetro `?id=` para abrir uma vaga específica salva no localStorage. Caso não haja vagas cadastradas, é exibida uma vaga de exemplo.

<hr>

### Tela Histórico de Trabalho (ONG)

Responsável: Denilson

O acesso da Tela Histórico de Trabalho é feito através do menu lateral do Perfil da ONG, na opção "Histórico de Trabalho". Permite que a ONG visualize todos os voluntários que participaram de suas vagas, com filtros por nome, vaga e status (pendente/validado). Cada participação pode ser validada pela ONG através do botão "Validar horas", abrindo um modal onde se registra a quantidade de horas trabalhadas e uma observação opcional. O topo da tela apresenta um resumo com o total de participações, total de horas validadas e quantidade de validações pendentes.

Exemplo da Tela Histórico de Trabalho (ONG):


<img width="1366" height="625" alt="Tela Histórico de Trabalho (ONG)" src="https://github.com/user-attachments/assets/643df752-a9b4-4ace-b16e-e54f5eaaaee3" />

#### Requisito atendido

RF-12: O sistema deve permitir que ONGs validem e registrem horas dos participantes.

#### Artefatos da Funcionalidade

●  historicoOng.html

●  historicoOng.css

●  historicoOng.js


#### Instruções de acesso

A partir do Perfil da ONG, no menu lateral, o usuário clica em "Histórico de Trabalho". As participações ficam salvas no localStorage com a chave `participacoes_ong`. Na primeira vez que a tela é aberta, é carregada uma lista de exemplo para fins de demonstração.

<hr>

### Tela Login

Responsável: Denilson

O acesso da Tela Login é feito através do botão "Login" no cabeçalho ou ao tentar acessar áreas que exigem autenticação. Apresenta um formulário com campos de email e senha, opção "Lembrar-me" que salva o email para o próximo acesso, link "Esqueci minha senha" para recuperação, link de cadastro para novos usuários e botão "Entrar" que valida as credenciais contra os usuários salvos no localStorage. Após o login bem-sucedido, o usuário é redirecionado conforme o perfil (Voluntário ou ONG).

Exemplo da Tela Login:


<img width="1366" height="625" alt="Tela Login" src="https://github.com/user-attachments/assets/d5a5d786-4685-4a0a-9328-851faac23e56" />

#### Requisito atendido

RF-02: O sistema deve permitir login e autentificação de usuários.

RF-04: O sistema deve permitir gravar os dados do usuário para fazer login.

RF-18: O sistema deve permitir recuperação de senha.

#### Artefatos da Funcionalidade

●  login.html

●  login.css

●  login.js


#### Instruções de acesso

A partir da página inicial, o usuário clica em "Login" no cabeçalho. As credenciais são verificadas contra os usuários salvos no localStorage (chave `users`). Quando "Lembrar-me" está marcado, o email é salvo na chave `emailLembrado` para preenchimento automático no próximo acesso. A recuperação de senha é acionada pelo link "Esqueci minha senha".

<hr>

### Tela - Inicial de Cadastro de Usuários

Responsável: Amanda Soares

#### Instruções de acesso

Nesta etapa, o usuário escolha entre ONG ou Pessoa Voluntária para iniciar seu cadastro. Após a seleção, e "Continuar" será direcionado para a tela de cadastro adequada ao perfil escolhido.

Tela - Inicial de Cadastro de Usuários:

 <img width="1340" height="551" alt="Tela Cadastro Inicial" src="https://github.com/user-attachments/assets/dd2e8764-5122-4788-bc7f-f76f80c286ef" />

#### Requisito atendido

RF-01	O sistema deve permitir cadastro de usuários voluntário, ONG e PSC na plataforma.

#### Artefatos da Funcionalidade

●  pagina-cadastroinicial.css

●  pagina-cadastroinicial.html

●  pagina-cadastroinicial.js

<hr>

### Tela - Home/Sobre

Responsável: Amanda Soares

A tela inicial do nosso site é o primeiro ponto de contato dos usuários com a plataforma. Por isso, ela foi projetada para ser um ambiente simples, intuitivo e inspirador.

Nessa tela, o usuário encontra informações introdutórias sobre a plataforma e pode selecionar a opção "Consultar Vagas", sendo direcionado para o fluxo de visualização das vagas disponíveis.

Exemplo da Tela de Sobre:

<img width="1354" height="590" alt="Tela de Sobre" src="https://github.com/user-attachments/assets/83318cab-8735-48da-a913-b4dd37c5e87e" />

#### Requisito atendido

Contribui para o engajamento do usuário no requisito RF- 06	O sistema deve permitir busca de oportunidades por localização e área de interesse.

#### Artefatos da Funcionalidade

●  tela-Sobre.css

●  tela-Sobre.html

●  tela-Sobre.js

<hr>

### Tela - Quem Somos 

Responsável: Amanda Soares

A tela “Quem somos” é a seção onde a equipe apresenta a identidade do projeto, explicando o que fazemos e qual é o objetivo. Ela serve para transmitir confiança, mostrar transparência e ajudar o usuário a entender melhor a proposta da plataforma.

Nessa tela, o usuário pode selecionar a opção "Quero ser Voluntário". Caso ainda não possua cadastro, o sistema o direcionará para o fluxo de cadastro correspondente ao perfil. 


Exemplo da Tela de Quem Somos:

<img width="1341" height="548" alt="Tela de Quem Somos" src="https://github.com/user-attachments/assets/e2c531df-3906-431c-a552-f2cd8c738f50" />


#### Requisito atendido

Contribui para o engajamento do usuário no requisito RF- 07	O sistema deve permitir que voluntários se candidatem às vagas disponíveis.

#### Artefatos da Funcionalidade

●  tela-QuemSomos.css

●  tela-QuemSomos.html

●  tela-QuemSomos.js

<hr>

# Programação de Funcionalidades - Requisitos Não Funcionais 

### Responsividade

A aplicação atualmente atende aos requisitos de responsividade de **forma parcial**, uma vez que foram aplicadas boas práticas de desenvolvimento responsivo nas telas implementadas. Entre elas, destacam-se:

● Utilização de Flexbox para organização e adaptação dos elementos da interface

● Configuração da meta tag viewport, permitindo a correta adaptação da página a diferentes dispositivos

● Uso de Media Queries para ajustar o layout conforme o tamanho da tela

Esses recursos possibilitam que a aplicação seja utilizada em diferentes resoluções, especialmente em dispositivos móveis. Entretanto, ainda existem oportunidades de evolução, como a implementação de um menu hambúrguer e a adoção completa da abordagem Mobile First, para ampliar a experiência responsiva da plataforma.

#### Requisito parcialmente atendido
RNF-04	O sistema deve ser responsivo (funcionar em dispositivos móveis e desktops).

#### Exemplo - Tela Historico de ONG

<img width="1338" height="559" alt="Exemplo de responsividade" src="https://github.com/user-attachments/assets/432d7ebd-7088-4eae-802f-18cf8e7bc79d" />

<hr>

