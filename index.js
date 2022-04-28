let taskbar=  document.getElementsByClassName("taskbar")[0];
let startmenu=  document.getElementsByClassName("startmenu")[0];
taskbar.addEventListener("click",()=>{

    console.log("Clicked");
    if(startmenu.style.bottom=="1.3%")
    {
        startmenu.style.bottom="-90%";

    }
    else
    {
        startmenu.style.bottom="1.3%";
    }
});