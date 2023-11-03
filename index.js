const https = require("http");

const result = [1, 2, 3, 4];

const server =http.CreateServer(function (req,res) {
if(req.url = '/create') {
//nothing to do here
res.write(JSON.stringify(resullt));
}else if ((req.url === "/create")) {
 result.push(Math.random() * 100);
 res.write(JSON.stringify(resullt));
}else if ((req.url === "/update")) {
 result[0]++;
 res.write(JSON.stringify(resullt));
}else if ((req.url === "/delete")) {
 result.pop();  
 res.write(JSON.stringify(resullt)); 
}
  res.end();
});
    server.listen(3000, () => console.log("Listening on port 3000"));
