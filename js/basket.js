const basketProduct = document.querySelector('.basket__product')

window.addEventListener('click', function(event) {

    if (event.target.hasAttribute('data-cart')) {
        // console.log('click on cart div');

        const menuProduct = event.target.closest('.menu__product')
        // console.log(menuProduct);

        const productInfo = {
            id: menuProduct.dataset.id,
            imgSrc: menuProduct.querySelector('.menu__product--img').getAttribute('src'),
            title: menuProduct.querySelector('.menu__product-name').innerText,
            left: menuProduct.querySelector('.menu__description-left').innerText,
            right: menuProduct.querySelector('.menu__description-right').innerText,
        }
        // console.log(productInfo);


        const cartItemHtml = ` <div class="menu__step  " data-cart data-id="1">
                        
                                    <img class="menu__product--img" src=${productInfo.imgSrc} alt="" data-cart  data-id="1">
                                    <div class="menu__stepdesc" data-cart data-id="1">
                                        <h3 class="menu__product-name menu__product--text"  data-cart data-id="1">${productInfo.title}</h3>
                                        <p class="menu__description-left menu__description-left--components">${productInfo.left}</p>
                                        <p class="menu__description-right menu__description-right--components">${productInfo.right}</p>
                                       
                                    </div>
                                    <div class="counter">
                                        <div class="counter__button-minus"><img class="counter__minus" data-action = "minus" src="images/minus.svg" alt="#"></div>
                                        <div class="counter__input" data-counter>1</div>
                                        <div class="counter__button-plus"><img class="counter__plus"  data-action = "plus" src="images/plus.svg" alt="#"></div>
                                    </div>

                                    
                                </div>`;


        basketProduct.insertAdjacentHTML('beforeend', cartItemHtml)


    
        // updateStorage();

    }
});





// const initialState = () => {

// };

// const updateStorage = () => {
//     let parent = menuProduct.querySelector('.menu__product');
//     let html = parent.innerHTML;
//     console.log(html);
// }

// const menuProduct = document.querySelectorAll('.menu__product');



// // console.log(menuProduct);
// menuProduct.forEach(el => {
//     el.addEventListener('click', e  => {
//         const target = e.target
//         // console.log(target);

        


//         const menuProduct = event.target.closest('.menu__product')
//                 // console.log(menuProduct);

//         const productInfo = {
//                         id: menuProduct.dataset.id,
//                         imgSrc: menuProduct.querySelector('.menu__product--img').getAttribute('src'),
//                         title: menuProduct.querySelector('.menu__product-name').innerText,
//                         left: menuProduct.querySelector('.menu__description-left').innerText,
//                         right: menuProduct.querySelector('.menu__description-right').innerText,
//                     }


//             //   console.log(productInfo);      


//         const basketStorage = localStorage.getItem('local')  || '[]';

//         const local = JSon.parse(basketStorage)
//         const card = {
//             title,id
//         }
//         localStorage.setItem('local', JSON.stringify([... local, card]))
//     })
// })


// const menuProduct = document.querySelectorAll(".menu__product");
// // const menuProductStorage = localStorage.getItem("menuProduct") || [];


// console.log(menuProduct);

// menuProduct.forEach((el) => {
//     console.dir(el);
//     const name = el.childNodes[1].innerText
//     const description = el.childNodes[3]
//     const img = el.childNodes[5]


//     console.log(name);
//     console.log(description);
//     // console.log(img);


//     name.addEventListener('click', () => {
//         const menuProductStorage = localStorage.getItem(".menuProduct") || "[]";
//         const basket = JSON.parse(menuProductStorage);
//         const card = {name, description, img }
//         localStorage.setItem("basket", JSON.stringify([...basket, card]))
//     })

// })