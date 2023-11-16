// "add-todo"というIDを持つ要素にクリックイベントリスナーを追加
document.getElementById("add-todo").addEventListener("click", ()=>{
    clickAddTodoButton()
})

const clickAddTodoButton = () => {
    //入力されたテキストを取得
    const inputText = document.getElementById("input-todo").value.trim()
    console.log(inputText)
    
    if(inputText){
    //入力フィールドを空にする
    document.getElementById("input-todo").value = ""
    
    const todoText = addTodo(inputText)

    //console.log(listItem)
    //ulタグの子要素にliタグを入れる
    document.getElementById("todo-list").appendChild(todoText)
    }else{
        alert("todoを追加してください")
    }
    
}

const addTodo = (text) =>{
    //リストのItemになる要素を作成
    const listItem = document.createElement("li")
    listItem.innerText = text //liタグのテキストに文字を挿入

    //削除用のボタンを作成
    const deleteButton = createDeleteButton(listItem)

    listItem.appendChild(deleteButton)


    return listItem
}

const createDeleteButton = (target) =>{
    //削除ボタンを作成
    const deleteButtonTag = document.createElement("button")
    deleteButtonTag.textContent = "削除"
    deleteButtonTag.id="delete-button"
    deleteButtonTag.addEventListener("click",()=>{
        target.remove()
    })

    return deleteButtonTag
}