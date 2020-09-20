const { max_value } = require("../utils");

const doadores = [{
    instituicao_id: 1
    , doador_id: 1
    , nome: 'joao eymard'
    , contato: '5588999114867'
    , endereco: 'Rua Pero Coelho, 196 - Centro - Barbalha / CE'
}]

module.exports = {
    get: (instituicao_id) => {
        return doadores.filter(d => d.instituicao_id == instituicao_id);
    }, 
    post: (instituicao_id, { nome, contato, endereco }) => {
        const doador_id = max_value(doadores, 'doador_id') +1;

        doadores.push({
            instituicao_id
            , doador_id
            , nome
            , contato
            , endereco
        });

        return doador_id;
    }
}
