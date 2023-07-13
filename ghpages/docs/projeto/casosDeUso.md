# Casos de Uso

## Identificação dos Atores

Ator | Nome | Descrição
---- | ---- | ---------
01 | Vendedor | Usuário habilitado a cadastrar e gerenciar produtos pelo sistema
02 | Comprador | Usuário habilitado comprar produtos pelo sistema
02 | Vendedor-Comprador | Usuário que compartilha ações dos atores vendedor e comprador


## Identificação dos Casos de Uso

  UC  | Nome do UC | Agente
----- | ---------- | ------
UC-01 | Cadastrar usuário | Vendedor-Comprador
UC-02 | Realizar login | Vendedor-Comprador
UC-03 | Visualizar usuário | Vendedor-Comprador
UC-04 | Cadastrar produto | Vendedor
UC-05 | Visualizar produto | Vendedor-Comprador
UC-06 | Deletar produto | Vendedor
UC-07 | Editar visibilidade do produto | Vendedor
UC-08 | Pesquisar produto | Vendedor-Comprador
UC-09 | Adicionar produto no carrinho de compras | Comprador
UC-10 | Visualizar carrinho de compras | Comprador
UC-11 | Modificar quantidade de itens no carrinho de compras | Comprador
UC-12 | Excluir itens no carrinho de compras | Comprador
UC-13 | Finalizar compra | Comprador
UC-14 | Visualizar históricos | Vendedor-Comprador
UC-15 | Visualizar cupom | Comprador 

## Identificação das dependências
  UC  | Nome do UC | 
----- | ---------- | 
UC-05 x UC-06 | Extends 
UC-05 x UC-07 | Extends
UC-05 x UC-08 | Extends
UC-13 x UC-15 | Include
UC-10 x UC-09 | Extends 
UC-10 x UC-11 | Extends 
UC-10 x UC-12 | Extends 
UC-10 x UC-13 | Extends 


## Diagrama de Casos de Uso

![UML completo]()

## Especificação dos Casos de Uso

### Histórico de Revisão

Data | Versão | Descrição | Autor
---- | ------ | --------- | -----
12/07/2023 | 1.0 | Identificação de autores, casos de usos e dependências e especificação UC-01| Sabrina 


### Caso de Uso:  UC-01 x Realizar Login
##### Por: Sabrina Caldas Berno
Descrição: Esse caso de uso (UC-01) é de Realizar Login

* Atores: Vendedor-Comprador
* Pré-Condições: O ator deve acessar o site.
* Pós-Condições: O ator  cadastrado no sistema com os dados que informou.
* Requisitos Funcionais: 

Épico | US | Descrição 
----- | ------- | -- |
E1 |  US02    | Eu, como usuário-comprador, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa gerar cupons exclusivos para os produtos selecionados no carrinho de compras 
E2 |  US04    | Eu, como usuário-vendedor, desejo fazer login na minha conta utilizando meu endereço de e-mail e senha, para que eu possa disponibilizar meus produtos no site e visualizar o andamento das minhas venda
* Requisitos Não-Funcionais:

URPS+ | ID | Descrição 
----- | -- | ---------
| Implementação |   RN1   | A interface do sistema deve ser desenvolvido com o framework ReactJS de JavaScript |
| Implementação |   RN2   | O servidor do sistema deve ser desenvolvido com o framework NodeJS de JavaScript |
| Implementação |   RN3   | O servidor do sistema deve ser testado com o framework Jest de JavaScript |
| Implementação |   RN4   | O Banco de Dados do sistema deve ser em NodeJS |
| Implementação |   RN6   | O sistema deve assegurar os dados do usuário com autenticação JWT e AuthGuard |
| Interface |   RN7   | O sistema deve ser uma plataforma web |

#### Fluxo Básico: Login autenticado
1. O caso de uso se inicia quando o ator acessa a tela de login.
2. O sistema solicita as informações para login.
3. O ator informa seu email e sua senha.
4. O sistema valida as credenciais do usuário.
5. O sistema informa que a autenticação foi realizada com sucesso
6. O caso de uso se encerra

#### Fluxo de Exceção A: Usuário não cadastrado
 - No passo 3, se o ator não estiver cadastrado:
1. O sistema não valida as credenciais do usuário.
2. O sistema informa que o ator não está cadastrado
3. O fluxo retorna para o passo 2 do fluxo base

#### Fluxo de Exceção B: Informações incorretas
 - No passo 3, caso as credenciais estejam incorretas.
1. O sistema não valida as credenciais do usuário.
2. O sistema informa que o email ou a senha está incorreta
3.  O fluxo retorna para o passo 2 do fluxo base
