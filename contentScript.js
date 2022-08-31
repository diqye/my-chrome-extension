
function showTranslation(e){
  let selectionText = document.getSelection().getRangeAt(0).toString()
  if(selectionText != ""){
    window.open(`https://fanyi.baidu.com?from=diqye/#en/zh/${selectionText}`,
    "translate",
    "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=437,height=400")
    return true
  }else{
    return false
  }
}

let hotFunctions = {
  "KeyS":e=>{
    let selectionText = document.getSelection().getRangeAt(0).toString()
    if(selectionText != ""){
      chrome.runtime.sendMessage({
        type: "speak",
        text: selectionText
      })
      return true
    }else{
      return false
    }
  },
  "KeyL":showTranslation
}

function mymain() {
  let marks = {}
  window.addEventListener("keyup", e => {
    let markVal = marks[e.code]
    if (e.ctrlKey&&e.altKey) {
      if(hotFunctions[e.code]){
        if(hotFunctions[e.code](e)){
          return 
        } else {
          void null
        }
      } else {
        void null
      }
      marks[e.code] = document.scrollingElement.scrollTop
      let tip = createTip(`Saved at Ctrl-${e.code}`)
      document.body.appendChild(tip)
      setTimeout(() => {
        document.body.removeChild(tip)
      }, 2000)
    }else if(e.ctrlKey&&markVal != null){
        document.scrollingElement.scrollTop = markVal
    }
  })

  prettyUpBaiduFanyi()
}

function createTip(tipText) {
  let p = document.createElement("p");
  p.appendChild(document.createTextNode(tipText));
  let s = p.style
  s.setProperty("position", "fixed")
  s.setProperty("background", "red")
  s.setProperty("top", "50%")
  s.setProperty("left", "50%")
  s.setProperty("font-size", "20px")
  s.setProperty("z-index", "100")
  // s.setProperty("opacity", ".8")
  s.setProperty("transform", "translate(-50%,-50%)")
  s.setProperty("padding", ".5em")
  s.setProperty("border-radius", ".5em")
  return p
}

mymain()

function prettyUpBaiduFanyi(){
  if(location.hostname == "fanyi.baidu.com" && location.search.includes("from=diqye")){
    prettyUp()
  }else{
    void null
  }
  function prettyUp(){
    let result = document.querySelector(".result-section")
    if(result == null){
      setTimeout(prettyUp,50)
    }else{
      document.querySelector(".footer").style.setProperty("display","none")
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
}