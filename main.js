"use strict";

{
  const text = document.querySelector("#text");
  //   const container = document.querySelector("#container");
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

  // メモというキーで取得したとき、値になるものがなければ空文字を代入してなんか書いてあったらその文字を値に設定
  if (localStorage.getItem(localStorage.length.toString()) === null) {
    text.value = "";
  } else {
    text.value = localStorage.getItem(localStorage.length.toString());
  }

  // 保存ボタンをクリック
  save.addEventListener("click", () => {
    // 保存しましたメッセージのcssスタイル追加
    message.classList.add("appear");
    setTimeout(() => {
      message.classList.remove("appear");
    }, 1000);

    const current = document.querySelector("#current");
    current.innerHTML = `最終更新：${year}年${month}月${day}日${dayOfWeek}曜日${hour}時${minute}分`;

    // 保存ボタン押したらローカルストレージにデータを保存
    localStorage.setItem(localStorage.length.toString(), text.value);
  });

  clear.addEventListener("click", () => {
    if (confirm("削除しますか") === true) {
      localStorage.removeItem(localStorage.length.toString());
      text.value = "";
    }
  });

  //   ここまでで基本機能はOK
  //      ↓  複数要素の追加ここから

  const newCurrent = document.createElement("p");
  function addElement() {
    // 新しいノートの要素を作成
    // 入れ物としてのdivを作成
    const newDiv = document.createElement("div");
    // テキストエリア
    const newText = document.createElement("textarea");
    // newText.textContent='';　きかない
    // テキストエリアにCSSの適用
    newText.classList.add("new-textarea");
    // divに格納
    newDiv.appendChild(newText);

    // spanと保存しましたメッセージの作成
    const newMessage = document.createElement("span");
    newMessage.textContent = "保存しました";
    // 新しい保存ボタンの生成
    const newSaveBtn = document.createElement("button");
    newSaveBtn.innerHTML = "保存";
    // 新しい削除ボタンの生成
    const newClearBtn = document.createElement("button");
    newClearBtn.innerHTML = "削除";
    // divに各要素を格納
    wrapper.appendChild(newDiv);
    newDiv.appendChild(newMessage);
    newDiv.appendChild(newClearBtn);
    newDiv.appendChild(newSaveBtn);

    newSaveBtn.classList.add("button");
    newClearBtn.classList.add("button");
    newDiv.classList.add("container");
    newText.classList.add("textarea");

    // テキストエリアの情報が未入力だったらmemo：空文字
    // 入力してあったらmemo：入力内容で情報を取得
    if (localStorage.getItem(localStorage.length.toString()) === null) {
      newText.value = "";
    } else {
      newText.value = localStorage.getItem(localStorage.length.toString());
    }

    // 作成した保存ボタンを押したとき＝＝＝＝＝＝＝＝＝＝＝＝
    newSaveBtn.addEventListener("click", () => {
      // 「保存しました」メッセージの透明度を0→100%に
      newMessage.classList.add("appear");
      // １秒後に透明度を０に戻す
      setTimeout(() => {
        newMessage.classList.remove("appear");
      }, 1000);

      // const newCurrent = document.createElement("p");
      newDiv.appendChild(newCurrent);
      newDiv.insertBefore(newCurrent, newMessage);
      newCurrent.innerHTML = `最終更新：${year}年${month}月${day}日${dayOfWeek}曜日${hour}時${minute}分`;

      // ローカルストレージには新しいテキストエリアの入力内容をmemoというキーとセットにして格納
      localStorage.setItem(localStorage.length.toString(), newText.value);
    });
    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

    // 作成した削除ボタンを押したとき＝＝＝＝＝＝＝＝＝＝＝＝＝＝
    newClearBtn.addEventListener("click", () => {
      //  削除しますかのメッセージをクリックしたら
      if (confirm("このページを削除しますか") === true) {
        // ローカルストレージを削除してテキストエリアを空文字に
        localStorage.removeItem(localStorage.length.toString());
        newDiv.remove();
      }
    });
    // ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
  }

  add.addEventListener("click", () => {
    addElement();
  });
}

// ここまでで複数ページの追加は一旦OK
// ストレージのキーが一種類のため、それぞれ変えたほうが良いのか確認すること
// 一つ目の内容を保存すると、保存した内容をコピーして次のメモ帳が作られる問題
//   →多分ローカルストレージのキーから引っ張ってきちゃっている
// リロードしたらメモ消える問題
// →これもキーを指定してローカルストレージに保存？

// ↓見返し用メモ

// あったらいい機能

// メモを書ける　OK
// 書いた内容を保存出来る　　OK
// 保存した内容をいつでも呼び出せる
// 書いたメモを検索で出来る
// メモのカテゴリー化
// メモの共有化　今度
// 文字数カウント

//
