var express = require("express");
var app = express();
var request = require("request");      

app.set("view engine", "ejs");

//调用public下的静态文件
app.use(express.static('public'));


app.get("/",function(req,res){
    res.render("search");
});


app.get("/results", function(req, res){
    var query = req.query.search;
    console.log(query);
    request("http://www.omdbapi.com/?s=" + query + "&apikey=thewdb", function(err, response, body){
        if(err){
            return next(err);
        }
        else if(!err && response.statusCode === 200){
            var data = JSON.parse(body);
            if(data.Response !== "False"){
                //console.log(data.Response)
            res.render("results", {data:data});
        }
            else {
            res.render("noresults");
            }
        }    
    });
});


app.listen(process.env.PORT || 3030, process.env.IP, function(){
    console.log("Movie app started!");
});
