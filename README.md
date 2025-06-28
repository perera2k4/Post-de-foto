<div align="center">
  <img src="./imgs/if-logo.png" alt="Logo da Instituição" width="450"/>
  <h3>Instituto Federal de Educação, Ciência e Tecnologia do Triângulo Mineiro - Campus Ituiutaba</h3>
  <p><em>Gradução em Tecnólogia em <u>Análise e Desenvolvimento de Sistemas</u></em></p>
</div>

# 📸 Post de Foto - Trabalho Interação JavaScript

## 📋 Descrição do Projeto

Este projeto é uma aplicação web que simula um post de foto em uma rede social, desenvolvido como parte do trabalho de **Interação JavaScript**. A aplicação permite aos usuários interagir com uma foto através de curtidas e comentários.

## 🎯 Funcionalidades Implementadas

### ❤️ Sistema de Curtidas
- **Botão Like**: Clique no ícone de coração branco para curtir a foto (ícone fica vermelho)
- **Botão Dislike**: Clique novamente no coração vermelho para descurtir (ícone volta ao branco)
- **Double-click na foto**: Duplo clique na imagem também permite curtir a foto

### 💬 Sistema de Comentários
- **Formulário oculto**: O formulário de comentários fica inicialmente escondido
- **Mostrar formulário**: Clique no ícone de balão para exibir o formulário
- **Adicionar comentários**: Digite seu comentário e clique em "Enviar" para adicioná-lo à lista
- **Persistência**: Os comentários são salvos no localStorage e carregados automaticamente

## 🛠️ Tecnologias Utilizadas

- **HTML**: Estrutura da página
- **CSS**: Estilização e layout responsivo
- **JavaScript**: Lógica de interação e manipulação do DOM
- **Google Fonts**: Fonte Roboto para melhor tipografia

## 📁 Estrutura do Projeto

```
📦 post-de-foto/
├── 📄 index.html          # Página principal
├── 🎨 estilos.css         # Estilos CSS
├── ⚡ scripts.js          # Lógica JavaScript
├── 📖 README.md           # Documentação
├── 🚫 .gitignore          # Arquivos ignorados pelo Git
├── 📁 icones/             # Ícones da aplicação
│   ├── 🖼️ comente.png     # Ícone de comentário
│   ├── ❤️ coracao_red.png # Coração vermelho (curtido)
│   └── 🤍 coracao.png     # Coração branco (não curtido)
└── 📁 imgs/               # Imagens do projeto
    ├── 🖼️ if-logo.png     # Logo IFTM     
    └── 🖼️ foto1.jpg       # Foto principal do post
```

## 🚀 Como Executar

1. **Acesse o Github Pages:** [`https://perera2k4.github.io/Post-de-foto/`](https://perera2k4.github.io/Post-de-foto/)
<br>ou
2. **Clone ou baixe o projeto**
3. **Abra o arquivo [`index.html`](index.html )** em qualquer navegador web moderno
4. **Interaja com a aplicação**:
   - Clique no coração para curtir/descurtir
   - Duplo clique na foto para curtir
   - Clique no ícone de comentário para abrir o formulário
   - Digite e envie comentários

## 💡 Funcionalidades Técnicas

### JavaScript Features
- **Event Listeners**: Gerenciamento de cliques e double-clicks
- **DOM Manipulation**: Alteração dinâmica de elementos HTML
- **LocalStorage**: Persistência de dados dos comentários
- **Conditional Logic**: Sistema de toggle para curtidas

### CSS Features
- **Flexbox Layout**: Layout responsivo e centralizado
- **Custom Scrollbar**: Área de comentários com scroll personalizado

## 📝 Créditos

- **Obra de Arte**: Angela Kalokairinou
- **Desenvolvimento**: <u>Bruno Pereira</u>
- **Projeto**: Trabalho de Interação JavaScript, professor <u>Me. Daniel Pimentel</u>