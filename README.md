# 簡単なメモアプリ (JS)

# 必要な要素
### appendChild
- appendChild()は、特定の親ノードの子ノードリストの末尾にノードを追加します。
- 親要素.appendChild(追加したい要素)という形で使われます。
- 親要素の末尾に要素が追加されなす。
- 例えばulタグにliタグを追加する場合、下記のようにulタグの末尾に追加されます。


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

# button(完了)タグの生成
- ボタンが押された時のイベント、addEventListenerで追加する、
- しかし、この場合は一つずつIDを振るわけではないので、生成する時点で割り振っておく
- appendChildにも作成した関数を記載する




- 押された削除ボタンの親タグ　　(div)を未完了リストから削除
- 今回はボタンの親要素であるdivを取得したいのでdivを取得していく
- pearentNodeで親要素を取得できる。
- どこから削除するかというと、未完了リストの配下を削除する。
- 子要素から消す場合は、removeChildが利用可能。

# 未完了リストから指定の要素を削除
- targetを引数として受ける、渡されたtargetを未完了リストから削除する
- 似たような未完了を処理する関数が出てたので指定の要素削除するTODOが出てきたのでその部分を
- 共通化して関数にまとめた

# 完了リストに追加する要素
- まずは完了ボタンの親要素を取得するのでparentNode
- list-row(親)、li(子)のテキストの{todoです}を取得する
- const text = addTarget.firestElmentChild(一番最初の要素).innerNode; // innerTextでli(子)の中の要素が取得できるバズです。

- TODO内容テキストを取得
- div以下は削除してdivだけを使い回したい　（div以下を初期化する）

# liタグの生成
- buttonタグ生成(戻すボタン)
- divタグの子要素に各要素を設定

- 完了リストに追加 doucument.getElementById("complete-list").appendChild(addTarget);

- 戻るボタンにイベントを付与していきます。
- backbuttonにイベントを付与する場合は、addEventlistener()

- 押された戻すボタンの親タグ(div)を完了リストから削除

- 完了機能の時と同じようにテキストを取得していく
- 未完了リストに追加する関数


# タスク追加機能　
import "./styles.css";</br>

//テクストボックスの値を取得し、初期化する。</br>

//dev生成</br>

//liタグ生成</br>

//divタグの子要素に各要素を設定する</br>

// 未完了リストに追加</br>

//buttonクリック処理</br>

