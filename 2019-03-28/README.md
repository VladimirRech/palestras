# Styled Components

Site oficial: https://www.styled-components.com/

Documentação: https://www.styled-components.com/docs

## PASSO 1

Criar uma base de react utilizando o comando:

```
create-react-app styled-components-demo
```

Caso você não tenha o comando instalado, pode fazer através de:

```
yarn add create-react-app -g
```

Caso na tenha o yarn:

```
npm install -g yarn
```

Caso não tenha o npm... ai você se vira :heart:

## PASSO 2

Instalar a lib do Styled Components no seu projeto:

```
yarn add styled-components
```

## PASSO 3 - ENTENDENDO

Como é o padrão do React?

- Temos arquivos puros .css para estilização dos componentes;
- Dentro dos arquivos .js nós importamos o css em questão para estilizar arquivos;
- Utiliza-se as "classes" ou "id" ou "seletores" para personalizar a aparência do seu projeto;
- Muito próximo do que nós já conhecemos com HTML + CSS :blush:

Com styled-components, isso passa a ser diferente!

- Cria NOVOS componentes;
- Sua única e exclusiva função é: a sua estilização! :open_mouth:
- Ao invés de usar tags nativas e classes, vamos usar componentes em React com a única diferença que eles já terão por definição um estilo;

## PASSO 4

Vamos fazer uma limpeza no projeto default!

Removendo:

- Arquivos \*.css;
- Arquivos \*.teste.js;
- Imagens;
- Service Worker;

## PASSO 5

- Deixar apenas um "Hello World";

## PASSO 6

- Vamos agora, criar um arquivo .js para definir toda a nossa estilização;
- Note que a partir de agora, por mais estranho que pareça, não vamos usar CSS para escrever CSS!
- Criar um novo arquivo chamado styles.js;
- O nosso objetivo agora é: alterar o texto do "Hello World" para uma cor vermelha, por exemplo;
- Ao invés de criar um "class" para este html, vamos então criar um "novo componente" com o único objetivo de deixar um texto vermelho;
- O nome deste componente poderia ser Title, por exemplo;

### App.js

```js
import React, { Component } from "react";
import { Title } from "./styles";
class App extends Component {
  render() {
    return (
      <div>
        <Title>Hello World</Title>
      </div>
    );
  }
}
export default App;
```

### Styles.js

```js
import styled from "styled-components"; // importa o pacote
const Title = styled.h1`
  color: #f00;
`;
export { Title };
```

- Note que: criamos uma variável que recebe uma função styled;
- Essa função é uma função "especial" da linguagem JavaScript moderna que permite que uma função se comporte como uma string;
- Essa técnica se chama Tagged template strings: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings#Tagged_template_strings
- No VSCode para ver a sintaxe com hightlight precisa-se uma extensão: styled-components;

### Nota

Se estivermos no ReactNative, basta utilizar a seguinte importação:

```js
import styled from "styled-components/native"; // importa o pacote
...
```

### Tá e pq?

O bacana é que ao utilizar styled-components nós temos a certeza que uma estilização nunca vai afetar outro componente da nossa aplicação, eles são _autocontidos_.

O nome disso no CSS é CSS Escopado! É o estilo que pertence ao escopo!

Quando temos várias classes, geralmente essas classes tem nomes iguais... Exemplo: "btn-1", "big-image", etc...

Por isso, conseguimos reaproveitar de VERDADE componentes de um projeto em outro! Sem a interdependência de outros arquivos CSS!

## SINTAXE "SASS"

Conseguimos aninhar nossas propriedades de acordo com a estrutura de componentes:

### App.js

```js
import React, { Component } from "react";
import { Title } from "./styles";
class App extends Component {
  render() {
    return (
      <div>
        <Title>
          Hello World
          <span>texto menor</span>
        </Title>
      </div>
    );
  }
}
export default App;
```

### Styles.js

```js
import styled from "styled-components"; // importa o pacote
const Title = styled.h1`
  color: #f00;
  span {
    font-size: 12px;
  }
`;
export { Title };
```

- Vantagem: não precisamos criar um componente para TODA a estilização que formos fazer! Só quando fizer sentido!
- Quando criar um novo? Quando tivermos blocos! Exemplo: Formulários, Seção de Destques de uma Home;

## PASSANDO PROPS

E quando temos a necessidade de criar diferentes estilos para o mesmo componente?

Por exemplo botões:

- Um botão padrão;
- Um botão de warning;
- Um botão de error;
- Um botão maior;
- Um botão menor;
- Etc...

### App.js

```js
import React, { Component } from "react";
import { Title } from "./styles";
class App extends Component {
  render() {
    return (
      <div>
        <Title fontSize={20}>
          Hello World
          <span>texto menor</span>
        </Title>
      </div>
    );
  }
}
export default App;
```

### Styles.js

```js
import styled from "styled-components"; // importa o pacote
const Title = styled.h1`
  color: #f00;
  font-size: ${props => `${props.fontSize}px`};
  span {
    font-size: 12px;
  }
`;
export { Title };
```

Conseguimos então acessar facilmente as propriedades dos styleds components;

## HERDANDO PROPRIEDADES

Uma funcionalidade muito bacana também é a possibilidade de herdar as propriedades de um outro styled-component.

### App.js

```js
import React, { Component } from "react";
import { Title, TitleSmall } from "./styles";
class App extends Component {
  render() {
    return (
      <div>
        <Title fontSize={20}>
          Hello World
          <span>texto menor</span>
        </Title>
        <TitleSmall>
          Novo Título Pequeno
          <span>texto menor</span>
        </TitleSmall>
      </div>
    );
  }
}
export default App;
```

### Styles.js

```js
import styled from "styled-components"; // importa o pacote
const Title = styled.h1`
  color: #f00;
  background: #000;
  font-size: ${props => `${props.fontSize}px`};
  span {
    font-size: 12px;
  }
`;

const TitleSmall = style(Title)`
    color: #00f;
    font-size: 16px;
`;
export { Title, TitleSmall };
```

## CONCLUSÃO

Com essa demonstração vimos o poder dos styled-components;

É importante lembrar que aprender styled-componente não tira a necessidade de aprender CSS, que é a base para a criação de suas propriedades;

Também, temos de fato componentes totalmente modulares que podem ser "copiados" para novos projetos;

Uma ótima maneira de criar suas próprias libs de componentes visuais;
