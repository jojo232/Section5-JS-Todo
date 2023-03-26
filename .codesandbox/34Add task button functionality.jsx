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
  
------------------------------------------------------------------------------------------------------------------------------------------------------------
##　34.タスクの追加機能(ボタン)

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

------------------------------------------------------------------------------------------------------------------------------------------------------------
## 35.タスクの削除機能  

// 押された削除ボタンの親タグ(div)を未完了リストから削除

  const deleteTarget = deleteButton.parentNode;
  document.getElementById("incomplete-list").removeChild(deleteTarget);


---------------------------------------------------------------------------
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

    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
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
---------------------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------------------------------------------

// 押された完了ボタンの親タグ(div)を未完了リストから削除

// 未完了リストから指定の要素を削除


  // button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    /// TODO内容のテキストを取得
    deleteFromIncompleteList(completeButton.parentNode);

------------------------------------------------------------------------------------------------------------------------------------------------
    
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
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    /// TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContet = null;
    console.log(addTarget);

    //li　タグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグ生成
    const backButton = document.getElementById("button");
    backButton.innerText = "戻す";

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //　完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//buttonクリック処理
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

  ------------------------------------------------------------------------------------------------------------------------------------------------
  
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

    //　完了リストに追加する要素

    //TODO内容にテキスト取得

    // div以下を初期化

    // liタグを生成


    // buttonタグを生成


    //divタグの子要素に各要素を設定する


    //完了リストに登録
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
  });

  //divタグの子要素に各要素を設定する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

//要素結合

//buttonクリック処理
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

  ------------------------------------------------------------------------------------------------------------------------------------------------

    
        // buttonタグを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得していきたい
      const text = backButton.parentNode.firstElementChild.innerText;
    });

  ------------------------------------------------------------------------------------------------------------------------------------------------

        //押された戻すボタンの親タグ(div)を完了リストから削除

        //テキスト取得していきたい
