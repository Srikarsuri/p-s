// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior:'smooth'
            });
        }
    });
});


// ======================================
// GALLERY TABS
// ======================================

const galleryTabs = document.querySelectorAll('.gallery-tabs button');

galleryTabs.forEach(tab=>{

    tab.addEventListener('click',()=>{

        galleryTabs.forEach(btn=>btn.classList.remove('active'));

        tab.classList.add('active');

    });

});


// ======================================
// VILLA OPTION BUTTONS
// ======================================

const villaButtons=document.querySelectorAll('.villa-options button');

villaButtons.forEach(button=>{

    button.addEventListener('click',()=>{

        villaButtons.forEach(btn=>{

            btn.style.background="#fff";
            btn.style.color="#222";

        });

        button.style.background="#b58b4d";
        button.style.color="#fff";

    });

});


// ======================================
// FADE UP ON SCROLL
// ======================================

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add('show');

        }

    });

},{
    threshold:0.15
});


document.querySelectorAll(

'.project-card,.villa-card,.amenity-card,.gallery-item,.why-card,.location-card,.stat-item'

).forEach(el=>{

    el.classList.add('hidden');

    observer.observe(el);

});


// ======================================
// HEADER SHADOW
// ======================================

window.addEventListener('scroll',()=>{

    const header=document.querySelector('.tag-header');

    if(window.scrollY>40){

        header.style.background="#fff";
        header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";
        header.style.position="sticky";
        header.style.top="0";
        header.style.zIndex="999";

    }

    else{

        header.style.background="transparent";
        header.style.boxShadow="none";
        header.style.position="relative";

    }

});


// ======================================
// COUNTER ANIMATION
// ======================================

const counters=document.querySelectorAll('.stat-item h2');

const speed=80;

counters.forEach(counter=>{

    const animate=()=>{

        const value=counter.innerText.replace(/\D/g,'');

        if(value==="") return;

        const target=+value;

        const count=+counter.getAttribute('data-count')||0;

        const increment=Math.ceil(target/speed);

        if(count<target){

            const next=count+increment;

            counter.setAttribute('data-count',next);

            counter.innerText=next+(counter.innerText.replace(/[0-9]/g,''))

            requestAnimationFrame(animate);

        }

        else{

            counter.innerText=counter.innerText.replace(/[0-9]+/,target);

        }

    };

    animate();

});


// ======================================
// PARALLAX HERO
// ======================================

window.addEventListener('scroll',()=>{

    const hero=document.querySelector('.tag-hero');

    hero.style.backgroundPositionY=window.scrollY*0.35+"px";

});
