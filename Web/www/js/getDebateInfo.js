document.getElementById("debate").addEventListener("click", sendClickToParentDocumentDebat, false);

<!-- // src = http://xn--dahlstrm-t4a.net/svg/html/from-svg-to-parent-html-script.html -->
function sendClickToParentDocumentDebat(evt){
  // SVGElementInstance objects aren't normal DOM nodes, so fetch the corresponding 'use' element instead
  var target = evt.target;
  if(target.correspondingUseElement)
    target = target.correspondingUseElement;

  // call a method in the parent document if it exists
  if (window.parent.svgElementClickedDebat)
    window.parent.svgElementClickedDebat(target.id);
}