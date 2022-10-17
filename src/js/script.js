const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      closeMenuBlock = document.querySelector('.menu__overlay'),
      backToPortfolio = document.querySelector('.works__backbtn'),
      works = document.querySelectorAll('.portfolio__item'),
      worksItems = document.querySelectorAll('.works__item');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


closeMenuBlock.addEventListener('click', () => {
    menu.classList.remove('active');
});

function closeWorksItems () {
    worksItems.forEach((item) => { 
        item.style.display = 'none';
    })
}

backToPortfolio.addEventListener('click', () => {
    
    setTimeout(() => {
        closeWorksItems();
        backToPortfolio.style.display = 'none';
    }, 500);
})

works.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        closeWorksItems();
        work = document.querySelector(`#${item.getAttribute('data-work')}`);
        work.style.display = 'block';
        backToPortfolio.style.display = 'block';
    })
})

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


// const cat = document.querySelector('#cat');
// const imgCat = document.querySelector('#cat img');


// cat.addEventListener('mouseover', () => {
//     imgCat.src = "img/works/cat/main.gif";
// })

// cat.addEventListener('mouseout', () => {
//     imgCat.src = "img/works/cat.png";
// })


// const anchors = document.querySelectorAll('a[href*="#"]')

// anchors.forEach((anchor) => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault()
        
//         const blockID = anchor.getAttribute('href').substring(1)
        
//         to = document.getElementById(blockID);

//         to.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         })
//         to.classList.add('animate__animated');
//         to.classList.add('animate__fadeIn');
//         to.classList.add('animate__delay-1s');
//       })
// })


document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        let offsetPosition;
        if (href == 'portfolio' || e.target.tagName == 'IMG') {
             offsetPosition = elementPosition + 100;
        } else {
             offsetPosition = elementPosition + topOffset;
        }
        
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


// const about = document.querySelector('#about .container');
// about.classList.remove('animate__fadeInUp');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         about.classList.add('animate__fadeInUp');
//         return;
//       }
//       about.classList.remove('animate__fadeInUp');
//     });
//   });
//   observer.observe(document.querySelector('#about'));

const videos = document.querySelectorAll('video');

videos.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
        video.style.opacity = 1;
        video.previousSibling.style.display = 'none';
    })

    video.addEventListener('mouseout', () => {
        video.pause();
        video.style.opacity = 0.75;
        video.previousSibling.style.display = 'block';
    })
})