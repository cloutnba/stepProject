///////////OUR SERVICES /////////////

const tabsFn = () => {


    const tabs = document.querySelector('.tab-menu');
    const servicesMenu = document.querySelector('.services-menu');
    const servicesDesc = document.querySelectorAll('.services-desc');
    const servicesLinks = servicesMenu.querySelectorAll('.item-link');
    const servicesElems = servicesMenu.querySelectorAll('.elem')
    servicesLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
        })
    });

    const change = (event) => {
        const menuItems = document.querySelectorAll('[data-tab]');

        menuItems.forEach(tab => {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            }

        });

        if (!event.target.classList.contains('active')) {
            event.target.classList.add('active');
        }

        servicesElems.forEach(elem => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active');
            }
        });


        if (!event.target.nextElementSibling.classList.contains('active')) {
            event.target.nextElementSibling.classList.add('active');
        }

        let id = event.target.getAttribute('data-tab');

        servicesDesc.forEach(desc => {
            if (desc.classList.contains('active')) {
                desc.classList.remove('active');
            }
        });

        if (!document.getElementById(id).classList.contains('active')) {
            document.getElementById(id).classList.add('active');
        }


    }

    tabs.addEventListener('click', (event) => {
        console.log(event.target.nodeName)

        if (event.target.nodeName === 'BUTTON') {
            change(event);
        }
    });

}

tabsFn();

////////////////// Our WORK //////////////
const tabsWork = document.querySelectorAll('.tab-menu')[1];

const images = document.querySelectorAll('.image');

const menuItems = document.querySelectorAll('[data-tab]');


const change = (event) => {

    menuItems.forEach(tab => {
        if (tab.classList.contains('active')) {
            tab.classList.remove('active');
        }

    });

    if (!event.target.classList.contains('active')) {
        event.target.classList.add('active');
    }

    images.forEach(image => {
        if (image.classList.contains('active')) {
            image.classList.remove('active');
        }

        if (image.classList.contains(event.target.getAttribute('data-tab'))) {
            image.classList.add('active');
        }
    });

    if (event.target.getAttribute('data-tab') === 'all') {
        images.forEach(image => {
            image.classList.add('active');
        })
    }

}

tabsWork.addEventListener('click', event => {
    if (event.target.nodeName === 'BUTTON') {
        change(event);
    }
});


/// OUR WORK Add more///

const sectionWork = document.querySelector('.section-work');
const sectionWorkBtn = sectionWork.querySelector('.load-btn');

const workGallery = document.querySelector('.gallery')
let btnCounter = 0;
const sectionWorkLoadMore = () => {

    let counter = 1;
    let typeOfImg = null;
    menuItems.forEach(item => {
        if (item.classList.contains('active')) {
            typeOfImg = item.getAttribute('data-tab');
            console.log(typeOfImg)
        }
    });
    while (counter <= 12) {
        workGallery.insertAdjacentHTML('beforeend', ` 
                <div class="image ${typeOfImg} active">
                    <img src="../../step-project/pics/amazingWork/Layer${counter}.png" alt="">
                    <div class="design-container">
                        <div class="hover-img">
                            <img src="../../step-project/pics/amazingWork/hover/Ellipse1.png"  alt="creative design">
                        </div>

                        <h3 class="hover-title">
                            creative design
                        </h3>
                        <p class="hover-desc">
                            Web Design
                        </p>
                    </div>
                </div>
         `);
        counter++;

    }
    btnCounter++;
    console.log(btnCounter)
    if (btnCounter === 2){
        sectionWorkBtn.remove();
    }
    if (counter === 12) {
        counter = 1;
    }

    console.log(typeOfImg)

}

sectionWorkBtn.addEventListener('click', (event) => {
    event.preventDefault();
    sectionWorkLoadMore();
})


////

const test = new Swiper(".thumbs-slider", {
    spaceBetween: 10,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
});

const swiperMain = new Swiper(".slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next ",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: test,
    },
});



/// section gallery


const sectionGallery = document.querySelector('.section-gallery');
const sectionGalleryBtn = sectionGallery.querySelector('.load-btn');

const firstColumn = sectionGallery.querySelector('.first-column');
const secondColumn = sectionGallery.querySelector('.second-column');
const thirdColumn = sectionGallery.querySelector('.third-column');


const sectionGalletyLoadMore = () => {
  firstColumn.insertAdjacentHTML('beforeend' , `${firstColumn.innerHTML}`);
  secondColumn.insertAdjacentHTML('beforeend' , `${secondColumn.innerHTML}`);
  thirdColumn.insertAdjacentHTML('beforeend' , `${thirdColumn.innerHTML}`);
  sectionGalleryBtn.remove();
}

sectionGalleryBtn.addEventListener('click' , (event) => {
    event.preventDefault();
    sectionGalletyLoadMore();
})