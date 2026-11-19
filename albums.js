/* =========================================================
   アルバムの一覧表（albums.js）

   ・棚には、ここに書いた順番でアルバムが並びます。
   ・ファイル名は、index.html と同じ場所に置いたファイルの名前です。
     大文字・小文字も、そのとおりに書いてください。
   ・文字は " "（半角のダブルクォーテーション）で囲み、
     項目と項目の間は , （半角のカンマ）で区切ります。

   【書く項目】
     title      … アルバムの題名（ジャケットに入ります）
     jacket     … ジャケット画像のファイル名（表題曲の画像）
     titleTrack … 表題曲が何曲目か（1〜）
     titlePos   … 題名の位置  "bottom"（下）か "top"（上）
     tracks     … 曲の一覧  { title: "曲名", file: "ファイル名" }
   ========================================================= */

window.ALBUMS = [

  // ---------- 1枚目 ----------
  {
    title: "ふたりの歩いた道",
    jacket: "01-futari.jpg",
    titleTrack: 1,
    titlePos: "bottom",
    tracks: [
      { title: "ふたりの歩いた道", file: "01-futari-1.mp3" },
      { title: "おまえと2人",       file: "01-futari-2.mp3" },
      { title: "夫婦（めおと）道",   file: "01-futari-3.mp3" },
      { title: "明日咲く花",         file: "01-futari-4.mp3" },
      { title: "寄り添い花",         file: "01-futari-5.mp3" },
    ],
  },

  // ---------- 2枚目 ----------
  {
    title: "故郷の調べ",
    jacket: "02-hurusatosirabe.jpg",
    titleTrack: 1,
    titlePos: "bottom",
    tracks: [
      { title: "故郷の調べ",       file: "02-hurusatosirabe-1.mp3" },
      { title: "ふるさと相木の里", file: "02-hurusatosirabe-2.mp3" },
      { title: "相木川の四季",     file: "02-hurusatosirabe-3.mp3" },
      { title: "ふるさとの風景",   file: "02-hurusatosirabe-4.mp3" },
      { title: "日本の原風景",     file: "02-hurusatosirabe-5.mp3" },
    ],
  },

  // ---------- 3枚目 ----------
  {
    title: "ふるさとの友よ",
    jacket: "03-hurusato-tomoyo.jpg",
    titleTrack: 1,
    titlePos: "bottom",
    tracks: [
      { title: "ふるさとの友よ",   file: "03-hurusato-tomoyo-1.mp3" },
      { title: "南相木慕情",       file: "03-hurusato-tomoyo-2.mp3" },
      { title: "立原高原",         file: "03-hurusato-tomoyo-3.mp3" },
      { title: "八ヶ岳しぐれ",     file: "03-hurusato-tomoyo-4.mp3" },
      { title: "高原列車小海線",   file: "03-hurusato-tomoyo-5.mp3" },
    ],
  },

  // ---------- 4枚目（使うときは、下の行の先頭の // をすべて消してください） ----------
  // {
  //   title: "4枚目のアルバム名",
  //   jacket: "04-album.jpg",
  //   titleTrack: 1,
  //   titlePos: "bottom",
  //   tracks: [
  //     { title: "1曲目の曲名", file: "04-album-1.mp3" },
  //     { title: "2曲目の曲名", file: "04-album-2.mp3" },
  //     { title: "3曲目の曲名", file: "04-album-3.mp3" },
  //     { title: "4曲目の曲名", file: "04-album-4.mp3" },
  //     { title: "5曲目の曲名", file: "04-album-5.mp3" },
  //   ],
  // },

];
