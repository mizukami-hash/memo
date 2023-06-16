// 参考：https://univ-programmer.com/feweek4-4/#toc4
// localStorage.clear();

"use strict";
{
  let text = document.querySelector("#text");
  const container = document.querySelector("#container");
  const message = document.querySelector("#message");
  const save = document.querySelector("#save");
  const clear = document.querySelector("#clear");
  const add = document.querySelector("#add");
  const wrapper = document.querySelector(".wrapper");
  const current = document.querySelector("#current");

  // ここにオブジェクトを追加していく
  let listItems = [];
  let newList;
  let storage = localStorage;

  // saveボタン==============================================
  save.addEventListener("click", () => {
    if (text.value !== "") {
      // id、入力内容、更新日時を追加
      const item = {
        id:
          new Date().getTime().toString() +
          Math.floor(Math.random() * 10).toString(),
        content: text.value,
        date: new Date(),
      };
      listItems.push(item);
      // ローカルストレージに[data]キーでlistItemsを格納(文字列)
      storage.data = JSON.stringify(listItems);
      console.log(listItems);
      getDate();
    }
  }); /*saveここまで*/

  // add/メモの要素を作成する関数
  // created save /保存指示をしたときにキーの名前を付けて保存する関数
  // created clear /紙ごと削除
  // 全体/getData
  const json = storage.data; /*ローカルストレージのデータ*/
  // リストの中にストレージのデータを格納
  listItems = JSON.parse(json); /*オブジェクトに戻す*/
  console.log(listItems);

  // for ofでlistItemsをひとつずつ取り出して、itemという定数に入れて繰り返しをする処理
  for (const item of listItems) {
    text.value = item.content;
    console.log(item);
  }

  clear.addEventListener("click", () => {
    storage.removeItem("data");
    text.value = "";
  });

  // 日時の取得===========================================
  function getDate() {
    let date = new Date();
    // console.log(date.getTime());
    current.textContent = date.toLocaleString();
  }

  // ユニークID============================================
  // let uniqueId =
  //   new Date().getTime().toString() + Math.floor(Math.random() * 10).toString();

  //  オブジェクトの中身を更新・保存する関数=====================
  //   function createNewStorageData() {
  //     memos.id =
  //     // オブジェクトmemoの値を更新
  //       new Date().getTime().toString() +
  //       Math.floor(Math.random()*10 ).toString();
  //     memos.text = text.value;
  //     memos.updated = new Date().getTime();

  // メモの要素を作る関数======================================
  let createDiv;
  let createSpan;
  let createCurrent;
  let createSaveBtn;
  let createClearBtn;
  let createText;

  // ここを各メモ帳の入力値が入るように変更=================
  function createNewPaper() {
    for (let i = 0; i < 8; i++) {
      newList = newList + c;
      newList = [];
      let example = {};
      newList.push(JSON.stringify(example));
      // ====================================================
      createDiv = document.createElement("div");
      createSpan = document.createElement("span");
      createSaveBtn = document.createElement("button");
      createClearBtn = document.createElement("button");
      createCurrent = document.createElement("p");
      createText = document.createElement("textarea");

      wrapper.appendChild(createDiv);
      createDiv.appendChild(createText);
      createDiv.appendChild(createSpan);
      createDiv.appendChild(createCurrent);
      createDiv.appendChild(createClearBtn);
      createDiv.appendChild(createSaveBtn);
      let date = new Date();
      createCurrent.textContent = date.toLocaleString();
      createClearBtn.textContent = "削除";
      createSaveBtn.textContent = "保存";
      createSpan.textContent = "保存しました";
    }
  }
  let c = 1;

  add.addEventListener("click", () => {
    createNewPaper();
    c++;
    localStorage.setItem("data" + c, newList);
  });
}

// id名に１を足して保存する関数
// for (let i=0; i<storage.length;i++){
//   (function(){
//     newSaveBtn.addEventListener('click',()=>{
//       newId ='id'+i;
//       console.log(newId);
//       storage.setItem(newId);

//     });
//   })(i);

// }
// 即時関数のひな型　(function(){処理})();
// createSaveBtn.addEventListener("click",()=>{
//   for(let i=0; i<storage.length;i++){
//     console.log( 'newId'+i);
//     let newId='newId'+i;
//   }

//   if (createText.value !== "") {
//     // id、入力内容、更新日時を追加
//     const newItem = {
//       id:
//         new Date().getTime().toString() +
//         Math.floor(Math.random() * 10).toString(),
//       content: createText.value,
//       date: new Date(),
//     };
//     listItems2.push(newItem);
//     // ローカルストレージに[data]キーでlistItemsを格納(文字列)
//     storage.newId = JSON.stringify(listItems2);
//     // console.log(listItems);
//     getDate();

// }
// })

// save.addEventListener("click", () => {
//   createNewStorageData();
// });

// save.addEventListener("click", () => {
//   localStorage.setItem('obj1',firstId);
//   getDate();
// });

// clear.addEventListener('click',()=>{
//   text.value='';
//   s.removeItem('obj1');
// });

// {
//   const text = document.querySelector("#text");
//   //   const container = document.querySelector("#container");
//   const message = document.querySelector("#message");
//   const save = document.querySelector("#save");
//   const clear = document.querySelector("#clear");
//   const add = document.querySelector(".add");
//   const wrapper = document.querySelector(".wrapper");

//   // メモというキーで取得したとき、値になるものがなければ空文字を代入してなんか書いてあったらその文字を値に設定
//   if (localStorage.getItem('key') === null) {
//     text.value = "";
//   } else {
//     text.value = localStorage.getItem('key');
//   }

//   // 保存ボタンをクリック
//   save.addEventListener("click", () => {
//     // 保存しましたメッセージのcssスタイル追加
//     message.classList.add("appear");
//     setTimeout(() => {
//       message.classList.remove("appear");
//     }, 1000);

//     const current = document.querySelector("#current");
//     current.innerHTML = `最終更新：${year}年${month}月${day}日${dayOfWeek}曜日${hour}時${minute}分`;

//     // 保存ボタン押したらローカルストレージにデータを保存
//     localStorage.setItem('key', text.value);
//   });

//   clear.addEventListener("click", () => {
//     if (confirm("削除しますか") === true) {
//       localStorage.removeItem('key');
//       text.value = "";
//     }
//   });

//   const newCurrent = document.createElement("p");
//   function addElement() {
//     const newDiv = document.createElement("div");
//     // テキストエリア
//     const newText = document.createElement("textarea");
//     // テキストエリアにCSSの適用
//     newText.classList.add("new-textarea");
//     // divに格納
//     newDiv.appendChild(newText);

//     // span
//     const newMessage = document.createElement("span");
//     newMessage.textContent = "保存しました";
//     // 新しい保存ボタンの生成
//     const newSaveBtn = document.createElement("button");
//     newSaveBtn.innerHTML = "保存";
//     // 新しい削除ボタンの生成
//     const newClearBtn = document.createElement("button");
//     newClearBtn.innerHTML = "削除";
//     // divに各要素を格納
//     wrapper.appendChild(newDiv);
//     newDiv.appendChild(newMessage);
//     newDiv.appendChild(newClearBtn);
//     newDiv.appendChild(newSaveBtn);

//     newSaveBtn.classList.add("button");
//     newClearBtn.classList.add("button");
//     newDiv.classList.add("container");
//     newText.classList.add("textarea");

//     if (localStorage.getItem('key') === null) {
//       newText.value = "";
//     } else {
//       newText.value = localStorage.getItem('key');
//     }

//     // 作成した保存ボタンを押したとき＝＝＝＝＝＝＝＝＝＝＝＝
//     newSaveBtn.addEventListener("click", () => {
//       // 「保存しました」メッセージの透明度を0→100%に
//       newMessage.classList.add("appear");
//       // １秒後に透明度を０に戻す
//       setTimeout(() => {
//         newMessage.classList.remove("appear");
//       }, 1000);

//       // const newCurrent = document.createElement("p");
//       newDiv.appendChild(newCurrent);
//       newDiv.insertBefore(newCurrent, newMessage);
//       newCurrent.innerHTML = `最終更新：${year}年${month}月${day}日${dayOfWeek}曜日${hour}時${minute}分`;

//       localStorage.setItem('key', newText.value);
//     });
//     // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

//     // 作成した削除ボタンを押したとき＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//     newClearBtn.addEventListener("click", () => {
//       //  削除しますかのメッセージをクリック
//       if (confirm("このページを削除しますか") === true) {
//         // ローカルストレージを削除してテキストエリアを空文字に
//         localStorage.removeItem('key');
//         newDiv.remove();
//       }
//     });
//     // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
//   }

//メモ=============================================
// ローカルストレージにあるすべてのキーを取得
// for (let i =0; i<localStorage.length; localStorage.key){
//   console.log(localStorage.key(i));
// }
// ローカルストレージにあるすべてのキーの〇番目（履歴はとらない）
// console.log(localStorage.key(0));
