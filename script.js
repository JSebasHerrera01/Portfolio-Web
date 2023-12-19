let menuView = false;
// Function View / Hidden Menu
function hideViewMenu(){
    if(menuView){
        document.getElementById("nav").classList="";
        menuView = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuView = true;
    }
}

function select(){
    //Hide menu click item-menu
    document.getElementById("nav").classList="";
    menuView = false;
}


//Function apply animation skills
function effectSkills(){
    var skills = document.getElementById("skills")
    var distance_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distance_skills >= 300){
        let habilities = document.getElementsByClassName("progress");
        habilities[0].classList.add("html");
        habilities[1].classList.add("css");
        habilities[2].classList.add("javascript");
        habilities[3].classList.add("node");
        habilities[4].classList.add("react");
        habilities[5].classList.add("sql");
        habilities[6].classList.add("git");
        habilities[7].classList.add("comunicacion");
        habilities[8].classList.add("equipo");
        habilities[9].classList.add("creatividad");
        habilities[10].classList.add("responsabilidad");
        habilities[11].classList.add("dedicacion");
        habilities[12].classList.add("organizacion");
        habilities[13].classList.add("autodidacta");

    }
}

window.onscroll = function(){
    effectSkills();
}