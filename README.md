# 課題4 -メモ帳アプリ-

## 紹介と使い方
  - その日の食べたもの、食べた時間と糖質を記録するアプリ
  - 糖質を取りすぎていると、アラートが出ます

## 工夫した点
  - 「食べ物」と「糖質」の２つの情報を持たせたこと
  - 一定以上の値だとアラートが出るようにしたこと

## 苦戦した点（解決済み）
  - LocalStorageのValueに複数の情報を入れること。またその情報を取り出すこと
  - 入れ方：JSON形式の理解。文字列にしたときに何ができて何ができないのか？を理解して進めること
  - 取り出し方：配列の取り出し方を使う必要がある、ということが分かるまでに時間を要した

## 苦戦した点（未解決）
  - LocalStorageの合計を計算するには？
  - LocalStorageの情報を数値として取得してif文を書くことまではできた
  - しかし、いますべて入っている情報を全て足し上げて、分岐させたいときのやり方、それをfor文で活用するやり方がまだ理解できていない

## 参考にした web サイトなど
  - https://kasumiblog.org/javascript-local-storage-array-save/
  - https://www.sejuku.net/blog/79079
  - 違う言語だがこちらのHPで意味を理解
