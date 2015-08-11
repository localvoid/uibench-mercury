var hg = require('mercury');
var h = hg.h;

function renderTableCell(props) {
  function onClick(e) {
    console.log('Clicked' + props.text);
    e.stopPropagation();
  }
  return h('td.TableCell', {'ev-click': onClick}, props.text);
}

function renderTableRow(props) {
  var data = props.data;
  var classes = 'TableRow';
  if (data.active) {
    classes = 'TableRow active';
  }
  var cells = data.props;

  var children = [hg.partial(renderTableCell, {text: '#' + data.id})];
  for (var i = 0; i < cells.length; i++) {
    children.push(hg.partial(renderTableCell, {text: cells[i]}));
  }

  return h('tr', {'className': classes, 'data-id': data.id}, children);

}

function renderTable(props) {
  var items = props.data.items;

  var children = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    children.push(hg.partial(renderTableRow, {key: item.id, data: item}));
  }

  return h('table.Table', h('tbody', children));
}

module.exports = renderTable;