const emotionColors = {
  mutlu: "#F9E79F",           // pastel sarı
  sevinçli: "#FCF3CF",        // çok açık sarı
  neşeli: "#FADBD8",          // çok açık pembe
  keyifli: "#FDEBD0",         // krem
  şen: "#FCF3CF",             // açık sarı
  memnun: "#FCF3CF",

  üzgün: "#AED6F1",           // pastel mavi
  mutsuz: "#A9CCE3",          // açık mavi
  kederli: "#85C1E9",
  hüzünlü: "#D6EAF8",
  acı: "#D6DBDF",
  yalnız: "#D5DBDB",

  kızgın: "#F1948A",          // soft kırmızı-pembe
  öfkeliyim: "#EC7063",
  sinirli: "#E6B0AA",
  hırçın: "#CD6155",
  tartışmalı: "#A93226",

  endişeli: "#BB8FCE",        // pastel mor
  kaygılı: "#D2B4DE",
  gergin: "#C39BD3",
  stresli: "#BB8FCE",
  panik: "#9B59B6",

  yorgun: "#AAB7B8",          // gri-mavi tonları
  bitkin: "#85929E",
  halsiz: "#A6ACAF",
  enerjisiz: "#ABB2B9",

  "sevgi dolu": "#F5B7B1",    // pastel pembe
  aşk: "#FADBD8",
  şefkat: "#F9EBEA",
  hoşgörü: "#FDEDEC",
  merhamet: "#FADBD8",

  düşünceli: "#D7BDE2",       // açık lavanta
  dalgın: "#E8DAEF",
  derin: "#D2B4DE",
  konuşmayan: "#C39BD3",

  "kendinden emin": "#48C9B0", // soft turkuaz
  özgüven: "#76D7C4",
  "kendine güven": "#73C6B6",
  kararlı: "#45B39D",

  enerjik: "#F7DC6F",         // pastel altın sarısı
  dinamik: "#F9E79F",
  aktif: "#FAD7A0",
  coşkulu: "#FDEBD0",

  huzurlu: "#ABEBC6",         // pastel yeşil
  sakin: "#D5F5E3",
  rahat: "#A3E4D7",
  dingin: "#76D7C4",

  nötr: "#D5DBDB",            // gri
  şaşkın: "#D6DBDF",          // açık gri-mavi
  heyecanlı: "#FDEBD0",
  melankolik: "#D7DBDD",
  minnettar: "#F9E79F",
  yalnız: "#D5DBDB",
  rahat: "#D5F5E3",
  sinirli: "#E6B0AA",
  şefkatli: "#FADBD8"
};

export function getThemeColor(emotion) {
  return emotionColors[emotion] || "#D5DBDB";
}
