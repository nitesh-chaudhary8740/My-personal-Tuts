let d = new Date();
let keys = Object.keys(localStorage);
const cont = document.getElementById('container');//main container

let blankDiv = document.createElement('div');//add new box
cont.appendChild(blankDiv);
blankDiv.setAttribute('id', "blankDiv")
blankDiv.innerHTML = `<div id='plus'>+</div>`
blankDiv.addEventListener('click', () => {
    addNewMemo();
})
function addNewMemo() {
    let inputContainerDiv = document.createElement('div');
    document.body.appendChild(inputContainerDiv);
    inputContainerDiv.setAttribute('id', 'addNewContainer')


    let titleInput = document.createElement('input')
    let textInput = document.createElement('textarea')
    let buttonCont = document.createElement('div')
    let save_btn = document.createElement('button')
    let cancel_btn = document.createElement('button')


    inputContainerDiv.appendChild(titleInput);
    inputContainerDiv.appendChild(textInput);
    inputContainerDiv.appendChild(buttonCont);
    buttonCont.appendChild(save_btn);
    buttonCont.appendChild(cancel_btn);

    save_btn.textContent = "SAVE";
    cancel_btn.textContent = "CANCEL";

    save_btn.setAttribute('id', 'addNewSaveBtn')
    save_btn.setAttribute('id', 'addNewCancelBtn')
    titleInput.setAttribute('id', 'titleinput')
    titleInput.setAttribute('placeholder', 'Title')
    textInput.setAttribute('placeholder', 'Memo')
    textInput.setAttribute('id', 'textinput')
    buttonCont.setAttribute('id', 'btnCont')

    save_btn.addEventListener('click', () => {
        let title = titleInput.value;
        let memo = textInput.value;
        if (title && memo) {
            let keyId = `id${localStorage.length}`
            let date = `${d.getDate().toString().padStart(2, '0')}-${d.toLocaleString('default', { month: 'short' })}-${d.getFullYear().toString()}`;
            inputContainerDiv.remove();
            ((keyId,date,title,memo)=>{
                memoJSON = {
                    keyId:keyId,
                    date:date,
                    title:title,
                    memo:memo
                }
               let memoBox = createEachMemoUI(memoJSON);
               cont.appendChild(memoBox);
               localStorage.setItem(`${keyId}`,`${JSON.stringify(memoJSON)}`)
            })(keyId,date,title,memo);
        }
        else{
            alert("Fill title and Message")
        }
       
    })
    cancel_btn.addEventListener('click', () => {
        inputContainerDiv.remove()
    })

}
function reEditMemo(memoJSON,selected_memo_id) {
    let inputContainerDiv = document.createElement('div');
    document.body.appendChild(inputContainerDiv);
    inputContainerDiv.setAttribute('id', 'addNewContainer')


    let titleInput = document.createElement('input')
    let textInput = document.createElement('textarea')
    let buttonCont = document.createElement('div')
    let save_btn = document.createElement('button')
    let cancel_btn = document.createElement('button')


    inputContainerDiv.appendChild(titleInput);
    inputContainerDiv.appendChild(textInput);
    inputContainerDiv.appendChild(buttonCont);
    buttonCont.appendChild(save_btn);
    buttonCont.appendChild(cancel_btn);
    titleInput.value=`${memoJSON.title}`
    textInput.value=`${memoJSON.memo}`
    

    save_btn.textContent = "SAVE";
    cancel_btn.textContent = "CANCEL";

    save_btn.setAttribute('id', 'addNewSaveBtn')
    save_btn.setAttribute('id', 'addNewCancelBtn')
    titleInput.setAttribute('id', 'titleinput')
    titleInput.setAttribute('placeholder', 'Title')
    textInput.setAttribute('placeholder', 'Memo')
    textInput.setAttribute('id', 'textinput')
    buttonCont.setAttribute('id', 'btnCont')

    save_btn.addEventListener('click', () => {

        let title = titleInput.value;
        let memo = textInput.value;
        if (title && memo) {
            let keyId = memoJSON.keyId;
            let date = `${d.getDate().toString().padStart(2, '0')}-${d.toLocaleString('default', { month: 'short' })}-${d.getFullYear().toString()}`;
            inputContainerDiv.remove();
            ((keyId,date,title,memo)=>{
                memoJSON = {
                    keyId:keyId,
                    date:date,
                    title:title,
                    memo:memo
                }
               let replace_div = document.getElementById(selected_memo_id)
               replace_div.remove();
               let memoBox = createEachMemoUI(memoJSON);
               localStorage.setItem(`${keyId}`,`${JSON.stringify(memoJSON)}`)
               cont.appendChild(memoBox);
            })(keyId,date,title,memo);
        }
        else{
            alert("Fill title and Message")
        }
       
    })
    cancel_btn.addEventListener('click', () => {
        inputContainerDiv.remove()
    })

}

let createEachMemoUI = (memoJSON) => {

    let memoDiv = document.createElement('div');
    memoDiv.setAttribute('class', 'memo');
    memoDiv.setAttribute('id', `${memoJSON.keyId}`);
   

    let titleDiv = document.createElement('div');
    titleDiv.id = 'title';
    memoDiv.appendChild(titleDiv);
    titleDiv.textContent = `${memoJSON.title} key-${memoJSON.keyId}`

    let dateDiv = document.createElement('div');
    dateDiv.id = 'date';
    memoDiv.appendChild(dateDiv);
    dateDiv.textContent = `${memoJSON.date}`

    let messageDiv = document.createElement('div');
    messageDiv.id = 'msg';
    memoDiv.appendChild(messageDiv);
    messageDiv.textContent = `${memoJSON.memo}`


    let btnsDiv = document.createElement('div');
    btnsDiv.id = 'btns_cont';
    memoDiv.appendChild(btnsDiv);

    let editBtn = document.createElement('button');
    editBtn.textContent = 'EDIT';
    btnsDiv.appendChild(editBtn);
    editBtn.setAttribute('class', 'editMemo');
    editBtn.setAttribute('id', `edit${memoJSON.keyId}`);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    btnsDiv.appendChild(deleteBtn);
    deleteBtn.setAttribute('class', 'deleteMemo');
    deleteBtn.setAttribute('id', `delete${memoJSON.keyId}`);
    deleteBtn.addEventListener('click', (event) => {
        let Remove_keyid = memoDiv.id;
        let delete_note_div = document.getElementById(memoDiv.id)
        // console.log(keyid);
        delete_note_div.remove()
        localStorage.removeItem(Remove_keyid)//key value removed
    })
    editBtn.addEventListener('click', (event) => {
        let edit_note_div = memoDiv.id;
       reEditMemo(memoJSON,edit_note_div)
    })
    return memoDiv;
}
// Get all keys in local storage
function loadMemo() {
    // let keys = Object.keys(localStorage);shifted up globally
    let keys = Object.keys(localStorage);
    // Use forEach to iterate over each key
    keys.forEach((key) => {
        // Get the JSON data for the current key
        let data = JSON.parse(localStorage.getItem(key));

        // Do something with the data
      let ele = createEachMemoUI(data)
      cont.appendChild(ele);

    });
}
loadMemo();
// localStorage.clear()