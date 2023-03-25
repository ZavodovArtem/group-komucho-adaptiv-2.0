window.addEventListener('click', function (event){

    let counter;
    let counterall

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
    
    counter = event.target.closest('.counter')
    counterall = counter.querySelector('[data-counter]');


    }


    

    // console.log(event.target.dataset.action);
    //         const counter = event.target.closest('.counter')
    // console.log(counter);
    //         const counterall = counter.querySelector('[data-counter]');


    if (event.target.dataset.action === 'plus') {
        console.log('plus');
        // const counter = event.target.closest('.counter')
        // console.log(counter);
        // const counterall = counter.querySelector('[data-counter]');
        // console.log(counterall);
        
        counterall.innerText = ++counterall.innerText;
        // console.log(counterall);

    }

    if (event.target.dataset.action === 'minus') {
        // console.log('Minus');

        // const counter = event.target.closest('.counter')

        // const counterall = counter.querySelector('[data-counter]');


        if (event.target.closest ('.basket__product') && parseInt(counterall.innerText) === 1 ) {
            console.log('in cart');
            event.target.closest('.menu__step').remove();
        }



        if (parseInt(counterall.innerText) > 1 ){
            counterall.innerText = --counterall.innerText;
        }else if (event.target.closest ('.basket__product') && parseInt(counterall.innerText) === 1 ) {
            console.log('in cart');
            event.target.closest('.basket__product').remove();
        }

        
    }

});