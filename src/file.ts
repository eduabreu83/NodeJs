
import { readFile, writeFile, unlink } from "fs/promises"
//escrever e criar um arquivo
// ler um arquivo
const exec = async () => {
   console.log('Writing file...')
    const list = [1, 2, 3]
    const list2 = list.join('\n')
   
    await writeFile('./src/test.txt', list2)
console.log('File written successfully')
}

exec()

// ler um arquivo
const ler = async () => {
    const nomearquivo = './src/test.txt'
    const data = await readFile(nomearquivo, {encoding:'utf-8'})

    // trasformar em um array
    const list = data.split('\n')


    //alterar arquivo
    list.push('4')
    const list2 = list.join('\n')
    await writeFile(nomearquivo, list2)
    console.log(list2)
}

ler()

const deletar = async () => {
    await unlink('./src/test.txt')

}

deletar()