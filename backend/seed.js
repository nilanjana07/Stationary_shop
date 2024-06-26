const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/stationaryShop', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const predefinedProducts = [
    { name: 'Notebook', price: 50 },
    { name: 'Pen', price: 10 },
    { name: 'Pencil', price: 8 },
    { name: 'Eraser', price: 4 },
    { name: 'Sharpener', price: 5 }
];

Product.insertMany(predefinedProducts)
    .then(() => {
        console.log('Products added');
        mongoose.connection.close();
    })
    .catch(error => {
        console.error('Error adding products:', error);
    });
