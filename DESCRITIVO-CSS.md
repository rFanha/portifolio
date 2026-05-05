## Estrutura geral

O `style.css` organiza o visual do portfólio pessoal:

- define reset, fonte, cores e variáveis globais;
- estiliza cabeçalho, menu desktop, menu mobile, topo, soft skills, tecnologias, sobre, portfólio, formulário e rodapé;
- controla efeitos de hover, sombras, animação da imagem principal e adaptação para telas menores.

## 1. Reset e base global

### `*`

Remove margens e espaçamentos padrão do navegador e faz `width` e `height` considerarem `padding` e `border` com `box-sizing: border-box`.

### `:root`

Guarda as cores e fundos principais do projeto em variáveis CSS:

- `--bg-main`: fundo preto principal;
- `--bg-surface`: fundo escuro alternativo;
- `--bg-card`: gradiente usado em cards;
- `--border-subtle`: cor de bordas discretas;
- `--text-main`: texto principal branco;
- `--text-muted`: texto secundário acinzentado;
- `--accent`: azul escuro;
- `--accent-strong`: azul de destaque.

Isso facilita manter a identidade visual consistente e trocar a paleta em um único lugar.

### `body`

Define a fonte padrão como `Poppins`, usa o fundo principal escuro e aplica `height: 100vh`.

### `.interface`

Limita a largura máxima do conteúdo em `1280px` e centraliza os blocos principais da página.

### `.flex`

Aplica `display: flex` para reutilizar alinhamentos lado a lado nas seções.

## 2. Botões, títulos e efeitos globais

### `.btn-contato a`

Estiliza links de contato como botões, com gradiente azul, texto branco, borda sutil, cantos arredondados e transição.

### `h2.titulo` e `h2.titulo span`

Define o estilo dos títulos das seções. O `span` recebe o azul de destaque para enfatizar parte do texto.

### `.btn-contato a:hover`, `.btn-social a:hover`, `button:hover`

Adiciona brilho azul e aumento de escala ao passar o mouse.

## 3. Cabeçalho

### `header`

Define o espaçamento interno do cabeçalho.

### `header > .interface`

Alinha logo, menu desktop, botão de contato e botão do menu mobile na mesma linha, com espaço entre eles.

### `.logo img` e `.logo-footer img`

Faz as logos ocuparem 100% da largura disponível, preservando proporção. Depois limita os tamanhos com `max-width`.

### `.logo img`

Limita a logo do cabeçalho a `170px`.

### `.logo-footer img`

Limita a logo do rodapé a `110px`.

### `header a`

Remove sublinhado dos links do cabeçalho, aplica cor secundária e prepara a transição de hover.

### `header nav.menu-desktop a:hover`

Deixa o link branco e aumenta levemente o item quando o mouse passa por cima.

### `header nav ul` e `header nav.menu-desktop ul li`

Remove os marcadores da lista e exibe os itens do menu desktop em linha.

### `.btn-abrir-menu` e `.btn-abrir-menu i`

Controla o botão de abertura do menu mobile. Ele fica escondido no desktop e aparece no bloco responsivo. O ícone tem cor branca e tamanho de `40px`.

### `.menu-mobile`, `.overlay-menu`

Mantêm o menu mobile e a camada de overlay escondidos por padrão no desktop.

## 4. Topo do site

### `section.topo-do-site`

Define o espaçamento da primeira seção do site.

### `section.topo-do-site .flex`

Alinha texto e imagem lado a lado, centraliza os elementos e cria um espaçamento de `90px` entre eles.

### `.topo-do-site h1`

Estiliza o título principal do topo, com texto branco, tamanho grande e linha mais compacta.

### `.topo-do-site .txt-topo-site h1 span`

Aplica a cor azul de destaque ao trecho final do título.

### `.topo-do-site .txt-topo-site p`

Estiliza o parágrafo de apresentação com texto secundário e margem vertical.

### `.topo-do-site .img-topo-site img`

Controla a foto principal do topo:

- usa imagem quadrada com `aspect-ratio: 1 / 1`;
- limita a largura máxima ao espaço disponível;
- recorta a imagem com `object-fit: cover`;
- deixa a foto circular com `border-radius: 50%`;
- aplica borda e sombras azuladas;
- ativa a animação de flutuação.

### `@keyframes flutuar`

Move a imagem verticalmente de `top: 0` até `top: 30px`, criando o efeito de flutuação.

## 5. Soft skills

### `section.especialidades`

Define o espaçamento da seção de soft skills.

### `section.especialidades .flex`

Permite quebra de linha dos cards, centraliza os itens e controla o espaçamento entre eles.

### `.especialidades .especialidades-box`

Estiliza cada card de soft skill:

- texto branco;
- largura calculada para três cards por linha no desktop;
- fundo em gradiente escuro;
- borda discreta;
- espaçamento interno;
- margem superior;
- cantos arredondados;
- transição de hover.

### `.especialidades .especialidades-box:hover`

Destaca o card com aumento de escala, sombra azul e borda mais evidente.

### `.especialidades .especialidades-box i`

Estiliza os ícones dos cards com tamanho grande, cor azul e espaçamento.

### `.especialidades .especialidades-box h3`

Define tamanho e margem dos títulos internos dos cards.

## 6. Tecnologias e ferramentas

### `section.tecnologias`

Define o espaçamento da seção de tecnologias.

### `.tecnologias-box`

Cria afastamento entre o título da seção e a lista de tecnologias, sem adicionar caixa visual ao redor.

### `.tecnologias-grid`

Organiza as tecnologias em uma linha flexível com quebra automática, centralização e espaçamento entre tags.

### `.tech-tag`

Estiliza cada tecnologia como uma cápsula:

- usa `inline-flex` para centralizar o texto;
- aplica altura mínima, espaçamento interno e borda totalmente arredondada;
- usa fundo em gradiente escuro azulado;
- define texto branco, peso médio e alinhamento central.

### `.tech-tag:hover`

Eleva levemente a tag, reforça a borda azul e adiciona sombra azul discreta.

## 7. Sobre

### `section.sobre`

Define o espaçamento vertical da seção "Sobre".

### `section.sobre .flex`

Alinha imagem e texto lado a lado, centralizados e com espaçamento entre os blocos.

### `.sobre .txt-sobre`

Define a cor base do texto da seção.

### `.sobre .txt-sobre h2`

Estiliza o título da seção com tamanho grande, linha compacta e margem inferior.

### `.sobre .txt-sobre h2 span`

Aplica destaque azul ao nome e força quebra de linha com `display: block`.

### `.sobre .txt-sobre p`

Define margem, alinhamento justificado e cor secundária para os parágrafos.

### `.img-sobre img`

Controla a foto da seção "Sobre":

- largura máxima fluida;
- altura fixa no desktop;
- recorte com `object-fit: cover`;
- enquadramento vertical ajustado;
- cantos arredondados;
- borda e sombras azuladas.

## 8. Redes sociais

### `.btn-social a`

Estiliza os links sociais como botões circulares, com ícone centralizado, fundo escuro, borda discreta, texto branco e transição.

## 9. Portfólio

### `section.portifolio`

Define o espaçamento da seção de projetos, posiciona a seção como referência para o efeito de fundo, esconde excessos visuais e mantém o fundo preto principal.

### `section.portifolio::before`

Cria um efeito visual azul atrás dos projetos combinando gradiente linear, gradiente radial e blur. O pseudo-elemento fica sem interação (`pointer-events: none`) e atrás do conteúdo.

### `section.portifolio .interface`

Mantém o conteúdo acima do efeito de fundo usando `position: relative` e `z-index: 1`.

### `section.portifolio .flex`

Distribui os cards dos projetos com espaçamento horizontal e margem superior.

### `.img-port`

Define os cards dos projetos:

- largura de `360px` e altura de `460px` no desktop;
- imagem como `background-image`;
- `background-size: cover`;
- posição inicial no topo;
- transição longa para simular rolagem da imagem no hover;
- cursor de clique;
- cantos arredondados;
- posição relativa para receber o overlay.

### `.img-port--tall-scroll`

Ajusta cards cuja imagem precisa de mais altura visual, ampliando o `background-size` e centralizando horizontalmente.

### `.img-port:hover`

Move o fundo até a parte inferior da imagem ao passar o mouse, criando efeito de rolagem do projeto.

### `.img-port--tall-scroll:hover`

Move o fundo ampliado até a parte inferior, mantendo o enquadramento central.

### `.overlay`

Cria a camada sobre o projeto:

- ocupa todo o card;
- usa gradiente escuro azulado;
- herda os cantos arredondados;
- centraliza o conteúdo;
- começa invisível com `opacity: 0`;
- aparece com transição.

### `.overlay-content`

Organiza título, descrição e link em coluna, centralizados e com espaçamento entre eles.

### `.overlay-content h3`

Estiliza o título do projeto dentro do overlay.

### `.overlay-content p`

Estiliza a descrição curta do projeto com texto branco translúcido e boa leitura.

### `.project-link`

Cria o botão "Ver projeto", com gradiente azul, borda sutil, texto branco, largura ajustada ao conteúdo e cantos arredondados.

### `.project-link:hover`

Adiciona sombra azul e deslocamento vertical leve no hover.

### `.img-port:hover .overlay`

Revela o overlay do projeto quando o mouse passa sobre o card.

## 10. Formulário

### `section.formulario`

Define o espaçamento da seção de contato.

### `form`

Limita a largura do formulário, centraliza o bloco, empilha os campos em coluna e define espaçamento entre eles.

### `form input`

Define a aparência básica dos campos de entrada.

### `form input::placeholder`

Aplica a cor secundária ao texto de exemplo dos inputs.

### `form input, form textarea`

Unifica a aparência dos inputs e da área de mensagem:

- largura total;
- fundo escuro translúcido;
- borda discreta;
- remoção do contorno padrão;
- espaçamento interno;
- cantos arredondados;
- texto branco;
- fonte maior.

### `form textarea`

Impede redimensionamento manual e define altura de `150px`.

### `form .btn-enviar`

Centraliza o botão de envio e adiciona margem superior.

### `form .btn-enviar input`

Estiliza o botão "ENVIAR" com largura fixa, gradiente azul, texto branco, peso forte, cursor de clique e transição.

### `form .btn-enviar input:hover`

Aplica brilho azul e aumento de escala ao passar o mouse.

### `#status`

Estiliza a mensagem exibida abaixo do formulário após o envio.

## 11. Rodapé

### `footer`

Define espaçamento do rodapé e adiciona uma linha sutil no topo com `box-shadow` interno.

### `footer .flex`

Distribui logo e ícones sociais nas extremidades no desktop.

### `footer .line-footer`

Controla o espaçamento interno das linhas do rodapé.

### `.borda`

Adiciona uma linha superior de separação.

### `footer .line-footer p i`

Estiliza o ícone do e-mail com azul de destaque e tamanho maior.

### `footer .line-footer p a`

Define a cor branca do link de e-mail.

## 12. Responsividade

### `@media screen and (max-width: 1200px)`

Adapta o site para telas menores. As principais mudanças são:

- `.flex` passa a organizar elementos em coluna;
- o topo usa `column-reverse`, deixando a imagem acima do texto;
- títulos ficam maiores na regra global responsiva;
- menu desktop e botões de contato do cabeçalho ficam ocultos;
- botão do menu mobile aparece;
- menu mobile vira painel lateral fixo;
- imagem do topo fica limitada a `460px`;
- cards de soft skills passam para uma coluna;
- tags de tecnologia ocupam largura total;
- seção "Sobre" centraliza título e botões sociais;
- imagem da seção "Sobre" fica menor e fluida;
- cards de portfólio ficam centralizados e com altura menor;
- rodapé empilha logo e ícones sociais.

### `.menu-mobile`

No responsivo, define o painel lateral:

- fundo azul escuro translúcido;
- borda lateral;
- posição fixa no canto direito;
- altura total da tela;
- largura inicial `0%`;
- limite de `70vw`;
- conteúdo escondido quando fechado;
- transição de abertura.

### `.menu-mobile.abrir-menu`

Expande o menu mobile para `70%` da largura quando a classe é adicionada pelo JavaScript.

### `.menu-mobile.abrir-menu ~ .overlay-menu`

Exibe o overlay quando o menu mobile está aberto.

### `.menu-mobile .btn-fechar` e `.menu-mobile .btn-fechar i`

Estilizam a área e o ícone do botão de fechar.

### `.menu-mobile nav ul`, `.menu-mobile nav ul li a` e `.menu-mobile nav ul a:hover`

Alinham os links à direita, aumentam a área clicável, definem cor e aplicam gradiente azul ao item no hover.

### `.overlay-menu`

Cria a camada fixa que ocupa toda a tela atrás do menu mobile. Ela fica transparente e serve para fechar o menu ao clicar fora dele.

## Resumo final

O `style.css` está dividido por áreas do site. A lógica principal é:

- manter uma identidade visual escura com destaque azul;
- centralizar o conteúdo usando `.interface`;
- organizar layouts com `.flex`;
- destacar botões, cards e links com hover, sombras e transições;
- usar imagens reais do portfólio como elementos principais;
- adaptar a navegação e os blocos para mobile no final do arquivo.
