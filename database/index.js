const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Welp', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to DB!!")
});

var dataSchema = new mongoose.Schema({
    img: String,
    name: String,
    rating: Number,
    location: String,
    type: String
});

var dataModel = mongoose.model('defaultModel', dataSchema);

// dataModel.create(
//     {img: "https://content.fortune.com/wp-content/uploads/2015/05/rtx1ctwz.jpg", name: "El Pollo Loco", rating: 3.8, location:"Pomona", type:"Restaurant"}
//     )


let model = {
    getAll: () => (
        dataModel.find({})
    ),
    getOne: (_id) => (
        dataModel.findById({_id})
    ),
    createOne: (name, img, rating, location, type) => (
        dataModel.create({name: name, img: img, rating: rating, location: location, type: type})
    ),
    update: (_id, name, img, rating, location, type) => (
        dataModel.findByIdAndUpdate({_id: _id}, {name: name, img: img, rating: rating, location: location, type: type})
    ),
    delete: (_id) => (
        dataModel.findByIdAndDelete({_id})
    )
}

module.exports = model