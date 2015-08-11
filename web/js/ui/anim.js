var hg = require('mercury');
var h = hg.h;

function renderAnimBox(props) {
  var data = props.data;
  var time = data.time;
  var style = {
    'borderRadius': (time % 10).toString() + 'px',
    'background': 'rgba(0,0,0,' + (0.5 + ((time % 10) /10)).toString() + ')'
  };

  return h('div.AnimBox', {'data-id': data.id, style: style});
}

function renderAnim(props) {
  var items = props.data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(hg.partial(renderAnimBox, {key: item.id, data: item}));
  }

  return h('div.Anim', children);
}

module.exports = renderAnim;