# Cadastro de carro

**Requisito Funcional (RF)**
Deve ser possível cadastrar um novo carro.

**Regra de Negócio (RN)**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado, por padrão, com disponibilidade.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**Requisito Funcional (RF)**
Deve ser possível listar todos os carros disponivéis.
Deve ser possível listar todos os carros disponíveis pelo nome da cateogoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regra de Negócio (RN)**
O usuário não preciso estar logado no sistema.

# Cadastro de Espicificação no carro

**Requisito Funcional (RF)**
Deve ser possível cadastrar uma especificação para um carro.

**Regra de Negócio (RN)**
Não deve ser possível cadastrar um especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**Requisito Funcional (RF)**
Deve ser possível cadastrar a imagem do carro.

**Requisito Não Funcional (RNF)**
Utilizar o multer para o upload dos arquivos.

**Regra de Negócio (RN)**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisito Funcional (RF)**
Deve ser possível cadastrar um aluguel.

**Regra de Negócio (RN)**
O aluguel deve ter duração mínima de 24 hora.
Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro.
O usuário deve estar logado na aplicação.
Ao realizar um aluguel, o status do carro deverá se alterado para indisponivel

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do alguel.
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do alguel.
O usuário deve estar logado na aplicação.

# Recuperar Senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para  a recuperação deve expirar em 3 horas
