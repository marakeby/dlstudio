var graph = new joint.dia.Graph;
var paper = new joint.dia.Paper({
    el: $('#paper'), width: 850, height: 600, model: graph, gridSize: 1,
    defaultLink: new joint.dia.Link({
        attrs: {
            // @TODO: scale(0) fails in Firefox
            '.marker-source': { d: 'M 10 0 L 0 5 L 10 10 z', transform: 'scale(0.001)' },
            '.marker-target': { d: 'M 10 0 L 0 5 L 10 10 z' }
        }
    })
});

var a = new joint.shapes.basic.Rect({ position: { x: 50, y: 50 }, size: { width: 100, height: 40 }, attrs: { text: { text: 'A' } } });
var b = new joint.shapes.basic.Rect({ position: { x: 250, y: 50 }, size: { width: 100, height: 40 }, attrs: { text: { text: 'B' } } });
var c = new joint.shapes.basic.Rect({ position: { x: 350, y: 150 }, size: { width: 100, height: 40 }, attrs: { text: { text: 'C' } } });
