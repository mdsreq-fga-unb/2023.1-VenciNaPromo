# Processo de Engenharia de Requisitos

### 1. Introdução

<p align="justify"> &emsp;&emsp;
De acordo com George Marsicano (2023), na Engenharia de Software, os modelos de processos e ciclos de vida de desenvolvimento de software definem as etapas necessárias para a construção do software, e um ponto em comum entre os modelos é a necessidade de uma etapa dedicada à <i>compreensão dos problemas</i> a serem solucionados e à <i>definição de "o quê"</i> será feito. A esta etapa dá-se o nome de <b>Engenharia de Requisitos (ER)</b>. Ainda segundo o autor, as atividades da Engenharia de Requisitos são as mesmas em processos dirigidos a plano e processos ágeis, entrentanto, a filosofia por detrás destes processos faz com que estas atividades sejam realizadas de forma diferente segundo cada uma das abordagens. Desta forma, a definição da abordagem e do processo de software influenciam diretamente na escolha do processo de engenharia de requisitos a ser utilizado, de modo que alguns processos tem maior harmonia com uma abordagem e não se integram bem nas atividades de outra abordagem.</p>

<p align="justify"> &emsp;&emsp;
A respeito das atividades da Engenharia de Requisitos, George Marsicano (2023) as divide em grupos de atividades que se correlacionam entre si de forma iterativa. O autor utiliza a representação da figura de um átomo para ilustrar a forma como as atividades podem se relacionar entre si de forma iterativa e <i>equilibrada</i>. A Figura 2 traz a representação do modelo proposto pelo autor.</p>

<p align="justify"> &emsp;&emsp;
As atividades listadas pelo autor são:</p>

- **Elicitação e descoberta**: baseia-se nas atividades de elicitação - extrair, obter ou provocar uma resposta, reação ou informação de alguém ou de algo - e descoberta - encontrar algo que antes não era conhecido ou não estava disponível. As fontes da elicitação podem ser diversas, desde stakeholders, até IAs, pesquisas ou sistemas existentes. Deve-se atentar aos requisitos funcionais e não funcionais, assim como descobrir quem são os interessados, seus problemas, necessidades, desejos e expectativas, além de outros fatores que podem representar possibilidades ou restrições ao produto de software.
- **Análise e consenso**: envolve a análise - analisar os requisitos em sua forma “bruta” - e o consenso - conciliar as fontes de informação em direção a um entendimento comum sobre o conjunto de requisitos.
- **Declaração**: diz respeito à comunicação dos requisitos entre os envolvidos, por meio de linguagem natural, estruturada ou não, de maneira escrita e/ou oral (face a face, áudio, vídeo) em diferentes níveis degranularidade (mais detalhes, menos detalhes, agrupados ou divididos).
- **Verificação e Validação**: estas atividades dizem respeito à qualidade dos requisitos. A validação é uma forma de constatar a qualidade externa, confirmando (ou não) se a solução correta está sendo construída. Já a verificação é voltada para a qualidade interna, e busca confirmar (ou não) de que o que a solução ou requisito está sendo feita da maneira correta.
- **Organização e Atualização**: este tópico refere-se a manutenção do conjunto de requisitos do produto adequadamente, organizados e atualizados ao longo do tempo. Na organização estabelece-se a maneira como os requisitos do produto serão estruturados (lista, mapa), rastreados, refinados e priorizados com base no framework de requisitos adequado ao produto e/ou projeto, e a atualização é o esforço de manter a organização dos requisitos sempre em seu estado mais atual, diante das possíveis mudanças e consenso entre as fontes de requisitos.

<br><div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/main/ghpages/assets/images/documentacao/visao/marsicano1.png">

<p>Figura 2: Atividades da Engenharia de Requisitos. Fonte: George Marsicano, 2023.</p>
</div><br>

<p align="justify"> &emsp;&emsp;
Uma vez descritas as atividades da Engenharia de Requisitos, há que se definir uma abordagem ou processo para realizar as mesmas. O <i>International Requirements Engineering Board</i> (IREB), na publicação <i>Handbook for the CPRE Foundation Level according to the IREB Standard</i>, de Glinz e autores (2022), apresenta um método de definição de processo de Engenharia de Requisitos baseado na análise das diferentes "facetas" do processo. Deve ser feita a análise sobre quais extremos de cada eixo correspondem ao que se sabe e ao esperado do produto a ser desenvolvido, e a partir daí e do que já foi definido do ciclo de vida e do processo de software, define-se um processo a ser seguido para a execução das atividades da ER. Na Figura 3, apresentamos o esquema das facetas do processo.</p><br>

<div align="center" style="text-align: center">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/main/ghpages/assets/images/documentacao/visao/facetas.png">
<p>Figura 3: Facetas do processo de Engenharia de Requisitos. Fonte: Glinz et al, 2022.</p>
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

### 3. Processo

#### 3.1. Elicitação e descoberta

#### 3.2. Análise e consenso

#### 3.3. Declaração

#### 3.4. Verificação e Validação

#### 3.5. Organização e Atualização


## 5. Referências

> Handbook IREB CPRE Foundation Level, Version 1.1.0, september 2022.

> MARSICANO, George. Requisitos de Software: Introdução a Engenharia de Requisitos (ER). Brasília, 2023. Disponível em: <https://aprender3.unb.br/course/view.php?id=18123>. Acesso em: 29 abr. 2023.

> SOMMERVILLE, Ian. Engenharia de software. 10.ed. São Paulo: Pearson Education do Brasil, 2018.

> Visão do Produto e Projeto. Wiki Requisitos - Dubium. Disponível em: <https://mdsreq-fga-unb.github.io/2022.2-Dubium/visao/>. Acesso em: 19 de abril de 2023.

> Visão do Produto e Projeto. Wiki Requisitos - GetPet. Disponível em: <https://mdsreq-fga-unb.github.io/2022.2-GetPet/#/pages/Vis%C3%A3odoProdutoeProjeto>. Acesso em: 19 de abril de 2023.

## 6. Histórico de Versão

| Data       | Versão | Descrição                         | Autor(es)                                             |
| :--------: | :----: | :-------------------------------: | :---------------------------------------------------: |
| 24/05/2023 |  1.0   | Criação do Documento e introdução | [Charles Serafim](https://github.com/charles-serafim) |