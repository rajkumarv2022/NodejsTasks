const http=require('http');

const server=http.createServer( (req,res) => {
    if(req.url==='/')
    {
        return res.end("Home Page");
    }
    if(req.url==='/about')
    {
        return res.end("about page");
    }

   res.end(`
        
        <h1>Oops!</h1>
        <p> We can't able to display the page you are looking for </p>
        <a href='/'>Home Page</a>
        
        `)
    
} )

server.listen(5000);

