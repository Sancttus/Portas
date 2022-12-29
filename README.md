<h2>Projeto Monty Hall (portas), Nesse projeto foi utilizado:</h2>

<ul>
  <li>React</li>
  <li>Next.js</li>
  <li>JavaScript</li>
  <li>Html</li>
  <li>Css</li>
  <li>Typescript</li>
</ul>

 <hr/>
 
 <h2>********************* Dependências *********************</h2> 
<p>npx create-next-app jogo-quiz</p>
<p>npm install --save-dev @types/react@18.0.1</p>

<h2>Entendendo o Projeto</h2>

<p> 
O projeto é um jogo no estilo Mont hall aqui no Brasil ficou conhecido como jogo das portas, o jogo consistem em acerta em qual porta está o premio.
O projeto segue o mesmo estilo, vamos ter uma tela de configuração do jogo onde vamos dizer a quantidade de portas e quantas portas estaram premiadas,
o premio é uma caixa de presente criano em css puro, as portas podem ser selecionadas e desselecionar conforme o jogador queira e ao clica na maçaneta a porta abre.
a tela do jogo terá a quantidade de portas configurada e um botão para reiniciar o game.
</p>

<hr/>

<h2>Arquivos do Projeto</h2>

<h2>Todos os arquivos que compõem o projeto</h2>
<img src="public\Projeto.png"/>

<h2>Pasta components</h2>
<p>Pasta components: temos 4 arquivos Cartao, EntradaNumerica, Porta, Prensente</p>
  <ul>
   <ul>Cartão: Arquivo que contém os códigos para geração dos cartões da configuração inicial do jogo. </ul>
   <ul>EntradaNumerica: Arquivo que contém os códigos para configurar a quantidade de portas e quantidade de presentes do jogo.</ul>
   <ul>Porta: Arquivo contém os códigos para criação da porta, com os códigos em Css para definir tamanho, largura, cor, etc. também recebe dados do arquivo portaModel               que faz as validações, se a porta está selecionada e se tem presente atrás da porta ou se está aberta ou fechada.</ul>
   <ul>Prensente:Arquivo que contém os códigos para a criação do presente, esse arquivo também recebe os códigos do Css de tamanho, largura, cor, etc.</ul>
  </ul>

<img src="public\pasta_components.png"/>

<h2>Pasta Function</h2>
<p>Pasta Function: Possui apenas um arquivo Portas.jsx</p>
<p>Portas: Esse arquivo contém os códigos que gera a quantidade de portas criadas em qual vai estar o presente, também atualiza o arquivo portaModel.
</p>
<img src="public\pasta_function.png"/>

<h2>Pasta Model</h2>
<p>Pasta Model: Possui apenas um arquivo Porta.jsx</p>
<p>Porta: Arquivo possui os códigos responsáveis pelas funções da porta, dentre elas se está aberta, fechada, selecionada.</p>
<img src="public\pasta_model.png"/>
