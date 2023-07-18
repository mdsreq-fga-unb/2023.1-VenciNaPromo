# Casos de Uso

## Identificação dos Atores

Ator | Nome | Descrição
---- | ---- | ---------
01 | Vendedor | Usuário habilitado a cadastrar e gerenciar produtos pelo sistema
02 | Cliente | Usuário habilitado comprar produtos pelo sistema
03 | Usuário | Usuário que compartilha ações dos atores vendedor e cliente

## Identificação dos Casos de Uso

  UC  | Nome do UC | 
----- | ---------- | 
UC-01 | Cadastrar usuário | 
UC-02 | Realizar login | 
UC-03 | Visualizar usuário | 
UC-04 | Cadastrar produto | 
UC-05 | Visualizar produto | 
UC-06 | Deletar produto | 
UC-07 | Editar visibilidade do produto | 
UC-08 | Pesquisar produto |
UC-09 | Adicionar produto no carrinho de compras | 
UC-10 | Visualizar carrinho de compras | 
UC-14 | Visualizar históricos | 

## Identificação das dependências

  UC  | Nome do UC | 
----- | ---------- | 
UC-05 x UC-06 | Extends 
UC-05 x UC-07 | Extends
UC-05 x UC-08 | Extends
UC-10 x UC-09 | Extends 

## Elementos do Diagrama

### Atores

Representam usuários que fazem a interação com o sistema. Geralmente são representados por bonecos (Figura 1).

<br><div align="center" style="text-align: left">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/documentacao/ghpages/assets/images/UC/uc1ator.png">

<p>Figura 1: Figura que representa os atores no diagrama.</p>
</div><br>

### Limite do Sistema

Define até onde o sistema tem seu escopo, normamente são representados por uma caixa (Figura 2).

<br><div align="center" style="text-align: left">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/documentacao/ghpages/assets/images/UC/uc3sistema.png">

<p>Figura 2: Figura que representa os limites do sistema.</p>
</div><br>

### Caso de Uso

Representam os diferentes usos que o usuário pode fazer. Geralmente são definidos na forma oval horizontal (Figura 3).

<br><div align="center" style="text-align: left">
<img src="https://raw.githubusercontent.com/mdsreq-fga-unb/2023.1-VenciNaPromo/documentacao/ghpages/assets/images/UC/uc2uc.png">

<p>Figura 3: Figura que representa os casos de uso.</p>
</div><br>

### Relacionamentos

São utilizados para representar, através de setas legendadas, as interações entre os atores e os casos de uso. Os relacionamentos podem ser definidos de duas formas, sendo elas:

**Inclusão**: Relação em que um caso de uso quando precisa ter sua funcionalidade executada através de outro caso de uso.

- Notação no diagrama: *<< includes >>*

**Extensão**: São usados para mostrar um comportamento opcional, que somente é executado sobre determinadas condições.

- Notação no diagrama: *<< extends >>*


## Diagrama de Casos de Uso

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/112ce9b2-f8ac-44c4-aec7-e918c5b4e798" id="daYbnWY9B7yn"></iframe></div>


## Especificação dos Casos de Uso

### Caso de Uso:  UC-01 x Cadastrar Usuário
##### Por: Gabrielly Assunção Rodrigues
Descrição: Esse caso de uso (UC-01) é de Realizar Cadastro

* Atores: Comprador e Vendedor
* Pré-Condições: 
* Pós-Condições: O login foi cadastrado no sistema com os dados validos que o ator informou.

* Requisitos Funcionais:

Épico | US | Descrição |
----- | --------- | ----|
E1 |  US01    | Eu, como usuário-comprador, desejo criar minha conta com as minhas informações pessoais para poder usufruir de descontos exclusivos em produtos perto do vencimento
E2 |  US03    | Eu, como usuário-vendedor, desejo criar minha conta, adicionando minhas informações pessoais, para poder aumentar minhas vendas e diminuir o desperdício dos meus produtos perto do vencimento

* Requisitos Não-Funcionais:

|    URPS+     |  ID  |                      Descrição                      |
|--------------|------|----------------------------------------------------|
| Implementação | RN1  | A interface do sistema deve ser desenvolvida com o framework ReactJS de JavaScript |
| Implementação | RN2  | O servidor do sistema deve ser desenvolvido com o framework NodeJS de JavaScript |
| Implementação | RN3  | O servidor do sistema deve ser testado com o framework Jest de JavaScript |
| Implementação | RN4  | O Banco de Dados do sistema deve ser em NodeJS |
| Implementação | RN6  | O sistema deve assegurar os dados do usuário com autenticação JWT e AuthGuard |
| Interface    | RN7  | O sistema deve ser uma plataforma web |

#### Fluxo Básico: Cadastro realizado
1. O caso de uso se inicia quando o ator acessa a tela de cadastro.
2. O sistema solicita as informações para o cadastro.
3. O ator informa seu nome, seu email, tipo de usuário, sua senha e a confirmação da senha.
4. O sistema salva as informações fornecidas.
5. O caso de uso se encerra.

#### Fluxo de Exceção A: Ausência de Informações
 - No passo 3, se o ator não preencher algum dos campos solicitados:
1. O sistema não salva as informações cadastradas.
2. O sistema informa que há alguma informação ausênte.
3. O fluxo retorna para o passo 2 do fluxo base.

#### Fluxo de Exceção B: Informações incorretas
 - No passo 3, caso as credenciais estejam incorretas:
1. O sistema não valida as credenciais do usuário.
2. O sistema informa que o nome não pode conter números ou que a senha deve ter no mínimo 8 caracteres.
3. O fluxo retorna para o passo 2 do fluxo base.

### Caso de Uso:  UC-02 x Realizar Login
##### Por: Sabrina Caldas Berno
Descrição: Esse caso de uso (UC-02) é de Realizar Login

* Atores: Vendedor-Comprador
* Pré-Condições: O ator deve acessar o site.
* Pós-Condições: O ator  cadastrado no sistema com os dados que informou.

* Requisitos Funcionais: 

Épico | US      | Descrição 
----- | ------- | -- 
E1 |  US02    | Eu, como usuário-comprador, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa gerar cupons exclusivos para os produtos selecionados no carrinho de compras 
E2 |  US04    | Eu, como usuário-vendedor, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa disponibilizar meus produtos no site e visualizar o andamento das minhas venda

* Requisitos Não-Funcionais:
  
|    URPS+     |  ID  |                      Descrição                      |
|--------------|------|----------------------------------------------------|
| Implementação | RN1  | A interface do sistema deve ser desenvolvida com o framework ReactJS de JavaScript |
| Implementação | RN2  | O servidor do sistema deve ser desenvolvido com o framework NodeJS de JavaScript |
| Implementação | RN3  | O servidor do sistema deve ser testado com o framework Jest de JavaScript |
| Implementação | RN4  | O Banco de Dados do sistema deve ser o MongoDB |
| Implementação | RN6  | O sistema deve assegurar os dados do usuário com autenticação JWT e AuthGuard |
| Interface    | RN7  | O sistema deve ser uma plataforma web |

#### Fluxo Básico: Login autenticado
1. O caso de uso se inicia quando o ator acessa a tela de login.
2. O sistema solicita as informações para login.
3. O ator informa seu email e sua senha.
4. O sistema valida as credenciais do usuário.
5. O sistema informa que a autenticação foi realizada com sucesso.
6. O caso de uso se encerra.

#### Fluxo de Exceção A: Usuário não cadastrado
 - No passo 3, se o ator não estiver cadastrado:
1. O sistema não valida as credenciais do usuário.
2. O sistema informa que o ator não está cadastrado.
3. O fluxo retorna para o passo 2 do fluxo base.

#### Fluxo de Exceção B: Informações incorretas
 - No passo 3, caso as credenciais estejam incorretas:
1. O sistema não valida as credenciais do usuário.
2. O sistema informa que o email ou a senha está incorreta.
3.  O fluxo retorna para o passo 2 do fluxo base.

### Caso de Uso: UC-03 x Visualizar Usuário
##### Por: Lucas Heler Lopes
Descrição: Esse caso de uso (UC-03) é de visualizar o usuário.

* Atores: Vendedor-Comprador
* Pré-Condições: O ator deve estar autenticado no sistema.
* Pós-Condições: O ator visualizar informações sobre o próprio perfil de usuário.

* Requisitos Funcionais: 

Épico | US | Descrição | 
----- | -- | --------- |
E1 |  US2    | Eu, como usuário-comprador, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa gerar cupons exclusivos para os produtos selecionados no carrinho de compras
E2 |  US04    | Eu, como usuário-vendedor, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa disponibilizar meus produtos no site e visualizar o andamento das minhas vendas

* Requisitos Não-Funcionais:

URPS+ | ID | Descrição 
----- | -- | ---------
| Implementação |   RN1   | A interface do sistema deve ser desenvolvido com o framework ReactJS de JavaScript |
| Implementação |   RN2   | O servidor do sistema deve ser desenvolvido com o framework NodeJS de JavaScript |
| Implementação |   RN3   | O servidor do sistema deve ser testado com o framework Jest de JavaScript |
| Implementação |   RN4   | O Banco de Dados do sistema deve ser em NodeJS |
| Implementação |   RN6   | O sistema deve assegurar os dados do usuário com autenticação JWT e AuthGuard |
| Interface |   RN7   | O sistema deve ser uma plataforma web |

#### Fluxo Básico: Visualizar Perfil de Usuário
1.  O caso de uso se inicia quando o ator autenticado abre o aplicativo.
2.  O ator navega para a seção "Perfil".
3.  O sistema exibe as informações pessoais do ator, como nome, foto de perfil e localização.
4.  O ator pode visualizar as informações disponíveis no perfil.
5.  O ator pode fechar a visualização do perfil e retornar à tela anterior.
6.  O caso de uso é encerrado.

#### Fluxo de Exceção: Falha de Conexão com o Servidor
- No passo 3, caso o sistema encontre uma conexão instável ou falha na recuperação das informações do Perfil de Usuário:
1. O sistema encontra uma conexão instável ou falha na recuperação das informações do servidor.
2.  O sistema exibe uma mensagem de erro na tela informando ao ator que não foi possível recuperar as informações do perfil devido a uma falha na conexão.
3.  O sistema oferece a opção de tentar novamente ou verificar a conexão de internet.
4.  O ator seleciona a opção de tentar novamente.
5.  O fluxo retorna para o passo 3 do fluxo base.

### Caso de Uso:  UC-04 x Cadastrar produto
##### Por: Cainã Valença de Freitas
Descrição: Esse caso de uso (UC-04) é de Cadastrar produto

* Atores: Vendedor
* Pré-Condições: O ator deve acessar o site, O ator deve estar cadastrado no sistema, O ator deve estar autenticado no sistema.
* Pós-Condições: O produto foi cadastrado no sistema com os dados validos que o ator informou.

* Requisitos Funcionais: 

Épico | US      | Descrição 
----- | --       | --
E4    |  US14   | Eu, como usuário-vendedor, quero poder adicionar novos produtos ao mercado on-line, para que potenciais clientes possam vê-los e comprá-los
E4    |  US16   | Eu, como usuário-vendedor, quero visualizar todos os produtos dentro da lista de produtos, para que eu possa administrar meus produtos

* Requisitos Não-Funcionais:

|    URPS+     |  ID  |                      Descrição                      |
|--------------|------|----------------------------------------------------|
| Implementação | RN1  | A interface do sistema deve ser desenvolvida com o framework ReactJS de JavaScript |
| Implementação | RN2  | O servidor do sistema deve ser desenvolvido com o framework NodeJS de JavaScript |
| Implementação | RN3  | O servidor do sistema deve ser testado com o framework Jest de JavaScript |
| Implementação | RN4  | O Banco de Dados do sistema deve ser o MongoDB |
| Implementação | RN6  | O sistema deve assegurar os dados do usuário com autenticação JWT e AuthGuard |
| Interface    | RN7  | O sistema deve ser uma plataforma web |

#### Fluxo Básico: Produto cadastrado
1. O caso de uso se inicia quando o ator acessa a tela da lista de produtos.
2. O ator visualiza o modal para registrar seu produto.
3. O ator informa nome, descrição, preço, categoria, imagem, data de validade e quantidade.
4. O sistema valida os dados do novo produto.
5. O sistema informa que o cadastro foi realizado com sucesso.
6. O caso de uso se encerra.

#### Fluxo de Exceção A: Informações invalidas
 - No passo 4, caso os dados inseridos estejam incorretos:
1. O sistema não valida os dados do novo produto.
2. O sistema informa que o cadastro de produtos falhou e informa os campos que falharam.
3. O fluxo retorna para o passo 2 do fluxo base.

#### Fluxo de Exceção B: Falha no cadastro do produto
 - No passo 5, caso ocorra uma falha ao cadastrar o produto no sistema:
1. O sistema não consegue cadastrar o novo produto.
2. O sistema exibe uma mensagem de erro informando que o cadastro do produto falhou.
3. O ator tem a opção de tentar novamente ou cancelar o cadastro.
4. Se o ator optar por tentar novamente, o fluxo retorna para o passo 2 do fluxo base.
5. Se o ator optar por cancelar o cadastro, o fluxo retorna para o passo 6 do fluxo base.

#### Fluxo de Exceção C: Cancelar o cadastro do produto
 - No passo 2, caso o ator decida cancelar o cadastro do produto:
1. O ator seleciona a opção de cancelar o cadastro.
2. O fluxo retorna para o passo 6 do fluxo base.

### Caso de Uso:  UC-08 x Pesquisar produto
##### Por: Charles Serafim Morais
Descrição: Esse caso de uso (UC-08) é de Pesquisar produto

* Atores: Vendedor-Comprador
* Pré-Condições: O ator deve acessar a página os produtos do mercado.
* Pós-Condições: O ator verá apenas os produtos correspondentes aos parâmetros pesquisados.

* Requisitos Funcionais: 

Épico | US | Descrição 
----- | --------- | ----
E4 |  US10    | Eu, como usuário-comprador, desejo visualizar os produtos disponíveis na lista de produtos cadastrados dentro do mercado on-line, para que eu possa acompanhar facilmente os produtos que estou interessado em comprar
E4 |  US11    | Eu, como usuário-comprador, desejo pesquisar produtos específicos, que estão presentes na lista de produtos cadastrados no mercado on-line, para que eu possa encontrar e selecionar rapidamente os itens que estou procurando
E4 |  US13    | Eu, como usuário-comprador, desejo visualizar os detalhes de um produto, incluindo título, descrição, vendedor do produto, local de retirada do produto, preço e disponibilidade, para que eu possa tomar uma decisão informada sobre a compra

* Requisitos Não-Funcionais:

|    URPS+     |  ID  |                      Descrição                      |
|--------------|------|----------------------------------------------------|
| Implementação | RN1  | A interface do sistema deve ser desenvolvida com o framework ReactJS de JavaScript |
| Implementação | RN2  | O servidor do sistema deve ser desenvolvido com o framework NodeJS de JavaScript |
| Implementação | RN3  | O servidor do sistema deve ser testado com o framework Jest de JavaScript |
| Implementação | RN4  | O Banco de Dados do sistema deve ser o MongoDB |
| Implementação | RN6  | O sistema deve assegurar os dados do usuário com autenticação JWT e AuthGuard |
| Interface    | RN7  | O sistema deve ser uma plataforma web |

#### Fluxo Básico: Produto(s) encontrado(s)
1. O caso de uso se inicia quando o ator acessa a tela contendo os produtos disponíveis cadastrados no site.
2. O ator digita uma ou mais palavras na barra de busca.
3. O sistema exibe apenas produtos que contenham a(s) palavra(s) pesquisadas em seu título ou descrição, conforme o ator as digita.
4. O ator seleciona um produto para consultar seus detalhes.
6. O caso de uso se encerra.

#### Fluxo de Exceção A: Produto(s) não encontrado(s)
 - No passo 3, se não houverem produtos que contenham a(s) palavra(s) em seu título ou descrição:
1. O sistema não exibe nenhum produto.
2. O sistema exibe a mensagem "Nenhum produto encontrado".
3. O fluxo retorna para o passo 2 do fluxo base.

#### Fluxo de Exceção B: Nenhum produto cadastrado
 - No passo 1, se não houverem produtos cadastrados no site:
1. O sistema não exibe nenhum produto.
2. O sistema exibe a mensagem "Nenhum produto disponível no momento".
3. O fluxo retorna para o passo 1 do fluxo base.


### Histórico de Revisão

Data | Versão | Descrição | Autor
---- | ------ | --------- | -----
12/07/2023 | 1.0 | Identificação de autores, casos de usos e dependências e especificação do UC-02 - realizar login | Sabrina 
12/07/2023 | 1.1 | Especificação do UC-01 - cadastro de usuário | Gabrielly 
13/07/2023 | 1.2 | Alteração no diagrama e ajuste de tabelas quebradas| Gabrielly 
13/07/2023 | 1.3 | Especificação do UC-04 - cadastro de produto | Cainã
13/07/2023 | 1.4 | Especificação do UC-03 - visualização de usuário | Lucas
13/07/2023 | 1.5 | Formatação, adição das legendas do diagrama e especificação do UC-08 - buscar produto | Charles


