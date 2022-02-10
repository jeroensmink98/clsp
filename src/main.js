#!/usr/bin/env node
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');


// Import modules
const clsp = require('./lib/clsp');

/**
 * Command line stock picker
 */



// Application
clear();

// CLI Title
console.log(
    chalk.blue(
        figlet.textSync("CLSP", {horizontalLayout: "full"})
    )
);

/**
 * Main Application Flow
 */
const run = async() => {
    try{
        const stockSymbol = await clsp.getStockQuote();
        
        const quote = await clsp.parseStockQuote(stockSymbol);

        console.log(quote);
    }catch{

    }
}
run();
