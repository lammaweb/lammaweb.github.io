import {initializeApp} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {getFirestore,collection,doc,setDoc,getDoc,updateDoc,deleteDoc,onSnapshot} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
export {signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged,collection,doc,setDoc,getDoc,updateDoc,deleteDoc,onSnapshot};
const firebaseConfig={apiKey:"AIzaSyD6cYYRQboIirQ7uXzH1mmiL3dDs6Chf0Q",authDomain:"lamma-768dd.firebaseapp.com",projectId:"lamma-768dd",storageBucket:"lamma-768dd.firebasestorage.app",messagingSenderId:"369528770485",appId:"1:369528770485:web:efc3711f1632f072f893fc",measurementId:"G-4EGLQM2ERV"};
const CONTACT_WA="201148398846";
const DOMAIN="@clients.lamma.local";
const app=initializeApp(firebaseConfig),auth=getAuth(app),db=getFirestore(app);
const $=id=>document.getElementById(id);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slugOf=v=>String(v||'').trim().toLowerCase().replace(/[^a-z0-9_.-]/g,'_');
const KEYS=['n','cat','bio','city','hours','ph','wa','fb','ig','tt','web','map','vc','ip','bank','cod','color'];
const LAYS=[['قائمة طولية',[1],'l'],['زرارين جنب بعض',[2],'t'],['تلاتة جنب بعض',[3],'t'],['زرارين ثم تلاتة',[2,3],'t'],['واحد طويل ثم زرارين',[1,2],'t'],['أيقونات دايرية',[4],'c']];
const IMGK=['logo','cover'];
const DATAIMG=/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+\/=]+$/;
function mini(i){const pat=LAYS[i][1],kind=LAYS[i][2],N=kind==='c'?4:6;let n=0,k=0,o='';while(n<N){const c=Math.min(pat[k++%pat.length],N-n);o+='<div class="mr">'+Array(c+1).join('<i class="'+(kind==='c'?'mc':c===1?'m1':'mt')+'"></i>')+'</div>';n+=c}return o}
function toast(m){const t=$('toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.k);toast.k=setTimeout(()=>t.classList.remove('show'),2600)}
const errMsg=c=>({'auth/email-already-in-use':'اسم المستخدم مستخدم من قبل','auth/weak-password':'كلمة المرور ضعيفة (6 أحرف على الأقل)','auth/operation-not-allowed':'فعّل تسجيل Email/Password من Firebase Console','auth/invalid-credential':'بيانات الدخول غير صحيحة','auth/user-not-found':'بيانات الدخول غير صحيحة','auth/wrong-password':'بيانات الدخول غير صحيحة','auth/too-many-requests':'محاولات كتير، جرّب بعد شوية','auth/network-request-failed':'مشكلة في الاتصال بالإنترنت','auth/unauthorized-domain':'الدومين مش مضاف في Firebase: أضفه من Authentication > Settings > Authorized domains','auth/invalid-api-key':'مفتاح Firebase (apiKey) غير صحيح، انسخه تاني من Project settings','auth/api-key-not-valid.-please-pass-a-valid-api-key.':'مفتاح Firebase (apiKey) غير صحيح، انسخه تاني من Project settings','auth/configuration-not-found':'فعّل Authentication وEmail/Password من Firebase','auth/invalid-email':'الإيميل غير صحيح'}[c]||('حصل خطأ ('+(c||'unknown')+')'));
/* ---------- روابط آمنة وصفحة العميل ---------- */
const digits=v=>String(v||'').replace(/\D/g,'');
const intl=v=>{let d=digits(v);if(d.startsWith('00'))d=d.slice(2);else if(d.startsWith('0'))d='2'+d;return d};
const safe=v=>{v=String(v||'').trim();if(!v)return'';if(/^https?:\/\//i.test(v))return v;if(/^[a-z][a-z0-9+.\-]*:/i.test(v))return'';return 'https://'+v};
function lk(k,v){v=String(v||'').trim();if(!v)return'';if(/[.\/]/.test(v))return safe(v);const h=encodeURIComponent(v.replace(/^@/,''));return k==='fb'?'https://facebook.com/'+h:k==='ig'?'https://instagram.com/'+h:k==='tt'?'https://tiktok.com/@'+h:safe(v)}
const SZ=['s','m','l'];
const IC={
 phone:{n:'اتصال',bg:'var(--a)',g:'<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>'},
 whatsapp:{n:'واتساب',bg:'#25D366',g:'<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>'},
 map:{n:'الموقع',bg:'#EA4335',g:'<path d="M12 2a7 7 0 00-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9a2.5 2.5 0 012.5 2.5z"/>'},
 qr:{n:'QR',bg:'#2b2438',g:'<path d="M3 3h8v8H3zm2 2v4h4V5zm8-2h8v8h-8zm2 2v4h4V5zM3 13h8v8H3zm2 2v4h4v-4zm8-2h3v3h-3zm5 0h3v3h-3zm-5 5h3v3h-3zm5 1h3v2h-3z"/>'},
 facebook:{n:'فيسبوك',bg:'#1877F2',g:'<path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.8c0-.9.3-1.5 1.6-1.5h1.7V3.4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.4H7.7V13h2.7v8h3.1z"/>'},
 instagram:{n:'إنستجرام',bg:'linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)',g:'<rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="#fff" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.2"/>'},
 tiktok:{n:'تيك توك',bg:'#000',g:'<path d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z"/>'},
 youtube:{n:'يوتيوب',bg:'#FF0000',g:'<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9v6l5-3z" fill="#f00"/>'},
 telegram:{n:'تيليجرام',bg:'#229ED9',g:'<path d="M21.4 4.1L2.7 11.3c-1 .4-1 1 0 1.3l4.700 1.500 1.800 5.600c.2.600.4.800.8.800.4 0 .6-.2.9-.5l2.300-2.200 4.700 3.500c.9.500 1.500.2 1.700-.8l3-14.200c.3-1.200-.4-1.800-1.200-1.200z"/>'},
 x:{n:'X (تويتر)',bg:'#000',g:'<path d="M17.8 3h3.1l-6.7 7.700L22 21h-6.200l-4.800-6.300L5.400 21H2.300l7.200-8.200L2 3h6.300l4.400 5.800L17.800 3zm-1.100 16.200h1.700L7.400 4.700H5.600l11.100 14.500z"/>'},
 linkedin:{n:'لينكدإن',bg:'#0A66C2',g:'<rect x="4" y="9" width="3.500" height="11"/><circle cx="5.750" cy="5.500" r="2"/><path d="M10 9h3.300v1.600c.6-1 1.800-1.800 3.500-1.800 3.300 0 3.700 2.200 3.700 4.800V20H17v-5.500c0-1.200 0-2.700-1.700-2.700s-1.900 1.300-1.900 2.600V20H10z"/>'},
 web:{n:'موقع إلكتروني',bg:'#4B5563',g:'<circle cx="12" cy="12" r="8.500" fill="none" stroke="#fff" stroke-width="2"/><path d="M3.500 12h17M12 3.500c3 3.200 3 13.800 0 17M12 3.500c-3 3.200-3 13.800 0 17" fill="none" stroke="#fff" stroke-width="1.800"/>'},
 mail:{n:'بريد',bg:'#EA4335',g:'<rect x="3" y="5.500" width="18" height="13" rx="2.500" fill="none" stroke="#fff" stroke-width="2"/><path d="M3.500 8l8.500 6 8.500-6" fill="none" stroke="#fff" stroke-width="2"/>'},
 instapay:{n:'إنستا باي',bg:'#6A2C91',g:'<text x="12" y="16.500" text-anchor="middle" font-size="11.500" font-weight="900" font-family="Arial,sans-serif" fill="#fff">IP</text>'},
 vodafone:{n:'فودافون كاش',bg:'#E60000',g:'<circle cx="12" cy="12" r="8.500" fill="#fff"/><circle cx="12.700" cy="12.800" r="4.200" fill="#E60000"/>'},
 bank:{n:'حساب بنكي',bg:'#0F766E',g:'<path d="M12 3L3 8v2h18V8zM5 11v7h2v-7zm4 0v7h2v-7zm4 0v7h2v-7zm4 0v7h2v-7zM3 19v2h18v-2z"/>'},
 cash:{n:'نقدي',bg:'#16A34A',g:'<rect x="2.500" y="6" width="19" height="12" rx="2.500" fill="none" stroke="#fff" stroke-width="2"/><circle cx="12" cy="12" r="2.800"/>'},
 star:{n:'نجمة',bg:'#F59E0B',g:'<path d="M12 2l3 6.500 7 .8-5.200 4.800 1.400 7L12 17.500 5.800 21l1.400-7L2 9.300l7-.8z"/>'},
 menu:{n:'المنيو',bg:'#7C3AED',g:'<path d="M4 6h16M4 12h16M4 18h10" fill="none" stroke="#fff" stroke-width="2.400" stroke-linecap="round"/>'},
 link:{n:'رابط',bg:'#64748B',g:'<path d="M10 14a4 4 0 005.700 0l3-3a4 4 0 00-5.700-5.700l-1 1M14 10a4 4 0 00-5.700 0l-3 3a4 4 0 005.700 5.700l1-1" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"/>'}
};
const PRESET={phone:{ty:'tel'},whatsapp:{ty:'wa'},qr:{ty:'qr'},instapay:{ty:'pay'},vodafone:{ty:'copy'},bank:{ty:'copy'},cash:{ty:'static'},mail:{ty:'mail'}};
function icoH(k,bg,sz,sh){const d=IC[k]||IC.link;return '<span class="ic z-'+(SZ.indexOf(sz)>-1?sz:'m')+' sh-'+(sh==='ci'?'ci':'sq')+'" style="background:'+(bg||d.bg)+'"><svg viewBox="0 0 24 24" fill="#fff">'+d.g+'</svg></span>'}
function defDesign(){const I=(id,src,ty,ic,t,sz)=>({id,src,ty,ic,t,s:'',v:'',sz:sz||'',bg:''});
 return {v:1,shape:'sq',sz:'m',anim:'soft',rate:1,secs:[
 {id:'s1',t:'تواصل',lay:6,items:[I('i1','ph','tel','phone','اتصال','l'),I('i2','wa','wa','whatsapp','واتساب','l'),I('i3','map','url','map','الموقع','l'),I('i4','','qr','qr','QR','l')]},
 {id:'s2',t:'تابعنا',lay:2,items:[I('i5','fb','url','facebook','فيسبوك'),I('i6','ig','url','instagram','إنستجرام'),I('i7','tt','url','tiktok','تيك توك'),I('i8','web','url','web','الموقع الإلكتروني')]},
 {id:'s3',t:'طرق الدفع',lay:1,items:[I('i9','ip','pay','instapay','إنستا باي'),I('i10','vc','copy','vodafone','فودافون كاش'),I('i11','bank','copy','bank','حساب بنكي'),I('i12','cod','static','cash','الدفع عند الاستلام')]}]}}
function normDesign(d){if(!d||typeof d!=='object'||!Array.isArray(d.secs))return defDesign();
 const o={v:1,shape:d.shape==='ci'?'ci':'sq',sz:SZ.indexOf(d.sz)>-1?d.sz:'m',anim:['none','soft','lively'].indexOf(d.anim)>-1?d.anim:'soft',rate:d.rate===0||d.rate==='0'?0:1,secs:[]};
 d.secs.slice(0,12).forEach(x=>{if(!x||!Array.isArray(x.items))return;o.secs.push({id:String(x.id||''),t:String(x.t||''),lay:Math.min(6,Math.max(1,parseInt(x.lay,10)||1)),items:x.items.slice(0,40).map(it=>({id:String(it.id||''),src:String(it.src||''),ty:String(it.ty||'url'),ic:String(it.ic||'link'),t:String(it.t||''),s:String(it.s||''),v:String(it.v||''),sz:String(it.sz||''),bg:String(it.bg||'')}))})});
 return o}
function resolveItem(it,D,dz){
 const ty=it.ty||'url',src=it.src||'';let val=String(it.v||'').trim();
 if(!val&&src){val=src==='cod'?(D.cod?'1':''):String(D[src]||'').trim();if(src==='wa'&&!val)val=String(D.ph||'').trim()}
 const ic=IC[it.ic]?it.ic:'link',x={ic,t:String(it.t||IC[ic].n||''),sz:SZ.indexOf(it.sz)>-1?it.sz:dz.sz,bg:/^#[0-9a-f]{6}$/i.test(it.bg||'')?it.bg:''},so=String(it.s||'').trim();
 if(ty==='qr'){x.q=1;x.s=so||'شارك الصفحة';x.e='عرض';return x}
 if(ty==='static'){if(src&&!val)return null;x.s=so||(src==='cod'?'متاح':'');return x}
 if(!val)return null;
 if(ty==='tel'){const n=digits(val);if(!n)return null;x.h='tel:'+n;x.s=so||n;x.e='اتصل'}
 else if(ty==='wa'){const n=intl(val);if(!n)return null;x.h='https://wa.me/'+n;x.s=so||'ابدأ محادثة';x.e='ابدأ'}
 else if(ty==='mail'){if(!/^[^\s@<>"']+@[^\s@<>"']+$/.test(val))return null;x.h='mailto:'+val;x.s=so||val;x.e='راسلنا'}
 else if(ty==='copy'){x.v=val;x.s=so||(val.length>28?'اضغط للنسخ':val);x.e='نسخ'}
 else if(ty==='pay'){const u=(/^https?:\/\//i.test(val)||/ipn\.eg/i.test(val))?safe(val):'';if(u){x.h=u;x.s=so||'ادفع من التطبيق مباشرة';x.e='ادفع'}else{x.v=val;x.s=so||val;x.e='نسخ'}}
 else{const u=(!it.v&&['fb','ig','tt','web'].indexOf(src)>-1)?lk(src,val):safe(val);if(!u)return null;x.h=u;x.s=so||(src==='map'?'افتح الخريطة':'');x.e='زيارة'}
 return x}
function btn(x,i,sh){const e=esc,st=' style="--i:'+i+'"',inner=icoH(x.ic,x.bg,x.sz,sh)+'<span class="tx"><b>'+e(x.t)+'</b>'+(x.s?'<small>'+e(x.s)+'</small>':'')+'</span>'+(x.e?'<span class="end">'+e(x.e)+'</span>':'');
 if(x.h)return '<a class="bt" href="'+e(x.h)+'"'+(/^(tel|mailto):/.test(x.h)?'':' target="_blank" rel="noopener"')+st+'>'+inner+'</a>';
 if(x.v)return '<button class="bt" data-v="'+e(x.v)+'" onclick="cp(this.dataset.v)"'+st+'>'+inner+'</button>';
 if(x.q)return '<button class="bt qrt"'+st+'>'+inner+'</button>';
 return '<div class="bt"'+st+'>'+inner+'</div>'}
function grid(items,L,sh,start){const pat=LAYS[L][1],kind=LAYS[L][2];let i=0,k=0,o='';
 while(i<items.length){const n=Math.min(pat[k++%pat.length],items.length-i);let h='';
  for(let j=0;j<n;j++,i++)h+=btn(items[i],start+i,sh);
  o+='<div class="rw '+(kind==='c'?'sc':'s'+n)+'">'+h+'</div>'}
 return o}
function pageHTML(D,url){
 D=Object.assign({},D);KEYS.concat(IMGK).forEach(k=>{if(k!=='cod')D[k]=D[k]==null?'':String(D[k])});
 const e=esc,col=/^#[0-9a-f]{6}$/i.test(D.color)?D.color:'#8b63d0',nm=e(D.n||'اسم النشاط'),w=intl(D.wa||D.ph);
 const ci=DATAIMG.test(D.cover),li=DATAIMG.test(D.logo),dz=normDesign(D.design),an=dz.anim;
 let secs='',gi=0;
 dz.secs.forEach(sc=>{const items=sc.items.map(it=>resolveItem(it,D,dz)).filter(Boolean);if(!items.length)return;secs+='<section>'+(sc.t?'<h2>'+e(sc.t)+'</h2>':'')+grid(items,sc.lay-1,dz.shape,gi)+'</section>';gi+=items.length});
 const rate=dz.rate?'<section><h2>قيّم تجربتك</h2><div class="fm"><div class="pk" id="pk"><button data-k="1">★</button><button data-k="2">★</button><button data-k="3">★</button><button data-k="4">★</button><button data-k="5" class="on">★</button></div><input id="rn" placeholder="اسمك"><textarea id="rt" rows="2" placeholder="اكتب رأيك"></textarea><button class="sd" id="rs">أرسل التقييم</button></div></section>':'';
 return '<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+nm+'</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@500;700;900&display=swap"><style>'
 +':root{--a:'+col+';--ink:#26202f;--mu:#766d85;--ln:#ece7f3;--so:#f6f2fb}*{box-sizing:border-box}body{margin:0;background:#f1edf7;font-family:Cairo,Tahoma,Arial,sans-serif;color:var(--ink);line-height:1.7}button{font:inherit;border:0;cursor:pointer;color:inherit}a{color:inherit;text-decoration:none}'
 +'.pg{max-width:480px;margin:auto;background:#fff;min-height:100vh;overflow:hidden}.cv{height:150px;background:linear-gradient(135deg,var(--a),#241a35)}.id{text-align:center;padding:0 20px;margin-top:-46px}.lg{overflow:hidden;width:92px;height:92px;border-radius:28px;background:var(--a);color:#fff;border:4px solid #fff;box-shadow:0 8px 24px #0003;margin:0 auto 8px;display:grid;place-items:center;font-size:38px;font-weight:900}'
 +'h1{margin:0;font-size:23px}.tg{display:inline-block;background:var(--so);color:var(--mu);border-radius:20px;padding:1px 12px;font-size:12.5px;margin:4px 0}.bio{margin:2px auto;color:var(--mu);font-size:14px;max-width:340px}.mt{font-size:13px;color:var(--mu)}'
 +'section{padding:20px 18px 0}h2{font-size:15px;margin:0 0 10px;display:flex;gap:8px;align-items:center}h2::after{content:"";flex:1;height:1px;background:var(--ln)}'
 +'.rw{display:flex;gap:8px;margin-bottom:8px}.bt{flex:1;min-width:0;display:flex;align-items:center;gap:12px;width:100%;background:#fff;border:1px solid var(--ln);border-radius:15px;padding:10px 12px;text-align:right;position:relative;overflow:hidden}'
 +'.ic{display:grid;place-items:center;flex:none;width:44px;height:44px}.ic svg{width:56%;height:56%}.z-s{width:34px;height:34px}.z-m{width:44px;height:44px}.z-l{width:62px;height:62px}.sh-sq{border-radius:28%}.sh-ci{border-radius:50%}'
 +'.bt b{display:block;font-size:14.5px}.bt small{color:var(--mu);font-size:12px;display:block}.end{margin-inline-start:auto;color:var(--a);font-size:12.5px;font-weight:700;white-space:nowrap}'
 +'.s2 .bt,.s3 .bt,.s4 .bt{flex-direction:column;text-align:center;gap:6px;padding:14px 6px}.s2 .end,.s3 .end,.sc .end{display:none}.s3 b{font-size:12.5px}.s3 small{font-size:10.5px;word-break:break-all}.s3 .bt{padding:12px 4px}'
 +'.sc{justify-content:center;gap:14px 8px}.sc .bt{flex:0 1 23%;flex-direction:column;background:none;border:0;padding:0;gap:6px;text-align:center}.sc b{font-size:12px}.sc small{display:none}'
 +'.an-soft .bt{transition:transform .18s,box-shadow .18s}.an-soft .bt:hover{transform:translateY(-3px);box-shadow:0 8px 18px #0002}.an-soft .bt:active{transform:scale(.96)}'
 +'.an-lively .bt{animation:up .55s both;animation-delay:calc(var(--i)*70ms);transition:transform .2s,box-shadow .2s}.an-lively .bt:hover{transform:translateY(-4px) scale(1.03);box-shadow:0 10px 22px #0003}.an-lively .bt:active{transform:scale(.95)}'
 +'.an-lively .ic{animation:fl 3.2s ease-in-out infinite;animation-delay:calc(var(--i)*-.4s)}.an-lively .bt::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 40%,#ffffff66 50%,transparent 60%);transform:translateX(-120%);animation:sw 3.6s ease-in-out infinite;animation-delay:calc(var(--i)*.3s);pointer-events:none}'
 +'@keyframes up{from{opacity:0;transform:translateY(14px)}}@keyframes fl{50%{transform:translateY(-3px) rotate(-4deg)}}@keyframes sw{40%,100%{transform:translateX(120%)}}@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}'
 +'.fm{background:var(--so);border-radius:16px;padding:14px}.pk{display:flex;gap:4px;margin-bottom:6px}.pk button{background:none;font-size:30px;color:#d9d2e4;padding:0;line-height:1}.pk button.on{color:#e0a526}.fm input,.fm textarea{width:100%;padding:10px;border:1px solid var(--ln);border-radius:10px;margin-bottom:8px;font:inherit}.sd{width:100%;background:var(--a);color:#fff;border-radius:11px;padding:11px;font-weight:700}'
 +'.ft{margin-top:26px;padding:18px;text-align:center;background:var(--so);font-size:12.5px;color:var(--mu)}.sh{position:fixed;inset:0;background:#000a;display:none;align-items:flex-end;justify-content:center}.sh.o{display:flex}.cd{background:#fff;width:100%;max-width:480px;border-radius:24px 24px 0 0;padding:20px;text-align:center}.qb{width:200px;height:200px;margin:10px auto;background:#fff;padding:10px;border-radius:14px;display:grid;place-items:center}'
 +'.tt{position:fixed;inset-inline:0;bottom:20px;margin:auto;width:max-content;background:#26202f;color:#fff;padding:9px 18px;border-radius:30px;font-size:13px;opacity:0;transition:opacity .2s;pointer-events:none}.tt.s{opacity:1}'
 +'</style></head><body class="an-'+an+'"><div class="pg"><div class="cv"'+(ci?' style="background:url('+e(D.cover)+') center/cover"':'')+'></div><div class="id"><div class="lg">'+(li?'<img src="'+e(D.logo)+'" alt="" style="width:100%;height:100%;object-fit:cover">':e((D.n||'؟').charAt(0)))+'</div><h1>'+nm+'</h1><span class="tg">'+e(D.cat)+'</span>'
 +(D.bio?'<p class="bio">'+e(D.bio)+'</p>':'')+'<div class="mt">'+(D.city?'📍 '+e(D.city):'')+(D.hours?'<br>🕐 '+e(D.hours):'')+'</div></div>'
 +secs+rate
 +'<div class="ft">صفحة مصنوعة بواسطة <b>Lamma</b> © 2027</div></div><div class="sh" id="sh"><div class="cd"><b>'+nm+'</b><div class="qb" id="qb"></div><button class="sd" id="cl">إغلاق</button></div></div><div class="tt" id="tt"></div>'
 +'<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"><\/script><script>'
 +'var W='+JSON.stringify(w)+',U='+JSON.stringify(url||'').replace(/</g,'\\u003c')+',N='+JSON.stringify(D.n||'').replace(/</g,'\\u003c')+',S=5,Q=0;'
 +'function T(m){var t=document.getElementById("tt");t.textContent=m;t.classList.add("s");setTimeout(function(){t.classList.remove("s")},1800)}'
 +'function cp(v){function fb(){var a=document.createElement("textarea");a.value=v;document.body.appendChild(a);a.select();try{document.execCommand("copy");T("تم النسخ")}catch(x){T("انسخ يدوياً")}a.remove()}try{navigator.clipboard.writeText(v).then(function(){T("تم النسخ")},fb)}catch(x){fb()}}'
 +'var qs=document.querySelectorAll(".qrt");for(var qi=0;qi<qs.length;qi++){qs[qi].onclick=function(){document.getElementById("sh").classList.add("o");if(!Q){Q=1;try{new QRCode(document.getElementById("qb"),{text:U||location.href,width:180,height:180})}catch(x){}}}}'
 +'document.getElementById("cl").onclick=function(){document.getElementById("sh").classList.remove("o")};'
 +'var pk=document.getElementById("pk");if(pk){pk.onclick=function(ev){var k=ev.target.dataset.k;if(!k)return;S=+k;[].forEach.call(this.children,function(b){b.classList.toggle("on",+b.dataset.k<=S)})};'
 +'document.getElementById("rs").onclick=function(){var n=document.getElementById("rn").value.trim(),t=document.getElementById("rt").value.trim();if(!n||!t){T("اكتب اسمك ورأيك");return}var m="تقييم جديد لـ "+N+"\\n"+"★".repeat(S)+" ("+S+"/5)\\nالاسم: "+n+"\\nالرأي: "+t;window.open("https://wa.me/"+W+"?text="+encodeURIComponent(m),"_blank")}}'
 +'<\/script></body></html>'}

/* ---------- QR ---------- */
function drawQr(id,text,size){const el=$(id);el.innerHTML='';try{new QRCode(el,{text,width:size,height:size,colorDark:'#2b1d45',colorLight:'#ffffff'})}catch(e){}}
function qrPng(url,name,color,file){
 const box=document.createElement('div');try{new QRCode(box,{text:url,width:520,height:520,correctLevel:QRCode.CorrectLevel.H})}catch(e){toast('تعذر تحميل مكتبة الـQR');return}
 setTimeout(()=>{const q=box.querySelector('canvas');if(!q){toast('تعذر إنشاء الـQR');return}
  const c=document.createElement('canvas');c.width=600;c.height=720;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,600,720);x.drawImage(q,40,40,520,520);
  x.fillStyle=/^#[0-9a-f]{6}$/i.test(color)?color:'#6b4aa8';x.textAlign='center';x.direction='rtl';x.font='900 40px Cairo,Tahoma,sans-serif';x.fillText(name||'',300,622);
  x.fillStyle='#766d85';x.font='500 24px Cairo,Tahoma,sans-serif';x.fillText('امسح الكود لفتح صفحتنا',300,672);
  c.toBlob(b=>dl(b,file||'lamma-qr.png'),'image/png')},120)}
function dl(blob,name){const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),1500)}
export {CONTACT_WA,DOMAIN,auth,db,$,esc,slugOf,KEYS,LAYS,IMGK,DATAIMG,mini,toast,errMsg,digits,intl,safe,lk,SZ,IC,PRESET,icoH,defDesign,normDesign,resolveItem,btn,grid,pageHTML,drawQr,qrPng,dl};
