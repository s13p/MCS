(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6601:function(){},5580:function(e,t,a){Promise.resolve().then(a.bind(a,4162))},4162:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(7437),l=a(2265),r=()=>{let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{let e=setInterval(()=>{t(e=>[...e.slice(Math.max(e.length-5,0)),{top:Math.random()*window.innerHeight-50,left:Math.random()*window.innerWidth-50}])},500);return()=>clearInterval(e)},[]),(0,s.jsx)("div",{className:"select-none",style:{pointerEvents:"none"},children:e.map((e,t)=>(0,s.jsx)("div",{style:{top:e.top,left:e.left},className:"absolute text-4xl select-none ",children:(0,s.jsx)("img",{src:"https://pub-9b9bfca3192d4b86a72f7d523a2a255e.r2.dev/strikes.gif",className:"select-none"})},t))})},i=a(8956),c=a(6413),n=a(608),d=a(9222);new n.m({apiKey:"moHfxQVHEUGryEadHTddGOXH-jU3Qp3e"});let x="0xb2b68f7785daecf337749491c4a5ff9de3c964ef",o="https://www.dextools.io/app/en/ether/pair-explorer/".concat(x),m="https://app.uniswap.org/#/swap?outputCurrency=".concat(x),h="https://etherscan.io/address/".concat(x),b=[];for(let e=1;e<=8;e++)b.push("https://pub-9b9bfca3192d4b86a72f7d523a2a255e.r2.dev/meme".concat(e,".jpeg"));let u=e=>{let{title:t,description:a,linkText:l,linkUrl:r}=e;return(0,s.jsxs)("li",{className:"mb-6 ml-10",children:[(0,s.jsx)("h3",{className:"text-xl  font-semibold mb-2",children:t}),(0,s.jsx)("p",{className:"text-gray-400 mb-2",children:a}),(0,s.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"text-purple-600 hover:underline",children:l})]})},j=e=>"".concat(e.slice(0,6),"...").concat(e.slice(-4));function g(){let[e,t]=(0,l.useState)(),a=l.useRef(null),[n,x]=(0,l.useState)(!1),{connect:g,connectors:v}=(0,c.$4)(),{address:p}=(0,c.mA)(),{disconnect:f}=(0,c.qL)(),[N,S]=(0,l.useState)(!1),y=()=>{a.current&&(a.current.muted=!1)},[w,M]=(0,l.useState)(),[k,T]=(0,l.useState)();(0,l.useEffect)(()=>{d.Z.get("/api/stats").then(e=>{let t=e.data;T(t)})},[]),console.log(k),(0,l.useEffect)(()=>{let e=new Audio("/music.mp3");return t(e),()=>{e.pause(),e.currentTime=0}},[]);let[D,E]=l.useState(!1);return(0,s.jsxs)("div",{className:"font-serif",children:[N&&(0,s.jsx)("div",{className:"w-screen h-screen fixed bg-black/50 z-30 flex items-center justify-center p-4",onClick:()=>{S(!1)},children:(0,s.jsxs)("div",{className:"p-3 bg-white border-blue-600 border-4",onClick:e=>{e.stopPropagation()},children:[(0,s.jsx)("div",{className:"font-bold text-blue-600",children:"Claim Some Shitcoins\xae"}),(0,s.jsx)("div",{className:"",children:"MSTR\xae is a protocol that buys and distributes tokens to all holders using taxes."}),(0,s.jsx)("div",{className:"text-center mt-4 text-gray-500",children:"Claim period coming soon..."}),!p&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)("button",{onClick:()=>{g({connector:v[0]})},className:"m-2 font-bold border-blue-600 text-blue-600 border-4 hover:bg-blue-600 hover:text-white",children:"Connect Wallet"})})}),p&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsxs)("button",{onClick:()=>{f()},className:"m-2 font-bold border-blue-600 text-blue-600 border-4 hover:bg-blue-600 hover:text-white",children:["Disconnect ",j(p)]})})})]})}),!D&&(0,s.jsx)("div",{className:"fixed top-0 left-0 w-screen h-screen bg-black/90 flex items-center justify-center text-white z-20",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("video",{src:"https://pub-9b9bfca3192d4b86a72f7d523a2a255e.r2.dev/intro.mp4",className:"w-64",autoPlay:!0,playsInline:!0,muted:!0,loop:!0}),(0,s.jsx)("button",{className:"mt-2 text-center w-full font-serif hover:underline",onClick:()=>{E(!0),y()},children:"✓ Enter"}),(0,s.jsx)("button",{className:"mt-2 text-center w-full font-serif hover:underline",onClick:()=>{window.open("https://google.com")},children:"✕ Leave"})]})}),(0,s.jsx)(r,{}),(0,s.jsxs)("div",{className:"fixed top-0 flex flex-wrap left-0 justify-between w-full p-2 z-10 text-lg font-bold",children:[(0,s.jsx)("a",{onClick:()=>{a.current&&(x(!a.current.muted),a.current.muted=!a.current.muted)},children:(0,s.jsx)("button",{className:"mx-1 bg-white text-blue-600 hover:underline hover:bg-blue-600 hover:text-white",children:n?"\uD83D\uDD07 Unmute":"\uD83D\uDD0A Mute"})}),(0,s.jsxs)("div",{className:"flex items-end",children:[(0,s.jsx)("a",{href:h,children:(0,s.jsx)("button",{className:"mx-1 bg-white text-blue-600 hover:underline hover:bg-blue-600 hover:text-white",children:"Etherscan\xae"})}),(0,s.jsx)("a",{href:o,children:(0,s.jsx)("button",{className:"mx-1 bg-white text-blue-600 hover:underline hover:bg-blue-600 hover:text-white",children:"DexTools"})}),(0,s.jsx)("a",{href:"#balances",children:(0,s.jsx)("button",{className:"mx-1 bg-white text-blue-600 hover:underline hover:bg-blue-600 hover:text-white",children:"Stats"})}),(0,s.jsx)("a",{href:m,children:(0,s.jsx)("button",{className:"mx-1 bg-white text-blue-600 hover:underline hover:bg-blue-600 hover:text-white",children:"Buy MSTR\xae"})}),(0,s.jsx)("a",{href:"https://t.me/mstrclub",children:(0,s.jsx)("button",{className:"mx-1 bg-white text-blue-600 hover:underline hover:bg-blue-600 hover:text-white",children:"Telegram"})}),(0,s.jsx)("a",{href:"https://twitter.com/mstrfund",children:(0,s.jsx)("button",{className:"mx-1 bg-white text-blue-600 hover:underline hover:bg-blue-600 hover:text-white",children:"Twitter"})})]})]}),(0,s.jsx)("video",{src:"https://pub-9b9bfca3192d4b86a72f7d523a2a255e.r2.dev/main.mp4",className:"w-screen h-screen object-cover",autoPlay:!0,playsInline:!0,muted:!0,loop:!0,ref:a}),(0,s.jsx)("div",{className:"flex flex-col items-center text-white z-10",children:(0,s.jsx)("div",{className:"-mt-10 flex flex-col items-center",children:(0,s.jsx)("div",{children:"Scroll for UNVAXXED SPERM\xae"})})}),(0,s.jsxs)(i.Z,{className:"bg-blue-600 text-white font-bold text-3xl",speed:200,children:[(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"})]}),(0,s.jsx)("div",{className:"text-pink-300 p-4 text-lg",children:"Once upon a time in the vast realm of the interwebs, the mighty UNVAXXED SPERM\xae guild, led by the legendary Sir Saylor, embarked on a quest to amass the shiniest digital treasures known as Bitcoins. But, the guild didn't stop there! Harnessing the power of meme magic, they unveiled the $MSTR token, which was whispered among the netizens to hold the power to moon beyond the stars. Every hodler, meme merchant, and digital knight knew: aligning with the UNVAXXED SPERM guild was the ticket to untold generational wealthy. 'STONKS ONLY GO UP, SER!' became the rallying cry, echoing across the cyber valleys and pixelated mountains."}),(0,s.jsxs)("div",{className:"text-white p-4 rounded shadow-lg w-full",id:"balances",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("img",{src:"https://pub-9b9bfca3192d4b86a72f7d523a2a255e.r2.dev/q.png",className:"w-12"}),(0,s.jsx)("h2",{className:"text-2xl text-blue-700 font-bold",children:"Wallet Holding Stats"})]}),(0,s.jsx)("div",{className:"text-pink-300",children:(0,s.jsxs)("b",{children:["Wallet (Hot): ",(0,s.jsx)("a",{href:"https://etherscan.io/address/0x8008D4115b7babaCAeeF475561f3593e6d2DE2e0",target:"_blank",className:"text-blue-600 hover:underline",children:"0x8008D4115b7babaCAeeF475561f3593e6d2DE2e0"})]})}),(0,s.jsx)("div",{className:"text-pink-300",children:(0,s.jsxs)("b",{children:["Wallet (Multi-Sig): ",(0,s.jsx)("a",{href:"https://etherscan.io/address/0xE65ede94E1fb5d862F27Da9D49Bdfd301f6c5547",target:"_blank",className:"text-blue-600 hover:underline",children:"0xE65ede94E1fb5d862F27Da9D49Bdfd301f6c5547"})]})}),(0,s.jsxs)("div",{className:"text-pink-300 text-3xl font-bold",children:[(0,s.jsx)("b",{children:"Value USD:"})," $",(null==k?void 0:k.total_value.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}))||"Fetching..."]}),(0,s.jsxs)("div",{className:"text-blue-600 text-sm",children:["Last updated: ",k&&new Date(k.date).toLocaleString()||"Loading..."]}),(0,s.jsxs)("table",{className:"text-pink-300 mt-6",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Token"}),(0,s.jsx)("th",{children:"Symbol"}),(0,s.jsx)("th",{children:"Address"}),(0,s.jsx)("th",{children:"Balance"}),(0,s.jsx)("th",{children:"Value USD"})]}),!k&&(0,s.jsx)(s.Fragment,{children:"Fetching..."}),k&&k.tokens.sort((e,t)=>e.value_usd<t.value_usd?1:-1).filter(e=>e.value_usd>.01).map(e=>(0,s.jsxs)("tr",{className:"",children:[(0,s.jsx)("td",{className:"font-bold underline",children:e.name}),(0,s.jsxs)("td",{children:["$",e.symbol]}),(0,s.jsx)("td",{className:"text-blue-600",children:(0,s.jsx)("a",{href:"https://www.dextools.io/app/en/ether/pair-explorer/".concat(e.address),className:"hover:underline",target:"_blank",children:j(e.address)})}),(0,s.jsx)("td",{className:"font-bold",children:e.balance.toLocaleString()}),(0,s.jsxs)("td",{className:"font-bold",children:["$",e.value_usd.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})]})]},e.address))]})]}),(0,s.jsxs)("div",{className:"text-white p-4 rounded shadow-lg w-full",children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("img",{src:"https://pub-9b9bfca3192d4b86a72f7d523a2a255e.r2.dev/q.png",className:"w-12"}),(0,s.jsx)("h2",{className:"text-2xl text-blue-700 font-bold",children:"How to Buy $MSTR Token"})]}),(0,s.jsxs)("ol",{children:[(0,s.jsx)(u,{title:"Install MetaMask",description:"Download and install the MetaMask extension for your browser.",linkText:"Go to MetaMask",linkUrl:"https://metamask.io/"}),(0,s.jsx)(u,{title:"Buy ETH",description:"Top up your MetaMask wallet with Ethereum (ETH). You can purchase ETH from various exchanges.",linkText:"Buy ETH",linkUrl:"#"}),(0,s.jsx)(u,{title:"Swap on UniSwap or DexTools",description:"Go to UniSwap or DexTools to swap your ETH for $MSTR tokens.",linkText:"Go to UniSwap",linkUrl:m})]})]}),(0,s.jsx)("div",{className:"fixed bottom-0 left-0 w-screen z-10 pb-1",children:(0,s.jsxs)(i.Z,{speed:200,children:[(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"$MSTR"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"$MSTR"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"$MSTR"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"$MSTR"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"$MSTR"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"$MSTR"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"$MSTR"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"$MSTR"}),(0,s.jsx)("div",{className:"bg-black text-purple-600 font-bold mx-2",children:"UNVAXXED SPERM\xae"})]})}),(0,s.jsx)("div",{className:"flex flex-wrap justify-center",children:b.map((e,t)=>{let a,l="p-6 ";switch(t%4){case 0:case 3:l+="w-1/3";break;case 1:case 2:l+="w-2/3"}return 1===t&&(a=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("video",{src:"https://pub-9b9bfca3192d4b86a72f7d523a2a255e.r2.dev/intro.mp4",className:"w-1/2",autoPlay:!0,playsInline:!0,muted:!0,loop:!0}),(0,s.jsxs)(i.Z,{className:"text-white font-bold bg-purple-500 text-3xl",speed:200,children:[(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"})]})]})),3===t&&(a=(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("video",{src:"https://pub-9b9bfca3192d4b86a72f7d523a2a255e.r2.dev/numb.mp4",className:"w-full max-w-2xl",autoPlay:!0,playsInline:!0,muted:!0,loop:!0}),(0,s.jsxs)(i.Z,{className:"text-white font-bold bg-purple-500 text-3xl",speed:200,children:[(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"}),(0,s.jsx)("div",{className:"mx-2",children:"UNVAXXED SPERM\xae"})]})]})),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:e,className:l},e),a]})})})]})}}},function(e){e.O(0,[261,155,133,338,971,596,744],function(){return e(e.s=5580)}),_N_E=e.O()}]);