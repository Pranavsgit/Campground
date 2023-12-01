const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



const sample = array => array[Math.floor(Math.random() * array.length)];
const price = Math.floor(Math.random() * 20) + 10
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            author: '655861b8355b9271f8a4edcc',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'It has a single stem or trunk and branches that support leaves. Beneath the ground, a tree has a root system that acts as an anchor and stores the water and nutrients the plant needs to grow. One of the ways we distinguish trees from other plants is their thick and rigid ligneous tissues, which we know as wood',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dd6pstdj4/image/upload/v1701158230/YelpCamp/kihyizdpzx7yh4jysffq.jpg',
                    filename: 'YelpCamp/biloecwgwy7b8qwxvnlz'

                },
                {
                    url: 'https://res.cloudinary.com/dd6pstdj4/image/upload/v1701159181/YelpCamp/jkthsbc5bbhnm895nuzy.jpg',
                    filename: 'YelpCamp/zxzctqrhmeqxywtj5fsz'

                },
                {
                    url: 'https://res.cloudinary.com/dd6pstdj4/image/upload/v1701159181/YelpCamp/b2yvbetpwonqnlcoclw9.webp',
                    filename: 'YelpCamp/ntmrxmfpmh7vscyb5xpc'

                }
            ]

        });
        await camp.save();
    }
}





seedDB().then(() => {
    mongoose.connection.close();
})