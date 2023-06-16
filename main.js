"use strict";

{
  const text = document.querySelector("#text");
  const container = document.querySelector("#container");
  const message = document.querySelector("#message");
  const save = document.querySelector("#save");
  const clear = document.querySelector("#clear");
  const add = document.querySelector(".add");
  const wrapper = document.querySelector(".wrapper");

  // 日付の取得
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const week = date.getDay();
  const weekItems = ["日", "月", "火", "水", "木", "金", "土"];
  const dayOfWeek = weekItems[week];


  if (localStorage.getItem(localStorage.length.toString()) === null) {
    text.value = "";
  } else {
    text.value = localStorage.getItem(localStorage.length.toString());
  }


  save.addEventListener("click", () => {

    message.classList.add("appear");
    setTimeout(() => {
      message.classList.remove("appear");
    }, 1000);

    const current = document.querySelector("#current");
    current.innerHTML = `最終更新：${year}年${month}月${day}日${dayOfWeek}曜日${hour}時${minute}分`;

    
    localStorage.setItem('key', text.value);
  });

  clear.addEventListener("click", () => {
    if (confirm("削除しますか") === true) {
      localStorage.removeItem(localStorage.length.toString());
      text.value = "";
    }
  });


  const newCurrent = document.createElement("p");
  function addElement() {
    const newDiv = document.createElement("div");
    const newText = document.createElement("textarea");
    newText.classList.add("new-textarea");
    newDiv.appendChild(newText);
    const newMessage = document.createElement("span");
    newMessage.textContent = "保存しました";
    const newSaveBtn = document.createElement("button");
    newSaveBtn.innerHTML = "保存";
    const newClearBtn = document.createElement("button");
    newClearBtn.innerHTML = "削除";
    wrapper.appendChild(newDiv);
    newDiv.appendChild(newMessage);
    newDiv.appendChild(newClearBtn);
    newDiv.appendChild(newSaveBtn);

    newSaveBtn.classList.add("button");
    newClearBtn.classList.add("button");
    newDiv.classList.add("container");
    newText.classList.add("textarea");

    if (localStorage.getItem('========') === null) {
      newText.value = "";
    } else {
      newText.value = localStorage.getItem('============');
    }

    // 作成した保存ボタンを押したとき＝＝＝＝＝＝＝＝＝＝＝＝
    newSaveBtn.addEventListener("click", () => {
      // 「保存しました」メッセージの透明度を0→100%に
      newMessage.classList.add("appear");
      // １秒後に透明度を０に戻す
      setTimeout(() => {
        newMessage.classList.remove("appear");
      }, 1000);

      newDiv.appendChild(newCurrent);
      newDiv.insertBefore(newCurrent, newMessage);
      newCurrent.innerHTML = `最終更新：${year}年${month}月${day}日${dayOfWeek}曜日${hour}時${minute}分`;


    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    // 作成した削除ボタンを押したとき＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    newClearBtn.addEventListener("click", () => {
      //  削除しますかのメッセージをクリックしたら
      if (confirm("このページを削除しますか") === true) {
        // ローカルストレージを削除してテキストエリアを空文字に
        localStorage.removeItem('=========');
        newDiv.remove();
      }
    });
    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  }


  // let index;
  // newDiv.forEach((nD)=>{
  // add.addEventListener("click", () => {
  //   addElement();
  //   index=[].slice.call(nD).indexOf(nD);
  // });
)};


}

