const select = document.getElementById("lang");
const jaTr = document.getElementById('ja')
const egTr = document.getElementById('eg')
select.addEventListener("change", () => {
    const num = select.selectedIndex;
    switch(num){
        case 0:
            jaTr.className ? jaTr.classList.remove('ja') : console.log("0j");
            egTr.className ? egTr.classList.remove('eg') : console.log("0e");
            break;
        case 1:
            console.log(jaTr.className);
            jaTr.className ? jaTr.classList.remove('ja') : console.log("1j");
            egTr.className ?  console.log("a") : egTr.classList.add('eg');
            break;
        case 2:    
            jaTr.className ?  console.log("a") : jaTr.classList.add('ja');
            egTr.className ?  egTr.classList.remove('eg') : console.log("a");
            break;
        case 3:    
            jaTr.className ? jaTr.classList.remove('ja') : console.log("3j");
            egTr.className ? egTr.classList.remove('eg') : console.log("3e");
    }
});