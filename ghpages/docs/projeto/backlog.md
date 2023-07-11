# Product Backlog

<p align="justify"> &emsp;&emsp;
O Backlog do Produto é um componente essencial da metodologia ágil SCRUM, que consiste em uma lista contendo todos os requisitos funcionais que vão sendo identificados ao longo do desenvolvimento do produto. Esse artefato é dinâmico e emergente, sendo atualizado constantemente para refletir as necessidades e prioridades do produto. Para auxiliar no planejamento e desenvolvimento do Backlog do Produto, a estrutura SAFe (Scaled Agile Framework) é frequentemente utilizada. Essa estrutura proporciona diretrizes e boas práticas para a gestão ágil de projetos em larga escala, oferecendo uma abordagem eficiente para o alinhamento estratégico, coordenação e colaboração entre as equipes de desenvolvimento.</p>

<p align="justify"> &emsp;&emsp;
A técnica 3W (who-what-why) foi a abordagem utilizada para estruturar e detalhar as user stories. Ela consiste em responder a três perguntas principais para cada user story: Quem, o quê e por quê.</p>

- Quem: Identifica quem é o usuário ou a persona envolvida na user story. Isso pode ser um cliente, um administrador, um visitante do site, etc. 
- O quê: Descreve a ação ou a tarefa que o usuário ou a persona precisa realizar.
- Por quê: Explica o motivo ou o objetivo por trás da ação descrita. Isso ajuda a fornecer contexto e entender o valor da funcionalidade para o usuário ou para o negócio.

## Critérios de Aceitação

<p align="justify"> &emsp;&emsp;
Os critérios de aceitação apresentados são condições de satisfação para a validação de uma história de usuário. Foram descritos critérios de aceitação que estabelecem as condições sob as quais a história apresentada será considerada completa e correta.</p>

<p align="justify"> &emsp;&emsp;
A partir da conferẽncia dos critérios de aceitação, é possível aferir se a história de usuário está completa.</p>

## Tema

|  **Tema**  | **Descrição** |
| :---------: | :-----------: | 
| T1 | Gerenciamento de usuários | 
| T2 | Gerenciamento do comércio |



## Épicos

|  **Tema**  | **Épico** | **Descrição** |
| :---------: | :-----------: | :---------:|
| T1 |  E1    | Gerenciamento de usuário-comprador 
| T1 |  E2    | Gerenciamento de usuário-vendedor
| T2 |  E3    | Gerenciamento do compra
| T2 |  E4    | Gerenciamento do produto


## User Story

|  **Épico**  | **US** | **Descrição** | **Critérios de Aceitação** |
| :---------: | :-----------: | :---------:| :------------: |
| E1 |   US01   | Eu, como usuário-comprador, desejo criar minha conta com as minhas informações pessoais para poder usufruir de descontos exclusivos em produtos perto do vencimento | 1. Deve existir campos de nome, endereço de e-mail, senha e confirmação de senha <br>2. O nome não pode conter caracteres especiais. <br>3. O endereço de e-mail deve conter o caracter especial "@" <br>4. Não deve ser possível cadastrar um e-mail já cadastrado <br>5. A senha deve conter oito caracteres <br>6. A senha pode conter caracteres especiais <br>7. A senha pode conter números. <br> 8. Deve existir um campo de seleção para o tipo de usuário.|
| E1 |  US02    | Eu, como usuário-comprador, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa gerar cupons exclusivos para os produtos selecionados no carrinho de compras | 1. O login deve ser feito com o e-mail e a senha cadastrados. <br> 2. Deve existir campos de nome, endereço de e-mail, senha e confirmação de senha. |
| E2 |  US03    | Eu, como usuário-vendedor, desejo criar minha conta, adicionando minhas informações pessoais, para poder aumentar minhas vendas e diminuir o desperdício dos meus produtos perto do vencimento | 1. Deve existir campos de nome, endereço de e-mail, senha e confirmação de senha. <br>2. O nome não pode conter caracteres especiais. <br>3. O endereço de e-mail deve conter o caracter especial "@" <br>4. Não deve ser possível cadastrar um e-mail já cadastrado <br>5. A senha deve conter oito caracteres <br>6. A senha pode conter caracteres especiais <br>7. A senha pode conter números. <br> 8. Deve existir um campo de seleção para o tipo de usuário. |
| E2 |  US04    | Eu, como usuário-vendedor, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa disponibilizar meus produtos no site e visualizar o andamento das minhas vendas | 1. O login deve ser feito com o e-mail e a senha cadastrados. <br> 2. Deve existir um campo de seleção para o tipo de usuário.  |
| E3 |  US05    | Eu, como usuário-comprador, quero ter a capacidade de salvar itens em meu carrinho, para que eu possa voltar a eles mais tarde sem perder minha seleção | 1. Uma lista de itens salvos deve ser visualizada com os itens agrupados em linhas <br>2. Uma lista de itens salvos anteriormente deve ser visualizada <br>3. A visualização do item deve conter o nome, a quantidade que se está comprando e o preço.|
| E3 |  US06    | Eu, como usuário-comprador, desejo visualizar a lista de itens que eu adicionei no meu carrinho de compras para que eu possa revisar meu pedido antes de finalizar a compra | 1. A lista de itens deve conter o nome, quantidade e preço. <br> 2. O carrinho de compras deve mostrar o valor total da compra. <br>4. Cada produto deve conter no mínimo uma unidade. | 
| E3 |  US07    | Eu, como usuário-comprador, quero modificar a quantidade de itens do meu carrinho de compras, para que eu possa ajustar o pedido às minhas necessidades | 1. O usário-comprador pode modificar a quantidade de itens. <br>2. O usuário-comprador não pode ultrapassar o número máximo de itens para cada produto. <br>3. O item deve ter no mínimo uma unidade para permanecer no carrinho de compras <br>4. O valor total do carrinho deve ser atualizado instantaneamente após as edições. |
| E3 |  US08    | Eu, como usuário-comprador, desejo finalizar a compra no meu carrinho, para que eu possa ir à loja física retirar meus produtos | 1. Deve ser gerado um comprovante de confirmação da compra. <br>2. O comprovante de compra deve apresentar cupom dos produtos, vendedor e local de retirada <br>3. O carrinho de compras deve ter pelo menos um item para finalizar a compra. |
| E3 |  US09    | Eu, como usuário-comprador, desejo visualizar um resumo de cada um dos produtos comprados após finalizar a compra com sucesso, para que eu possa ter todas as informações necessárias para consultas futuras | 1. Os produtos comprados devem ser agrupados em linhas. <br>2. A lista de compras finalizadas deve conter o histórico de compras do usuário <br>3. O resumo da compra deve conter as descrições dos produtos, data, valor, desconto da compra e vendedor |
| E4 |  US10    | Eu, como usuário-comprador, desejo navegar pelos produtos disponíveis na lista de produtos cadastrados dentro do mercado on-line, para que eu possa acompanhar facilmente os produtos que estou interessado em comprar | <br>1. Os produtos devem ser agrupados em colunas <br>2. Cada produto deve conter o nome, uma foto, o preço e a data de validade <br>3. Deve ser possível acessar os detalhes de produtos individuais <br>4. Produtos fora de estoque não devem ser exibidos |
| E4 |  US11    | Eu, como usuário-comprador, desejo pesquisar produtos específicos, que estão presentes na lista de produtos cadastrados no mercado on-line, para que eu possa encontrar e selecionar rapidamente os itens que estou procurando | 1. Deve haver uma barra de pesquisa onde se possa digitar palavras para buscar um produto específico desejado <br>2. Através da busca, deve-se exibir uma lista de todos os produtos cujo título contem a palavra ou conjunto de palavras pesquisados <br>3. Deve ser possível acessar os detalhes de produtos individuais através do clique em um produto específico <br>4. Caso nenhum produto contenha em seu título ou descrição a palavra ou conjunto de palavras pesquisados, deve ser gerado um aviso informando que não foram encontrados produtos correspondentes aos parâmetros buscados |
| E4 |  US12    | Eu, como usuário-comprador, desejo adicionar os produtos, que estão na lista de produtos cadastrados, no meu carrinho de compras, para que eu possa montar uma lista de produtos que eu desejo comprar com desconto | 1. Deve ser possível adicionar um produto ao carrinho de compras através da lista geral de produtos <br>2. Deve ser possível aumentar e diminuir a quantidade do produto a ser adicionado ao carrinho de compras <br>3. Para excluir o produto, deve-se diminuir a quantidade até zero|
| E4 |  US13    | Eu, como usuário-comprador, desejo visualizar os detalhes de um produto, incluindo título, descrição, vendedor do produto, local de retirada do produto, preço e disponibilidade, para que eu possa tomar uma decisão informada sobre a compra | 1. Através da lista geral de produtos, deve ser possível ter acesso aos detalhes de produtos individuais <br>2. Nos detalhes de um produto deve haver título, descrição, vendedor do produto, local de retirada do produto, preço, data de validade e disponibilidade |
| E4 |  US14    | Eu, como usuário-vendedor, quero poder adicionar novos produtos ao mercado on-line, para que potenciais clientes possam vê-los e comprá-los | 1. O cadastro de produtos novos deve conter título, descrição, preço, disponibilidade, validade, foto e quantidade disponível |
| E4 |  US15    | Eu, como usuário-vendedor, quero poder retirar um produto do mercado on-line, para que os clientes não possam comprá-lo | 1. Deve ser possível por parte do usuário-vendedor a seleção de produtos a serem ocultados da lista de produtos disponíveis <br>2. Deve ser possível por parte do usuário-vendedor a exclusão de produtos da sua lista de produtos |
| E4 |  US16    | Eu, como usuário-vendedor, quero visualizar todos os produtos dentro da lista de produtos, para que eu possa administrar meus produtos | 1. Deve ser possível visualizar tanto os produtos disponíveis como os produtos fora de estoque <br>2. Deve ser possível visualizar nome do produto, preço, data de validade e a etiqueta de disponível ou não |
| E4 |  US17    | Eu, como usuário-vendedor, desejo visualizar os detalhes de cada um dos meus produtos, que estão na lista de produtos, para que eu possa tomar decisões sobre o estoque, promoções e estratégia de marketing | 1. Deve ser possível visualizar nome do produto, descrição, preço, validade e foto <br>2. Deve ser possível visualizar a quantidade de unidades disponíveis, quantidade de cupons gerados até o momento, a disponibilidade do produto e a etiqueta de disponível ou não |


## Definição de Preparado

<p align="justify"> &emsp;&emsp;
O conceito de "preparado" refere-se a um conjunto de características que define quando um requisito está preparado para <b>entrar</b> em uma sprint. Ele surge de um acordo entre o time de desenvolvimento e o Product Owner (P.O.), e um requisito deve atender às características definidas para ser considerado "preparado" para ser trabalhado.</p>

<p align="justify"> &emsp;&emsp;
A seguir, apresentamos os pontos elencados pela equipe do projeto para compor a definição de preparado de um requisito:</p>

- O requisito possui a informação necessária para ser trabalhado;
- O requisito está representado dentro de tema e épico;
- O requisito possui história(s) de usuário(s) que o representam e foram validadas pelo P.O. e pela monitora;
- O requisito possui critérios de aceitação validados pelo P.O. e pela monitora;
- O requisito é tecnicamente viável;
- O requisito é testável;
- Caso existam, as dependências dos requisitos foram identificadas.

## Definição de Pronto

<p align="justify"> &emsp;&emsp;
O conceito de "pronto" surge a partir de um acordo que demonstra a qualidade do requisito produzido, que comprova a satisfação de todos com o trabalho realizado. Um requisito só deve ser liberado ou mesmo apresentado na sprint review caso atenda ao conceito estabelecido de “pronto”. É o conjunto de características que define quando um registro está preparado para <b>sair</b> de uma sprint.</p>

<p align="justify"> &emsp;&emsp;
A seguir, apresentamos os pontos elencados pela equipe do projeto para compor a definição de pronto de um requisito:</p>

- O requisito entrega um incremento do produto;
- Os critérios de aceitação relacionados ao requisito são satisfeitos;
- Foi feita a documentação do requisito;
- O código das funcionalidades relacionadas aos requisitos foi revisado por outro(s) membro(s) da equipe;
- O P.O. e a monitora revisaram e aprovaram o requisito implementado;
- O requisito está em conformidade com os padrões de design, usabilidade e desempenho estabelecidos.


## Histórico de versões

|  **Data**  |**Versão** |              **Descrição**                     |   **Editores**   |
| :--------: | :-------: | :-------------------------------------------------------: | :---------------: |
| 29/04/2023 |   `1.0`   | Elencação dos requistos                                   | Sabrina e Cainã   |
| 23/05/2023 |   `1.1`   | Adiconando histórias de usuário                           | Sabrina           |
| 23/05/2023 |   `1.2`   | Critérios de aceitação - BDD                              | Gabrielly e Lucas |
| 31/05/2023 |   `2.0`   | Corrigindo técnica de critério de aceitação, DoR e DoD    | Sabrina e Charles |
| 21/06/2023 |   `2.1`   | Corrigindo critérios de aceitação                         | Gabrielly         |
| 03/07/2023 |   `2.2`   | Corrigindo DOR e DOD                         | Lucas 
| 11/07/2023 |   `2.3`   | Corrigindo critérios de aceitação|     Sabrina
