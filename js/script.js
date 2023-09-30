const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

let previewContainer = document.querySelector('.place-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.destination-content .content').forEach(content =>{
     content.onclick = () =>{
        previewContainer.style.display = 'block';
        document.querySelector('body').style.overflow = 'hidden'
        let name = content.getAttribute('data-name');
         previewBoxes.forEach(preview =>{
             let target = preview.getAttribute('data-target');
             if(name == target){
                 preview.classList.add('active');
            }
        });
    };
});
previewBoxes.forEach(preview =>{
     preview.querySelector('.bx-x-circle').onclick = () =>{
         preview.classList.remove('active');
         previewContainer.style.display = 'none';
         document.querySelector('body').style.overflow = 'scroll'
    };
});

previewContainer.addEventListener('click', () => {
    previewBoxes.forEach(preview => {
        preview.classList.remove('active');
    })
    previewContainer.style.display = 'none';
    document.querySelector('body').style.overflow = 'scroll'
})


// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector(".navbar");

// menu.addEventListener("click", function() {
//     navbar.classList.toggle("active");
// });

// window.onscroll = () => {
//     navbar.classList.remove("active");
// };

// let nav = document.querySelectorAll('.nav-btn')

// nav.forEach(btn => {
//     btn.addEventListener('click', function (){
//         nav.forEach(btn => {
//             btn.classList.remove('active')
//         })
//         btn.classList.add('active')
//     })
// });
