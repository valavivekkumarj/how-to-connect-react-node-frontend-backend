const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/filedata';

const main = async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

main().then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String }
});

const courseModel = mongoose.model('Course', courseSchema);  // Updated model name for better understanding

module.exports = courseModel;
