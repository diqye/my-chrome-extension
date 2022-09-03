prettyUpBaiduFanyi()
function prettyUpBaiduFanyi(){
  if(location.hostname == "fanyi.baidu.com" && location.search.includes("from=diqye")){
    prettyUp()
  }else{
    void null
  }
  function prettyUp(){
    let result = document.querySelector("#left-result-container")
    if(result == null){
      setTimeout(prettyUp,50)
    }else{
      hideAdAndFix()
      let s = result.style
      s.setProperty("position","fixed")
      s.setProperty("top","-31px")
      s.setProperty("left","0")
      s.setProperty("width","100vw")
      s.setProperty("height","100vh")
      s.setProperty("background","white")
      s.setProperty("z-index","1000")
      s.setProperty("overflow","auto")
      setTimeout(prettyUp,200)
    }
  }
  function hideAdAndFix(){
    let a = document.querySelector(".footer")
    if(a)a.style.setProperty("display","none")
    let b = document.querySelector("#app-read")
    if(b)b.style.setProperty("display","none")
    let c = document.querySelector(".video-container")
    if(c)c.style.setProperty("left","0")
  }
}