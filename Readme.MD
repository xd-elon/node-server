**RF**  => Requisitos funcionais
**RNF** => Requisitos não funcionais
**RN**  => Regra de negocio

# Cadastro de carro

**RF** 
  Deve ser possivel cadastrar um novo carro.
  Deve ser possivel listar todas as categorias

**RN**  
  Não deve ser possivel cadastrar com placa ja existente.
  Não deve ser possivel alterar a placa de um carro ja cadastrado.
  O carro deve ser cadastrado com disponibilidade por padrão.
  O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Listagem de carros

**RF** 
  Deve ser possivel listar todos os carros disponiveis
  Deve ser possivel listar todos os carros disponiveis pela categoria
  Deve ser possivel listar todos os carros disponiveis nome da marca
  Deve ser possivel listar todos os carros disponiveis nome do carro

**RN**
  O usuario não precisar estar logado no  sistema.

# Listagem de Especificações no carros

**RF** 
  Deve ser possivel cadastrar uma especificação para um carro não cadastrado.
  Deve ser possivel listar todas as especificações.
  Deve ser possivel listar todos os carros.

**RN**
  Não deve ser possivel cadastrar uma especificação para um carro carro ja cadastrado.
  Não deve ser possivel cadastrar uma especificação ja existente para o mesmo carro.

# Cadastro de imagem do carro

**RF**
  Deve ser possivel cadastrar a imagem do carro.
  Deve ser possivel listar todos de carros.

**RNF**
  Utilizar o multer para upload dos  arquivos.

**RN**
  O usuario deve poder cadastrar mais de uma imagem para carro.
  O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Aluguel de carro

**RF**
  Deve ser posssivel cadastrar um aluguel

**RNF**

**RN**
  O aluguel deve ter duração minima de 24 horas.
  Não deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario
  Não deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro