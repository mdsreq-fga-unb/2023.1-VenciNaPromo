# Processo de Engenharia de Requisitos

### 1. Introdução

<p align="justify"> &emsp;&emsp;
De acordo com George Marsicano (2023), na Engenharia de Software, os modelos de processos e ciclos de vida de desenvolvimento de software definem as etapas necessárias para a construção do software, e um ponto em comum entre os modelos é a necessidade de uma etapa dedicada à <i>compreensão dos problemas</i> a serem solucionados e à <i>definição de "o quê"</i> será feito. A esta etapa dá-se o nome de <b>Engenharia de Requisitos (ER)</b>. Ainda segundo o autor, as atividades da Engenharia de Requisitos são as mesmas em processos dirigidos a plano e processos ágeis, entrentanto, a filosofia por detrás destes processos faz com que estas atividades sejam realizadas de forma diferente segundo cada uma das abordagens. Desta forma, a definição da abordagem e do processo de software influenciam diretamente na escolha do processo de engenharia de requisitos a ser utilizado, de modo que alguns processos tem maior harmonia com uma abordagem e não se integram bem nas atividades de outra abordagem.</p>

<p align="justify"> &emsp;&emsp;
A respeito das atividades da Engenharia de Requisitos, George Marsicano (2023) as divide em grupos de atividades que se correlacionam entre si de forma iterativa. O autor utiliza a representação da figura de um átomo para ilustrar a forma como as atividades podem se relacionar entre si de forma iterativa e <i>equilibrada</i>. A Figura 1 traz a representação do modelo proposto pelo autor.</p>

<p align="justify"> &emsp;&emsp;
As atividades listadas pelo autor são:</p>

- **Elicitação e descoberta**: baseia-se nas atividades de elicitação - extrair, obter ou provocar uma resposta, reação ou informação de alguém ou de algo - e descoberta - encontrar algo que antes não era conhecido ou não estava disponível. As fontes da elicitação podem ser diversas, desde stakeholders, até IAs, pesquisas ou sistemas existentes. Deve-se atentar aos requisitos funcionais e não funcionais, assim como descobrir quem são os interessados, seus problemas, necessidades, desejos e expectativas, além de outros fatores que podem representar possibilidades ou restrições ao produto de software.
- **Análise e consenso**: envolve a análise - analisar os requisitos em sua forma “bruta” - e o consenso - conciliar as fontes de informação em direção a um entendimento comum sobre o conjunto de requisitos.
- **Declaração**: diz respeito à comunicação dos requisitos entre os envolvidos, por meio de linguagem natural, estruturada ou não, de maneira escrita e/ou oral (face a face, áudio, vídeo) em diferentes níveis degranularidade (mais detalhes, menos detalhes, agrupados ou divididos).
- **Verificação e Validação**: estas atividades dizem respeito à qualidade dos requisitos. A validação é uma forma de constatar a qualidade externa, confirmando (ou não) se a solução correta está sendo construída. Já a verificação é voltada para a qualidade interna, e busca confirmar (ou não) de que o que a solução ou requisito está sendo feita da maneira correta.
- **Organização e Atualização**: este tópico refere-se a manutenção do conjunto de requisitos do produto adequadamente, organizados e atualizados ao longo do tempo. Na organização estabelece-se a maneira como os requisitos do produto serão estruturados (lista, mapa), rastreados, refinados e priorizados com base no framework de requisitos adequado ao produto e/ou projeto, e a atualização é o esforço de manter a organização dos requisitos sempre em seu estado mais atual, diante das possíveis mudanças e consenso entre as fontes de requisitos.

<br><div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/main/ghpages/assets/images/documentacao/visao/marsicano1.png">

<p>Figura 1: Atividades da Engenharia de Requisitos. Fonte: George Marsicano, 2023.</p>
</div><br>

<p align="justify"> &emsp;&emsp;
Uma vez descritas as atividades da Engenharia de Requisitos, há que se definir uma abordagem ou processo para realizar as mesmas. O <i>International Requirements Engineering Board</i> (IREB), na publicação <i>Handbook for the CPRE Foundation Level according to the IREB Standard</i>, de Glinz e autores (2022), apresenta um método de definição de processo de Engenharia de Requisitos baseado na análise das diferentes "facetas" do processo. Deve ser feita a análise sobre quais extremos de cada eixo correspondem ao que se sabe e ao esperado do produto a ser desenvolvido, e a partir daí e do que já foi definido do ciclo de vida e do processo de software, define-se um processo a ser seguido para a execução das atividades da ER. Na Figura 2, apresentamos o esquema das facetas do processo.</p><br>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/main/ghpages/assets/images/documentacao/visao/facetas.png">
<p>Figura 2: Facetas do processo de Engenharia de Requisitos. Fonte: Glinz et al, 2022.</p>
</div><br>

<p align="justify"> &emsp;&emsp;
Analisando as descrições das facetas do processo de ER, chegamos à conclusão de que o processo será <i>iterativo</i>, <i>exploratório</i> e <i>orientado ao mercado</i>. Os seguintes aspectos foram levados em consideração nesta análise:</p>

- os requisitos não são completamente conhecidos desde o início;
- podemos fazer ciclos curtos de feedback pela proximidade do time de desenvolvimento com o cliente;
- será necessária a priorização e negociação de requisitos devido à duração do projeto;
- apesar de haver um cliente, ele é uma referência para o desenvolvimento do projeto, cujo objetivo é poder ser utilizado por clientes diversos, com usuários em pontencial não identificáveis individualmente;
- os requisitos serão prioritariamente elicitados pela equipe do projeto, mas com participação do cliente.

<p align="justify"> &emsp;&emsp;
A partir destas observações e também da definição da abordagem e ciclo de vida ágil e da utilização do processo de desenvolvimento ScrumXP, conclui-se que o processo de Engenharia de Requisitos a ser utilizado será o <i>Orientado a Produto</i>.</p>

### 2. Aspectos humanos e sociais da Engenharia de Requisitos

<p align="justify"> &emsp;&emsp;
A Engenharia de Requisitos é uma disciplina que abrange não apenas os aspectos técnicos do desenvolvimento de software, mas também aspectos humanos e sociais essenciais para o sucesso de um projeto. Na FGA UnB, essa disciplina se destaca como uma das mais humanas do campus, pois envolve a compreensão das necessidades dos usuários e a interação com a sociedade em geral.</p>

<p align="justify"> &emsp;&emsp;
No contexto da Engenharia de Requisitos, os aspectos humanos são fundamentais para garantir que o software atenda às demandas e expectativas dos usuários finais. Isso requer habilidades de escuta ativa, empatia e capacidade de se colocar no lugar do usuário para compreender suas necessidades e desejos. Além disso, a comunicação clara e eficaz é essencial para transmitir essas informações aos membros da equipe de desenvolvimento, a fim de evitar mal-entendidos e garantir a entrega de um sistema que atenda às expectativas dos usuários.</p>

<p align="justify"> &emsp;&emsp;
Os aspectos sociais da Engenharia de Requisitos referem-se à interação com a sociedade em geral e a consideração de fatores culturais, éticos e legais. Cada projeto de software está inserido em um contexto social específico, e é importante levar em conta as diferentes normas, valores e regulamentações que regem essa sociedade. Isso inclui a consideração de questões de acessibilidade, inclusão e conformidade com regulamentações governamentais, garantindo que o software seja desenvolvido de forma ética e socialmente responsável.</p>

<p align="justify"> &emsp;&emsp;
Na FGA, a Engenharia de Requisitos é valorizada como uma matéria que prepara os estudantes para lidar com esses aspectos humanos e sociais. Os alunos são incentivados a desenvolver habilidades de análise e compreensão das necessidades dos usuários, bem como a considerar os impactos sociais e éticos de suas soluções de software. Isso não apenas contribui para a formação de engenheiros de software mais completos, mas também os prepara para lidar com os desafios do mundo real, onde a interação com os usuários e a sociedade são aspectos fundamentais do desenvolvimento de software bem-sucedido.</p>

### 3. Processo
<p align="justify"> &emsp;&emsp;
O processo da Engenharia de Requisitos realizado pelo grupo pode ser acompanhado pelo mural construído e representado neste <a href="https://app.mural.co/t/sabrinaberno4255/m/sabrinaberno4255/1683652864996/77bb39b891b6982f8a84e8eaf27a09a044fa6bf8?sender=u3f4c15177e9228aeb6348510">link</a>.</p>

<p align="justify"> &emsp;&emsp;
A seguir, apresentamos como se deu cada uma das fases do processo.</p>


#### 3.1. Elicitação e Descoberta

<p align="justify"> &emsp;&emsp;
Primeiramente, começamos com a fase de Elicitação e Descoberta de requisitos, após conferir o vídeo gravado e o documento com os requisitos que havíamos elencado com o cliente do projeto, optamos por adotar a técnica de Brainstorming, a fim de obter uma ampla gama de requisitos funcionais e não funcionais. Essa abordagem colaborativa permitiu uma exploração criativa de ideias, proporcionando a identificação dos principais requisitos necessários para o sistema em desenvolvimento. Por meio do Brainstorming, incentivamos a participação ativa de todos os envolvidos, promovendo a contribuição de diferentes perspectivas e experiências, enriquecendo assim o processo de levantamento de requisitos.</p>

<p align="justify"> &emsp;&emsp;
Assim, foram definidos os problemas a serem resolvidos, foram propostas soluções e foi construída uma primeira lista de requisitos funcionais e não funcionais. Todos estes produtos podem ser vistos na Figura 3, abaixo.</p>

<br><div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/a0e33ed089341fe2207fb22beb70bd9bee93eeb3/ghpages/assets/images/ER/ElicitacaoEDescoberta.png">

<p>Figura 3: Elicitação e Descoberta. Fonte: GrupoGPT, 2023.</p>
</div><br>


#### 3.2. Análise e consenso

<p align="justify"> &emsp;&emsp;
Na etapa subsequente, denominada Análise e Consenso, recorremos novamente ao Brainstorming para analisar e revisar os requisitos previamente obtidos. Essa atividade envolveu uma avaliação minuciosa dos requisitos, levando em consideração sua relevância, viabilidade e alinhamento com as expectativas dos stakeholders. Após essa análise criteriosa, avançamos para a fase de negociação, onde todas as partes interessadas envolvidas chegaram a um consenso em relação aos requisitos funcionais e não funcionais identificados.</p>

<p align="justify"> &emsp;&emsp;
Ainda nesta fase, foi definido um problema específico - dentre os elicitados anteriormente - a ser o foco do trabalho, através da Análise de Problemas. Para a definição e o entendimento do problema, utilizamos o Diagrama de Causa e Efeito (diagrama de Ishikawa), onde listamos as causas do problema proposto. Também construídos a formulação do problema através do framework onde são listados a descrição do problema, os stakeholders afetados, os impactos do problema, alternativas para a solução do problema, e a alternativa de solução proposta pelo grupo.</p>

<p align="justify"> &emsp;&emsp;
Os produtos derivados desta fase podem ser vistos na Figura 4.</p>

<br><div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/a0e33ed089341fe2207fb22beb70bd9bee93eeb3/ghpages/assets/images/ER/AnaliseEConsenso.png">

<p>Figura 4: Análise e Consenso. Fonte: GrupoGPT, 2023.</p>
</div><br>

#### 3.3. Declaração

<p align="justify"> &emsp;&emsp;
Prosseguindo para a etapa de Declaração de Requisitos, adotamos abordagens como Temas, Épicos e User Stories para estruturar e organizar os requisitos de forma mais detalhada. Os Temas e Épicos forneceram uma visão geral dos principais aspectos do sistema, enquanto as User Stories permitiram uma descrição minuciosa dos requisitos específicos e eventuais separações em requisitos menores, utilizando uma linguagem clara e compreensível. Essa estruturação proporcionou uma melhor compreensão e comunicação dos requisitos durante as etapas subsequentes do projeto.</p>

<p align="justify"> &emsp;&emsp;
Os Temas, Épicos e User Stories definidos nesta etapa podem ser vistos na Figura 5.</p>

<br><div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/a0e33ed089341fe2207fb22beb70bd9bee93eeb3/ghpages/assets/images/ER/Declarao.png">

<p>Figura 5: Declaração dos Requisitos. Fonte: GrupoGPT, 2023.</p>
</div><br>

#### 3.4. Verificação e Validação

<p align="justify"> &emsp;&emsp;
Após a conclusão da Declaração dos Requisitos, dedicamos atenção às etapas de Verificação e Validação, que tiveram como objetivo garantir a qualidade e a conformidade dos requisitos estabelecidos.</p>

<p align="justify"> &emsp;&emsp;
Para alcançar tais resultados, contamos com a contribuição do grupo de estudantes que está construindo o projeto <a href="https://mdsreq-fga-unb.github.io/2023.1-SOSOptica/">SOSóptica</a>, que realizaram a verificação dos requisitos do projeto utilizando a abordagem INVEST (Independent, Negotiable, Valuable, Estimable, Small, Testable), que permite avaliar os requisitos considerando sua independência, negociabilidade, valor, estimativa de esforço, granularidade e testabilidade.</p>

<p align="justify"> &emsp;&emsp;
O grupo forneceu comentários a respeito de algumas inconsistências entre os requisitos e sugestões de requisitos novos, além de outras sugestões a respeito dos épicos, temas e da descrição da solução. Os feedbacks do grupo e uma segunda análise minuciosa por parte da nossa equipe a partir dos comentários e sugestões recebidos possibilitou a verificação da clareza, consistência e atendimento aos critérios estabelecidos pelos requisitos.
</p>

<p align="justify"> &emsp;&emsp;
Os aspectos verificados nesta fase podem ser vistos na Figura 6.</p>

<br><div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/a0e33ed089341fe2207fb22beb70bd9bee93eeb3/ghpages/assets/images/ER/VerificacaoEValidacao.png">

<p>Figura 6: Verificação e Validação. Fonte: GrupoGPT, 2023.</p>
</div><br>

#### 3.5. Organização e Atualização

<p align="justify"> &emsp;&emsp;
Na fase subsequente, de Organização e Atualização dos Requisitos, trabalhamos as User Stories em um nível de detalhamento maior e utilizamos uma técnica proposta por George Marsicano (2023), que consiste em criar uma tabela para avaliar cada User Story com base em três critérios: Valor de negócios, Viabilidade (considerando fatores como tempo e capacidade produtiva) e Complexidade técnica.</p>

<p align="justify"> &emsp;&emsp;
Essa abordagem nos permitiu atribuir um valor para cada atributo e distribuir pontuações entre as histórias de usuário, facilitando assim a priorização dos requisitos. Os temas e épicos definidos após a [Backlog de Produto](https://mdsreq-fga-unb.github.io/2023.1-VenciNaPromo/projeto/backlog). A pontuação para cada uma de acordo com os critérios de priorização pode ser vista na Tabela 1.</p>

<br><div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/main/ghpages/assets/images/ER/pontuacoes.png">

<p>Tabela 1: Priorização das User Stories. Fonte: GrupoGPT, 2023.</p>
</div><br>



<p align="justify"> &emsp;&emsp;
Ao final deste processo, conseguimos definir os MVPs (Minimum Viable Products) 1 e 2, além de criar um gráfico de Priorização das User Stories para orientar as próximas etapas do projeto. Estes detalhes podem ser vistos na Figura 7.
</p>


<br><div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/a0e33ed089341fe2207fb22beb70bd9bee93eeb3/ghpages/assets/images/ER/Priorizacao.png">

<p>Figura 8: Gráfico de priorização e MVPs. Fonte: GrupoGPT, 2023.</p>
</div><br>



## 5. Referências

> Handbook IREB CPRE Foundation Level, Version 1.1.0, september 2022.

> MARSICANO, George. Requisitos de Software: Introdução a Engenharia de Requisitos (ER). Brasília, 2023. Disponível em: <https://aprender3.unb.br/course/view.php?id=18123>. Acesso em: 29 abr. 2023.

> SOMMERVILLE, Ian. Engenharia de software. 10.ed. São Paulo: Pearson Education do Brasil, 2018.

> Visão do Produto e Projeto. Wiki Requisitos - Dubium. Disponível em: <https://mdsreq-fga-unb.github.io/2022.2-Dubium/visao/>. Acesso em: 19 de abril de 2023.

> Visão do Produto e Projeto. Wiki Requisitos - GetPet. Disponível em: <https://mdsreq-fga-unb.github.io/2022.2-GetPet/#/pages/Vis%C3%A3odoProdutoeProjeto>. Acesso em: 19 de abril de 2023.

## 6. Histórico de Versão

| Data       | Versão | Descrição                                        | Autor(es)                                                                                           |
| :--------: | :----: | :----------------------------------------------: | :-------------------------------------------------------------------------------------------------: |
| 24/05/2023 |  1.0   | Criação do Documento e introdução                | [Charles Serafim](https://github.com/charles-serafim)                                               |
| 24/05/2023 |  1.1   | Adição dos aspectos humanos e sociais da ER      | [Lucas Heler](https://github.com/Akaeboshi)                                                         |
| 24/05/2023 |  1.2   | Adição do relato de cada etapa do processo de ER | [Charles Serafim](https://github.com/charles-serafim) e [Lucas Heler](https://github.com/Akaeboshi) |