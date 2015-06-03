var graph = new joint.dia.Graph;
var blocks = new joint.dia.Graph;

//var smallpaper = new joint.dia.Paper({
//    el: $('#paper'), width: 200, height: 600, model: blocks, gridSize: 1,

//});

var paper = new joint.dia.Paper({
    el: $('#paper'), width: 600, height: 600, model: graph, gridSize: 1,
    defaultLink: new joint.dia.Link({
        attrs: {
            // @TODO: scale(0) fails in Firefox
            '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z', transform: 'scale(0.001)' },
            '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }
        }
    })
});



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


var a = new joint.shapes.basic.Rect({ position: { x: 50, y: 200 }, size: { width: 100, height: 200 }, attrs: { text: { text: 'A' } } });
var b = new joint.shapes.basic.Rect({ position: { x: 250, y: 200 }, size: { width: 100, height: 200 }, attrs: { text: { text: 'B' } } });
var c = new joint.shapes.basic.Rect({ position: { x: 450, y: 200 }, size: { width: 100, height: 200 }, attrs: { text: { text: 'C' } } });

graph.addCells([a, b, c]);



var l1 = new joint.dia.Link({
    source: { id: a.id }, target: { id: b.id },
    attrs: {
        // @TODO: scale(0) fails in Firefox
        '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z', transform: 'scale(0.001)' },
        '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }
    }
});
var l2 = new joint.dia.Link({
    source: { id: b.id }, target: { id: c.id },
    attrs: {
        // @TODO: scale(0) fails in Firefox
        '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z', transform: 'scale(0.001)' },
        '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }
    }

});

graph.addCells([l1, l2]);




// Trigger signaling on element click.
//paper.on('cell:pointerdown', function (cellView) {

//    cellView.model.trigger('signal', cellView.model);
//});



// Signaling.
// ----------

//graph.on('signal', function (cell, data) {

//    if (cell instanceof joint.dia.Link) {

//        var targetCell = graph.getCell(cell.get('target').id);
//        sendToken(cell, 1, function () {

//            targetCell.trigger('signal', targetCell);
//        });

//    } else {

//        flash(cell);
//        var outboundLinks = graph.getConnectedLinks(cell, { outbound: true });
//        _.each(outboundLinks, function (link) {
//            link.trigger('signal', link);
//        });
//    }
//});

//function flash(cell) {

//    var cellView = paper.findViewByModel(cell);
//    cellView.highlight();
//    _.delay(function () { cellView.unhighlight(); }, 200);
//}

//function sendToken(link, sec, callback) {

//    var token = V('circle', { r: 7, fill: 'green' });

//    $(paper.viewport).append(token.node);
//    token.animateAlongPath({ dur: sec + 's', repeatCount: 1 }, paper.findViewByModel(link).$('.connection')[0]);

//    _.delay(function () {
//        token.remove();
//        callback();
//    }, sec * 1000);
//}
