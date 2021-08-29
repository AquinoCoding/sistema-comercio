const mongoose = require('../database/db');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    valor: {
        type: String,
        require:true,
    },
    descricao: {
        type: String,
        required: true,
    },
    empresa: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Produtos = mongoose.model('Produtos', UserSchema);

module.exports = Produtos;