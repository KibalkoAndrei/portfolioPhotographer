// import i18Obj from './translate.js';

const portfolioBtnWinter = document.querySelector('#Winter');
const portfolioBtnSpring = document.querySelector('#Spring');
const portfolioBtnSummer = document.querySelector('#Summer');
const portfolioBtnAutumn = document.querySelector('#Autumn');

// функция changeImageAndClassActive написана без делегирования, как планировалось
// в будущем будет добавлены элементы делегирования, что сократит код функции в 4 раза
// function changeImage(event) {
    //    const portfolioBtns = document.querySelector('.portfolio-btns') 
//     if(event.target.classList.contains('portfolio-btn')) {
        
//     }
// }
function changeImageAndClassActive() {
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    const portfolioBtns = document.querySelectorAll('.active');
    portfolioBtns.forEach((btn) => btn.classList.remove('active'))
  

    portfolioBtnWinter.addEventListener('click', () => {
       portfolioImages.forEach((img, index) => img.src =`assets/img/winter/${index +1}.jpg`);
       portfolioBtns.forEach((btn) => btn.classList.remove('active'));
        portfolioBtnWinter.classList.add('active');
    })

    portfolioBtnSpring.addEventListener('click', () => {
        portfolioImages.forEach((img, index) => img.src =`assets/img/spring/${index +1}.jpg`);
        portfolioBtns.forEach((btn) => btn.classList.remove('active'));
        portfolioBtnSpring.classList.add('active');
    })

    portfolioBtnSummer.addEventListener('click', () => {
        portfolioImages.forEach((img, index) => img.src =`assets/img/summer/${index +1}.jpg`);
        portfolioBtns.forEach((btn) => btn.classList.remove('active'));
        portfolioBtnSummer.classList.add('active');
    })

    portfolioBtnAutumn.addEventListener('click', () => {
        portfolioImages.forEach((img, index) => img.src =`assets/img/autumn/${index +1}.jpg`);
        portfolioBtns.forEach((btn) => btn.classList.remove('active'));
        portfolioBtnAutumn.classList.add('active');
    })

};


// function getTranslate() {
//     const dataTypes = document.querySelectorAll('[data-i18]')
//     console.log(dataTypes)
//     i18Obj.forEach((el) => console.log(el))
    
// }


function fetLightHteme() {
    const lightBtn = document.querySelector('.light-theme');
    lightBtn.addEventListener('click', () => {
        
        const headerBack = document.querySelector('header');
        const bodyColor = document.querySelector('body');
        const lightTheme = document.querySelector('.light-theme-svg');
        const sectionTitle = document.querySelectorAll('.section-title')
        const portfolioBtn = document.querySelectorAll('.btn')

        bodyColor.style.backgroundColor = '#FFFFFF'
        headerBack.style.backgroundImage = "url(assets/img/bglt.jpg)";
        bodyColor.style.color = 'black';
        lightTheme.src = 'assets/svg/Vector (1).svg'
        sectionTitle.forEach((title) => title.style.color = 'black');
        portfolioBtn.forEach((btn) => {
            btn.style.color = 'black'
            btn.style.backgroundColor = '#BDAE82'
        })
        
      
    });
};

// getTranslate()
fetLightHteme()
changeImageAndClassActive()
