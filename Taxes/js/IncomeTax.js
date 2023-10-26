export default class IncomeTax{
    calculateOT(amount){
        let nTax;
        if(amount <= 40922){
            nTax= amount * 0.0505;
        }
        else if(amount <=81847 && amount > 40922){
            nTax = amount * 0.0915;
        }
        else if (amount <= 150000 && amount >81847){
            nTax = amount * 0.1116;
        }
        else if (amount <= 220000 && amount >150000){
            nTax = amount * 0.1216;
        }
        else if (amount >220000){
            nTax = amount * 0.1316
        }
        return nTax.toFixed(2);
    }    
    
    calculateFT(amount){
        let nTax;
        if(amount <= 45282){
            nTax= amount * 0.15;
        }
        else if(amount <= 90563 && amount > 45282){
            nTax = amount * 0.205;
        }
        else if (amount <= 140388 && amount >90563){
            nTax = amount * 0.26;
        }
        else if (amount <= 200000 && amount >140388){
            nTax = amount * 0.29;
        }
        else if (amount >200000){
            nTax = amount * 0.33
        }
        return nTax.toFixed(2);

    }
}