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
O projeto é um jogo no estilo Mont hall aqui no Brasil ficou conhecido como jogo das portas, o jogo consistem em acerta em qual porta está o prêmio.
O projeto segue o mesmo estilo, vamos ter uma tela de configuração do jogo onde vamos dizer a quantidade de portas e qual porta estará o prêmio, é uma caixa de presente criado em css puro, as portas podem ser selecionadas e  conforme o jogador queira e ao clicar na maçaneta a porta abre.
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
   <ul>EntradaNumerica: Arquivo que contém os códigos para configurar a quantidade de portas e qual porta está o presente jogo.</ul>
   <ul>Porta: Arquivo contém os códigos para criação da porta, com os códigos em Css para definir tamanho, largura, cor, etc. também recebe dados do arquivo portaModel               que faz as validações, se a porta está selecionada e se tem presente atrás da porta ou se está aberta ou fechada.</ul>
   <ul>Presente:Arquivo que contém os códigos para a criação do presente, esse arquivo também recebe os códigos do Css de tamanho, largura, cor, etc.</ul>
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

<h2>Pasta Page/Jogo/[portas]</h2>
<p>Pasta [portas]: Possui apenas um arquivo [itemPresente].jsx</p>
<p>[itemPresente]:Este arquivo esta entre parênteses por que é um funcionalidade do Next.js de id dinâmico, esse arquivo controla a rota, validação de quantidade        porta e presente.</p>
<img src="public\pasta_page.png"/>

<h2>Pasta Page/Jogo/index</h2>
<p>Pasta Page: index.jsx</p>
<p>index: Esse é o arquivo central, ele importa todos os outros e ele que renderiza tudo.</p>
<img src="public\Projeto.png"/>

<h2>Pasta styles</h2>
<p>Pasta styles: Arquivos.css</p>
<p>Arquivos.css: Esse é o arquivo central das configuração css, nele está tudo que se refere a formatação de styles de todos os arquivos.</p>
<img src="public\Projeto.png"/>

<h2>Tela configuração Inicial do jogo</h2>
<p>Tela Inicial: Nessa tela podemos configura a quantidade de porta e em qual porta estará o presente.</p>
<img src="public\tela_inicial_confi.png"/>

<h2>Tela do jogo</h2>
<p>Tela do jogo: Nessa tela o jogo está rodando, há três portas e entre elas há um presente, podemos selecionar, remove a seleção, abrir ao click na maçaneta.</p>
<img src="public\tela_do_game.png"/>

<h2>Tela do jogo selecionando uma porta</h2>
<p>selecionando uma porta: Nessa tela o jogo está rodando, podemos observar que a porta  de número 2 estar com uma borda amarela, esse a caracteristica da seleção,
   quando 'clickamos' na porta ela seleciona, serve para marca em qual porta há o presente.
</p>
<img src="public\tela_do_game.png"/>

<h2>Tela do jogo porta aberta vazia</h2>
<p>porta aberta vazia: Nessa tela o jogo está rodando, podemos observar que a porta  de número 2 estará aberta mas não há presente nela significando que você errou.
</p>
<img src="public\porta_aberta.png"/>

<h2>Tela do jogo porta aberta premiada</h2>
<p>porta aberta vazia: Nessa tela o jogo está rodando, podemos observar que a porta  de número 1 estara abertamas e há presente nela siginicando que você venceu o jogo, para reinicia-lo basta 'clickar' no botão 'Reiniciar' e você será levando a Tela configuração Inicial do jogo.
</p>
<img src="public\porta_premiada.png"/>



