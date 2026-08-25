// Question : Create a function to find the min number in an array.
function getMin(num){
    let min = nums.reduce((min, el) => {
        if(min<el){
            return min;
        } else {
            return el;
        }
    });
    return min;
}

let num = [10, 20, 30, 40, ];
