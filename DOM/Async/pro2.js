// here we will going to write js for project 2 we are taking input form user so 
// select input div take ref: addres of the element 
const insert= document.getElementById("insert");
// we are applying evnet on windows now means browser s window 
window.addEventListener('keydown', (e)=>{//// we are adding new elments of the table using innerhtml so we 
     // take the keys form user and dispaly it key code and code of the key that user had enter 
     insert.innerHTML=`
    <div class="color">
    <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>

        <tr>
            <td>${ e.key ===" "?"Space": e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
</div>
     `
});
