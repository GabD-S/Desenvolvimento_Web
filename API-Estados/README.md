# Desafio - JavaScript, DOM e Fetch API

Neste desafio, implementei uma tela em HTML e CSS, seguindo um layout desenvolvido para esta atividade. O layout pode ser encontrado neste [link](https://www.figma.com/file/xJGTYOuvNS3iuLr1meqx5u/Entrega-3?type=design&node-id=0%3A1&t=yyDpjMU6RozT27ZG-1) do Figma. Embora a implementação da tela em si não tenha sido difícil, o desafio foi fazer com que a tabela exibisse todos os municípios da UF selecionada.

Para isso, utilizei a API do IBGE para buscar os dados dos municípios de um estado. A documentação da API está disponível neste [link](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-Municipios-estadosUFMunicipiosGet). Para fazer requisições HTTP para a API, utilizei a ferramenta JavaScript chamada [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). O endpoint que utilizei foi o de municípios por UF, que retorna um array de objetos com os dados dos municípios. Com esses dados, a tabela foi populada com o nome de todos os municípios da UF selecionada.

- Utilize o endpoint de UFs da API do IBGE para buscar os dados das UFs, que pode ser encontrado neste [link](https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-UFs-estadosGet), embora essa etapa não tenha sido obrigatória.
