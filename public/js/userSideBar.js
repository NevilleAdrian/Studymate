const btnAcc = document.querySelectorAll('.card-header button');
const collapseAcc = document.querySelector('.accordion>.card .show');
Array.from(btnAcc).forEach(element => {
    element.addEventListener('click', (e) => {
        if(collapseAcc){
            collapseAcc.parentElement.classList.add('acc-blue');
            alert('wrk')
        }
        alert(e.target.value);
    })
});




