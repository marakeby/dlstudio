//var graph = new joint.dia.Graph;
var blocks = new joint.dia.Graph;

var smallpaper = new joint.dia.Paper({
    el: $('#lib'), width: 200, height: 600, model: blocks, gridSize: 1,interactive : false

});
//console.log('hi from lib')
//console.log($SCRIPT_ROOT)
//$SCRIPT_ROOT = {{ request.script_root|tojson|safe }};


//smallpaper.setOrigin(10400, 300)
//smallpaper.$el.css('pointer-events', 'none');
//paperSmall.scale(.5);

//var auto1 = new joint.shapes.basic.Rect({ position: { x: 10, y: 10 }, size: { width: 50, height: 100 }, attrs: { text: { text: 'Autoencoder' } } });
//var dauto2 = new joint.shapes.basic.Rect({ position: { x: 100, y: 10 }, size: { width: 50, height: 100 }, attrs: { text: { text: 'Denoising Autoencoder' } } });
//var dauto3 = new joint.shapes.basic.Rect({ position: { x: 10, y: 150 }, size: { width: 50, height: 100 }, attrs: { text: { text: 'Denoising Autoencoder' } } });
//var dauto4 = new joint.shapes.basic.Rect({ position: { x: 100, y: 150 }, size: { width: 50, height: 100 }, attrs: { text: { text: 'Denoising Autoencoder' } } });

//var dauto5 = new joint.shapes.basic.Rect({ position: { x: 10, y: 300 }, size: { width: 50, height: 100 }, attrs: { text: { text: 'Denoising Autoencoder' } } });
//var dauto6 = new joint.shapes.basic.Rect({ position: { x: 100, y: 300 }, size: { width: 50, height: 100 }, attrs: { text: { text: 'Denoising Autoencoder' } } });

//var dauto = new joint.shapes.basic.Rect({ position: { x: 100, y: 10 }, size: { width: 50, height: 100 }, attrs: { text: { text: 'Denoising Autoencoder' } } });

//blocks.addCells([auto1, dauto2, dauto3, dauto4, dauto5, dauto6])
var data_dic = []; // create an empty array
function add_block_to_lib( data) {
    //console.log('ading block to lib')
    //var dauto = new joint.shapes.basic.Rect({
    //    position: { x: 100, y: 10 },
    //    size: { width: 50, height: 100 },
    //    //attrs: { text: { text: data.str } }
    //    attrs: {
    //        rect: { rx: 2, ry: 2, fill: '#A9A9A9', stroke: '#357EBD', 'stroke-width': 2 },
    //        text: { text: data.str, fill: '#696969', 'font-size': 12, 'font-weight': 'bold', 'text-transform': 'capitalize' }
    //}
    //});

    var dauto = new joint.shapes.devs.Model({
        position: { x: 100, y: 10 },
        size: { width: 50, height: 100 },
        inPorts: ['in'],
        outPorts: ['out'],
        attrs: {
            //text: { text: data.str, fill: '#696969', 'font-size': 12, 'font-weight': 'bold', 'text-transform': 'capitalize' },
            '.label': { text: data.str, 'ref-x': .4, 'ref-y': .2, 'font-size': 9 },
            //rect: { rx: 2, ry: 2, fill: '#FFF', stroke: '#357EBD', 'stroke-width': 1 },
            rect: { fill: '#FFF', stroke: '#357EBD', 'stroke-width': 1},
            '.inPorts circle': { 'r': 5, fill: '#7FFFD4',  type: 'input' },
            '.outPorts circle': { 'r': 5, fill: '#CD5C5C' }
        }
    });

    _.each([dauto], function (element) {
        element.attr({ '.body': { 'rx': 6, 'ry': 6 } });
    });


    //var dropShadow = dauto.clone();
    //dropShadow.translate(20, 20);
    //dropShadow.attr('text/text', 'dropShadow(2,2,3)');
    //dropShadow.attr('rect/filter', { name: 'dropShadow', args: { dx: 2, dy: 2, blur: 3 } });
    //blocks.addCell(dropShadow);

    //dauto.attrs['data'] = block
    //console.log(dauto.id)
    data_dic[dauto.id] = data
    //console.log(dauto.data)
    blocks.addCells([dauto])
    //console.log(blocks.toJSON())
}
//var dauto2 = new joint.shapes.basic.Rect({ position: { x: 100, y: 10 }, size: { width: 50, height: 100 }, attrs: { text: { text: 'name' } } });
//add_block_to_lib('test')
function get_lib_blocks() {
    console.log('get_lib_blocks is called')
    $.getJSON('/_get_blocks', { lib_type: 'caffe' }, function (data) {
        //console.log('return from python')
        add_block_to_lib(data)
    })
}
get_lib_blocks()
smallpaper.on('cell:pointerclick', function (cellView, evt, x, y) {
    //var iDiv = document.createElement('div');
    //iDiv.id = 'fpaper';
    //iDiv.style = "color:#0000FF; width: 600px; height: 600px; float:left;"
    //iDiv.className = 'block';
    //document.getElementsByTagName('body')[0].appendChild(iDiv);
    var clone = cellView.model.clone();
    id = cellView.model.id
    //console.log(id)
    d = data_dic[id]
    //console.log(d)
    //console.log(clone)
    //console.log(clone.data)
    //console.log(cellView.data)
    add_cell_to_workspace(clone, d)
    //document.getElementsByTagName('lib').model.addCell(clone);

    //var flygraph = new joint.dia.Graph;

    //var flypaper = new joint.dia.Paper({
    //    el: $('#fpaper'), width: 200, height: 200, model: flygraph, gridSize: 1,

    //});

    //var clone = cellView.model.clone();
    //flygraph.addCell(clone);
})
