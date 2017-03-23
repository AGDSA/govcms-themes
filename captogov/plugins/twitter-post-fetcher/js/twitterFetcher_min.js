/*********************************************************************
*  #### Twitter Post Fetcher v16.0.3 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(E,q){"function"===typeof define&&define.amd?define([],q):"object"===typeof exports?module.exports=q():q()})(this,function(){function E(a){if(null===t){for(var g=a.length,b=0,k=document.getElementById(F),f="<ul>";b<g;)f+="<li>"+a[b]+"</li>",b++;k.innerHTML=f+"</ul>"}else t(a)}function q(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,b){return b}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function G(a){a=a.getElementsByTagName("a");
for(var g=a.length-1;0<=g;g--)a[g].setAttribute("target","_blank")}function l(a,g){for(var b=[],k=new RegExp("(^| )"+g+"( |$)"),f=a.getElementsByTagName("*"),h=0,d=f.length;h<d;h++)k.test(f[h].className)&&b.push(f[h]);return b}function y(a){if(void 0!==a&&0<=a.innerHTML.indexOf("data-srcset"))return a=a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(a).split('"')[1]}var F="",g=20,H=!0,x=[],z=!1,A=!0,n=!0,B=null,C=!0,D=!0,t=null,I=!0,u=!1,v=!0,J=!0,K=!1,m=null,L={fetch:function(a){void 0===
a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);void 0===a.dataOnly&&
(a.dataOnly=!1);if(z)x.push(a);else{z=!0;F=a.domId;g=a.maxTweets;H=a.enableLinks;n=a.showUser;A=a.showTime;D=a.showRetweet;B=a.dateFunction;t=a.customCallback;I=a.showInteraction;u=a.showImages;v=a.linksInNewWindow;J=a.showPermalinks;K=a.dataOnly;var l=document.getElementsByTagName("head")[0];null!==m&&l.removeChild(m);m=document.createElement("script");m.type="text/javascript";m.src=void 0!==a.list?"https://syndication.twitter.com/timeline/list?callback=twitterFetcher.callback&dnt=false&list_slug="+
a.list.listSlug+"&screen_name="+a.list.screenName+"&suppress_response_codes=true&lang="+(a.lang||"en")+"&rnd="+Math.random():void 0!==a.profile?"https://syndication.twitter.com/timeline/profile?callback=twitterFetcher.callback&dnt=false&screen_name="+a.profile.screenName+"&suppress_response_codes=true&lang="+(a.lang||"en")+"&rnd="+Math.random():void 0!==a.likes?"https://syndication.twitter.com/timeline/likes?callback=twitterFetcher.callback&dnt=false&screen_name="+a.likes.screenName+"&suppress_response_codes=true&lang="+
(a.lang||"en")+"&rnd="+Math.random():"https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();l.appendChild(m)}},callback:function(a){function m(a){var b=a.getElementsByTagName("img")[0];b.src=b.getAttribute("data-src-2x");return a}a.body=a.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,"");u||(a.body=a.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,
""));n||(a.body=a.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,""));var b=document.createElement("div");b.innerHTML=a.body;"undefined"===typeof b.getElementsByClassName&&(C=!1);a=[];var k=[],f=[],h=[],d=[],r=[],p=[],e=0;if(C)for(b=b.getElementsByClassName("timeline-Tweet");e<b.length;){0<b[e].getElementsByClassName("timeline-Tweet-retweetCredit").length?d.push(!0):d.push(!1);if(!d[e]||d[e]&&D)a.push(b[e].getElementsByClassName("timeline-Tweet-text")[0]),r.push(b[e].getAttribute("data-tweet-id")),
n&&k.push(m(b[e].getElementsByClassName("timeline-Tweet-author")[0])),f.push(b[e].getElementsByClassName("dt-updated")[0]),p.push(b[e].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==b[e].getElementsByClassName("timeline-Tweet-media")[0]?h.push(b[e].getElementsByClassName("timeline-Tweet-media")[0]):h.push(void 0);e++}else for(b=l(b,"timeline-Tweet");e<b.length;){0<l(b[e],"timeline-Tweet-retweetCredit").length?d.push(!0):d.push(!1);if(!d[e]||d[e]&&D)a.push(l(b[e],"timeline-Tweet-text")[0]),
r.push(b[e].getAttribute("data-tweet-id")),n&&k.push(m(l(b[e],"timeline-Tweet-author")[0])),f.push(l(b[e],"dt-updated")[0]),p.push(l(b[e],"timeline-Tweet-timestamp")[0]),void 0!==l(b[e],"timeline-Tweet-media")[0]?h.push(l(b[e],"timeline-Tweet-media")[0]):h.push(void 0);e++}a.length>g&&(a.splice(g,a.length-g),k.splice(g,k.length-g),f.splice(g,f.length-g),d.splice(g,d.length-g),h.splice(g,h.length-g),p.splice(g,p.length-g));var b=[],e=a.length,c=0;if(K)for(;c<e;)b.push({tweet:a[c].innerHTML,author:k[c]?
k[c].innerHTML:"Unknown Author",time:f[c].textContent,timestamp:f[c].getAttribute("datetime").replace("+0000","Z").replace(/([\+\-])(\d\d)(\d\d)/,"$1$2:$3"),image:y(h[c]),rt:d[c],tid:r[c],permalinkURL:void 0===p[c]?"":p[c].href}),c++;else for(;c<e;){if("string"!==typeof B){var d=f[c].getAttribute("datetime"),w=new Date(f[c].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),d=B(w,d);f[c].setAttribute("aria-label",d);if(a[c].textContent)if(C)f[c].textContent=d;else{var w=document.createElement("p"),
t=document.createTextNode(d);w.appendChild(t);w.setAttribute("aria-label",d);f[c]=w}else f[c].textContent=d}d="";H?(v&&(G(a[c]),n&&G(k[c])),n&&(d+='<div class="user">'+q(k[c].innerHTML)+"</div>"),d+='<p class="tweet">'+q(a[c].innerHTML)+"</p>",A&&(d=J?d+('<p class="timePosted"><a href="'+p[c]+'">'+f[c].getAttribute("aria-label")+"</a></p>"):d+('<p class="timePosted">'+f[c].getAttribute("aria-label")+"</p>"))):(n&&(d+='<p class="user">'+k[c].textContent+"</p>"),d+='<p class="tweet">'+a[c].textContent+
"</p>",A&&(d+='<p class="timePosted">'+f[c].textContent+"</p>"));I&&(d+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+r[c]+'" class="twitter_reply_icon"'+(v?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+r[c]+'" class="twitter_retweet_icon"'+(v?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+r[c]+'" class="twitter_fav_icon"'+(v?' target="_blank">':">")+"Favorite</a></p>");u&&void 0!==
h[c]&&void 0!==y(h[c])&&(d+='<div class="media"><img src="'+y(h[c])+'" alt="Image from tweet" /></div>');u?b.push(d):!u&&a[c].textContent.length&&b.push(d);c++}E(b);z=!1;0<x.length&&(L.fetch(x[0]),x.splice(0,1))}};return window.twitterFetcher=L});
