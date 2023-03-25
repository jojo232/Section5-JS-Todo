# 簡単なメモアプリ (JS)
# テキストボックスの値を取得し、初期化する。
- onClickAdd 変数名、アロー関数
- indexhtmlのファイルにbuttonにidを付与する。　　add-button(名称はなんでもいい)
- 先程のadd-buttonの要素にクリックイベントを付与する
- idを取得していきたい場合は、document.getElemntById使用する
- クリックイベントを付与していきたいので、addEventListener
- 今回はなんのイベントかと言うとclickイベントですね
- アロー関数でonclickAddを実行してあげる
---
- inputに対して　idを付与していく、add-textとする
- 変数として受け取りたいのでconstを使用 、IDを取得、
- 今回取得していきたいのはInputに入力された値なのでvalueを取得してあげると
- このidが持っているinputの値をこのinputtextに格納しているはずです。
---
- 追加ボタンを押した時は常に初期化しておきたい
- 先程の値を空にしてあげる　　value = "";

# div・liタグ生成
// javascriptでDOMを使うためには、　createErement関数を使用する。
// これでHTMLのDOMを使用することができる、今回生成していきたいタグはdivタグ
// javascript上でHTMLのDOMを生成することができる // javascriptの変数上に格納していく

// クラス(div class="incomplete-area")を付与する方法、
// div.className(プロパティ)
// 続いてliタグ、リストのタグを生成していきましょう。
// リストタグの中身に要素を格納していきたい時は、innerTextが使用できる
// inputTextを使用してあげる。liタグの中にinputTextが取得される思う。
