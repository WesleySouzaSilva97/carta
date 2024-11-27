/**
 * Sorteio de uma carta
 * Exemplo de uso de um vetor
 * @author Wesley Souza
 */

function sortear() {
    let nipes = ['♥', '♦', '♣', '♠']
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    // sorteio do indice do vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let faceSorteada = faces[Math.floor(Math.random() * 13)]
    /**console.log(`${facesSorteada} de ${nipeSorteado}`)
    console.log(" Abaixo exemplo para exibir face e nipe")
    console.log(`${faces[0]} de ${nipes[1]}`) // Exibir A de ♦
    console.log(`${faces[11]} de ${nipes[0]}`) // Exibir Q de ♥*/

    // Determinar a cor com base no nipe sorteado
    let cor
    if (nipeSorteado === '♥' || nipeSorteado === '♦') {
        cor = '#ff0000'
    } else {
        cor = '#000'
    }
    // renderizar o canto superior esquedo da carta
    // a linha abaixo adciona a div identificada como 'supEsq' a face eo nipe sorteado e também tags <div> adicionais
    document.getElementById('supEsq').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    // a linha abaixo  muda o css ref a tag identificada
    document.getElementById('supEsq').style.color = cor 

    // rendenrizar o centro da carta 

    let cc = document.getElementById('centroCarta')
    cc.innerHTML = `${nipeSorteado}`
    document.getElementById('centroCarta').style.color = cor 


    // renderizar o canto inferior direito da carta
    // a linha abaixo adciona a div identificada como 'infDir' a face eo nipe sorteado e também tags <div> adicionais
    document.getElementById('infDir').innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`
    document.getElementById('infDir').style.color = cor 

}




