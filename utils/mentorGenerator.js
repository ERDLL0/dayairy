const mentorData = {
  mutlu: [
    "Harika hissediyorsun! Bu enerjiyi etrafındakilere yaymaya devam et.",
    "Pozitif düşünceler başarıya götürür, aynen böyle devam!",
  ],
  üzgün: [
    "Üzgün hissetmek normal. Kendine nazik davran ve zamanla iyileşeceksin.",
    "Duygularını ifade etmek iyileştirir, istersen bir günlük tutmaya devam et.",
  ],
  kızgın: [
    "Kızgınlık güçlü bir duygudur, derin nefes al ve sakinleşmeye odaklan.",
    "Enerjini yapıcı bir şeye yönlendirerek rahatlayabilirsin.",
  ],
  endişeli: [
    "Endişelerini yazmak onları hafifletebilir, bugün sakin kalmaya odaklan.",
    "Küçük adımlar büyük fark yaratır, her şey yoluna girecek.",
  ],
  yorgun: [
    "Dinlenmek ve kendine zaman ayırmak sağlığın için çok önemli.",
    "Enerjini yenilemek için sevdiğin şeyleri yapmayı unutma.",
  ],
  "sevgi dolu": [
    "Sevgi dolu hissetmek hayatın en güzel duygularından biri, paylaşmaya devam et!",
    "Sevgiyle dolu anların seni güçlendirsin.",
  ],
  düşünceli: [
    "Düşüncelerinle barışık olmak büyümenin işaretidir, kendine zaman ver.",
    "Yeni fikirler ve farkındalıklar için bu dönemi iyi değerlendir.",
  ],
  "kendinden emin": [
    "Özgüvenin seni başarıya götürür, bunu her zaman hatırla!",
    "Kendine inandıkça sınırların kalkar.",
  ],
  aşık: [
    "Kalbinin sesini dinlemeye devam et, sevgi her zaman iyileştirir.",
    "Aşk seni motive eden en güzel güçlerden biridir.",
  ],
  enerjik: [
    "Enerjinle çevreni aydınlatıyorsun, harika hissediyorsun!",
    "Bu enerjiyi yaratıcı işlere kanalize etmek harika olur.",
  ],
  huzurlu: [
    "Sakinlik ve huzur, ruhunun ihtiyaç duyduğu en güzel şeylerdir.",
    "Bu anın tadını çıkar ve kendine iyi davran.",
  ],
  yalnız: [
    "Yalnızlık bazen kendini keşfetmek için fırsattır, kendinle vakit geçir.",
    "İçsel gücünü keşfetmeye devam et, sen değerli ve önemlisin.",
  ],
  sinirli: [
    "Sinirlerini kontrol etmek seni güçlü kılar, derin nefes al.",
    "Olumsuz enerjiyi pozitife çevirmek için bir fırsat olarak gör.",
  ],
  şefkatli: [
    "Şefkat göstermek kalplerin en güzel bağını kurar.",
    "Bu duygunu çevrene yay ve dünyayı güzelleştir.",
  ],
  rahat: [
    "Rahatlamak, zihnini yenilemenin anahtarıdır, kendine izin ver.",
    "Sakin ve huzurlu anların çoğalsın.",
  ],
  heyecanlı: [
    "Heyecan yeni maceralara kapı açar, bu enerjiyi iyi kullan!",
    "Pozitif heyecan motivasyonunu artırır.",
  ],
  melankolik: [
    "Melankoli bazen iç dünyanı anlaman için bir çağrıdır.",
    "Kendine şefkat göster ve duygularına zaman tanı.",
  ],
  şaşkın: [
    "Yeni deneyimler kafa karıştırabilir, ama bu büyümenin işaretidir.",
    "Merakla keşfetmeye devam et.",
  ],
  minnettar: [
    "Minnettarlık hayatı güzelleştirir, teşekkür etmeyi unutma.",
    "Pozitif düşüncelerini çoğaltmaya devam et.",
  ],
  tutkulu: [
    "Tutkun seni zirveye taşır, bunu asla kaybetme.",
    "Sevdiğin şeylerin peşinden gitmek sana güç verir.",
  ]
};

export function getMentorMessage(emotion) {
  const messages = mentorData[emotion];
  if (!messages) return "Bugün nasıl hissettiğini paylaştığın için teşekkürler. Kendine iyi bak!";
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}
