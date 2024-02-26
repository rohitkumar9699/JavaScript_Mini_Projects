let you = 0;
let com = 0;

let box=document.querySelectorAll(".box");


const playgame=(user_id)=>
{
    let choice  =["rock", "paper","sciaser"];
    let n  =Math.random()*3
    n = Math.floor(n)
    console.log("Comp: "+ choice[n]);
    if(user_id  == choice[n])
    {
        console.log("Draw");
        let p = document.querySelector("#result")
        p.innerText = "Draw";
    }
    else if((user_id== "rock" && choice[n]=="paper")||(user_id=="sciaser" && choice[n]=="rock") ||(user_id== "paper" && choice[n]=="sciaser"))
    {
        console.log("Comp Won");
        com++;
        let p = document.querySelector("#result")
        p.innerText = "Computer Won";
    }
    else
    {
        console.log("You Won");
        you++;
        let p = document.querySelector("#result")
        p.innerText = "You Won";
    }

}
box.forEach(bx => 
{
    bx.addEventListener("click", ()=>
    {
        // console.log(bx);
        let user_id = bx.getAttribute("id")
        console.log("User:" + user_id);
        playgame(user_id)
        console.log("\n\n");

        let p = document.querySelectorAll("#view_score")
        console.log(p);
        p[0].innerText= you;
        p[1].innerText=com;
    });
    
});
let restart = document.querySelector("#restart");
restart.addEventListener("click", ()=>
{
    you=0;
    com=0;
    let p = document.querySelectorAll("#view_score")
    console.log(p);
    p[0].innerText= you;
    p[1].innerText=com;
    
    let pr = document.querySelector("#result")
    pr.innerText = "Start the Game";

});