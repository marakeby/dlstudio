//Json Editor
var myjson = {"name": "LogReg",
"layers": {
    "name": "mnist",
    "type": "DATA",
    "top": "data",
    "top": "label",
    "data_param": {
        "source": "input_leveldb",
        "batch_size": 64
    }
}
}
//var myjson = { "string": "foo", "number": 5, "array": [1, 2, 3], "object": { "property": "value", "subobj": { "arr": ["foo", "ha"], "numero": 1 } } };
var opt = {
    change: function (data) { /* called on every change */ },
    propertyclick: function (path) { /* called when a property is clicked with the JS path to that property */ }
};
/* opt.propertyElement = '<textarea>'; */ // element of the property field, <input> is default
/* opt.valueElement = '<textarea>'; */  // element of the value field, <input> is default
 $('#editor').jsonEditor(myjson, opt);

function update_prop_editor() {
    //jsoneditor.destroy()
    //var string = {"layers": {
    //    "name": "loss",
    //    "type": "SOFTMAX_LOSS",
    //    "bottom": "ip",
    //    "bottom": "label",
    //    "top": "loss"
    //}
    //}
    var json = {
        "name": "test",
        "layers": {
            "name": "mnist",
            "type": "DATA",
            "top": "data",
            "top": "label",
            "data_param": {
                "source": "input_leveldb",
                "batch_size": 30
            }
        }
    }
    //var string = { "employees": [{ "firstName": "John", "lastName": "Doe" }, { "firstName": "Anna", "lastName": "Smith" }, { "firstName": "Peter", "lastName": "Jones" }] }

    console.log(json)
    //jsonEditor.updateJSON(string)
    //$('#editor').jsonEditor(string, opt);
    
    //$("#editor").jsonEditor.empty();
    
    var opt2 = {
        change: function (data) { /* called on every change */ },
        propertyclick: function (path) { /* called when a property is clicked with the JS path to that property */ }
    };
    //$("#test").append( "<script src='../static/scripts/joint-master/demo/prop_editor.js'></script>")
    $('#editor').jsonEditor(json, opt2);
    printJSON();
}