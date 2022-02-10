const inquirer = require("inquirer");

// Export modules and functions
module.exports = {
    askStockPicker: () => {
        const question = [
            {
                name: "stockPicker",
                type: "input",
                message: "Enter your stock picker or symbol",
                validate: function(value){
                    if(value.length){
                        return true;
                    }else{
                        return "Please enter a stock picker or symbol";
                    }
                }
            }
        ];
        return inquirer.prompt(question);
    }
}