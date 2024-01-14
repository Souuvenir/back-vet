const app = require('./app')
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb+srv://Nat:Pepetin9@backendtitulo.hcs51wl.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB database');
    // Start server
    app.listen(3001, () => {
        console.log('Server started on port 3000');
    });
})
.catch(err => console.error('Error connecting to MongoDB:', err));



