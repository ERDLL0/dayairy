import React from 'react';

const HistoryCards = ({ history }) => {
  if (!history || history.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 italic">
        No past entries yet...
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2">📚 Past Entries</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {history.map((entry, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">{entry.date}</span>
              <span className="text-2xl">{entry.emoji}</span>
            </div>
            <p className="text-gray-800 line-clamp-4">{entry.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryCards;
