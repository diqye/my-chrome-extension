function main(){
  setTimeout(skipAd, 10*1000);
  hideAdsByCSS()
}
main()

function hideAdsByCSS(){
  let head = document.head
  style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `.ytp-ad-overlay-slot,.ytp-ad-image-overlay,.ytp-ad-overlay-container { display: none !important; }`;
  head.appendChild(style);
}
function queryAds(){
  let skipBtn = document.querySelector(".ytp-ad-skip-button")
  return [skipBtn].filter(a=>a!=null)
}
function skipAd(){
  let btns = queryAds()
  if(btns.length != 0){
    btns.forEach(a=>a.click())
    setTimeout(skipAd,2000)
  }else{
    setTimeout(skipAd,1000)
  }
}