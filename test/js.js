// 设置图片切换
let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if (mySrc === '1.jpg') {
    myImage.setAttribute ('src','2.png');
  } else {
    myImage.setAttribute ('src','1.jpg');
  }
};


