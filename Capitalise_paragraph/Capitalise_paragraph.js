//capitalise the first letter of a paragraph.
//step1: check for the presence of ' ','.', index '0' and if the letters are capital already or small, 
//check for numerical value also


let paragraph = 'Srivrinda is very cute and her Mother thinks to increase her cuteness, by making Her a devotee of krsna.'
//convert the paragraph into an array first as strings are immutable and cannot be updated in Java, js and python
let arr = Array.from(paragraph)
//console.log(arr)
//check each element in the array
let n = arr.length;
function Capitalise(paragraph){

    for(i=0; i<n; i++){
        //check of first index, '.' ' '
        if(i==0 || arr[i-1]==' ' || arr[i-1]=='.'){
            //check of the letter is small letter or capital
            if(arr[i]>='a' &&arr[i]<='z'){
                let val=arr[i].charCodeAt(0);
                val-=32;
                arr[i]=String.fromCharCode(val);
            }
        }
    }return arr.join('');
}
let capital_paragraph=Capitalise(paragraph)
console.log(capital_paragraph)