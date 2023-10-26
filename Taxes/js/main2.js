import IncomeTax from "./IncomeTax.js";
import "https://code.jquery.com/jquery-1.12.1.min.js";

$(document).ready(()=>{

    document.getElementById("income").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("taxed").focus();
        }
    });

    document.getElementById("taxed").addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          document.getElementById("calculate").click();
        }
    });
    
    $("#calculate").click((evt)=>{
        evt.preventDefault();
        const nAmount = $("#income").val();
        const taxed = $("#taxed").val();
        const incomeTax = new IncomeTax();
        $("#amount").html(nAmount);

        $("#results").show();
        $("#oTax").html(incomeTax.calculateOT(nAmount));
        $("#fTax").html(incomeTax.calculateFT(nAmount));
        var tax = parseFloat(incomeTax.calculateOT(nAmount)) + parseFloat(incomeTax.calculateFT(nAmount));
        $("#hst").html(tax.toFixed(2));
        var owing = parseFloat(tax) - parseFloat(taxed);
        if (owing < 0){
            $("#owingP").html("You have been overcharged. your refund is " + Math.abs(owing));
        }
        else{
            $("#owing").html(owing);
        }
        

    })
});



