//Function that handles the readinf of files and merge in value
    //read from file and get a string
        //merge values in to stirng
var fs = require('fs');

function mergeValues(values, content){
    //Cycle over keys
    for(var key in values){
        //Replace over {{keys}} with the value from the values object
        content = content.replace("{{" + key + "}}", values[key]);
    }
    
    //return merged content
    return content;
    
}

function view(templateName, values, response){
    //read from the template files
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"})
        //Insert values into the content
        fileContents = mergeValues(values, fileContents);
        //write out the conents to the response
        response.write(fileContents);
}

module.exports.view = view;