const container = document.querySelector("#catsContainer");
console.log(container);

let html = "";
let dataResult = [];
fetch(`https://catfact.ninja/facts`)
    .then(response => response.json())
    .then(result => {
        dataResult = result;
        console.log("dataResult: ", dataResult);
        for (let i = 0; i < dataResult.length; i++){
            container.innerHTML += `<div class="catsDisplay">
                        <h1 class="catsTitle">title: ${dataResult[i].title}</h1>
                        <h2 class="catsLength">length: ${dataResult[i].length}</h2>
                     </div>
            `
        }
    });

