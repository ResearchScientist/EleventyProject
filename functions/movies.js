const movies = require('../data/movies.json');

exports.handler = async () => {
    return {
        console.log('movies json found');
        statusCode: 200,
        body: JSON.stringify(movies),
    };
};