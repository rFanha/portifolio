# Descritivo do CSS

Este arquivo explica, de forma simples, a função de cada parte principal do [style.css](C:/projetos/portifolio/style.css).

## Estrutura geral

O `style.css` organiza o visual do portfólio:

- define cores e fontes do projeto
- estiliza cabeçalho, topo, especialidades, sobre, portfólio, formulário e rodapé
- controla animações e responsividade

## 1. Reset e base global

### `*`

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

Função:

- remove margens e espaçamentos padrão do navegador
- faz largura e altura dos elementos considerarem `padding` e `border`

### `:root`

```css
:root {
    --bg-main: #000000;
    --bg-surface: #121212;
    --bg-card: linear-gradient(180deg, #1a1a1a 0%, rgba(0, 0, 0, 0.92) 100%);
    --border-subtle: #232323;
    --text-main: #ffffff;
    --text-muted: #8c96a5;
    --accent: #001432;
    --accent-strong: #0046f5;
}
```

Função:

- guarda as cores principais do projeto em variáveis
- facilita trocar a paleta sem alterar o CSS inteiro

### `body`

Função:

- define a fonte padrão como `Poppins`
- define o fundo principal escuro do site

### `.interface`

Função:

- limita a largura máxima do conteúdo
- centraliza as seções na página

### `.flex`

Função:

- aplica `display: flex`
- serve como base para alinhar elementos lado a lado

## 2. Botões e títulos

### `.btn-contato a`

Função:

- estiliza os links que funcionam como botão
- aplica fundo azul, borda arredondada e destaque visual

### `h2.titulo` e `h2.titulo span`

Função:

- definem o estilo dos títulos principais das seções
- o `span` recebe a cor de destaque azul

### `.btn-contato a:hover`, `.btn-social a:hover`, `button:hover`

Função:

- aplica efeito ao passar o mouse
- adiciona brilho e pequeno aumento de escala

## 3. Cabeçalho

### `header`

Função:

- define espaçamento superior e lateral do cabeçalho

### `header > .interface`

Função:

- posiciona logo, menu e botão de contato na mesma linha
- usa alinhamento e espaçamento entre eles

### `.logo img`, `.logo-footer img`

Função:

- controla o tamanho das logos
- impede que a imagem fique maior que o necessário

### `header a`

Função:

- define a cor padrão dos links do menu
- remove sublinhado

### `header nav.menu-desktop a:hover`

Função:

- muda a cor do item do menu ao passar o mouse

### `header nav ul` e `header nav.menu-desktop ul li`

Função:

- remove bullets da lista
- deixa os itens do menu em linha

### `.btn-abrir-menu` e `.btn-abrir-menu i`

Função:

- controla o botão do menu mobile
- o ícone só aparece em telas menores

### `.menu-mobile`, `.overlay-menu`

Função:

- deixam o menu mobile e a camada de fundo escondidos por padrão

## 4. Topo do site

### `section.topo-do-site`

Função:

- define o espaçamento da primeira seção

### `section.topo-do-site .flex`

Função:

- alinha texto e imagem lado a lado
- cria distância entre os dois blocos

### `.topo-do-site h1`

Função:

- estiliza o título principal do hero

### `.topo-do-site .txt-topo-site h1 span`

Função:

- aplica cor de destaque ao ponto final do título

### `.topo-do-site .txt-topo-site p`

Função:

- estiliza o parágrafo de apresentação

### `.topo-do-site .img-topo-site img`

Função:

- controla tamanho e enquadramento da foto do topo
- aplica borda arredondada, borda sutil e brilho azul
- mantém a animação de flutuação

### `@keyframes flutuar`

Função:

- cria a animação vertical da imagem do topo

## 5. Especialidades

### `section.especialidades`

Função:

- define espaçamento da seção

### `section.especialidades .flex`

Função:

- ativa quebra de linha dos cards
- centraliza os cards e controla o espaçamento

### `.especialidades .especialidades-box`

Função:

- estiliza cada card de especialidade
- define largura, fundo, borda, espaçamento interno e cantos arredondados

### `.especialidades .especialidades-box:hover`

Função:

- dá destaque visual ao card no hover

### `.especialidades .especialidades-box i`

Função:

- estiliza os ícones dos cards

### `.especialidades .especialidades-box h3`

Função:

- estiliza os títulos internos dos cards

## 6. Tecnologias e ferramentas

### `section.tecnologias`

FunÃ§Ã£o:

- define o espaÃ§amento da seÃ§Ã£o de tecnologias

### `.tecnologias-box`

FunÃ§Ã£o:

- cria um agrupamento simples para dar espaço entre o título e as tecnologias
- não adiciona caixa visual, borda ou fundo ao redor das tags

### `.tecnologias-grid`

FunÃ§Ã£o:

- organiza as tecnologias em linhas com quebra automÃ¡tica
- centraliza os itens dentro da seÃ§Ã£o

### `.tech-tag`

FunÃ§Ã£o:

- estiliza cada tecnologia como uma cÃ¡psula destacada
- aplica borda arredondada, contraste e leitura centralizada

### `.tech-tag:hover`

FunÃ§Ã£o:

- adiciona leve elevaÃ§Ã£o e brilho azul ao passar o mouse

## 7. Sobre

### `section.sobre`

Função:

- define o espaçamento da seção “Sobre”

### `section.sobre .flex`

Função:

- posiciona imagem e texto lado a lado

### `.sobre .txt-sobre`

Função:

- define a cor base do texto da seção

### `.sobre .txt-sobre h2`

Função:

- estiliza o título da seção

### `.sobre .txt-sobre h2 span`

Função:

- aplica destaque azul ao nome
- força quebra de linha com `display: block`

### `.sobre .txt-sobre p`

Função:

- define espaçamento e alinhamento dos parágrafos
- usa cor secundária para leitura confortável

### `.img-sobre img`

Função:

- controla tamanho e enquadramento da foto da seção “Sobre”
- aplica borda arredondada, brilho azul e sombra

## 8. Redes sociais

### `.btn-social a`

Função:

- estiliza os links dos ícones sociais como botões circulares

## 9. Portfólio

### `section.portifolio`

Função:

- define espaçamento da seção
- define a seção como base para efeitos visuais posicionados no fundo
- mantém o fundo principal preto para evitar corte visual entre seções

### `section.portifolio::before`

Função:

- cria um degradê azul espalhado por toda a largura da seção
- faz o efeito crescer suavemente, ganhar força no meio e diminuir no final
- adiciona foco visual aos projetos sem criar uma faixa dura entre seções

### `section.portifolio .interface`

Função:

- mantém o conteúdo da seção acima do degradê de fundo

### `section.portifolio .flex`

Função:

- distribui os cards dos projetos horizontalmente

### `.img-port`

Função:

- define tamanho, borda arredondada e comportamento das imagens dos projetos

### `.img-port--tall-scroll`

Função:

- aumenta a escala da imagem de fundo em cards com imagem menos alta
- equilibra o efeito de rolagem visual em relação aos outros projetos

### `.img-port:hover`

Função:

- move a imagem de fundo ao passar o mouse

### `.img-port--tall-scroll:hover`

Função:

- move a imagem ampliada mantendo o enquadramento central na horizontal

### `.overlay`

Função:

- cria uma camada escura sobre o projeto
- posiciona o conteúdo do projeto na parte inferior do card

### `.overlay-content`

Função:

- organiza título, texto e link em coluna dentro do overlay

### `.overlay-content h3`

Função:

- estiliza o título do projeto dentro do overlay

### `.overlay-content p`

Função:

- estiliza a descrição curta do projeto

### `.project-link`

Função:

- cria um botão de link para acessar o projeto

### `.project-link:hover`

Função:

- adiciona destaque visual ao link ao passar o mouse

### `.img-port:hover .overlay`

Função:

- revela a camada quando o mouse passa sobre o card do projeto

## 10. Formulário

### `section.formulario`

Função:

- define espaçamento da seção de contato

### `form`

Função:

- limita a largura do formulário
- empilha os campos em coluna

### `form input`

Função:

- define estilo básico dos campos de entrada

### `form input::placeholder`

Função:

- muda a cor do texto de exemplo dentro dos inputs

### `form input, form textarea`

Função:

- unifica aparência dos campos e textarea

### `form textarea`

Função:

- impede redimensionamento manual
- define altura padrão

### `form .btn-enviar`

Função:

- centraliza o botão de envio

### `form .btn-enviar input`

Função:

- estiliza o botão “ENVIAR”

### `form .btn-enviar input:hover`

Função:

- aplica brilho e escala ao passar o mouse

### `#status`

Função:

- estiliza a mensagem exibida após envio do formulário

## 11. Rodapé

### `footer`

Função:

- define espaçamento do rodapé
- cria separação visual em relação ao conteúdo anterior

### `footer .flex`

Função:

- distribui logo e ícones sociais

### `footer .line-footer`

Função:

- controla o espaçamento das linhas internas do rodapé

### `.borda`

Função:

- adiciona a linha superior de separação no rodapé

### `footer .line-footer p i`

Função:

- estiliza o ícone do e-mail

### `footer .line-footer p a`

Função:

- define a cor do link de e-mail

## 12. Responsividade

### `@media screen and (max-width: 1200px)`

Função:

- adapta o layout para telas menores

Principais mudanças dentro desse bloco:

- `.flex` vira coluna
- o topo passa a mostrar imagem e texto empilhados
- o menu desktop some
- o botão do menu mobile aparece
- especialidades viram uma coluna
- o título de especialidades ganha espaço extra antes dos cards
- imagens ficam com largura mais fluida
- rodapé passa a empilhar conteúdo

### `.menu-mobile`

Função:

- define aparência e comportamento do menu lateral em telas menores

### `.menu-mobile.abrir-menu`

Função:

- expande o menu quando a classe é adicionada via JavaScript

### `.menu-mobile.abrir-menu ~ .overlay-menu`

Função:

- ativa a camada escura por trás do menu aberto

### `.overlay-menu`

Função:

- cobre a tela quando o menu mobile está aberto

## Resumo final

O `style.css` está dividido em blocos por seção do site. A lógica principal dele é:

- definir uma identidade visual com variáveis
- organizar o layout com `flex`
- destacar pontos importantes com azul
- usar hover e sombras para dar profundidade
- adaptar tudo para mobile no final do arquivo








