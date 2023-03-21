let string = "";
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        // console.log(e.target);
        if(e.target.innerHTML == "="){
            string = eval(string);
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "AC"){
            string = "";
            document.querySelector("input").value = string;
        }else if(e.target.innerHTML == "C"){
                let size = string.length;
                string = string.substring(0, size-1);
                document.querySelector("input").value = string;
        }else {   
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    })
})


// TODO : Make M+/M- functional
// TODO : Make any key functional like for (X and *)
// TODO : Learn Array.from() method
// TODO : Learn substring() method