let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn  = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click",function(){
    addinputVal = addtaskinput.value ;
    if(addinputVal.trim()!=0) {
        let webTask = localStorage.getItem("localtask");
        if(webTask == null){
            taskObj = [];
        } 
        else {
            taskObj = JSON.parse(webTask);
        }
            taskObj.push({'task_name':addinputVal,'completeStatus':false});
            console.log(taskObj, 'Ashendra'); 
            localStorage.setItem("localtask" , JSON.stringify(taskObj));
            addtaskinput.Value=" ";
        
    }
})

function showTask() {
    let webTask = localStorage.getItem("localtask");
    if(webTask == null) {
        taskObj = [];
    }
    else {
        taskObj = JSON.parse(webTask);
    }
    let html = '';
    let addedTaskList = document.getElementById("addedtasklist");
    taskObj.forEach((item,index) => {
        if(item.completeStatus = true){
            taskCompleteValue = `<td class="completed">${item.task_name} </td>`;
        }
        else {
            taskCompleteValue = `<td> ${item.task_name}</td>`;
        }
        html += `<tr> 
                    <th scope="row">${index+1} </th> ${taskCompleteValue}
                    <td><button type="button" onclick="editTask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button"                 id=${index}  class="text-success"><i class = "fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteItem(${index})" class="text-danger"><i class = "fa fa-trash"></i>Delete</button></td>
        
                    </tr>`
    });
    addedTaskList.innerHTML = html;
}

showTask();