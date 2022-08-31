chrome.tts.getVoices().then(a=>{
  console.log(a)
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message.type == "speak") {
    if(message.text.charCodeAt(0) > 5000){
      chrome.tts.speak(message.text,{lang:"zh-CN"})
      sendResponse("ok");
    }else{
      chrome.tts.speak(message.text,{lang:"en-US"/*,voiceName:"Samantha"*/})
      sendResponse("ok");
    }
  }else{
    sendResponse("unknow")
  }
});