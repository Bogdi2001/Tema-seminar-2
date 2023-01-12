function addTokens(input, tokens){
    if( typeof input!=="string"){
        throw new Error("Invalid input");
    }
   else
   {
       if(input.length <6)
       {
           throw new Error("Input should have at least 6 characters");
       }
       
   else {
       
       tokens.forEach((e)=>
        {
        if( typeof e.tokenName !=="string")
        { 
            throw new Error("Invalid array format");
        }
        else
        {
            
        }
       })
       var inputnou;
       if(input.includes("..."))
       { tokens.forEach((e)=>{
           inputnou=input.replace("...", "${" + e.tokenName +"}");});
           return inputnou;
       }
       else 
       {return input;
           
       }
       
   }
   }
}


const app = {
    addTokens: addTokens
}

module.exports = app;