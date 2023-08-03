exports.ping = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Pong'),
    };
    return response;
};