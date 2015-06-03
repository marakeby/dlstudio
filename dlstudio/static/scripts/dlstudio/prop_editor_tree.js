// create the editor
var container = document.getElementById("editor");
var options = {
    
    change: function () {
        c = getJSON();
        //console.log(c);
        //console.log(workspace_data_dic[current_id]);
        update_data_entery(current_id, c)
        //workspace_data_dic[current_id] = c;
    }
};

var editor = new JSONEditor(container);
editor.options = options
// set json
var current_id 
function populate_prop_editor(id, json) {
    current_id = id
    console.log(json)
    editor.set(json);
}

// get json
function getJSON() {
    var json = editor.get();
    return json
    //alert(JSON.stringify(json, null, 2));
}

