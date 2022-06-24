// Crie um array que receba 5 itens e exiba no console.
const musicas = ["Cores", "Amarelo", "Revés", "Complicated", "Cotidiano"]
console.log(musicas)

// Utilize um método para adicionar um nome ao inicio do array.
musicas.splice(0,0, "Radar")
console.log(musicas)

// Utilize um método para remover o último nome do array.
musicas.splice(5,1)
console.log(musicas)

// Utilize um método para adicionar dois nomes ao fim do array.
musicas.splice(5,0, "Yesterday","Help!")
console.log(musicas)


// Utilize um método para remover o primeiro nome do array.
musicas.splice(0,1)
console.log(musicas)

// Utilize um método para organizar em ordem crescente o seguinte array:
// let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort( function (x,y){
    return x-y
}
)
console.log(numbers)