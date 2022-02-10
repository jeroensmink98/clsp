const inquirer = require("./inquirer");
const axios = require("axios").default;
const CLI = require('clui');
const Spinner = CLI.Spinner;
require('dotenv').config()

const finnhubApiKey = process.env.FINNHUB_API;

module.exports = {
    /**
     * @function
     * @description Return a stock quote from Finnhub.
     * @returns HTTP Request result from Finnhub
     */
    getStockQuote: async () => {
        const symbol = await inquirer.askStockPicker();

        symbol.stockPicker = symbol.stockPicker.toUpperCase();

        const status = new Spinner('Getting stock quote...');
        status.start();

        var config = {
            method: 'get',
            url: `https://finnhub.io/api/v1/quote?symbol=${symbol.stockPicker}`,
            headers: { 
              'X-Finnhub-Token': finnhubApiKey
            }
          };

        try{
            const response = await axios(config)
            status.stop();
            return response.data;
        }catch{
            throw new Error("Could not create HTTP request..")
        }
       
    },

    /**
     * @function
     * @param {Object} quote 
     * @returns Object based on the stock quote
     */
    parseStockQuote: async (quote) => {
        let quoteObject = {
            "currentPrice": quote.c,
            "dailyChange": quote.d,
            "dailyPercentageChange": quote.dp,
            "dailyHigh": quote.h,
            "dailyLow": quote.l,
            "dailyOpen": quote.o,
            "dailyPreviousClose": quote.pc
        }
        return await quoteObject;
    }

}