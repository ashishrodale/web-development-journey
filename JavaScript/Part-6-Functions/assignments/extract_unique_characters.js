// Question : Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”.

let str = "abcdabcdefgggh";
//function to get String with all unique elements 
function get Unique (str) { 
    let ans = "" ;
    for(let i=0; i<str.length; i++){
        let curr Char = str[i];
        if(ans.indexOf(currChar)==-1){
            //if current character is not added, then add it in ans.
              //Otherwise it is a duplicate.
              ans+=currChar;
            }
        }
        returnans;
}
getUnique(str);
