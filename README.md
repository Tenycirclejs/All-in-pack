# All-in-pack
拡張機能とTenycircle.jsを含んだパック
## 初期化方法
まずcdnで読み込んだだけではTenycircle.jsは使えません

まず、`$.init`関数を使い、

全体をこのように囲みます
```javascript
$.init(function(){
  //初期化コードをここに記述
})
```
ちなみに関数実行すると`$.init`は消えます(nullになります)

そしてこのように書くと
```javascript
$.init(function(){
  $.init().useall() //機能の全てを使うという意味
})
```
全て(拡張機能も)読み込まれます

ちなみにTenycircle.jsだけは

```javascript
$.init(function(){
  $.init().usemain() //機能のTenycircle.jsだけ使うという意味
})
```
こう書きます

ちなみに追加で`$.init().useex(拡張機能名)`で拡張機能を追加できます
