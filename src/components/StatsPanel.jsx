
import React, { useMemo } from 'react';

const StatsPanel = ({ entries }) => {
  // Duygu dağılımı için sayım
  const emotionCounts = useMemo(() => {
    const counts = {};
    entries.forEach(entry => {
      counts[entry.emotion] = (counts[entry.emotion] || 0) + 1;
    });
    return counts;
  }, [entries]);

  // Yazma sıklığı - tarih bazında kaç günlük giriş yapılmış
  const writingDays = useMemo(() => {
    const uniqueDates = new Set(entries.map(entry => entry.date));
    return uniqueDates.size;
  }, [entries]);

  // Toplam kayıt sayısı
  const totalEntries = entries.length;

  // Duygu renkleri ve emojiler (İstersen EmotionDiary'den import edilebilir)
  const emotionMeta = {
    mutlu: { color: '#FBBF24', emoji: '😊' },
    üzgün: { color: '#3B82F6', emoji: '😢' },
    kızgın: { color: '#EF4444', emoji: '😡' },
    endişeli: { color: '#8B5CF6', emoji: '😰' },
    yorgun: { color: '#6B7280', emoji: '😴' },
    'sevgi dolu': { color: '#EC4899', emoji: '🥰' },
    düşünceli: { color: '#14B8A6', emoji: '🤔' },
    'kendinden emin': { color: '#22C55E', emoji: '😎' },
    aşık: { color: '#F43F5E', emoji: '😍' },
    enerjik: { color: '#F97316', emoji: '⚡' },
    huzurlu: { color: '#34D399', emoji: '🧘' },
    yalnız: { color: '#94A3B8', emoji: '😔' },
    sinirli: { color: '#EF4444', emoji: '🤬' },
    şefkatli: { color: '#FBBF24', emoji: '🤗' },
    rahat: { color: '#6366F1', emoji: '😌' },
    heyecanlı: { color: '#A855F7', emoji: '🥳' },
    melankolik: { color: '#6366F1', emoji: '😪' },
    şaşkın: { color: '#22D3EE', emoji: '🤯' },
    minnettar: { color: '#FCD34D', emoji: '😇' },
    tutkulu: { color: '#F87171', emoji: '🔥' }
  };

  return (
    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mt-6 max-w-4xl mx-auto shadow-lg">
      <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Kalam, cursive' }}>
        📊 İstatistik Paneli
      </h2>
      <div className="mb-4">
        <strong>Toplam Günlük Giriş Sayısı:</strong> {totalEntries}
      </div>
      <div className="mb-4">
        <strong>Farklı Günlerde Yazılan Gün Sayısı:</strong> {writingDays}
      </div>

      <div>
        <strong>Duygu Dağılımı:</strong>
        <ul className="mt-2 space-y-2 max-h-48 overflow-y-auto">
          {Object.entries(emotionCounts).length === 0 && (
            <li className="text-gray-500 italic">Henüz kayıt yok.</li>
          )}
          {Object.entries(emotionCounts).map(([emotion, count]) => {
            const meta = emotionMeta[emotion] || { color: '#888', emoji: '❓' };
            const percentage = ((count / totalEntries) * 100).toFixed(1);
            return (
              <li key={emotion} className="flex items-center justify-between">
                <span className="flex items-center space-x-2">
                  <span style={{ fontSize: '1.5rem' }}>{meta.emoji}</span>
                  <span>{emotion.charAt(0).toUpperCase() + emotion.slice(1)}</span>
                </span>
                <span style={{ color: meta.color, fontWeight: '600' }}>
                  {count} ({percentage}%)
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default StatsPanel;


const StatsPanel = ({ stats }) => {
  if (!stats) return null;

  const { totalEntries, wordCount, emotionStats } = stats;

  return (
    <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200 mt-6">
      <h2 className="text-xl font-semibold mb-4">📊 Writing Statistics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Total Entries</div>
          <div className="text-2xl font-bold">{totalEntries}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Total Words</div>
          <div className="text-2xl font-bold">{wordCount}</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="text-sm text-gray-500">Most Frequent Emotion</div>
          <div className="text-2xl font-bold">
            {emotionStats.mostFrequent.emoji} {emotionStats.mostFrequent.name}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Emotion Distribution</h3>
        <div className="flex flex-wrap gap-2">
          {emotionStats.distribution.map((emo, idx) => (
            <div
              key={idx}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center space-x-1"
            >
              <span>{emo.emoji}</span>
              <span>{emo.name}</span>
              <span className="text-xs text-gray-600">({emo.count})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
import React from 'react';

const StatsPanel = ({ stats }) => {
  if (!stats) return null;

  return (
    <div className="bg-white p-4 rounded-2xl shadow-lg mt-4 text-sm">
      <h2 className="text-lg font-semibold mb-2">📊 Yazı İstatistikleri</h2>
      <ul className="space-y-1">
        <li>🗓️ Toplam Günlük Sayısı: {stats.totalEntries}</li>
        <li>📈 Ortalama Kelime Sayısı: {stats.averageWords}</li>
        <li>😊 En Sık Görülen Duygu: {stats.mostCommonEmotion}</li>
        <li>📅 En Aktif Gün: {stats.mostActiveDay}</li>
      </ul>
    </div>
  );
};

export default StatsPanel;


