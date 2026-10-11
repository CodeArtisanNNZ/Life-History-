/* Visual archive enhancements: readable fallback, optional full-image viewing from original sources. */
(()=>{"use strict";
 const images=document.querySelectorAll(".visual-gallery .visual-media-image img,.ref-chapter .visual-chapter-photo img");
 images.forEach(img=>{
   img.addEventListener("error",()=>{
     const target=img.closest(".visual-media-image");
     if(target)target.classList.add("visual-image-unavailable");
     else img.style.display="none";
   },{once:true});
   if(img.complete && img.naturalWidth===0){
     const target=img.closest(".visual-media-image");
     if(target)target.classList.add("visual-image-unavailable");
     else img.style.display="none";
   }
 });
})();