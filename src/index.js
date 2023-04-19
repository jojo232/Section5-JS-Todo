import "./styles.css";

---------------------------------------------------------------------------------------
const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
// このコードは、特定のボタンがクリックされたときに、入力されたテキストを取得し、未完了のリストにアイテムを追加する関数の一部です。
// 具体的には、以下のように機能します。

// 1. 「add-text」というIDを持つ入力フィールドの値を取得します。
// 2. 入力フィールドの値を空の文字列に設定します（次の入力のため）。
// 3. createIncompleteList関数を呼び出し、入力されたテキストを渡します。

<input type="text" id="add-text">
<button onclick="onClickAdd()">Add</button>

// 上記のHTMLコードでは、入力フィールドにIDが「add-text」に設定されており、ボタンには「onClickAdd」関数がクリックイベントにバインドされています。
// この関数は、上記のJavaScriptコードで定義されているものです。
---------------------------------------------------------------------------------------

 
---------------------------------------------------------------------------------------
// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// target = 削除するノード(今回の場合だとincomplete-list)
// 具体的には、以下のように機能します。

// 1. 引数として渡されたtargetは、削除する要素のDOMノードです。
// 2. 「incomplete-list」というIDを持つ親要素から、引数で渡されたターゲット要素を削除します。

<ul id="incomplete-list">
  <li>...</li>
  <li>...</li>
  <li>...</li>
</ul>

// 上記のHTMLコードでは、ul要素にIDが「incomplete-list」に設定されており、それぞれのli要素が未完了のリストアイテムです。
// この関数は、指定されたli要素を削除するために使用されます。
---------------------------------------------------------------------------------------

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)タグの生成
  const conmpleteButton = document.createElement("button");
  conmpleteButton.innerText = "完了";
  conmpleteButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = conmpleteButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // divの以下の初期化
    addTarget.textContent = null;

    // liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //　テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(conmpleteButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
