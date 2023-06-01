# Product Backlog

<p align="justify"> &emsp;&emsp;
O Backlog do Produto é um componente essencial da metodologia ágil SCRUM, que consiste em uma lista contendo todos os requisitos funcionais que vão sendo identificados ao longo do desenvolvimento do produto. Esse artefato é dinâmico e emergente, sendo atualizado constantemente para refletir as necessidades e prioridades do produto. Para auxiliar no planejamento e desenvolvimento do Backlog do Produto, a estrutura SAFe (Scaled Agile Framework) é frequentemente utilizada. Essa estrutura proporciona diretrizes e boas práticas para a gestão ágil de projetos em larga escala, oferecendo uma abordagem eficiente para o alinhamento estratégico, coordenação e colaboração entre as equipes de desenvolvimento.</p>

<p align="justify">
A técnica 3W (who-what-why) foi a abordagem utilizada para estruturar e detalhar as user stories. Ela consiste em responder a três perguntas principais para cada user story: Quem, o quê e por quê.</p>
- Quem: Identifica quem é o usuário ou a persona envolvida na user story. Isso pode ser um cliente, um administrador, um visitante do site, etc. 
- O quê: Descreve a ação ou a tarefa que o usuário ou a persona precisa realizar.
- Por quê: Explica o motivo ou o objetivo por trás da ação descrita. Isso ajuda a fornecer contexto e entender o valor da funcionalidade para o usuário ou para o negócio.

<p align="justify">
Os critérios de aceite apresentados seguem o padrão "Given-When-Then", onde:</p>
- Given (Dado): Descreve a condição inicial ou o contexto em que o teste será realizado, como "Dado que o usuário-comprador criou sua conta com sucesso".
- When (Quando): Indica a ação que será executada, como "Quando tentar fazer login usando o endereço de e-mail e a senha fornecidos durante o processo de criação".
- Then (Então): Especifica o resultado esperado ou o comportamento esperado do sistema, como "Então deve ser capaz de acessar sua conta com sucesso e ter permissão para realizar as ações disponíveis para usuários autenticados".
<p align="justify">
Essa estrutura ajuda a descrever os critérios de aceite de forma clara e concisa, estabelecendo uma relação direta entre a condição inicial, a ação realizada e o resultado esperado. </p>

## Tema

|  **Tema**  | **Descrição** |
| :---------: | :-----------: | 
| T1 |   Gerenciamento de usuários   | 
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
| E1 |   US01   | Eu, como usuário-comprador, desejo criar minha conta com as minhas informações pessoais para poder usufruir de descontos exclusivos em produtos perto do vencimento | <br>1. O cadastro do usuário comprador deve conter nome, endereço de e-mail e senha <br>2. O nome não pode conter caracteres especiais. <br>3. O endereço de e-mail deve conter o caracter especial @ <br>3. Não é possivel cadastrar um e-mail existente <br>4. A senha deve conter oito caracteres <br>5. A senha pode conter caracteres especiais <br>6. A senha pode conter números |
| E1 |  US02    | Eu, como usuário-comprador, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa gerar cupom exclusivos para os produtos selecionados no carrinho de compras | 1. O login deve ser feito com e-mail e senha|
| E2 |  US03    | Eu, como usuário-vendedor, desejo criar minha conta, adicionando minhas informações pessoais para poder aumentar minhas vendas e diminuir o desperdício dos meus alimentos perto do vencimento | 1. O cadastro do usuário comprador deve conter nome, endereço de e-mail e senha <br>2. O nome não pode conter caracteres especiais. <br>3. O endereço de e-mail deve conter o caracter especial @ <br>3. Não é possivel cadastrar um email existente <br>4. A senha deve conter oito caracteres <br>5. A senha pode ocnter caracteres especiais <br>6. A senha pode conter números|
| E2 |  US04    | Eu, como usuário-vendedor, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa disponibilizar seus produtos no site e visualizar o andamento das minhas vendas | 1. O login deve ser feito com e-mail e senha|
| E3 |  US05    | Eu, como usuário-comprador, quero ter a capacidade de salvar itens em meu carrinho para mais tarde, para que eu possa voltar a eles mais tarde sem perder minha seleção |1. Uma lista de itens salvos devem ser visualizados agrupados em colunas <br>2. Uma lista de itens salvos anteriormente deve ser visualizada <br>3. A visualização do item deve conter o nome, a quantidade que se está comprando, preço e desconto <br>4. Os itens salvados devem ser listados dos mais antigos para os mais novos|
| E3 |  US06    | Eu, como usuário-comprador, desejo visualizar  lista de itens que eu adicionei no meu carrinho de compras para que eu possa revisar meu pedido antes de finalizar a compra| 1. A lista de itens deve deve conter o nome, quantidade, preço e desconto <br> 2. O carrinho de compras deve mostrar o valor total da compra <br>3. O carrinho de compras deve mostrar o valor total do desconto <br>4. Cada produto deve conter no mínimo uma quantidade | 
| E3 |  US07    | Eu, como usuário-comprador, quero modificar a quantidade de itens do meu carrinho de compras, para que eu possa ajustar o pedido às minhas necessidades | 1. O usário-comprador pode modificar a quantidade de itens <br>2. O usuário-comprador não pode ultrapassar o número maximo de itens <br>3. O item deve ter no mínimo uma quantidade para  continuar no carrinho de compras <br>4. O valor total do carrinho deve ser atualizado instantaneamente após as edições  |
| E3 |  US08    | Eu, como usuário-comprador, desejo finalizar a compra no meu carrinho e receber a confirmação de compra para que eu possa ir na loja física e retirar meus produtos | 1. O comprovante de compra apresenta cupom dos produtos, local e horário de retirada <br>2. O carrinho de compras deve ter pelo ou menos um item para finalizar a compra|
| E3 |  US09    | Eu, como usuário-comprador, desejo visualizar um resumo de cada um dos produtos comprados após finalizar a compra com sucesso, para que eu possa ter todas as informações necessárias para consultas futuras |1. A produtos comprados deve ser agrupados em colunas. <br>2. A lista de compras finalizadas deve conter o histórico de compras do usuário <br>3. O resumo da compra deve conter a descrição do produto, data, valor, desconto da compra e vendedor |
| E4 |  US10    | Eu, como usuário-comprador, desejo navegar pelos produtos disponíveis na lista de produtos cadastrados dentro do mercado on-line, para que eu possa acompanhar facilmente os produtos que estou interessado em comprar |1. Dado que o usuário-comprador está visualizando o carrinho de compras, quando ele modifica a quantidade de itens no carrinho, então as alterações na quantidade devem ser refletidas corretamente nos preços, quantidades e descontos totais no carrinho.<br>2. Dado que o usuário-comprador modificou a quantidade de itens no carrinho, quando ele recebe um feedback visual, então ele deve ver uma mensagem indicando que as alterações na quantidade foram aplicadas com sucesso.|
| E4 |  US11    | Eu, como usuário-comprador, desejo pesquisar produtos específicos, que estão presentes na lista de produtos cadastrados no mercado on-line, para que eu possa encontrar e selecionar rapidamente os itens que estou procurando|1. Dado que o usuário-comprador está visualizando o carrinho de compras, quando ele já adicionou a compra, então ele deve ter a opção de concluir a compra no carrinho.<br>2. Dado que o usuário-comprador concluiu a compra no carrinho, quando ele recebe uma confirmação de compra, então a confirmação deve incluir detalhes sobre o local e horário de retirada dos produtos, bem como informações sobre os cupons aplicados e seus respectivos descontos.<br>3. Dado que o usuário-comprador concluiu a compra no carrinho, quando ele recebe uma mensagem de confirmação visual, então ele deve ver uma mensagem indicando que a compra foi concluída com sucesso.|
| E4 |  US12    | Eu, como usuário-comprador, desejo adicionar os produtos, que estão na lista de produtos cadastrados no mercado on-line, no meu carrinho de compras, para que eu possa montar uma lista de produtos que eu desejo comprar com desconto | 1. Dado que o usuário-comprador está no mercado on-line, quando ele acessa a lista de produtos cadastrados, então ele deve ver a lista de produtos disponíveis.<br>2. Dado que o usuário-comprador está na lista de produtos disponíveis, quando ele seleciona um produto e o adiciona ao carrinho de compras,então o produto deve ser adicionado corretamente ao carrinho.<br>3. Dado que o usuário-comprador adicionou produtos ao carrinho de compras, quando ele visualiza o carrinho de compras, então os produtos adicionados devem ser exibidos corretamente.<br>4. Dado que o usuário-comprador adicionou produtos ao carrinho de compras, quando ele aperta o botão de adicionar, então ele deve ver uma mensagem indicando que os produtos foram adicionados com sucesso ao carrinho.|
| E4 |  US13    | Eu, como usuário-comprador, desejo visualizar os detalhes de um produto, incluindo título, descrição, vendedor do produto, local de retirada do produto, preço e disponibilidade, para que eu possa tomar uma decisão informada sobre a compra | Dado que o usuário-comprador está navegando pela lista de produtos, quando ele seleciona um produto específico, então ele deve ser capaz de visualizar os detalhes do produto, incluindo título, descrição, vendedor, local de retirada, preço e disponibilidade.|
| E4 |  US14    | Eu, como usuário-vendedor, quero poder adicionar novos produtos ao mercado online, incluindo nome, descrição, preço, disponibilidade, validade, foto e quantidade, para que potenciais clientes possam vê-los e comprá-los|Dado que o usuário-vendedor deseja adicionar um novo produto ao mercado online, quando ele preenche os campos obrigatórios, como nome, descrição, preço, disponibilidade, validade, foto e quantidade, então o produto deve ser adicionado com sucesso à lista de produtos.|
| E4 |  US15    | Eu, como usuário-vendedor, quero poder retirar um produto do mercado online, caso ele não esteja mais disponível ou caso eu decida descontinuá-lo, para que os clientes não possam comprá-lo |Dado que o usuário-vendedor deseja retirar um produto do mercado online, quando ele seleciona a opção de remover o produto da lista,então o produto deve ser removido com sucesso da lista de produtos, impedindo que os clientes possam comprá-lo.|
| E4 |  US16    | Eu, como usuário-vendedor, quero visualizar tanto os produtos disponíveis quanto os produtos fora de estoque dentro da lista de produtos com o nome, preço, data de validade e a etiqueta de disponível ou não, para que eu possa administrar meus produtos  |1. Dado que o usuário-vendedor está gerenciando seus produtos no mercado online, quando ele visualiza a lista de produtos, então ele deve poder ver tanto os produtos disponíveis quanto os produtos fora de estoque.<br>2. Dado que o usuário-vendedor está visualizando a lista de produtos, quando ele verifica cada item, incluindo nome, preço, data de validade e a etiqueta de disponibilidade, então ele pode identificar facilmente quais produtos estão disponíveis e quais estão fora de estoque.|
| E4 |  US17    | Eu, como usuário-vendedor, desejo visualizar os detalhes de cada um dos meus produtos, que estão na lista de produtos, incluindo nome, descrição, preço, disponibilidade, validade, foto, quantidade de unidades disponíveis, quantidade de cupons gerados e etiqueta de disponível ou não, para que eu possa tomar decisões sobre o estoque, promoções e estratégia de marketing |1. Dado que o usuário-vendedor deseja obter informações detalhadas sobre um produto específico que está na lista de produtos, quando ele seleciona o produto, então ele deve ser capaz de visualizar os detalhes do produto, incluindo nome, descrição, preço, disponibilidade, validade, foto, quantidade de unidades disponíveis, quantidade de cupons gerados e etiqueta de disponibilidade.<br>2. Dado que o usuário-vendedor está revisando os detalhes de um produto específico, quando ele verifica as informações, como quantidade de unidades disponíveis, quantidade de cupons gerados e a etiqueta de disponibilidade, então ele pode tomar decisões informadas sobre o estoque, promoções e estratégias de marketing relacionadas ao produto.|


## Definção de Preparado
- A US está associada a um épico
- A US possui descrição detalhada 
- A US possui critérios de aceitação
- A US pode ser feita em uma sprint
- Outras US das quais a US depende já foram desenvolvidas 
- A US e os critérios de aceitação foram validados pelo P.O. e pela monitora 
- A US é tecnicamente viável
- A US é testável

## Definição de Pronto
- Entrega um incremento do produto
- Os critérios de aceitação são satisfeitos
- Foi feita a documentação do uso da funcionalidade
- Passou pelos testes unitários
- Passou pelos testes de integração -
- Passou pelos testes de aceitação
- O código da funcionalidade foi revisado por outro(s) membro(s) da equipe
- O P.O. e a monitora revisaram e aprovaram a funcionalidade implementada
- A funcionalidade está em conformidade com os padrões de design, usabilidade e desempenho estabelecidos.




## Histórico de versões

|  **Data**  |**Versão** |              **Descrição**                     |   **Editores**   |
| :--------: | :-------: | :-------------------------------------------------------: | :---------------: |
| 29/04/2023 |   `1.0`   | Elencação dos requistos                                   | Sabrina e Cainã   |
| 23/05/2023 |   `1.1`   | Adiconando histórias de usuário                           | Sabrina           |
| 23/05/2023 |   `1.2`   | Critérios de aceitação - BDD                              | Gabrielly e Lucas |
| 31/05/2023 |   `2.0`   | Corrigindo técnica de critério de aceitação, DoR e DoD    | Sabrina e Charles |
