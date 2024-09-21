export function calcularTotalIngresso(qtd, meiaEntrada, cupom) {
    let total = 0;
    if (meiaEntrada == true) {
        total = qtd * 15;
    }
    else {
        total = qtd * 30;
    }

    if (cupom == 'QUERO50') {
        let desconto = total * 50 / 100;
        total = total - desconto;
    }
    return total;
}