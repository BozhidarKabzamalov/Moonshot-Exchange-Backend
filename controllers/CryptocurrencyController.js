const axios = require('axios');

module.exports.getLatestCryptocurrency = async (req, res, next) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=1,1027', {
            headers: {
                'X-CMC_PRO_API_KEY': 'fc84c397-229a-43cb-aab9-7c518b75ee0e',
                'Access-Control-Allow-Origin': '*',
            },
        });

        res.status(200).json({
            data: response.data.data,
        });
    } catch (error) {
        console.log(error);
    }
};
