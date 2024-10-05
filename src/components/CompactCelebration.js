import React from 'react';

const CompactCelebration = ({ rewards, onClose }) => {
    return (
        <div className="fixed bottom-10 right-10 bg-white p-4 rounded-lg shadow-lg z-50 flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 text-green-700">Rewards Unlocked!</h3>
            <ul>
                {rewards.map((reward, index) => (
                    <li key={index} className="text-lg text-gray-800">
                        {reward}
                    </li>
                ))}
            </ul>

            <button
                onClick={onClose}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            >
                Close
            </button>
        </div>
    );
};

export default CompactCelebration;
