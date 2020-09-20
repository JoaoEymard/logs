const { max_value } = require("../utils");

const mensagens = [{
    instituicao_id: 1
    , mensagem_id: 1
    , mensagem: 'Seja bem vindo a ONG XPTO'
    , criado_em: "2020-09-20T18:38:51.346Z"
}]

module.exports = {
    get: (instituicao_id) => {
        return mensagens.filter(m => m.instituicao_id == instituicao_id);
    },
    post: (instituicao_id, { mensagem, criado_em }) => {
        const mensagem_id = max_value(mensagens, 'mensagem_id') +1;

        mensagens.push({
            instituicao_id, mensagem_id, mensagem, criado_em
        });

        return mensagem_id;
    }
}
