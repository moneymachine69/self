if (!localStorage.getItem('visited')) {

    console.log("first time i see");
    
    localStorage.setItem('visited', 'true');

    const time = new Date().getHours();

    if (!(time < 20 && time > 8)){
        sessionStorage.setItem('dm','true');
        var body = document.body;
        body.classList.toggle("dark-mode");
    }else{
        sessionStorage.setItem('dm','false');
    }
}
var dmBool = localStorage.getItem('dm');
if(dmBool == 'true'){
    var body = document.body;
    body.classList.toggle("dark-mode");
    localStorage.setItem('dm','false');
}

function toggleDM(){
    if (dmBool == 'true'){
        var body = document.body;
        body.classList.toggle("dark-mode");
        localStorage.setItem('dm','false');
    }else{
        var body = document.body;
        body.classList.toggle("dark-mode");
        localStorage.setItem('dm','true');
    }
}