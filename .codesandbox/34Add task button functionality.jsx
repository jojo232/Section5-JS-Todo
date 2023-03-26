## 33.タスクの追加機能(テキスト)

import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //テクストボックスの値を取得し、初期化する。

  //dev生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //divタグの子要素に各要素を設定する
  div.appendChild(li);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//buttonクリック処理
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd())
  
##　33.タスクの追加機能(ボタン)
import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //テクストボックスの値を取得し、初期化する。

  //dev生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  //divタグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//buttonクリック処理
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());