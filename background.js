chrome.tts.getVoices().then(a=>{
  console.log(a)
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message.type == "speak") {
    let rate = message.rate || 1
    chrome.tts.speak(message.text,{lang:"zh-CN",rate})
    sendResponse("ok")
  }else{
    sendResponse("unknow")
  }
});