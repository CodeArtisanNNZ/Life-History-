
(() => {
  const host = document.getElementById('lifeTreeExplorer');
  if (!host) return;

  // Original teaching tree for Life History.
  // Dates are approximate divergence/appearance guides, not exact birthdays for clades.
  const nodes = [
    {id:'luca',name:'LUCA',parent:null,time:'>3.5 billion years ago',status:'major',kind:'ancestor',summary:'The Last Universal Common Ancestor was not the first life. It represents the ancestral population from which all life alive today descends.',evidence:['comparative genomics','shared genetic code','universal cellular chemistry']},

    {id:'bacteria',name:'Bacteria',parent:'luca',time:'ancient',status:'major',kind:'living',summary:'One of the two great prokaryotic domains. Bacterial lineages include oxygen-producing cyanobacteria.',evidence:['cell biology','genomes','microfossils']},
    {id:'cyanobacteria',name:'Cyanobacteria',parent:'bacteria',time:'≥2.4 Ga oxygenation',status:'living',kind:'living',summary:'Photosynthetic bacteria whose ancestors helped oxygenate the oceans and atmosphere.',evidence:['stromatolites','biomarkers','modern physiology']},

    {id:'archaea',name:'Archaea',parent:'luca',time:'ancient',status:'major',kind:'living',summary:'A prokaryotic domain genetically distinct from Bacteria. Modern evidence links the host lineage of eukaryotic cells closely with archaea.',evidence:['genomics','cell chemistry']},

    {id:'euk',name:'Eukaryota',parent:'luca',time:'~2.1–1.8 Ga fossils',status:'major',kind:'ancestor',summary:'Cells with nuclei and complex internal compartments. Mitochondria descend from bacteria incorporated through ancient endosymbiosis.',evidence:['microfossils','genomics','endosymbiotic organelles']},
    {id:'plants',name:'Plants + green algae',parent:'euk',time:'Proterozoic onward',status:'living',kind:'living',summary:'Photosynthetic eukaryotes whose plastids trace to cyanobacterial endosymbiosis.',evidence:['chloroplast genomes','fossils','living diversity']},
    {id:'fungi',name:'Fungi',parent:'euk',time:'Proterozoic roots',status:'living',kind:'living',summary:'A major eukaryotic lineage more closely related to animals than to plants.',evidence:['genomics','fossils']},

    {id:'animals',name:'Animals',parent:'euk',time:'late Proterozoic',status:'major',kind:'ancestor',summary:'Multicellular heterotrophs with specialized cells. Early animal evolution unfolded in the oceans.',evidence:['Ediacaran fossils','molecular phylogeny','developmental biology']},
    {id:'sponges',name:'Sponges',parent:'animals',time:'deep animal branch',status:'living',kind:'living',summary:'Animals with specialized cells but no true organs; useful for understanding early animal multicellularity.',evidence:['living anatomy','molecular phylogeny']},
    {id:'cnidaria',name:'Cnidarians',parent:'animals',time:'Precambrian roots',status:'living',kind:'living',summary:'Jellyfish, corals and relatives with true tissues, nerve nets and radial body organization.',evidence:['fossils','living anatomy','genomics']},
    {id:'bilateria',name:'Bilateria',parent:'animals',time:'~600+ Ma roots',status:'major',kind:'ancestor',summary:'Animals with left-right symmetry and an anterior-posterior axis. Most familiar animal groups belong here.',evidence:['trace fossils','developmental genes','genomics']},

    {id:'protostomes',name:'Protostomes',parent:'bilateria',time:'Cambrian roots',status:'ancestor',kind:'ancestor',summary:'A vast branch containing arthropods, molluscs, annelids and many other animal groups.',evidence:['genomics','development','fossils']},
    {id:'arthropods',name:'Arthropods',parent:'protostomes',time:'Cambrian',status:'major',kind:'living',summary:'Joint-legged animals with exoskeletons: insects, crustaceans, spiders and extinct trilobites.',evidence:['exceptional Cambrian fossils','living anatomy']},
    {id:'trilobites',name:'Trilobites',parent:'arthropods',time:'521–252 Ma',status:'extinct',kind:'extinct',summary:'A spectacularly diverse extinct marine arthropod group spanning most of the Paleozoic.',evidence:['abundant mineralized exoskeletons']},
    {id:'insects',name:'Insects',parent:'arthropods',time:'~480–400 Ma roots',status:'living',kind:'living',summary:'The most species-rich living animal group; terrestrial arthropods that later evolved powered flight.',evidence:['fossils','genomes','living diversity']},
    {id:'molluscs',name:'Molluscs',parent:'protostomes',time:'Cambrian',status:'living',kind:'living',summary:'Snails, clams, squid, octopuses and many extinct shelled lineages.',evidence:['shell fossils','soft-body fossils','genomics']},
    {id:'ammonites',name:'Ammonites',parent:'molluscs',time:'~409–66 Ma',status:'extinct',kind:'extinct',summary:'Extinct shelled cephalopods that became important index fossils and vanished at the end-Cretaceous extinction.',evidence:['abundant coiled shells']},

    {id:'deut',name:'Deuterostomes',parent:'bilateria',time:'Cambrian roots',status:'ancestor',kind:'ancestor',summary:'The branch containing echinoderms and chordates, including vertebrates.',evidence:['developmental biology','genomics','fossils']},
    {id:'echino',name:'Echinoderms',parent:'deut',time:'Cambrian',status:'living',kind:'living',summary:'Starfish, sea urchins and relatives—marine deuterostomes with unusual adult radial symmetry.',evidence:['fossils','living anatomy']},
    {id:'chordates',name:'Chordates',parent:'deut',time:'Cambrian',status:'major',kind:'ancestor',summary:'Animals defined by structures such as a notochord and dorsal hollow nerve cord at some stage of development.',evidence:['Cambrian fossils','embryology','genomics']},
    {id:'vertebrates',name:'Vertebrates',parent:'chordates',time:'~520+ Ma',status:'major',kind:'ancestor',summary:'Chordates with a skull and increasingly complex sensory and skeletal systems.',evidence:['early fish fossils','comparative anatomy']},
    {id:'jawless',name:'Jawless fishes',parent:'vertebrates',time:'Cambrian–present',status:'living',kind:'living',summary:'Jawless vertebrates represent early branches of vertebrate evolution; living lampreys and hagfish preserve very different modern lineages.',evidence:['fossils','living anatomy']},
    {id:'jawed',name:'Jawed vertebrates',parent:'vertebrates',time:'~440 Ma+',status:'major',kind:'ancestor',summary:'The evolution of jaws and paired appendages transformed vertebrate feeding and locomotion.',evidence:['Silurian fossils','comparative anatomy']},
    {id:'placoderms',name:'Placoderms',parent:'jawed',time:'~430–359 Ma',status:'extinct',kind:'extinct',summary:'Armoured jawed fishes that flourished in Paleozoic seas and vanished by the end of the Devonian.',evidence:['armoured skull and trunk fossils']},
    {id:'sharks',name:'Cartilaginous fishes',parent:'jawed',time:'~420 Ma+',status:'living',kind:'living',summary:'Sharks, rays and chimaeras, with skeletons dominated by cartilage rather than bone.',evidence:['teeth','spines','rare body fossils','genomics']},
    {id:'bony',name:'Bony vertebrates',parent:'jawed',time:'~420 Ma+',status:'major',kind:'ancestor',summary:'The lineage including ray-finned fishes and lobe-finned vertebrates—including all tetrapods.',evidence:['bony skeleton fossils','genomics']},
    {id:'rayfins',name:'Ray-finned fishes',parent:'bony',time:'~420 Ma+',status:'living',kind:'living',summary:'The overwhelmingly dominant living fish radiation, supporting fins mainly with bony rays.',evidence:['fossils','living anatomy']},
    {id:'lobefins',name:'Lobe-finned vertebrates',parent:'bony',time:'~420 Ma+',status:'major transition',kind:'transition',summary:'Fleshy paired appendages with internal bones. One branch produced tetrapods; coelacanths and lungfishes remain aquatic relatives.',evidence:['fossil fin skeletons','living lungfish/coelacanth anatomy']},
    {id:'lungfish',name:'Lungfishes',parent:'lobefins',time:'Devonian–present',status:'living',kind:'living',summary:'Living lobe-finned fishes with lungs or lung-derived organs, close relatives of the tetrapod lineage.',evidence:['fossils','living anatomy','genomics']},
    {id:'tetrapodomorph',name:'Tetrapodomorphs',parent:'lobefins',time:'Devonian',status:'major transition',kind:'transition',summary:'Lobe-finned vertebrates increasingly close to tetrapods, showing stepwise changes in fins, skulls, ribs and breathing.',evidence:['Devonian fossil series']},
    {id:'tiktaalik',name:'Tiktaalik',parent:'tetrapodomorph',time:'~375 Ma',status:'extinct transition',kind:'transition',summary:'A shallow-water fish with a mobile neck, strong ribs and wrist-like fin joints—a mosaic of fish and tetrapod traits.',evidence:['Ellesmere Island fossils']},
    {id:'tetrapods',name:'Tetrapods',parent:'tetrapodomorph',time:'~370 Ma+',status:'major',kind:'ancestor',summary:'Four-limbed vertebrates and their descendants. Early forms remained strongly tied to water.',evidence:['digits','limb girdles','trackways','skulls']},
    {id:'amphibians',name:'Amphibian lineage',parent:'tetrapods',time:'Carboniferous–present',status:'living',kind:'living',summary:'Modern frogs, salamanders and caecilians belong to a surviving tetrapod branch generally tied to moist environments and aquatic reproduction.',evidence:['fossils','living anatomy']},
    {id:'amniotes',name:'Amniotes',parent:'tetrapods',time:'~320–310 Ma',status:'major',kind:'ancestor',summary:'Tetrapods whose embryos develop with amniotic membranes, allowing reproduction away from open water.',evidence:['reproductive anatomy','Carboniferous fossils']},

    {id:'synapsids',name:'Synapsids',parent:'amniotes',time:'~320 Ma+',status:'major',kind:'ancestor',summary:'The amniote branch leading to mammals. Many famous early synapsids were neither modern reptiles nor dinosaurs.',evidence:['temporal skull openings','fossils']},
    {id:'dimetrodon',name:'Dimetrodon',parent:'synapsids',time:'~295–272 Ma',status:'extinct',kind:'extinct',summary:'An early synapsid, more closely related to mammals than to dinosaurs despite its reptile-like popular image.',evidence:['Permian skeletons']},
    {id:'mammals',name:'Mammals',parent:'synapsids',time:'~225 Ma+',status:'major',kind:'living',summary:'Hair-bearing synapsids with milk production and highly specialized jaw/ear anatomy.',evidence:['jaw fossils','teeth','middle-ear transition','genomics']},
    {id:'primates',name:'Primates',parent:'mammals',time:'~66–55 Ma+',status:'living',kind:'living',summary:'The mammal lineage including lemurs, monkeys, apes and humans.',evidence:['fossils','genomics']},
    {id:'apes',name:'Apes',parent:'primates',time:'~25–20 Ma+',status:'living',kind:'living',summary:'Hominoids include gibbons, orangutans, gorillas, chimpanzees and humans.',evidence:['fossils','genomes']},
    {id:'hominins',name:'Hominins',parent:'apes',time:'~7 Ma+',status:'human lineage',kind:'human',summary:'The branch more closely related to Homo sapiens than to chimpanzees after the human–chimp lineage split.',evidence:['fossils','genetics']},
    {id:'sahel',name:'Sahelanthropus',parent:'hominins',time:'~7–6 Ma',status:'extinct human lineage',kind:'human',summary:'Very early possible hominin known from Chad; its exact position near the human–chimp split remains debated.',evidence:['skull morphology']},
    {id:'australo',name:'Australopithecus afarensis',parent:'hominins',time:'~3.85–2.95 Ma',status:'extinct human lineage',kind:'human',summary:'A bipedal hominin species including the famous Lucy skeleton.',evidence:['skeletons','footprints','teeth']},
    {id:'homo',name:'Genus Homo',parent:'hominins',time:'~2.8 Ma+',status:'human lineage',kind:'human',summary:'A branching hominin radiation including Homo erectus, Neanderthals, Denisovans and Homo sapiens.',evidence:['fossils','archaeology','ancient DNA']},
    {id:'erectus',name:'Homo erectus',parent:'homo',time:'~1.9 Ma–110 ka',status:'extinct human lineage',kind:'human',summary:'A long-lived Homo lineage with human-like body proportions and wide geographic dispersal.',evidence:['skulls','skeletons','archaeology']},
    {id:'neand',name:'Neanderthals',parent:'homo',time:'~400–40 ka',status:'extinct human lineage',kind:'human',summary:'A close human relative that interbred with ancestors of many living people.',evidence:['fossils','tools','ancient genomes']},
    {id:'denis',name:'Denisovans',parent:'homo',time:'Middle–Late Pleistocene',status:'extinct human lineage',kind:'human',summary:'A sister lineage to Neanderthals first recognized genetically from limited fossil material.',evidence:['ancient DNA','teeth','bone fragments']},
    {id:'sapiens',name:'Homo sapiens',parent:'homo',time:'~300 ka–present',status:'living human',kind:'human',summary:'Our living species, with the oldest widely accepted fossils currently known from Africa around 300,000 years ago.',evidence:['fossils','genomes','archaeology']},

    {id:'sauropsids',name:'Sauropsids',parent:'amniotes',time:'~320 Ma+',status:'major',kind:'ancestor',summary:'The amniote branch containing reptiles and birds.',evidence:['skull anatomy','fossils','genomics']},
    {id:'lepidosaurs',name:'Lizards + snakes',parent:'sauropsids',time:'Mesozoic roots',status:'living',kind:'living',summary:'Lepidosaurs include lizards, snakes and tuatara.',evidence:['fossils','genomics']},
    {id:'archosaurs',name:'Archosaurs',parent:'sauropsids',time:'~250 Ma+',status:'major',kind:'ancestor',summary:'The lineage that includes crocodilians, pterosaurs and dinosaurs—including birds.',evidence:['ankle/skull traits','fossils']},
    {id:'croc',name:'Crocodilian line',parent:'archosaurs',time:'Triassic roots–present',status:'living',kind:'living',summary:'The surviving non-dinosaur branch of crown archosaurs.',evidence:['fossils','living anatomy']},
    {id:'pterosaurs',name:'Pterosaurs',parent:'archosaurs',time:'~228–66 Ma',status:'extinct',kind:'extinct',summary:'Flying archosaurs closely related to dinosaurs but not themselves dinosaurs.',evidence:['wing skeletons','soft-tissue impressions']},
    {id:'dinosaurs',name:'Dinosaurs',parent:'archosaurs',time:'~233 Ma+',status:'major',kind:'ancestor',summary:'Upright-limbed archosaurs defined by a suite of skeletal traits. One branch survives today as birds.',evidence:['skeletons','trackways','eggs','feathers']},
    {id:'ornith',name:'Ornithischians',parent:'dinosaurs',time:'Triassic–66 Ma',status:'extinct',kind:'extinct',summary:'A major dinosaur radiation including stegosaurs, ankylosaurs, ornithopods and ceratopsians.',evidence:['skeletons','skin impressions','nests']},
    {id:'sauropods',name:'Sauropodomorphs',parent:'dinosaurs',time:'Triassic–66 Ma',status:'extinct',kind:'extinct',summary:'Long-necked saurischian dinosaurs including the largest terrestrial animals known.',evidence:['skeletons','trackways','eggs']},
    {id:'theropods',name:'Theropods',parent:'dinosaurs',time:'Triassic–present',status:'major',kind:'ancestor',summary:'Mostly bipedal saurischian dinosaurs. This group contains T. rex, Velociraptor and living birds.',evidence:['skeletons','feathers','eggs','genomes in living birds']},
    {id:'trex',name:'Tyrannosaurus rex',parent:'theropods',time:'~68–66 Ma',status:'extinct',kind:'extinct',summary:'A giant Late Cretaceous tyrannosaurid theropod from western North America.',evidence:['multiple skeletons','bite marks','coprolites']},
    {id:'dromaeosaurs',name:'Dromaeosaurs',parent:'theropods',time:'Jurassic–Cretaceous',status:'extinct',kind:'extinct',summary:'Feathered theropods including Velociraptor, with enlarged sickle claws on the feet.',evidence:['skeletons','feather impressions']},
    {id:'birds',name:'Birds',parent:'theropods',time:'Jurassic–present',status:'living dinosaur',kind:'living',summary:'The surviving dinosaur lineage. Modern birds are living theropods, not merely descendants of dinosaurs in a loose sense.',evidence:['feathers','wishbones','air sacs','skeletons','genomics']},
    {id:'archaeopteryx',name:'Archaeopteryx',parent:'birds',time:'~150 Ma',status:'extinct early avialan',kind:'extinct',summary:'A feathered Jurassic avialan combining flight feathers with teeth, clawed fingers and a long bony tail.',evidence:['exceptional limestone fossils']}
  ];

  const byId = new Map(nodes.map(n => [n.id,n]));
  nodes.forEach(n => n.children=[]);
  nodes.forEach(n => { if(n.parent && byId.has(n.parent)) byId.get(n.parent).children.push(n); });

  // Sort branches for a narrative flow: microbes → invertebrates → water-to-land → mammals/dinosaurs.
  const order = {
    bacteria:0,archaea:1,euk:2,plants:0,fungi:1,animals:2,sponges:0,cnidaria:1,bilateria:2,
    protostomes:0,deut:1,arthropods:0,molluscs:1,trilobites:0,insects:1,ammonites:0,
    echino:0,chordates:1,vertebrates:0,jawless:0,jawed:1,placoderms:0,sharks:1,bony:2,
    rayfins:0,lobefins:1,lungfish:0,tetrapodomorph:1,tiktaalik:0,tetrapods:1,amphibians:0,amniotes:1,
    synapsids:0,sauropsids:1,dimetrodon:0,mammals:1,primates:0,apes:0,hominins:0,sahel:0,australo:1,homo:2,
    erectus:0,neand:1,denis:2,sapiens:3,lepidosaurs:0,archosaurs:1,croc:0,pterosaurs:1,dinosaurs:2,
    ornith:0,sauropods:1,theropods:2,trex:0,dromaeosaurs:1,birds:2,archaeopteryx:0
  };
  nodes.forEach(n => n.children.sort((a,b)=>(order[a.id]??9)-(order[b.id]??9)));

  const leaves=[];
  function assignDepth(n,d=0){
    n.depth=d;
    if(!n.children.length){ n.leafIndex=leaves.length; leaves.push(n); return n.leafIndex; }
    const vals=n.children.map(ch=>assignDepth(ch,d+1));
    n.leafIndex=vals.reduce((a,b)=>a+b,0)/vals.length;
    return n.leafIndex;
  }
  assignDepth(byId.get('luca'));

  const X_STEP=235, Y_STEP=66, PAD_X=90, PAD_Y=80;
  nodes.forEach(n => {
    n.x=PAD_X+n.depth*X_STEP;
    n.y=PAD_Y+n.leafIndex*Y_STEP;
  });
  const contentW=Math.max(...nodes.map(n=>n.x))+340;
  const contentH=Math.max(...nodes.map(n=>n.y))+PAD_Y;

  const esc=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
  const edgePath=(a,b)=>{
    const mid=(a.x+b.x)/2;
    return `M ${a.x} ${a.y} C ${mid} ${a.y}, ${mid} ${b.y}, ${b.x} ${b.y}`;
  };

  const nodeClass=n=>{
    const arr=['tree-node'];
    if(n.status==='major'||n.kind==='ancestor') arr.push('major');
    if(n.kind==='extinct') arr.push('extinct');
    if(n.kind==='transition') arr.push('transition');
    if(n.kind==='human') arr.push('human');
    if(n.depth>7) arr.push('tiny-detail');
    return arr.join(' ');
  };

  host.innerHTML = `
    <div class="tree-explorer-shell">
      <div class="tree-explorer-head">
        <div>
          <div class="kicker">Original Life History interactive</div>
          <h3>Tree of Life Explorer</h3>
          <p>Pan and zoom through a simplified evolutionary tree. Follow living and extinct branches from LUCA to ocean animals, tetrapods, dinosaurs, birds and humans.</p>
        </div>
        <div class="tree-badge">branching evolution · not a ladder</div>
      </div>

      <div class="tree-toolbar">
        <div class="tree-search-wrap">
          <input id="lifeTreeSearch" class="tree-search" autocomplete="off" placeholder="Search Tiktaalik, dinosaurs, Neanderthals…" aria-label="Search the Tree of Life">
          <div id="lifeTreeResults" class="tree-search-results"></div>
        </div>
        <div class="tree-toolgroup">
          <button class="tree-btn active" id="treeExtinctToggle">Extinct branches</button>
          <button class="tree-btn active" id="treeTimeToggle">Time labels</button>
        </div>
        <button class="tree-btn" id="treeReset">Fit whole tree</button>
      </div>

      <div id="treeViewport" class="tree-viewport">
        <svg id="lifeTreeSvg" class="life-tree-svg" viewBox="0 0 100 100" aria-label="Interactive evolutionary tree">
          <g id="treeWorld">
            <g id="treeEdges">
              ${nodes.filter(n=>n.parent).map(n=>{
                const p=byId.get(n.parent);
                const ext=n.kind==='extinct'?' extinct':'';
                const major=(n.status==='major'||n.kind==='ancestor')?' major':'';
                return `<path class="tree-edge${ext}${major}" data-edge-to="${n.id}" d="${edgePath(p,n)}"></path>`;
              }).join('')}
            </g>
            <g id="treeNodes">
              ${nodes.map(n=>`
                <g class="${nodeClass(n)}" data-node-id="${n.id}" transform="translate(${n.x},${n.y})">
                  <circle class="halo" r="18"></circle>
                  <circle class="core" r="${n.status==='major'||n.kind==='ancestor'?9:7}"></circle>
                  <text class="tree-node-label" x="15" y="-3">${esc(n.name)}</text>
                  <text class="tree-node-time" x="15" y="13">${esc(n.time)}</text>
                </g>
              `).join('')}
            </g>
          </g>
        </svg>
        <div class="tree-corner-controls">
          <button class="tree-btn" id="treeZoomIn" aria-label="Zoom in">+</button>
          <button class="tree-btn" id="treeZoomOut" aria-label="Zoom out">−</button>
        </div>
        <div class="tree-legend">
          <span><i class="living"></i> living / major branch</span>
          <span><i class="extinct"></i> extinct branch</span>
          <span><i class="transition"></i> major transition fossil/group</span>
          <span><i class="human"></i> human lineage</span>
        </div>
      </div>

      <div id="treeContext" class="tree-contextbar"></div>

      <div class="tree-info">
        <div class="tree-info-main">
          <div class="tree-info-kicker" id="treeInfoKicker">Selected node</div>
          <h3 id="treeInfoTitle">LUCA</h3>
          <p id="treeInfoCopy">Select a branch or search for a group to explore its ancestry.</p>
          <div class="tree-meta" id="treeInfoMeta"></div>
        </div>
        <div class="tree-info-side">
          <h4>Evidence used to place this branch</h4>
          <ul id="treeEvidence"></ul>
        </div>
      </div>

      <div class="tree-tours">
        <span class="tree-info-kicker" style="align-self:center;margin-right:3px">Guided jumps</span>
        <button class="tree-tour" data-tree-tour="cyanobacteria">oxygen makers</button>
        <button class="tree-tour" data-tree-tour="tiktaalik">water → land</button>
        <button class="tree-tour" data-tree-tour="dinosaurs">dinosaur radiation</button>
        <button class="tree-tour" data-tree-tour="birds">living dinosaurs</button>
        <button class="tree-tour" data-tree-tour="sapiens">human lineage</button>
      </div>

      <div class="tree-hint"><b>How to use:</b> mouse wheel / trackpad or pinch to zoom · drag to pan · click a node for its ancestry and evidence. Dashed brown branches are extinct. Dates are approximate teaching guides.</div>
    </div>
  `;

  const svg=document.getElementById('lifeTreeSvg');
  const world=document.getElementById('treeWorld');
  const viewport=document.getElementById('treeViewport');
  const search=document.getElementById('lifeTreeSearch');
  const results=document.getElementById('lifeTreeResults');

  let scale=1, tx=0, ty=0, dragging=false, lastX=0, lastY=0;
  let showExtinct=true, showTime=true, selected='luca';

  function applyTransform(){
    world.setAttribute('transform',`translate(${tx} ${ty}) scale(${scale})`);
    updateDetailVisibility();
  }

  function viewportSize(){
    const r=viewport.getBoundingClientRect();
    return {w:Math.max(1,r.width),h:Math.max(1,r.height)};
  }

  function fitAll(){
    const {w,h}=viewportSize();
    scale=Math.min(w/(contentW+80),h/(contentH+80));
    scale=Math.max(.16,Math.min(scale,.72));
    tx=(w-contentW*scale)/2;
    ty=(h-contentH*scale)/2;
    applyTransform();
  }

  function zoomAt(clientX,clientY,factor){
    const rect=viewport.getBoundingClientRect();
    const px=clientX-rect.left, py=clientY-rect.top;
    const old=scale;
    scale=Math.max(.14,Math.min(3.2,scale*factor));
    tx=px-(px-tx)*(scale/old);
    ty=py-(py-ty)*(scale/old);
    applyTransform();
  }

  function updateDetailVisibility(){
    document.querySelectorAll('#treeNodes .tree-node').forEach(g=>{
      const n=byId.get(g.dataset.nodeId);
      const label=g.querySelector('.tree-node-label');
      const time=g.querySelector('.tree-node-time');
      const major=n.status==='major'||n.kind==='ancestor'||n.id===selected;
      label.style.display=(scale>.38||major)?'block':'none';
      time.style.display=(showTime && (scale>.72||n.id===selected))?'block':'none';
    });
  }

  function ancestors(id){
    const arr=[]; let n=byId.get(id);
    while(n){arr.unshift(n);n=n.parent?byId.get(n.parent):null;}
    return arr;
  }

  function updateContext(id){
    const path=ancestors(id);
    document.getElementById('treeContext').innerHTML=path.map((n,i)=>
      `<button class="crumb" data-crumb="${n.id}">${esc(n.name)}</button>${i<path.length-1?'<span class="arrow">›</span>':''}`
    ).join('');
    document.querySelectorAll('[data-crumb]').forEach(b=>b.addEventListener('click',()=>focusNode(b.dataset.crumb,true)));
  }

  function updateInfo(id){
    const n=byId.get(id);
    if(!n)return;
    document.getElementById('treeInfoKicker').textContent=n.status;
    document.getElementById('treeInfoTitle').textContent=n.name;
    document.getElementById('treeInfoCopy').textContent=n.summary;
    document.getElementById('treeInfoMeta').innerHTML=`<span>${esc(n.time)}</span><span>${n.children.length} immediate branch${n.children.length===1?'':'es'}</span>`;
    document.getElementById('treeEvidence').innerHTML=n.evidence.map(e=>`<li>${esc(e)}</li>`).join('');
    updateContext(id);
  }

  function highlightPath(id){
    const path=new Set(ancestors(id).map(n=>n.id));
    document.querySelectorAll('.tree-node').forEach(g=>g.classList.toggle('selected',g.dataset.nodeId===id));
    document.querySelectorAll('.tree-edge').forEach(e=>e.classList.toggle('path-active',path.has(e.dataset.edgeTo)));
  }

  function focusNode(id,animate=false){
    const n=byId.get(id); if(!n)return;
    selected=id;
    const {w,h}=viewportSize();
    const targetScale=Math.max(scale<.9?1.05:scale,1.05);
    const nextTx=w*.38-n.x*targetScale;
    const nextTy=h*.48-n.y*targetScale;
    if(!animate){
      scale=targetScale;tx=nextTx;ty=nextTy;applyTransform();
    }else{
      const s0=scale,x0=tx,y0=ty,start=performance.now(),dur=650;
      function frame(now){
        const t=Math.min(1,(now-start)/dur);
        const q=1-Math.pow(1-t,3);
        scale=s0+(targetScale-s0)*q;
        tx=x0+(nextTx-x0)*q;
        ty=y0+(nextTy-y0)*q;
        applyTransform();
        if(t<1)requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    highlightPath(id);updateInfo(id);
  }

  function setExtinctVisibility(){
    nodes.filter(n=>n.kind==='extinct').forEach(n=>{
      const g=document.querySelector(`[data-node-id="${n.id}"]`);
      const edge=document.querySelector(`[data-edge-to="${n.id}"]`);
      if(g)g.style.display=showExtinct?'block':'none';
      if(edge)edge.style.display=showExtinct?'block':'none';
    });
  }

  viewport.addEventListener('wheel',e=>{
    e.preventDefault();
    zoomAt(e.clientX,e.clientY,e.deltaY<0?1.16:.86);
  },{passive:false});

  viewport.addEventListener('pointerdown',e=>{
    if(e.target.closest && e.target.closest('.tree-node')) return;
    dragging=true;lastX=e.clientX;lastY=e.clientY;
    viewport.classList.add('dragging');viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener('pointermove',e=>{
    if(!dragging)return;
    tx+=e.clientX-lastX;ty+=e.clientY-lastY;lastX=e.clientX;lastY=e.clientY;applyTransform();
  });
  viewport.addEventListener('pointerup',e=>{dragging=false;viewport.classList.remove('dragging');try{viewport.releasePointerCapture(e.pointerId)}catch(_){}});
  viewport.addEventListener('pointercancel',()=>{dragging=false;viewport.classList.remove('dragging')});

  let pinchDist=null;
  viewport.addEventListener('touchmove',e=>{
    if(e.touches.length===2){
      e.preventDefault();
      const a=e.touches[0],b=e.touches[1];
      const d=Math.hypot(a.clientX-b.clientX,a.clientY-b.clientY);
      if(pinchDist){
        const mx=(a.clientX+b.clientX)/2,my=(a.clientY+b.clientY)/2;
        zoomAt(mx,my,d/pinchDist);
      }
      pinchDist=d;
    }
  },{passive:false});
  viewport.addEventListener('touchend',()=>pinchDist=null);

  document.querySelectorAll('.tree-node').forEach(g=>{
    g.addEventListener('click',e=>{e.stopPropagation();focusNode(g.dataset.nodeId,true)});
  });

  document.getElementById('treeZoomIn').addEventListener('click',()=>{
    const r=viewport.getBoundingClientRect();zoomAt(r.left+r.width/2,r.top+r.height/2,1.3);
  });
  document.getElementById('treeZoomOut').addEventListener('click',()=>{
    const r=viewport.getBoundingClientRect();zoomAt(r.left+r.width/2,r.top+r.height/2,.77);
  });
  document.getElementById('treeReset').addEventListener('click',()=>{fitAll();highlightPath(selected);});

  document.getElementById('treeExtinctToggle').addEventListener('click',e=>{
    showExtinct=!showExtinct;e.currentTarget.classList.toggle('active',showExtinct);setExtinctVisibility();
  });
  document.getElementById('treeTimeToggle').addEventListener('click',e=>{
    showTime=!showTime;e.currentTarget.classList.toggle('active',showTime);updateDetailVisibility();
  });

  function renderSearch(q){
    q=q.trim().toLowerCase();
    if(!q){results.classList.remove('show');results.innerHTML='';return;}
    const hits=nodes.filter(n=>
      n.name.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.status.toLowerCase().includes(q)
    ).slice(0,10);
    results.innerHTML=hits.length?hits.map(n=>`<button class="tree-search-hit" data-hit="${n.id}">${esc(n.name)}<small>${esc(n.time)} · ${esc(n.status)}</small></button>`).join(''):
      '<div style="padding:10px;color:#777;font-size:.75rem">No matching branch in this teaching tree.</div>';
    results.classList.add('show');
    document.querySelectorAll('[data-hit]').forEach(b=>b.addEventListener('click',()=>{
      search.value=byId.get(b.dataset.hit).name;results.classList.remove('show');focusNode(b.dataset.hit,true);
    }));
  }
  search.addEventListener('input',()=>renderSearch(search.value));
  search.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
      const first=document.querySelector('[data-hit]');
      if(first)first.click();
    }
    if(e.key==='Escape')results.classList.remove('show');
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.tree-search-wrap'))results.classList.remove('show')});

  document.querySelectorAll('[data-tree-tour]').forEach(b=>b.addEventListener('click',()=>focusNode(b.dataset.treeTour,true)));

  window.addEventListener('resize',()=>{ if(scale<.8) fitAll(); });
  fitAll();
  updateInfo('luca');
  highlightPath('luca');
  setExtinctVisibility();
})();
