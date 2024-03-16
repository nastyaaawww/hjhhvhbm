
let block=document.querySelector('.block')
let create_card_btn=document.querySelector('body')

create_card_btn.addEventListener('click',function(e){
    block.style.transform=`translate(${e.pageX-25}px,${e.pageY-600}px)`
    block.style.opacity=1
    anime({
        targets:'.block',
        opacity:0,
        scale:2,
        display:'none',
        duration:2000
    })
})

function calc_price() {
   let days_input = document.querySelector('.days-input')
   let days_amount = days_input.value
   if (days_amount == '') {
       days_input.style.border = '1px solid #AD4851'
   } else {
       let one_day_price = 328
       let total = +days_amount * one_day_price
       days_input.style.border = 'none'
       days_input.style.borderBottom = '1px solid #5D4229'
       alert(total)
   }
}
let calc_button = document.querySelector('.submit-btn-calc')
calc_button.addEventListener('click', calc_price)
