function findNumber(nums)
{
    for(var i=0;i<nums.length;i++)
    {
        if(nums.indexOf(i)==-1)
        {
            return i;
        }
    }
    return -1;
}
