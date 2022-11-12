# To-do

- [x] Endpoint Calculate Mean
  - [x] Service
  - [x] Controller
  - [x] Routes
  - [x] Tests
- [x] Endpoint CEP
  - [x] Service
  - [x] Controller
  - [x] Routes
  - [x] Tests
- [x] Docker


# Instruções

- Comando utilizado ( na raiz do projeto ) para criar imagem: docker build -t apimepoupe .
- Comando utilizado para levantar container: docker run -d -p 3035:3035 --name=apimepoupe apimepoupe

## Endpoints:

###  Cálculo da média(POST): localhost:3035/mean/ 
     Parâmetros: "firstNumber" e "secondNumber"
###  Consulta de CEP(POST): localhost:3035/cep/
     Parâmetro: "cep"