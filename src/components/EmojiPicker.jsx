import React from 'react';

const emojis = [
  { emoji: '😊', label: 'Mutlu', emotion: 'mutluluk' },
  { emoji: '😢', label: 'Üzgün', emotion: 'üzüntü' },
  { emoji: '😠', label: 'Kızgın', emotion: 'öfke' },
  { emoji: '😱', label: 'Korkmuş', emotion: 'korku' },
  { emoji: '😴', label: 'Yorgun', emotion: 'yorgunluk' },
  { emoji: '😌', label: 'Rahat', emotion: 'rahatlama' },
  { emoji: '🤩', label: 'Heyecanlı', emotion: 'heyecan' },
  { emoji: '🥰', label: 'Aşık', emotion: 'aşk' },
  { emoji: '😎', label: 'Kendinden emin', emotion: 'özgüven' },
  { emoji: '😇', label: 'Huzurlu', emotion: 'huzur' },
  { emoji: '😔', label: 'Düşünceli', emotion: 'düşünce' },
  { emoji: '😤', label: 'Sıkılmış', emotion: 'sıkılma' },
  { emoji: '😕', label: 'Kararsız', emotion: 'kararsızlık' },
  { emoji: '😧', label: 'Endişeli', emotion: 'endişe' },
  { emoji: '😵', label: 'Bunalmış', emotion: 'bunalım' },
  { emoji: '🥳', label: 'Kutlama', emotion: 'kutlama' },
  { emoji: '😭', label: 'Ağlayan', emotion: 'gözyaşı' },
  { emoji: '🤯', label: 'Şaşkın', emotion: 'şaşkınlık' },
  { emoji: '🤒', label: 'Halsiz', emotion: 'halsizlik' },
  { emoji: '🫠', label: 'Erimiş', emotion: 'bitkin' },
];

export default function EmojiPicker({ selectedEmotion, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mt-4">
      {emojis.map((item, index) => (
        <button
          key={index}
          onClick={() => onSelect(item)}
          className={`text-3xl p-2 rounded transition-transform hover:scale-110 ${
            selectedEmotion?.emotion === item.emotion
              ? 'bg-yellow-100 shadow-lg'
              : 'bg-white'
          }`}
          aria-label={item.label}
        >
          {item.emoji}
        </button>
      ))}
    </div>
  );
}
