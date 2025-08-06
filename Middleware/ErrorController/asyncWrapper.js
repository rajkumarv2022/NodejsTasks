const asyncWrapper = (fn) => {
   return async (req,res) => {
    try
    {
        await fn(req,res);
    }
    catch(e)
    {
        res.send(e.message);
    }

   }
}

module.exports = asyncWrapper;