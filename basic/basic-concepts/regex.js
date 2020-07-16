function formatString()
{
    let str = "Hello, {0}! How are {1}";
    let indexes = ["Ritesh", "you"];
    
    indexes.map((option, index)=>
    {
        str = str.replace("{"+index+"}", option);
    });
    return str;
}

console.log(formatString());