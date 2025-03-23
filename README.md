## Inicializar um projeto Node Typescript

- Comando para criar o pacote inicial

```bash
    npm init -y
```

- Comando para instalar as dependências do Typescript

```bash
    npm i -D typescript ts-node-dev
    ## Caso tenha o tsc instaldo de forma global executar o proximo comando
    npx tsc --init
```

- Com o comando `npx tsc --init` será criado o arquivo de configuração do Typescript `tsconfig.json` na raiz do projeto

## Instalado dependências do projeto

- Instalar o Express Framework

```bash
    npm i express
    npm i -D @types/express
    npm i -D jest ts-jest @types/jest
```