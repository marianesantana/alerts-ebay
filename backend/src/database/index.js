const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ebayalerts-tib7k.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true
}).then(() => console.log('Connected.'))
    .catch(error => console.log(error));

module.exports = mongoose