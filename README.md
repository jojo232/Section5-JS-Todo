# 簡単なメモアプリ
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
