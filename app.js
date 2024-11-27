/**
 * Sorteio de uma carta
 * Exemplo de uso de um vetor
 * @author Wesley Souza
 */

function sortear() {
    let nipes=['♥','♦','♣','♠']
    let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]

    // sorteio do indice do vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let facesSorteada = faces[Math.floor(Math.random() * 13)]
    console.log(`${facesSorteada} de ${nipeSorteado}`)
    console.log(" Abaixo exemplo para exibir face e nipe")
    console.log(`${faces[0]} de ${nipes[1]}`) // Exibir A de ♦
    console.log(`${faces[11]} de ${nipes[0]}`) // Exibir Q de ♥
 
}


   
