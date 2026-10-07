/* Reviewed Bangladeshi Bangla copy for shared navigation and key chapter headings.
   Other paragraphs still use machine translation and need editorial review. */
(function(){
 const copy={"Home":"হোম","Before humanity":"মানুষের আগের ইতিহাস","Earth":"পৃথিবী","Life":"প্রাণের ইতিহাস","Dinosaurs":"ডাইনোসর","Fossils":"জীবাশ্ম","Human origins":"মানুষের উৎপত্তি","Prophets":"নবীদের ইতিহাস","Why I built this":"কেন এই ওয়েবসাইট বানালাম","Sources":"তথ্যসূত্র","Combined story":"সব একসঙ্গে","Science only":"শুধু বিজ্ঞান","Islamic sources only":"শুধু ইসলামী সূত্র","scientific evidence":"বৈজ্ঞানিক প্রমাণ","Qur'an / sahih hadith":"কুরআন ও সহিহ হাদিস","Choose a chapter":"একটি অধ্যায় বেছে নাও","Explore Life History one page at a time.":"ধাপে ধাপে ঘুরে দেখো প্রাণের ইতিহাস।","The one-scroll layout is now divided into separate pages. Pick a chapter below, then move through the story with Previous and Next.":"বিষয়গুলো আলাদা পাতায় সাজানো আছে। নিচ থেকে যেকোনো অধ্যায় বেছে নাও। তারপর আগের বা পরের অধ্যায়ে যেতে পারবে।","Angels, jinn & the rebellion of Iblis":"ফেরেশতা, জিন ও ইবলিসের অবাধ্যতার ঘটনা","Created from light and completely obedient to Allah":"নূর থেকে সৃষ্টি, আল্লাহর আদেশের অবাধ্য হন না","Created from smokeless fire and morally responsible":"ধোঁয়াহীন আগুন থেকে সৃষ্টি এবং নিজেদের কাজের জন্য দায়বদ্ধ","A planet forms beside a young Sun":"নতুন সূর্যের পাশে যেভাবে পৃথিবীর জন্ম হলো","Solar nebula → planet":"গ্যাস-ধুলার মেঘ থেকে গ্রহ","Creation belongs to Allah":"সৃষ্টির মালিক আল্লাহ","From chemistry to cells, oceans to land":"রাসায়নিক পদার্থ থেকে কোষ, সমুদ্র থেকে ডাঙায় প্রাণের যাত্রা","We do not yet know the exact first-life pathway":"পৃথিবীতে প্রথম প্রাণ ঠিক কীভাবে এলো, তা এখনো নিশ্চিতভাবে জানা যায়নি","Water is central in the Qur'anic description of living creatures":"কুরআনে প্রাণের সঙ্গে পানির সম্পর্কের কথা এসেছে","How reptiles changed—and how dinosaurs took over":"সরীসৃপের বিবর্তন এবং ডাইনোসরের উত্থান","The amniote revolution":"স্থলে ডিম পাড়ার অভিযোজন","Not just “a giant ancient reptile”":"ডাইনোসর মানেই শুধু বিশাল এক প্রাচীন সরীসৃপ নয়","How a body becomes a fossil—and why fossil fuel is different":"কীভাবে জীবাশ্ম তৈরি হয়, আর জীবাশ্ম জ্বালানি কেন আলাদা","How do dinosaur fossils form?":"ডাইনোসরের জীবাশ্ম কীভাবে তৈরি হয়?","Fossil fuels are not “liquefied dinosaurs”":"জীবাশ্ম জ্বালানি মানেই গলে যাওয়া ডাইনোসর নয়","Hominins in the fossil record — Adam in revelation":"জীবাশ্মে মানব-পূর্বপুরুষের ইতিহাস, ওহিতে আদম (আ.)-এর কথা","All 25 prophets — from Adam to Muhammad ﷺ":"আদম (আ.) থেকে মুহাম্মদ (সা.)—২৫ জন নবীর পরিচয়","No portraits. No invented chronology.":"কোনো কল্পিত ছবি নয়, বানানো সময়কালও নয়।","Family relationships explicitly supported by Islamic sources":"ইসলামী সূত্রে যেসব পারিবারিক সম্পর্কের উল্লেখ আছে","For the child who wanted to know what came before us.":"সেই শিশুটির জন্য, যে জানতে চাইত—আমাদের আগে কী ছিল।","Every claim should know what kind of evidence it is":"কোন তথ্যের পেছনে কী ধরনের প্রমাণ আছে, তা জানা জরুরি","Expanded biology research used in this edition":"এই সংস্করণে ব্যবহৃত জীববিজ্ঞানের অতিরিক্ত গবেষণা","Previous":"আগের অধ্যায়","Next":"পরের অধ্যায়","Open source":"মূল সূত্র দেখো","Learn more":"আরও জানো","Read more":"বিস্তারিত পড়ো","Before the human story":"মানুষের ইতিহাস শুরুর আগে","Natural history":"প্রাকৃতিক ইতিহাস","Islamic sources":"ইসলামী সূত্র","Scientific evidence":"বৈজ্ঞানিক প্রমাণ","Reading rule.":"পড়ার সময় মনে রাখবে।","Date not specified":"সময় উল্লেখ নেই","date not specified":"সময় উল্লেখ নেই","How Earth and the solar system formed":"পৃথিবী ও সৌরজগত যেভাবে তৈরি হলো","Origins of life, evolution and the Tree of Life":"প্রাণের উৎপত্তি ও বিবর্তনের ইতিহাস","Angels, jinn, Iblis and the unseen":"ফেরেশতা, জিন, ইবলিস ও অদৃশ্য জগৎ","Explore the chapter":"অধ্যায়টি দেখো"};
 const targets=[];
 function index(){
   const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
   let node;
   while((node=walker.nextNode())){
     const original=node.nodeValue.trim();
     if(copy[original] && !node.parentElement?.closest('script,style,textarea,.goog-te-menu-frame')){
       targets.push({node,original,translated:copy[original]});
     }
   }
 }
 let busy=false;

 function suppressOriginalEnglishHover(){
   const bn=document.documentElement.lang==='bn';

   // Google Translate can create a delayed hover balloon showing the original
   // English. Remove/hide that UI whenever Bangla is active.
   document.querySelectorAll('#goog-gt-tt,.goog-te-balloon-frame,.goog-tooltip').forEach(el=>{
     if(bn) el.remove();
   });

   // Preserve genuine site titles, but never allow translated text to expose
   // the English original as a browser tooltip in Bangla mode.
   document.querySelectorAll('[title]').forEach(el=>{
     if(el.closest('#google_translate_element')) return;
     if(bn){
       if(!el.hasAttribute('data-lifehistory-title') && el.getAttribute('title')){
         el.setAttribute('data-lifehistory-title',el.getAttribute('title'));
       }
       el.removeAttribute('title');
     }else if(el.hasAttribute('data-lifehistory-title')){
       el.setAttribute('title',el.getAttribute('data-lifehistory-title'));
       el.removeAttribute('data-lifehistory-title');
     }
   });

   // Google wraps translated text with highlight classes that trigger its
   // hover UI. Strip the visual/hover marker without touching the text.
   if(bn){
     document.querySelectorAll('.goog-text-highlight').forEach(el=>{
       el.classList.remove('goog-text-highlight');
     });
   }
 }

 function apply(){
   if(busy)return;
   busy=true;
   const bn=document.documentElement.lang==='bn';
   targets.forEach(({node,original,translated})=>{
     if(!node.isConnected)return;
     const next=bn?translated:original;
     if(node.nodeValue.trim()!==next && (bn || node.nodeValue.trim()===translated)) node.nodeValue=node.nodeValue.replace(node.nodeValue.trim(),next);
   });
   suppressOriginalEnglishHover();
   busy=false;
 }

 function applySiteLogo(){
   const src='assets/life-history-logo.png?v=4';
   document.querySelectorAll('.brand-lockup').forEach(a=>{
     a.setAttribute('href','index.html');
     a.setAttribute('aria-label','Life History home');
     a.innerHTML='<img class="site-brand-logo" src="'+src+'" alt="Life History">';
   });
   document.querySelectorAll('.footer-brand').forEach(el=>{
     el.innerHTML='<a class="footer-logo-link" href="index.html" aria-label="Life History home"><img class="footer-site-logo" src="'+src+'" alt="Life History"></a>';
   });
   let icon=document.querySelector('link[rel="icon"]');
   if(!icon){icon=document.createElement('link');icon.rel='icon';document.head.appendChild(icon);}
   icon.type='image/png'; icon.href='assets/life-history-logo.png?v=4';
   let touch=document.querySelector('link[rel="apple-touch-icon"]');
   if(!touch){touch=document.createElement('link');touch.rel='apple-touch-icon';document.head.appendChild(touch);}
   touch.href='assets/life-history-logo.png?v=4';
   let shortcut=document.querySelector('link[rel="shortcut icon"]');
   if(!shortcut){shortcut=document.createElement('link');shortcut.rel='shortcut icon';document.head.appendChild(shortcut);}
   shortcut.type='image/png';shortcut.href='assets/life-history-logo.png?v=4';
 }
 Object.assign(copy,{
   "A visual history of life · evidence · revelation":"প্রাণের ইতিহাস · প্রমাণ · ওহি",
   "From the earliest Earth and the first life to dinosaurs, human origins and the prophetic story—built so one question naturally leads to another.":"পৃথিবীর শুরুর ইতিহাস, প্রথম প্রাণ, ডাইনোসর, মানুষের উৎপত্তি ও নবীদের কাহিনি—এভাবে সাজানো, যেন একটি প্রশ্ন থেকেই আরেকটি প্রশ্নের জন্ম হয়।",
   "Explore the chapters":"অধ্যায়গুলো ঘুরে দেখো",
   "Nine chapters. One connected history.":"নয়টি অধ্যায়। একটি যুক্ত গল্প।",
   "Choose where to enter":"যেখান থেকে ইচ্ছা শুরু করো",
   "Each chapter is its own page. Move in order, or jump straight to the question that brought you here.":"প্রতিটি অধ্যায় আলাদা পাতায়। চাইলে ধারাবাহিকভাবে পড়ো, অথবা যে প্রশ্নটি তোমাকে এখানে এনেছে সেখান থেকেই শুরু করো।",
   "SCIENCE":"বিজ্ঞান",
   "REVELATION":"ওহি"
 });

 function init(){
   applySiteLogo();
   index();apply();
   const observer=new MutationObserver(()=>{if(document.documentElement.lang==='bn'){apply();suppressOriginalEnglishHover();}});
   observer.observe(document.body,{subtree:true,characterData:true,childList:true,attributes:true,attributeFilter:['title','class']});
   document.getElementById('lang-bn')?.addEventListener('click',()=>setTimeout(()=>{apply();suppressOriginalEnglishHover();},50));
   document.getElementById('lang-en')?.addEventListener('click',()=>setTimeout(()=>{apply();suppressOriginalEnglishHover();},50));
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();