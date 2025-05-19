let nome: string = "eduardo";
let idade: number = 20;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);

//comando para compilar o arquivo
// npm run build
//comando para executar o arquivo
// npm run start

//biblioteca para compilar o typescript ao mesmo tempo
// npm isntall -D ts-node
//comando para executar o arquivo
// npx ts-node teste.ts

//começa a instalação do zero
    // npm install -D typescript    
    // npm install -D ts-node
//criar o arquivo de configuração
    // npx tsc --init
    //procurar a opção "outDir" e colocar o caminho da pasta onde os arquivos compilados serão salvos
//configurar o arquivo package.json
    // "scripts": { "start": "ts-node .test.ts }
//criar a pasta src e dentro dela criar o arquivo teste.ts