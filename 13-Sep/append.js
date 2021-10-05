var fs=require('fs')

fs.appendFile('am.txt',' Hi Aman',function(err)
{
    if(err)
    {
        throw err;
    }
    console.log("File Append Updated")
})