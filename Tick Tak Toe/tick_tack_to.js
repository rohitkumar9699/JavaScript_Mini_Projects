let box  = document.querySelectorAll("#box")

let arr= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// console.log(arr[0][1]);

check  =true;
box.forEach(i => 
    {
    i.addEventListener("click", ()=>{
    // console.log("Button pressed");
    console.log(i);
    if(check)
    {
        i.innerText = "0"
        check = false;
    }
    else
    {
        i.innerText = "X"
        check = true;
    }
    for(let i of arr )
    {
        let v1 = box[i[0]].innerText;
        let v2 = box[i[1]].innerText;
        let v3 = box[i[2]].innerText;
        console.log(v1+v2+v3);
        if(v1!=""  && v2!="" && v3 !="")
        {
            if(v1==v2 && v2==v3 && v1==v3)
            {
                let a = document.querySelector("h3")
                a.innerText = "Winner"
                if(check)
                    a.innerText = 'X Won';
                else    
                    a.innerText = '0 Won'
                
                    

            }
        }
    }
    
   })
});


//reset
let reset = document.querySelector("#reset");
box.forEach(i => 
    {
    reset.addEventListener("click", ()=>{
    console.log(i);
    i.innerText = ""
   })
});
