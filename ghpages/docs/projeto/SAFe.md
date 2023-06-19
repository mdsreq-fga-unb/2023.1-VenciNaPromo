# Scale Agile Framework - SAFe


<p align="justify"> &emsp;&emsp;
O SAFe 6.0 é uma base de conhecimento de princípios, práticas e competências integradas comprovadas para alcançar agilidade empresarial usando Lean, Agile e DevOps. Ele é construído em torno da "Seven Core Competencies of Business Agility", que são fundamentais para alcançar e sustentar uma vantagem competitiva em uma era digital cada vez mais presente. O Modelo de requisitos utilizado pelo SAFe fornece uma estrutura de requisitos escalável que demonstra uma maneira de expressar comportamentos do sistema:</p>

- **Épicos:** uma iniciativa de desenvolvimento de solução significativa;
- **Capacidades:** representa uma grande funcionalidade de solução. Ela deve ser decomposta em funcionalidades a serem implementadas;
- **Features:** representa a funcionalidade da solução que fornece valor comercial, atende a uma necessidade das partes interessadas. Ela inclui uma hipótese de benefício e critérios de aceitação;
- **Histórias:** descrições curtas de uma pequena parte da funcionalidade desejada, escritas da perspectiva do usuário. Elas são o principal artefato usado para definir o comportamentodosistema no Agile.

## SAFe Backlog VenciNaPromo


###***Tema Estratégico:*** 
<p align="justify"> &emsp;&emsp;

<u>MELHORAR A COMPRA E VENDA DE PRODUTOS PRÓXIMOS AO VENCIMENTO</u>

</p>

### Épicos

|  **Tema**  | **Épico** | **Descrição** |
| :---------: | :-----------: | :---------:|
| T1 |  E1    | Gerenciamento de usuário-comprador 
| T1 |  E2    | Gerenciamento de usuário-vendedor
| T2 |  E3    | Gerenciamento do compra
| T2 |  E4    | Gerenciamento do produto


### Capacidade

|  **Épico**  | **Capacidade** | **Descrição** |
| :---------: | :-----------: | :---------:|
| E1 |  C1    | Cadastro e autenticação de usuário-comprador
| E2 |  C2    | Cadastro e autenticação de usuário-vendedor
| E3 |  C3    | carrinho de compras
| E3 |  C4    | Finalização da compra
| E3 |  C5    | Histórico de compras
| E4 |  C6    | Listagem e pesquisa de produtos
| E4 |  C7    | Gerenciamento de produtos pelo vendedor


### Funcionalidade

|  **Capacidade**  | **Funcionalidade** | **Descrição** |
| :---------: | :-----------: | :---------:|
| C1 |  F1    | Cadastro de usuário-comprador 
| C1 |  F2    | Login de usuário-comprador
| C2 |  F3    | Cadastro de usuário-vendedor
| C2 |  F4    | Login de usuário-vendedor
| C3 |  F5    | Adição de itens ao carrinho de compras
| C3 |  F6    | Visualização e edição do carrinho de compras
| C4 |  F7    | Finalização da compra
| C5 |  F8    | Visualização do histórico de compras
| C6 |  F9    | Listagem de produtos
| C6 |  F10    | Pesquisa de produtos
| C6 |  F11    | Detalhes do produto
| C7 |  F12    | Cadastro de produtos pelo vendedor
| C7 |  F13    | Remoção de produtos pelo vendedor
| C7 |  F14    | Visualização e gerenciamento de produtos pelo vendedor


### User Story

|  **Funcionalidade**  | **US** | **Descrição** | **Critérios de Aceitação** |
| :---------: | :-----------: | :---------:| :------------: |
| F1 |   US01   | Eu, como usuário-comprador, desejo criar minha conta com as minhas informações pessoais para poder usufruir de descontos exclusivos em produtos perto do vencimento | 1. O cadastro do usuário-comprador deve conter nome, endereço de e-mail e senha <br>2. O nome não pode conter caracteres especiais. <br>3. O endereço de e-mail deve conter o caracter especial "@" <br>4. Não deve ser possível cadastrar um e-mail já cadastrado <br>5. A senha deve conter oito caracteres <br>6. A senha pode conter caracteres especiais <br>7. A senha pode conter números |
| F2 |  US02    | Eu, como usuário-comprador, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa gerar cupons exclusivos para os produtos selecionados no carrinho de compras | 1. O login deve ser feito com o e-mail e a senha cadastrados |
| F3 |  US03    | Eu, como usuário-vendedor, desejo criar minha conta, adicionando minhas informações pessoais, para poder aumentar minhas vendas e diminuir o desperdício dos meus produtos perto do vencimento | 1. O cadastro do usuário-comprador deve conter nome, endereço de e-mail e senha <br>2. O nome não pode conter caracteres especiais. <br>3. O endereço de e-mail deve conter o caracter especial "@" <br>4. Não deve ser possível cadastrar um e-mail já cadastrado <br>5. A senha deve conter oito caracteres <br>6. A senha pode conter caracteres especiais <br>7. A senha pode conter números |
| F4 |  US04    | Eu, como usuário-vendedor, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa disponibilizar meus produtos no site e visualizar o andamento das minhas vendas | 1. O login deve ser feito com o e-mail e a senha cadastrados |
| F5 |  US05    | Eu, como usuário-comprador, quero ter a capacidade de salvar itens em meu carrinho, para que eu possa voltar a eles mais tarde sem perder minha seleção | 1. Uma lista de itens salvos deve ser visualizada com os itens agrupados em colunas <br>2. Uma lista de itens salvos anteriormente deve ser visualizada <br>3. A visualização do item deve conter o nome, a quantidade que se está comprando, preço e desconto <br>4. Os itens salvos devem ser listados dos mais antigos para os mais novos |
| F6 |  US06    | Eu, como usuário-comprador, desejo visualizar a lista de itens que eu adicionei no meu carrinho de compras para que eu possa revisar meu pedido antes de finalizar a compra | 1. A lista de itens deve deve conter o nome, quantidade, preço e desconto <br> 2. O carrinho de compras deve mostrar o valor total da compra <br>3. O carrinho de compras deve mostrar o valor total do desconto <br>4. Cada produto deve conter uma quantidade mínima | 
| F6 |  US07    | Eu, como usuário-comprador, quero modificar a quantidade de itens do meu carrinho de compras, para que eu possa ajustar o pedido às minhas necessidades | 1. O usário-comprador pode modificar a quantidade de itens <br>2. O usuário-comprador não pode ultrapassar o número máximo de itens para cada produto <br>3. O item deve ter no mínimo uma quantidade para permanecer no carrinho de compras <br>4. O valor total do carrinho deve ser atualizado instantaneamente após as edições |
| F7 |  US08    | Eu, como usuário-comprador, desejo finalizar a compra no meu carrinho, para que eu possa ir à loja física retirar meus produtos | 1. Deve ser gerado um comprovante de confirmação da compra <br>2. O comprovante de compra deve apresentar cupom dos produtos, local e horário de retirada <br>3. O carrinho de compras deve ter pelo menos um item para finalizar a compra |
| F8 |  US09    | Eu, como usuário-comprador, desejo visualizar um resumo de cada um dos produtos comprados após finalizar a compra com sucesso, para que eu possa ter todas as informações necessárias para consultas futuras | 1. Os produtos comprados devem ser agrupados em colunas. <br>2. A lista de compras finalizadas deve conter o histórico de compras do usuário <br>3. O resumo da compra deve conter as descrições dos produtos, data, valor, desconto da compra e vendedor |
| F9 |  US10    | Eu, como usuário-comprador, desejo navegar pelos produtos disponíveis na lista de produtos cadastrados dentro do mercado on-line, para que eu possa acompanhar facilmente os produtos que estou interessado em comprar | <br>1. Os produtos devem ser agrupados em colunas <br>2. Cada produto deve conter o nome, uma foto, o preço e a data de validade <br>3. Deve ser possível acessar os detalhes de produtos individuais <br>4. Produtos fora de estoque não devem ser exibidos |
| F10 |  US11    | Eu, como usuário-comprador, desejo pesquisar produtos específicos, que estão presentes na lista de produtos cadastrados no mercado on-line, para que eu possa encontrar e selecionar rapidamente os itens que estou procurando | 1. Deve haver uma barra de pesquisa onde se possa digitar palavras para buscar um produto específico desejado <br>2. Através da busca, deve-se exibir uma lista de todos os produtos cujo título ou descrição contenham a palavra ou conjunto de palavras pesquisados <br>3. Deve ser possível acessar os detalhes de produtos individuais através do clique em um produto específico <br>4. Caso nenhum produto contenha em seu título ou descrição a palavra ou conjunto de palavras pesquisados, deve ser gerado um aviso informando que não foram encontrados produtos correspondentes aos parâmetros buscados |
| F5 |  US12    | Eu, como usuário-comprador, desejo adicionar os produtos, que estão na lista de produtos cadastrados no mercado on-line, no meu carrinho de compras, para que eu possa montar uma lista de produtos que eu desejo comprar com desconto | 1. Deve ser possível adicionar um produto ao carrinho de compras através da lista geral de produtos <br>2. Deve ser possível aumentar e diminuir a quantidade do produto a ser adicionado ao carrinho de compras |
| F11 |  US13    | Eu, como usuário-comprador, desejo visualizar os detalhes de um produto, incluindo título, descrição, vendedor do produto, local de retirada do produto, preço e disponibilidade, para que eu possa tomar uma decisão informada sobre a compra | 1. Através da lista geral de produtos, deve ser possível ter acesso aos detalhes de produtos individuais <br>2. Nos detalhes de um produto deve haver título, descrição, vendedor do produto, local de retirada do produto, preço, data de validade e disponibilidade |
| F12 |  US14    | Eu, como usuário-vendedor, quero poder adicionar novos produtos ao mercado on-line, para que potenciais clientes possam vê-los e comprá-los | 1. O cadastro de produtos novos deve conter título, descrição, preço, disponibilidade, validade, foto e quantidade disponível |
| F13 |  US15    | Eu, como usuário-vendedor, quero poder retirar um produto do mercado on-line, para que os clientes não possam comprá-lo | 1. Deve ser possível por parte do usuário-vendedor a seleção de produtos a serem ocultados da lista de produtos disponíveis <br>2. Deve ser possível por parte do usuário-vendedor a exclusão de produtos da sua lista de produtos |
| F9 |  US16    | Eu, como usuário-vendedor, quero visualizar todos os produtos dentro da lista de produtos, para que eu possa administrar meus produtos | 1. Deve ser possível visualizar tanto os produtos disponíveis como os produtos fora de estoque <br>2. Deve ser possível visualizar nome do produto, preço, data de validade e a etiqueta de disponível ou não |
| F14 |  US17    | Eu, como usuário-vendedor, desejo visualizar os detalhes de cada um dos meus produtos, que estão na lista de produtos, para que eu possa tomar decisões sobre o estoque, promoções e estratégia de marketing | 1. Deve ser possível visualizar nome do produto, descrição, preço, validade e foto <br>2. Deve ser possível visualizar a quantidade de unidades disponíveis, quantidade de cupons gerados até o momento, a disponibilidade do produto e a etiqueta de disponível ou não |


## Histórico de Versões

|  **Data**  |**Versão** |    **Descrição**     |   **Editores**   |
| :--------: | :-------: | :------------------: | :--------------: |
| 16/06/2023 |   `1.0`   |  Criação do Framework      | Sabrina  |
| 17/06/2023 |   `1.1`   |  Adição dos épicos e capacidades     | Gabrielly  |
| 18/06/2023 |   `1.2`   |  Adição das features e user stories     | Gabrielly  |
| 18/06/2023 |   `1.3`   |  Correções     | Gabrielly  |



