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
Cこのidが持っているinputの値をこのinputtextに格納しているはずです。
---
- 追加ボタンを押した時は常に初期化しておきたい
- 先程の値を空にしてあげる　　value = "";

# div・liタグ生成
- javascriptでDOMを使うためには、　createErement関数を使用する。
- これでHTMLのDOMを使用することができる、今回生成していきたいタグはdivタグ
- javascript上でHTMLのDOMを生成することができる // javascriptの変数上に格納していく
---
- クラス(div class="incomplete-area")を付与する方法、
- div.className(プロパティ)
- 続いてliタグ、リストのタグを生成していきましょう。
- リストタグの中身に要素を格納していきたい時は、innerTextが使用できる
- inputTextを使用してあげる。liタグの中にinputTextが取得される思う。

# divタグの子要素に各要素を設定、未完了リストに追加
- appedChild(別の要素を追加)を使用することができる。divタグの下に要素を入れていける
- 先程のliを入れる
- あとはulタグの下に設定してあげれば完成しそうな感じ、ulタグにも目印をつける
- divタグの中にliタグを設定する
---
- 未完了のリストに追加していく、
- いつも通り、IDを取得して、その後にappendChildで（div）を設定してあげる
