// $(document.getElementById('button')).click(function(e) {
//     e.preventDefault();

// });

let buttonnaujas = document.getElementById('naujas');
let buttonatsaukti = document.querySelector('.atsaukti');
let buttonprideti = document.querySelector('.prideti');
let popup = document.getElementById('container');
let menu = document.querySelector('.menu');
let array = [];



buttonnaujas.addEventListener('click', function(e) {
    // evt.preventDefault()
    menu.style.display = "block";
    popup.classList.add('.menu');
    popup.style.opacity = 0.2;
})

buttonatsaukti.addEventListener('click', function() {
    menu.style.display = "none";
    popup.style.opacity = 1;
})

buttonprideti.addEventListener('click', function() {
    var numeris = document.querySelector('.menu__numeris').value;
    console.log(numeris);
    var greitis = document.getElementById('greitis').value;
    var laikas = document.getElementById('laikas').value;
    var data = document.getElementById('data').value;


    array = [numeris, greitis, laikas, data];
    console.log(array);

    var tbody = document.querySelector('tbody');
    var tr = document.createElement('tr');

    for (i = 0; i < array.length; i++) {
        var td = document.createElement('td');
        td.innerHTML = array[i];
        tr.appendChild(td);
    };
    tbody.appendChild(tr);

    document.querySelector('.menu__numeris').value = "";
    document.getElementById('greitis').value = "";
    document.getElementById('laikas').value = "";
    document.getElementById('data').value = "";

    menu.style.display = "none";
    popup.style.opacity = 1;
})



// popup.addEventListener('click', function() {
//     menu.style.display = "none";
//     popup.style.opacity = 1;
// })

// document.querySelector('').addEventListener('click', function(e) {
//     if (e.target.class = '.naujas') {
//         console.log(e.target.class);
//         menu.style.display = "block";
//         popup.classList.add('.menu');
//         popup.style.opacity = 0.2;
//         document.querySelector('.menu').addEventListener('click', function(e) {
//             if (e.target.class = '.atsaukti') {
//                 menu.style.display = "none";
//                 popup.style.opacity = 1;
//             }
//         })
//     }
// });

// document.querySelector('body').addEventListener('click', function(e) {
//     if (e.target.class = '.container') {
//         menu.style.display = "none";

//         popup.style.opacity = 1;
//     }

// });

// buttonatsaukti.addEventListener('click', function(e) {
//     if (e.target.class = '.atsaukti') {
//         menu.style.display = "none";
//         popup.style.opacity = 1;

//     } else if (e.target.class = '.container') {
//         menu.style.display = "none";
//         popup.style.opacity = 1;

//     }

// });



// menu.addEventListener('click', function(e) {
//     menu.style.display = "none";

// })