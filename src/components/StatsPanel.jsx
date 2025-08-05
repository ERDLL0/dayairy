import React from 'react';

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
