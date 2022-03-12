let tableItems = document.querySelector('#tableItems');
let form = document.querySelector('form');
let tableLists = document.querySelector('#tableList');

let t = 0;

form.addEventListener('submit', royxat);
function royxat(e) {
    e.preventDefault();
    let fullName = document.querySelector('#fish').value;
    let match = document.querySelector('#uchrashuv').value;
    let pay = document.querySelector('#pay').value;

    let tableTr = document.createElement('tr');

    let td0 = document.createElement('td');
    
    function foo(){
        while (true) {
            t++;
            td0.appendChild(document.createTextNode(t));
            tableTr.appendChild(td0);
            break; 
        }
        
    }
    let idx = foo();
    
    
    


    let td1 = document.createElement('td');
    td1.appendChild(document.createTextNode(fullName));
    tableTr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(match));
    tableTr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.appendChild(document.createTextNode(pay));
    tableTr.appendChild(td3);

    let td4 = document.createElement('td');
    let sana = (new Date().getDay() + 10) + '.' +  (new Date().getMonth() + 1) + '.' + new Date().getFullYear();
    td4.appendChild(document.createTextNode(sana));
    tableTr.appendChild(td4);

    tableItems.appendChild(tableTr);
}

