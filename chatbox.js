var data= {
    chatinit:{
        title: ["Hello <span class='emoji'> &#128075;</span>","I am Mr. norman assistant","How can I help you?"],
        options: ["Movies <span class='emoji'> &#128250;</span>","News","Shopping <span class='emoji'> &#128090;</span>","Music <span class='emoji'> &#127925;</span>"]
    },
    movies: {
        title:["hey would you like my advice click to continue"],
        options:['youtube',],
        url : {
            more:"https://www.youtube.com/",
            link:["https://www.youtube.com/"]
        }
    },
    
    news: {
        title:["Today's Top 5 Headlines"],
        options:[" click here you will find some"],
        url : {
            more:"https://www.google.com/search?sca_esv=4629165226bbef06&sxsrf=ACQVn09ToHAZosh3yKuax1gb16w-yGwIIA:1707277112514&q=news&tbm=nws&source=lnms&sa=X&ved=2ahUKEwjN5svuppiEAxW2YPEDHQdPCnQQ0pQJegQIDRAB&biw=1366&bih=633&dpr=1",
            link:["https://www.google.com/search?sca_esv=4629165226bbef06&sxsrf=ACQVn09ToHAZosh3yKuax1gb16w-yGwIIA:1707277112514&q=news&tbm=nws&source=lnms&sa=X&ved=2ahUKEwjN5svuppiEAxW2YPEDHQdPCnQQ0pQJegQIDRAB&biw=1366&bih=633&dpr=1"]
        }
    },
    shopping: {
        title:["Thanks!<span class='emoji'> &#128090;</span>enjoy your shopping"],
        options:['amazone'],
        url : {
            more:"https://www.amazon.de/?&tag=googdeaen-21&ref=pd_sl_7qhccgoot7_e&adgrpid=154228170936&hvpone=&hvptwo=&hvadid=675212901583&hvpos=&hvnetw=g&hvrand=1379993055602451319&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1003699&hvtargid=kwd-10573980&hydadcr=10627_2211717&language=en_GB",
            link:["https://www.amazon.de/?&tag=googdeaen-21&ref=pd_sl_7qhccgoot7_e&adgrpid=154228170936&hvpone=&hvptwo=&hvadid=675212901583&hvpos=&hvnetw=g&hvrand=1379993055602451319&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1003699&hvtargid=kwd-10573980&hydadcr=10627_2211717&language=en_GB"]
        }
    },
    
   
    
    music: {
        title:["These are some latest songs <span class='emoji'> &#127925;</span>"],
        options: [" click here spotify song",],
        url : {
            more:"https://open.spotify.com/",
            link:["https://open.spotify.com/"]
        }
    },
   
    
   
    
}

document.getElementById("init").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= data.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='START CHAT'){
        document.getElementById('test').style.display='block';
        document.getElementById('init').innerText='CLOSE CHAT';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}