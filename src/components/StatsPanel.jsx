
import React, { useMemo } from 'react';

const StatsPanel = ({ entries, stats }) => {
  const emotionCounts = useMemo(() => {
    const counts = {};
    entries.forEach(entry => {
      counts[entry.emotion] = (counts[entry.emotion] || 0) + 1;
    });
    return counts;
  }, [entries]);

  const writingDays = useMemo(() => {
    const uniqueDates = new Set(entries.map(entry => entry.date));
    return uniqueDates.size;
  }, [entries]);

  const totalEntries = entries.length;

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
    <div className="space-y-6">
      {/* Genel Giriş ve Yazım Sayısı Paneli */}
      <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200 mt-6">
        <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Kalam, cursive' }}>
          📘 Günlük Kayıt İstatistikleri
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">Toplam Kayıt</div>
            <div className="text-2xl font-bold">{totalEntries}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">Yazılan Gün Sayısı</div>
            <div className="text-2xl font-bold">{writingDays}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500">En Sık Görülen Duygu</div>
            <div className="text-2xl font-bold">
              {stats?.emotionStats?.mostFrequent?.emoji} {stats?.emotionStats?.mostFrequent?.name}
            </div>
          </div>
        </div>
      </div>

      {/* Duygu Dağılımı Paneli */}
      <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto shadow-lg">
        <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Kalam, cursive' }}>
          🎭 Duygu Dağılımı
        </h2>
        <ul className="space-y-2 max-h-64 overflow-y-auto">
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
