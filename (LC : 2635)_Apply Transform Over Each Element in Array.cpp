/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
   let Newarr = [];
   for(let i = 0 ; i < arr.length ;i++){
      Newarr.push(fn(arr[i],i));
   }
    return Newarr;
};
