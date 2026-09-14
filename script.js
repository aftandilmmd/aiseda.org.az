const btn=document.getElementById('menuBtn'),menu=document.getElementById('menu');
if(btn&&menu){btn.addEventListener('click',()=>{const o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o);});}
const cf=document.getElementById('cf');
if(cf){cf.addEventListener('submit',e=>{e.preventDefault();const f=e.target;
if(!f.name.value||!f.email.value||!f.message.value){alert('Ad, e-poçt və mesaj sahələrini doldurun.');return;}
document.getElementById('sent').style.display='block';f.reset();});}
