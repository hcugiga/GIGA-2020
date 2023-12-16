// var time;
const header = document.querySelector("nav");
// document.querySelector("body").addEventListener("click", myfunction);
// function timeout(){
//     header.classList.remove("on");
//     header.className = "off";
// }
// function myfunction(){
//     document.querySelector("nav").classList.toggle('on');
//     header.classList.toggle("off");
//     if(header.className === "on"){
//         time = setTimeout(timeout,700);
//     }   
//     else{
//     }
// }
// function cleartime(event){
//     if(header.className === "on"){
//         if(event.button = "0"){
//             clearTimeout(time);
//         }
//     }
// }
// function mouseon(){
//     header.className = "on";
// }
// function mouseleave(){
//     header.className = "off";
// }
const body = document.querySelector("body");

body.onload=()=>{
    var con = document.querySelector(".container");
    con.scrollTop = 10;
}

var timeout;
document.addEventListener("mousemove", function() {
header.className="on";
if (timeout) clearTimeout(timeout);
timeout = setTimeout(mouseStop, 1000);
if(header.className === "on"){
    header.style.margin = "0";
}
});
function mouseStop() {
header.className="off";
if(header.className === "off"){
    header.style.marginTop = "-100px";
}
}
// var aa;
// document.onwheel=()=>{
//     header.className="on";
//     if (aa) clearTimeout(aa);
//     aa = setTimeout(bb, 1000);
//     if(header.className === "on"){
//         header.style.height = "100px";
// }
// }
// function bb(){
//     header.className = "off";
//     if(header.className === "off"){
//         header.style.height = "0";
//     }
// }
    // var time;
    // const header = document.querySelector("nav");
    // document.querySelector("body").addEventListener("click", myfunction);
    // function timeout(){
    //     header.classList.remove("on");
    //     header.className = "off";
    // }
    // function myfunction(){
    //     document.querySelector("nav").classList.toggle('on');
    //     header.classList.toggle("off");
    //     if(header.className === "on"){
    //         time = setTimeout(timeout,700);
    //     }   
    //     else{
    //     }
    // }
    // function cleartime(event){
    //     if(header.className === "on"){
    //         if(event.button = "0"){
    //             clearTimeout(time);
    //         }
    //     }
    // }
    // function mouseon(){
    //     header.className = "on";
    // }
    // function mouseleave(){
    //     header.className = "off";
    // }
    // const body = document.querySelector("body");
    // var timeout;
    // document.addEventListener("mousemove", function() {
    // header.className="on";
    // if (timeout) clearTimeout(timeout);
    // timeout = setTimeout(mouseStop, 700);
    // });
    // function mouseStop() {
    // header.className="off";
    // }