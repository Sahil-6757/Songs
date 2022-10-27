let songs = new Audio();
let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");
let i = document.getElementById("i");
let MusicPlayer = document.getElementById("MusicPlayer");

MusicPlayer.addEventListener("click",()=>{
  songs.src = "Windows/beep.mp3";
  songs.play();
})

a.addEventListener('click',()=>{
  songs.src = "./Songs/01 Tere Hoke Rehengay - Raja Natwarlal (Arijit Singh) - 320Kbps.mp3";
  songs.play();
})
b.addEventListener('click',()=>{
  songs.src = "./Songs/Butterfly - Jass Manak_320(MyMp3Song).mp3";
  songs.play();
})
c.addEventListener('click',()=>{
  songs.src = "./Songs/Kandhe Ka Woh Til - Sachet Tandon_320(MyMp3Song).mp3";
  songs.play();
})
d.addEventListener('click',()=>{
  songs.src = "./Songs/No Competition - Jass Manak Ft. Divine_320(MyMp3Song).mp3";
  songs.play();
})
e.addEventListener('click',()=>{
  songs.src = "./Songs/Pepeta (Noora Fatehi Ft Rayvanny) 320 Kbps.mp3";
  songs.play();
})
f.addEventListener('click',()=>{
  songs.src = "./Songs/Teri Cute Jahi Smile Utte Kina Mardi_320(PaglaSongs).mp3";
  songs.play();
})
g.addEventListener('click',()=>{
  songs.src = "./Songs/No Competition - Jass Manak Ft. Divine_320(MyMp3Song).mp3";
  songs.play();
})
h.addEventListener('click',()=>{
  songs.src = "./Songs/ Teri Cute Jahi Smile Utte Kina Mardi_320(PaglaSongs).mp3";
  songs.play();
})
i.addEventListener('click',()=>{
  songs.src = "./Songs/No Competition - Jass Manak Ft. Divine_320(MyMp3Song).mp3";
  songs.play();
})






