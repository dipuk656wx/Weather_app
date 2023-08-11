const http = require("http");
const fs = require('fs');
const requests = require('requests');
const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempval, orgVal) =>{
    let temprature = tempval.replace("{%tempval%}", Math.floor(orgVal.main.temp - 273));
    temprature = temprature.replace("{%mintemp%}", Math.floor(orgVal.main.temp_min -273));
    temprature = temprature.replace("{%maxtemp%}", Math.floor(orgVal.main.temp_max- 273));
    temprature = temprature.replace("{%country%}", orgVal.sys.country);
    temprature = temprature.replace("{%place%}", orgVal.name);
    return temprature;
}
const server = http.createServer((req, res) =>{
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=a13657ccaa207e0dda95d8eff02bdafe")
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(objdata);
            const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
            res.write(realTimeData);
            console.log(realTimeData);
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            res.end();
        })
    }

})
server.listen(8000, "127.0.0.1");