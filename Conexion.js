const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://alexandra:alexandra2004@cluster0.mzpvmsr.mongodb.net/?retryWrites=true&w=majority;'

module.exports = () => {

    const connect = () => {
        mongoose.connect(
            MONGO_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log('DB: ERROR');
                } else {
                    console.log('Conexion Exitosa');
                }
            }
        );
    };

    connect();
};
