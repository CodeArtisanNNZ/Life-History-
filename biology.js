
// Detailed biology interactions
(() => {
  const canvas = document.getElementById('abiogenesisCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    const particles = [];
    const colors = ['#7bd5ff','#ffd57a','#8fe6a4','#f29bb2'];
    let stage = 0;

    function sizeCanvas(){
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(300, rect.width * dpr);
      canvas.height = Math.max(220, rect.height * dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
    }

    function seed(){
      particles.length = 0;
      const rect = canvas.getBoundingClientRect();
      for(let i=0;i<60;i++){
        particles.push({
          x:Math.random()*rect.width,
          y:Math.random()*rect.height,
          r:2+Math.random()*3,
          vx:(Math.random()-.5)*.7,
          vy:(Math.random()-.5)*.7,
          c:colors[i%colors.length]
        });
      }
    }

    function draw(){
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0,0,rect.width,rect.height);
      const g = ctx.createLinearGradient(0,0,0,rect.height);
      g.addColorStop(0,'#153f58');
      g.addColorStop(1,'#041018');
      ctx.fillStyle=g;ctx.fillRect(0,0,rect.width,rect.height);

      if(stage>=1){
        for(let i=0;i<8;i++){
          ctx.strokeStyle='rgba(255,210,120,.22)';
          ctx.beginPath();
          ctx.moveTo(Math.random()*rect.width,0);
          ctx.lineTo(Math.random()*rect.width,rect.height);
          ctx.stroke();
        }
      }

      particles.forEach((p,i)=>{
        p.x+=p.vx;p.y+=p.vy;
        if(p.x<0||p.x>rect.width)p.vx*=-1;
        if(p.y<0||p.y>rect.height)p.vy*=-1;
        ctx.fillStyle=p.c;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();

        if(stage>=2){
          for(let j=i+1;j<particles.length;j++){
            const q=particles[j],dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);
            if(d<45){
              ctx.strokeStyle='rgba(180,220,255,.12)';
              ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke();
            }
          }
        }
      });

      if(stage>=3){
        const cx=rect.width*.5,cy=rect.height*.52,rr=Math.min(rect.width,rect.height)*.18;
        ctx.strokeStyle='rgba(130,230,180,.85)';ctx.lineWidth=5;
        ctx.beginPath();ctx.arc(cx,cy,rr,0,Math.PI*2);ctx.stroke();
        ctx.fillStyle='rgba(80,170,140,.08)';ctx.fill();
        if(stage>=4){
          ctx.strokeStyle='rgba(255,230,145,.8)';ctx.lineWidth=2;
          ctx.beginPath();
          for(let a=0;a<Math.PI*4;a+=.12){
            const r=rr*.55 + Math.sin(a*4)*7;
            const x=cx+Math.cos(a)*r*.65;
            const y=cy-20+a*3.1;
            if(a===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
          }
          ctx.stroke();
        }
      }
      requestAnimationFrame(draw);
    }

    sizeCanvas();seed();draw();
    window.addEventListener('resize',()=>{sizeCanvas();seed()});
    document.querySelectorAll('[data-abiostage]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        stage=+btn.dataset.abiostage;
        document.querySelectorAll('[data-abiostage]').forEach(b=>b.classList.toggle('active',b===btn));
        document.querySelectorAll('#abiogenesisMeter span').forEach((s,i)=>s.classList.toggle('on',i<=stage));
        const texts=[
          ['1. Ingredients','Water, carbon-bearing molecules, minerals and energy sources existed on the young Earth. Organic molecules can also form without life.'],
          ['2. Energy + chemistry','Lightning, ultraviolet light, volcanism, hydrothermal chemistry and wet–dry cycles are among the energy/settings studied in prebiotic chemistry.'],
          ['3. Networks of reactions','Some molecules can catalyse reactions. RNA is especially interesting because it can both store information and catalyse chemistry, but an RNA-first origin is still a hypothesis.'],
          ['4. Compartments','Fatty-acid-like molecules can spontaneously form vesicles. Compartments matter because they keep useful molecules together and allow inside/outside chemistry.'],
          ['5. Replication + selection','Once systems could make imperfect copies with heritable differences, natural selection could begin. Science does not yet know the exact path from geochemistry to the first evolving cells.']
        ];
        const t=texts[stage];
        document.getElementById('abiogenesisTitle').textContent=t[0];
        document.getElementById('abiogenesisCopy').textContent=t[1];
      });
    });
  }

  const transitionView = document.getElementById('transitionView');
  if (transitionView) {
    const data = {
      fish:{
        title:'Lobe-finned fish: powerful internal fin skeletons',
        copy:'Sarcopterygians had fleshy paired fins containing bones homologous to parts of tetrapod limbs. In shallow, oxygen-poor habitats, robust fins and air-breathing abilities could be useful.',
        bullets:['paired fins with internal bones','gills; some lineages with lungs or lung-like organs','body supported by water']
      },
      tiktaalik:{
        title:'Tiktaalik: a mosaic of fish and tetrapod traits',
        copy:'About 375 million years ago, Tiktaalik had scales and fins, but also a mobile neck, flattened skull, strengthened ribs and limb bones capable of supporting the front of the body in shallow water.',
        bullets:['wrist-like fin joints','neck separate from shoulder girdle','strong ribs and flattened head']
      },
      tetrapod:{
        title:'Early tetrapods: digits and stronger weight-bearing limbs',
        copy:'Early tetrapods evolved true digits and more robust limb girdles. They still remained closely tied to water for reproduction, much like amphibians today.',
        bullets:['digits replace fin rays','pelvis connects more strongly to spine','lungs become central to air breathing']
      },
      amniote:{
        title:'Amniotes: reproduction no longer tied to open water',
        copy:'The amniotic egg enclosed the embryo in membranes and a self-contained watery environment. This innovation allowed major vertebrate lineages to reproduce farther from ponds and shorelines.',
        bullets:['amnion protects embryo','membranes manage gas exchange and waste','lineages later split into synapsids and sauropsids']
      }
    };
    document.querySelectorAll('[data-transition]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const key=btn.dataset.transition,d=data[key];
        document.querySelectorAll('[data-transition]').forEach(b=>b.classList.toggle('active',b===btn));
        transitionView.dataset.stage=(key==='fish'||key==='tiktaalik')?'fish':key;
        document.getElementById('transitionTitle').textContent=d.title;
        document.getElementById('transitionCopy').textContent=d.copy;
        document.getElementById('transitionBullets').innerHTML=d.bullets.map(x=>'<li>'+x+'</li>').join('');
      });
    });
  }

  const periods = {
    triassic:{
      title:'Triassic · 252–201.3 million years ago',
      world:'Earth was recovering from the end-Permian mass extinction. Pangaea dominated the globe; interiors were often hot and dry. Dinosaurs appeared and began diversifying, but many other archosaurs were initially more abundant.',
      species:'Representative dinosaurs: Eoraptor, Herrerasaurus, Coelophysis and early sauropodomorphs such as Plateosaurus. Early mammaliaforms also appeared.',
      event:'At the end of the Triassic, enormous Central Atlantic Magmatic Province volcanism coincided with a mass extinction. Dinosaurs survived and expanded into newly emptied niches.'
    },
    jurassic:{
      title:'Jurassic · 201.3–145 million years ago',
      world:'Pangaea split into northern Laurasia and southern Gondwana. Warm climates and broad vegetation supported enormous herbivores. Dinosaur ecosystems became highly diverse.',
      species:'Sauropods such as Diplodocus and Brachiosaurus, predators such as Allosaurus, stegosaurs, and small feathered theropods. Archaeopteryx records a bird-like dinosaur by the Late Jurassic.',
      event:'Sauropods reached extraordinary sizes; air sacs and lightweight vertebrae helped support their respiratory and skeletal systems. Feathered theropods continued the evolutionary pathway toward birds.'
    },
    cretaceous:{
      title:'Cretaceous · 145–66 million years ago',
      world:'Continents separated further and flowering plants spread. Dinosaur faunas became regionally distinctive, with enormous titanosaurs, diverse duck-billed dinosaurs, horned dinosaurs and specialized predators.',
      species:'Tyrannosaurus, Triceratops, Ankylosaurus, Velociraptor, Spinosaurus, hadrosaurs and titanosaurs are among the best-known groups.',
      event:'The period ended with the K–Pg mass extinction. All non-avian dinosaurs disappeared, while one dinosaur lineage—birds—survived.'
    }
  };
  document.querySelectorAll('[data-dinoperiod]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const d=periods[btn.dataset.dinoperiod];
      document.querySelectorAll('[data-dinoperiod]').forEach(b=>b.classList.toggle('active',b===btn));
      document.getElementById('dinoPeriodTitle').textContent=d.title;
      document.getElementById('dinoPeriodWorld').textContent=d.world;
      document.getElementById('dinoPeriodSpecies').textContent=d.species;
      document.getElementById('dinoPeriodEvent').textContent=d.event;
    });
  });

  const groups = {
    theropod:'Theropods were primarily bipedal saurischians. Many were carnivores, but the group also evolved omnivory and herbivory. Feathers are strongly documented in many coelurosaurs. Birds are living theropods.',
    sauropod:'Sauropodomorphs evolved long necks, small heads and, in giant sauropods, pillar-like limbs. Many had extensively air-filled vertebrae connected to a bird-like respiratory air-sac system.',
    ornithopod:'Ornithopods were herbivores ranging from small bipeds to large hadrosaurs. Many evolved sophisticated chewing systems and dental batteries.',
    ceratopsian:'Ceratopsians include beaked herbivores culminating in large horned forms such as Triceratops. Their skulls carried frills and, in many species, horns used in display, defense or both.',
    thyreophoran:'Thyreophorans were armoured herbivores. Stegosaurs carried plates and tail spikes; ankylosaurs developed extensive bony armour and, in some species, tail clubs.',
    pachy:'Pachycephalosaurs were bipedal ornithischians with thickened skull roofs. Exactly how they used the domes—combat, display, or both—remains debated.'
  };
  document.querySelectorAll('[data-dinogroup]').forEach(el=>{
    el.addEventListener('click',()=>{
      document.getElementById('dinoExplain').textContent=groups[el.dataset.dinogroup];
    });
  });

  const fossilSteps = [
    ['1. Death & transport','Most organisms never fossilize. Scavengers, decay, weather and transport usually destroy remains. Fossilization becomes more likely when remains reach a place where sediment can bury them quickly.'],
    ['2. Rapid burial','Mud, sand, ash or other sediment covers the remains. Burial slows scavenging and physical destruction, especially for hard parts such as bone, teeth and shells.'],
    ['3. Decay & pore space','Soft tissues usually decay. The microscopic spaces inside bone, wood or shell remain available for mineral-rich groundwater to enter.'],
    ['4. Mineralization','Minerals can precipitate into pore spaces (permineralization) or replace original material. The internal structure can remain preserved even as chemistry changes.'],
    ['5. Rock, uplift & discovery','Sediments lithify into rock. Much later, uplift and erosion may expose the fossil. Paleontologists then document its position before excavation.']
  ];
  document.querySelectorAll('[data-fossilstep]').forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('[data-fossilstep]').forEach(b=>b.classList.toggle('active',b===btn));
      const s=fossilSteps[i];
      document.getElementById('fossilTitle').textContent=s[0];
      document.getElementById('fossilCopy').textContent=s[1];
      const bone=document.querySelector('.fossil-bone'), water=document.querySelector('.fossil-water');
      bone.classList.toggle('mineralized',i>=3);
      water.classList.toggle('show',i>=2);
      document.querySelector('.strata').style.filter=i===0?'brightness(.85)':i===1?'brightness(.95)':'brightness(1)';
    });
  });
})();