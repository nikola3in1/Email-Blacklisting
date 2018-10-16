var fs = require("fs");

var content = fs.readFileSync("email.json");
var jsonContent = JSON.parse(content)
var testSample = "dadasd@alum.com";
if(jsonContent[testSample.split("@")[1]]){
    console.log("should be blacklisted.",jsonContent[testSample.split("@")[1]],testSample.split("@")[1])
}
