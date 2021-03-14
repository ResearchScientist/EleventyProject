// returns what was entered in the search bar

exports.handler = async (event) => {
    const { text } = event.queryStringParameters;
    
    return {
        statusCode: 200,
        body: `entered the following ${text}`,
    };
};