const mentorSuggestions = {
  happy: [
    "Harika! Bu güzel enerjini başkalarına da yaymayı unutma 🌞",
    "Mutluluğunu yazıya dökmek onu kalıcı hale getirir ✍️",
    "Bugünkü mutluluğunu hatırlamak için küçük bir not al 😄"
  ],
  sad: [
    "Hüzün geçicidir, yazdıkça hafifler... 🌧️",
    "Derin nefes al, hissettiğin her şey geçecek 🍃",
    "Bir arkadaşınla duygularını paylaşmayı dene 🤝"
  ],
  angry: [
    "Sakinleşmek için birkaç derin nefes al 🧘",
    "Öfkeni yapıcı şekilde ifade etmek güçtür 💪",
    "Şu anda hissettiklerin gelip geçici, sen kontrolsüz değilsin 🔥"
  ],
  anxious: [
    "Kendine nazik ol, bu duygular normal 🫶",
    "Kaygılarını yazıya dökmek onları hafifletir 📓",
    "Şu an buradasın ve güvendesin 🕊️"
  ],
  excited: [
    "Bu enerjini yaratıcı bir işe dönüştür 💡",
    "Heyecanını paylaş, bulaşıcıdır! 🎉",
    "Yeni bir şeyler denemek için harika bir zamandasın 🚀"
  ],
  bored: [
    "Sıkıldığında hayal gücün parlar ✨",
    "Kendine yeni küçük hedefler koymayı dene 🎯",
    "Harekete geçmek için minik bir adım at 🚶"
  ],
  lonely: [
    "Yalnız hissetmek, bağ kurma ihtiyacını gösterir ❤️",
    "Birine yaz, biriyle konuş. Sesini duyur 📱",
    "Sen değerlisin ve görülmeye layıksın 🌟"
  ],
  grateful: [
    "Minnettarlık kalbin gücüdür 💖",
    "Bugün minnet duyduğun 3 şeyi yazmayı dene 📝",
    "Bu duyguyu hatırlamak için bir fotoğraf çek 📷"
  ],
  tired: [
    "Yorgunsan durmak, dinlenmek en büyük ilerlemedir 🛌",
    "Kendine iyi bakmak da üretkenliktir 🍵",
    "İç sesini dinle: Ne kadar yavaşlarsan o kadar duyarsın 🍃"
  ],
  hopeful: [
    "Umut etmek, geleceğe uzanmaktır 🌈",
    "Bugün umut dolu bir adım at 👣",
    "Işık arıyorsan, bazen sen ışık olursun ✨"
  ],
  confused: [
    "Her kafa karışıklığı yeni bir keşfin başlangıcıdır 🧭",
    "Netlik için zihnini dinle ve yaz 📝",
    "Sorular sormaktan korkma, cevaplar yoldadır 🔍"
  ]
};

export function getMentorSuggestion(emotion) {
  const suggestions = mentorSuggestions[emotion];
  if (!suggestions || suggestions.length === 0) return "Bu duygu için henüz bir öneri eklenmemiş.";

  // Rastgele öneri seç
  const randomIndex = Math.floor(Math.random() * suggestions.length);
  return suggestions[randomIndex];
}
