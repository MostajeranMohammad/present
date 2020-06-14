const redis = require("redis");
const client = redis.createClient();

client.on("error", function(error) {
    console.error(error);
});

var c = {
    name:"ali"
}

client.set("key", JSON.stringify(c), redis.print);
client.get("key", redis.print);
client.get("key" , function(err , result){
    if(err){
        return console.log(err);    
    }
    console.log(JSON.parse(result));
    
})
client.del("key" , function(err , result){
    if (err) return console.log(err);
    console.log(result);
    
})
setTimeout(()=>{
    client.end(true)
},500)