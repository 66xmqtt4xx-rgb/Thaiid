let flipped=false;
function flip(){
  let img=document.getElementById('img');
  flipped=!flipped;
  img.src= flipped ? 'Image_Asset_1.jpg':'Image_Asset.jpg';
}
function openFull(){
  location.href='full.html';
}
