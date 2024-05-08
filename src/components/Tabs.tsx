import React, { useState } from 'react';
import BorrowTabContent from './BorrowTabContent';
import InvestTabContent from './InvestTabContent';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Borrow' | 'Invest'>('Borrow');

  return (
    <section className="w-4/5 bg-white p-6 rounded-lg shadow-lg border-0 animate__animated animate__zoomIn">
    {/* Tab Headers */}
    <div className="flex items-center mb-4 justify-center">
      <button
        className={`px-8 py-2 rounded-xl ${
          activeTab === 'Borrow' ? 'bg-[#056f7f] text-white' : 'bg-gray-100 text-gray-500'
        }`}
        onClick={() => setActiveTab('Borrow')}
      >
        Borrow
      </button>
      <button
        className={`ml-2 px-8 py-2 rounded-xl ${
          activeTab === 'Invest' ? 'bg-[#10d480] text-white' : 'bg-gray-100 text-gray-500'
        }`}
        onClick={() => setActiveTab('Invest')}
      >
        Invest
      </button>
    </div>

    {/* Tab Content */}
    <div className=" p-4 bg-white">
      {activeTab === 'Borrow' ? (
        <BorrowTabContent />
      ) : (
        <InvestTabContent />
      )}
    </div>
  </section>
  );
};

export default Tabs;