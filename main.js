const notesContainer = document.getElementById("app");
const addNoteButton = notesContainer.querySelector(".add-note");

getNotes().forEach((note)=>{
    const noteElement =createNoteElements(note.id,note.content);
    notesContainer.insertBefore(noteElement,addNoteButton);
});

addNoteButton.addEventListener("click",()=>{
    addNotes();
});

// ローカルストレージ内の全データを取得
function getNotes(id,content){
    return JSON.parse(localStorage.getItem("stickynotes-notes")||"[]");
}

// データを保存
function saveNotes(notes){
    localStorage.setItem("stickynotes-notes",JSON.stringify(notes));
}

// ノートの要素を作成
function createNoteElements(id,content,date){
    const element =document.createElement("textarea");
    element.classList.add("note");
    element.placeholder="Empty Sticky Note";
    element.value = content;
    date=new Date();

    element.addEventListener("change",()=>{
        updateNotes(id,element.value);
    });
    element.addEventListener("dblclick",()=>{
        const doDelete =confirm("Are you sure you wish to delete this sticky note?");
        
        if(doDelete){
        deleteNotes(id,element);
        }
    });
    return element;
}

// 作成したノートの要素をDOMに追加
function addNotes(){
    const notes = getNotes();
    const noteObject={
        id:Math.floor(Math.random()*10000),
        content:"",
        date:new Date().toLocaleString('ja-JP-u-ca-japanese')
    };
   const noteElement= createNoteElements(noteObject.id,noteObject.content,noteObject.date);
   notesContainer.insertBefore(noteElement,addNoteButton);

   notes.push(noteObject);
   saveNotes(notes);
}
// element.addEventListener"change"の時に入力内容を更新・保存する関数
function updateNotes(id,newContent){
    const notes=getNotes();
    const targetNote =notes.filter((note) => note.id === id)[0];
    targetNote.content =newContent;
    saveNotes(notes);
}

// dblclickで該当の要素を削除
function deleteNotes(id,element){
    // filterはtrueに該当する値を返したすべての要素で新しい配列を生成する
    const notes =getNotes().filter((note) => note.id !== id);
    saveNotes(notes);
    notesContainer.removeChild(element);
}

