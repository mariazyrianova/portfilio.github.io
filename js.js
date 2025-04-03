const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');
const mainContainer = document.querySelector('.main__container');

tabItem.forEach(function(element) {
    element.addEventListener('click', open);
});

function open(evt) {
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    // Удаляем активные классы у всех кнопок и контента
    tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn-item--active');
    });

    tabContent.forEach(function(item) {
        item.classList.remove('tabs__content-item--active');
    });

    // Удаляем все классы стилей у main__container
    mainContainer.classList.remove(
        'main__container--content-1',
        'main__container--content-2',
        'main__container--content-3'
    );

    // Добавляем активный класс к выбранной кнопке и контенту
    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');

    // Добавляем соответствующий класс для main__container
    if (button === 'content-1') {
        mainContainer.classList.add('main__container--content-1');
    } else if (button === 'content-2') {
        mainContainer.classList.add('main__container--content-2');
    } else if (button === 'content-3') {
        mainContainer.classList.add('main__container--content-3');
    }
}

// const tabItem = document.querySelectorAll('.tabs__btn-item');
// const tabContent = document.querySelectorAll('.tabs__content-item');
  
// tabItem.forEach(function(element) {
//   element.addEventListener('click', open);
// })

// function open(evt){
//   const tabTarget = evt.currentTarget;
//   const button =  tabTarget.dataset.button;

//   tabItem.forEach(function(item){
//     item.classList.remove('tabs__btn-item--active');
//   });

//   tabTarget.classList.add('tabs__btn-item--active');

//   tabContent.forEach(function(item){
//     item.classList.remove('tabs__content-item--active');
//   });

//   document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
// }




// import React, { useState, useRef } from 'react';

// const HorizontalScroll = () => {
//     const containerRef = useRef(null);
//      const [canScrollLeft, setCanScrollLeft] = useState(false);
//      const [canScrollRight, setCanScrollRight] = useState(true);

//     const checkScroll = () => {
//         const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
//         setCanScrollLeft(scrollLeft > 0);
//         setCanScrollRight(scrollLeft < scrollWidth-clientWidth);
//      };

//    return (
//         <div ref={containerRef} onScroll={checkScroll} style={{ overflow: 'auto' }}>
//              {/* Контент для горизонтального скролла */}
//         </div>
//     );
//  };
