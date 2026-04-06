# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Organizações Não Governamentais</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Instituições filantrópicas que apoiam causas sociais e buscam voluntários.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>     1.	Contato diretos com voluntários;

2.	Disponibilidade de indivíduos interessados;

3.	Divulgação da organização;

4.	Busca de voluntários alinhados com as causas da organização com facilidade;

5.	Voluntários engajados.
</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Voluntários </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduos que buscam ajudar em causas sociais.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 1.	Contato direto com as organizações;

2.	Acesso a vagas de voluntário com facilidade;

3.	Se identificar com a instituição;

4.	Apoiar projetos sociais;

5.	Sentir que está colaborando para a melhoria da sociedade.

</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 03: Prestador de Serviços à Comunidade (PSC) </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Indivíduos que necessitam realizar medida socioeducativa</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 1.	Registro e acompanhamento das horas trabalhadas;

2.	Encontrar associações que aceitam Prestador de Serviços à Comunidade (PSC);

3.	Orientação das tarefas por meio da comunicação direta com as organizações;

4.	Atividades  acessíveis e simples.


</td>
</tr>
</tbody>
</table>

## Histórias de Usuários


|EU COMO...          | QUERO/PRECISO ...          |PARA ...                          |
|--------------------|--------------------------- |----------------------------------|
|Voluntário|Buscar oportunidade de me voluntariar por localização e área de interesse|Que eu encontre causas que combinem com minhas habilidades e disponibilidade.|
|Voluntário|Criar um perfil com minhas habilidades, interesses e disponibilidade.|Que as organizações possam me encontrar para projetos adequados.|
|Voluntário|Me inscrever em uma vaga voluntária.|Que eu possa demonstrar meu interesse em me voluntariar e contribuir para a sociedade.|
|Prestador de Serviços à Comunidade (PSC)|Encontrar associações que comprovem minhas horas trabalhadas.|Que eu possa cumprir minha carga de horas prescritas.|
|Prestador de Serviços à Comunidade (PSC)|Acompanhar meu progresso de horas no site.|Que eu possa garantir que estou cumprindo o requisito de carga horária necessária e acompanhar histórico de participação.|
|Organização|Publicar oportunidades de voluntariado na plataforma.|Que pessoas interessadas possam se candidatar para ajudar em nossos projetos.|
|Organização|Buscar voluntários com habilidades específicas.|Que possamos encontrar pessoas adequadas para determinadas atividades.|
|Organização|Enviar mensagens para os voluntários inscritos.|Que eu possa alinhar detalhes das atividades e horários com os voluntários.|
|Organização|Registrar a participação e as horas de trabalho dos voluntários.|Que eu possa acompanhar o engajamento e reconhecer suas contribuições.|
|Organização|Visualizar e gerenciar os voluntários inscritos em nossas atividades.|Que eu possa organizar melhor as equipes e tarefas.|
## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
|RF-01|O sistema deve permitir cadastro de usuários voluntário, ONG e PSC na plataforma.|Alta|
|RF- 02|O sistema deve permitir login e autentificação de usuários.|Alta|
|RF- 03|O sistema deve permitir que voluntários criem e editem seus perfis com habilidades, interesses e disponibilidade.|Alta|
|RF- 04|O sistema deve permitir gravar os dados do usuário para fazer login.|Baixa|
|RF- 05|O sistema deve permitir que ONGs publiquem oportunidades de voluntariado.|Alta|
|RF- 06|O sistema deve permitir busca de oportunidades por localização e área de interesse.|Alta|
|RF- 07|O sistema deve permitir que voluntários se candidatem às vagas disponíveis.|Alta|
|RF- 08|O sistema deve permitir que ONGs visualizem e gerenciem candidatos inscritos.|Média|
|RF- 09|O sistema deve permitir comunicação (mensagens) entre ONGs e voluntários.|Média|
|RF- 10|O sistema deve permitir que PSC encontrem organizações que aceitam prestação de serviços comunitários.|Alta|
|RF- 11|O sistema deve permitir registro e acompanhamento de horas trabalhadas (especialmente PSC).|Alta|
|RF- 12|O sistema deve permitir que ONGs validem e registrem horas dos participantes.|Alta| 
|RF- 13|O sistema deve permitir exibir histórico de participação e horas para usuários.|Média|
|RF- 14|O sistema deve permitir filtros avançados de busca (tipo de causa, horário, localização).|Média|
|RF- 15|O sistema deve permitir que ONGs editem ou removam oportunidades publicadas.|Média|
|RF- 16|O sistema deve permitir notificações sobre novas vagas ou mensagens.|Baixa|
|RF- 17|O sistema deve permitir avaliação/feedback entre voluntários e ONGs.|Baixa|
|RF- 18|O sistema deve permitir recuperação de senha.|Baixa|
|RF- 19|O sistema deve permitir exclusão de conta.|Baixo|
|RF- 20|O sistema deve permitir classificação de horas por serviço prestado entre voluntários regionais e gerais apresentando ranking.|Baixo|
**Prioridade: Alta / Média / Baixa.

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
|RNF-01|O sistema deve ser acessível via navegadores web modernos (Chrome, Firefox, Edge).|Alta|
|RNF-02|O sistema deve garantir segurança dos dados (criptografia de senhas e autenticação segura).|Alta|
|RNF-03|O sistema deve ter tempo de resposta de até 3 segundos para ações principais.|Média|
|RNF-04|O sistema deve ser responsivo (funcionar em dispositivos móveis e desktops).|Alta| 
|RNF-05|O sistema deve ter interface amigável e intuitiva.|Média|
|RNF-06|O sistema deve garantir disponibilidade mínima de 95%.|Média|
|RNF-07|O sistema deve permitir escalabilidade para aumento de usuários.|Baixa|
|RNF-08|O sistema deve manter backup periódico dos dados.|Baixa|
|RNF-09|O sistema deve seguir padrões de acessibilidade (ex: contraste, navegação por teclado).|Média|
|RNF-10|O sistema deve suportar múltiplos perfis de usuário com permissões diferentes.|Média|
|RNF-11|O sistema deve registrar logs de atividades relevantes.|Baixa|
|RNF-12|O sistema deve ter fácil manutenção e atualização.|Baixa|

**Prioridade: Alta / Média / Baixa. 

