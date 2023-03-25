var jsTriggers = document.querySelectorAll('.js-tab-trigger'),
    jsContents = document.querySelectorAll('.js-tab-content');

jsTriggers.forEach (function(trigger) {
    trigger.addEventListener('click', function(){
        var id  = this.getAttribute ('data-tab'),
            content = document.querySelector('.js-tab-content[data-tab="'+id+'"]'),
            activeTrigger = document.querySelector('.js-tab-trigger.active'),
            activeContent = document.querySelector('.js-tab-content.active');
        
        activeTrigger.classList.remove('active');
        trigger.classList.add('active');

        activeContent.classList.remove('active');
        content.classList.add('active')


    });
});


$('.menu__product').click(function(e){
    let menu = $(this).parent('.menu__content');
    menu.append('<img src = "images/img-sha.svg" class="animatocart">')
    $('.animatocart') .css({
        'position' : 'absolute',
        'background' : '#150905',
        'width' : '45px',
        'height' : '25px',
        'border-radius' : '6px',
        'z-index' : '9999999999',
        'left' : e.pageX-50,
        'top' : e.pageY-50,
        });
    let basket = $('.header__basket  ').offset();
    $('.animatocart').animate({top: basket.top + '0px', left: basket.left + '400px', width: 0, height:0}, 600, function(){
        $(this).remove();
        
    });
});




// let block = document.querySelectorAll('.menu__product');

// block.querySelectorAll


// const menuProd = document.querySelectorAll('.menu__product')

// // console.log(menuProd);

// const basketProd = document.getElementById('.basket__product')
// // console.log(basketProd);
// function addEvent(elem, type, handler) {
//     if (elem.addEventListener) {
//         elem.addEventListener (type, handler, false );
//     }else{
//         elem.attachEvent('on' + type, function() {
//             handler.call(elem);
//         })
//     }
//     return false;
// }
// // console.log( addEvent);

// function getCartData() {
//     return
//     JSON.parse(localStorage.getItem ('cart'))
// };

// function setCartData() {
//     localStorage.setItem('cart', JSON.stringify());
//     return false;
// }

// function addToCart(e) {
//     let cartData = getCartData() || {};
//     parentBox = this.parentNode,
//     itemId = this.getAttribute('data-id'),
//     itemTitle = parentBox.querySelector('.menu__product-name')
//     itemDescriptionLeft = parentBox.querySelector('.menu__description-left')
//     itemDescriptionRight = parentBox.querySelector('.menu__description-right')
//     itemImg = parentBox.querySelector('.menu__product--img')
// }







// const counters = document.querySelectorAll ('[data-counter]');

// if (counters) {
//     counters.forEach(counter => {
//         counter.addEventListener('click', e => {
//             const target = e.target;

//             if(target.closest('.counter__button')){
//                 let value = parseInt(target.closest ('.counter').querySelector('input').value);

//                 if(target.classList.contains ('counter__plus')) {
//                     value++;
//                 }else{
//                     --value;
//                 }
                

//                 if (value <= 0) {
//                     value = 0;
//                 }
                
                
//                 target.closest('.counter').querySelector('input').value = value;
//             }

//         })
//     })
// }
