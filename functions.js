

function getDiffInDays(dataInicio) {
    const d1  = dataInicio;
    const diffInMs   = new Date() - new Date(d1)
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return Math.trunc(diffInDays);

}
function getNewItem(conjunto, dataInicio, usarPrazoExtendidoInicio = true, tamanhoInicial = 2) {
    let arrayLength = conjunto.length; 
    let diffInDays = getDiffInDays(dataInicio);



    if(usarPrazoExtendidoInicio) {
        console.log("diffInDays: "+ (diffInDays-1))
        let positionPrazoExtendido = Math.trunc((diffInDays-1) / tamanhoInicial);

        console.log("tamanhoinicial: "+ tamanhoInicial)
        console.log("positionPrazoExtendido: "+ positionPrazoExtendido)

        if(positionPrazoExtendido<arrayLength) {
            console.log(positionPrazoExtendido, ' - ', arrayLength)
            return positionPrazoExtendido;
        } else {
            diffInDays = diffInDays - (tamanhoInicial*arrayLength) -1;
            console.log('D:'+ diffInDays);
        }
    } 
    
    let positionArray = diffInDays % arrayLength;
    return positionArray;
}