
module.exports = {
    middleware_save_instituicao: (req, res, next) => { req.locals = { ...req.params }; next(); },

    max_value: (arr, key) => arr.reduce((ant, att) => { return att[key] > ant ? att[key] : ant }, 0)
}
