const addbutton=document.querySelector('.add-button');
var inputvalue=document.querySelector('.input');
const container=document.querySelector('.container');

class item{
    constructor(itemname)
    {
        this.creatediv(itemname);
    }

    creatediv(itemname){
        let input = document.createElement('input');
        input.value = itemname;
        input.disabled = true;
        input.classList.add('add-item');
        input.type ="text";

        let item = document.createElement('div');
        item.classList.add('item');

        let editbutton = document.createElement('button');
        editbutton.innerHTML = 'EDIT';
        editbutton.classList.add('editbutton');

        let removebutton = document.createElement('button');
        removebutton.innerHTML = 'REMOVE';
        removebutton.classList.add('removebutton');

        container.appendChild(item);
        item.appendChild(input);
        item.appendChild(editbutton);
        item.appendChild(removebutton);
        editbutton.addEventListener('click', () => this.edit(input));
        removebutton.addEventListener('click', () => this.remove(item));


    }

    edit(input){
        input.disabled = !input.disabled;
    }

    remove(item){
        container.removeChild(item);
    }

}

function check(){
    if(inputvalue.value !="")
    {
        new item(inputvalue.value);

        inputvalue.value="";
    }
}

addbutton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.which==13)
    {
        check();
    }
})