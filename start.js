var root = document.querySelector(':root');
var rootstyles = getComputedStyle(root);
var button_x = rootstyles.getPropertyValue('--button_x');
var button_y = rootstyles.getPropertyValue('--button_y');
var translate_button = rootstyles.getPropertyValue('--translate_button');
var translate_main = rootstyles.getPropertyValue('--translate_main');
var button_scale = rootstyles.getPropertyValue('--button_scale');
var hint = rootstyles.getPropertyValue('--hint');

function but() {
  root.style.setProperty('--hint','4.5%');
  root.style.setProperty('--button_x','0%');
  root.style.setProperty('--button_y','0%');
  root.style.setProperty('--button_scale','20%');
  root.style.setProperty('--translate_main','0%');
  root.style.setProperty('--translate_button','-940%');
  console.log('it works');
}
