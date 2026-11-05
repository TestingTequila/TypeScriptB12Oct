var product =function(...nums:any)
{
    var result = 1;
   for(var i =0; i<nums.length; i++)
   {
    console.log(nums[i]);
    result *= nums[i];
   }
   return result;
}

console.log(product(1,2,3,4,5));
console.log(product(12,34,56));
console.log(product("Jason",34,true));

