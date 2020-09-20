const { max_value } = require("../utils");

const instituicoes = [{
    instituicao_id: 1
    , nome: 'ONG XPTO'
    , slogan: ''
    , descricao: 'A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real.'
    , pontos: 0
    , causa: 'Animais'
    , valores_sugeridos: [{
        valor: 25, descricao: 'Esse vai para a ração'
    },{
        valor: 75, descricao: 'Cirurgia de Toby'
    }]
}]

module.exports = {
    get: (instituicao_id) => {
        return instituicoes.filter(d => d.instituicao_id == instituicao_id);
    }, 
    post: (content) => {
        const instituicao_id = max_value(instituicoes, 'instituicao_id') +1;
        const { nome, slogan, descricao, pontos, causa, valores_sugeridos } = content;

        instituicoes.push({
            instituicao_id, nome, slogan, descricao, causa
            , pontos: parseInt(pontos)
            , valores_sugeridos
        });

        return instituicao_id;
    },
    rank: () => {
        return instituicoes
            .sort((a,b) => b.pontos - a.pontos)
            .map(i => ({
                instituicao_id: i.instituicao_id, nome: i.nome, causa: i.causa, pontos: i.pontos
            }))
    }
}
