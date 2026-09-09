const library=document.querySelector('#library'),reader=document.querySelector('#reader'),text=document.querySelector('#text'),title=document.querySelector('#readerTitle');
function render(){library.innerHTML=BOOKS.map((b,i)=>`<div class="card"><div class="cover">${b.title}</div><h2>${b.title}</h2><div class="meta">نویسنده: حسین اقبالیان · ${b.pages?b.pages+' صفحه':''}</div><button class="btn" onclick="openBook(${i})">شروع مطالعه</button></div>`).join('')}
function openBook(i){const b=BOOKS[i]; title.textContent=b.title;text.textContent=b.text; document.querySelector('header').classList.add('hidden');library.classList.add('hidden');reader.classList.remove('hidden');window.scrollTo(0,0)}
document.querySelector('#back').onclick=()=>{reader.classList.add('hidden');library.classList.remove('hidden');document.querySelector('header').classList.remove('hidden');window.scrollTo(0,0)};
document.querySelector('#theme').onclick=()=>document.documentElement.classList.toggle('dark');render();
