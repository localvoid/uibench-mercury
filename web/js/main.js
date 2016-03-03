var hg = require('mercury');
var h = hg.h;
var create = hg.create;
var diff = hg.diff;
var patch = hg.patch;
var renderMain = require('./ui/main');

uibench.init('Mercury', '14.1.0');

document.addEventListener('DOMContentLoaded', function(e) {
  var container = document.querySelector('#App');
  var root = h('div');
  var el = create(root);
  container.appendChild(el);

  function update(newRoot) {
    el = patch(el, diff(root, newRoot));
    root = newRoot;
  }

  uibench.run(
      function(state) {
        update(hg.partial(renderMain, state));
      },
      function(samples) {
        update(h('pre', JSON.stringify(samples, null, ' ')));
      }
  );
});
