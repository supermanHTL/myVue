function initPage() {
  var deviceWidth = document.documentElement.clientWidth;
  if(deviceWidth > 750) deviceWidth = 750;
  var fontSize = deviceWidth / 7.5;
  document.getElementsByTagName("html")[0].style.fontSize = fontSize + "px";
}
initPage();
window.addEventListener('resize',initPage);
