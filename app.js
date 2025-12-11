let flipped=false;
function flip(){
  let img=document.getElementById('img');
  flipped=!flipped;
  img.src= flipped ? 'Image_Asset_1.png':'Image_Asset.png';
}
function openFull(){
  location.href='full.html';
}
