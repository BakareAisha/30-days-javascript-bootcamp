let tasks = [];


function addTask(){
   let task= document.getElementById("task").value;
   if (task === "") {
    return;
   }
    tasks.push(task);
    document.getElementById("task").value = "";
    let output = ""
    for (let i = 0; i < tasks.length; i++) {
        output += `
    <div class="item">
        <span>${i + 1}</span>
        <span>${tasks[i]}</span>
    </div>
    `;
    }
    document.getElementById("container").innerHTML=`
    ${output}
    `
}
