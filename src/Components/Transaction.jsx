// import React from 'react';

const Transaction = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-slate-600 text-white">
            <th className="p-3">Name</th>
            <th className="p-3">Type</th>
            <th className="p-3">Date</th>
            <th className="p-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-gray-200">
            <td className="p-3">Olivia Brown</td>
            <td className="p-3">Deposit</td>
            <td className="p-3">12-2-24</td>
            <td className="p-3">$3000</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3">James Smith</td>
            <td className="p-3">Credit</td>
            <td className="p-3">15-2-24</td>
            <td className="p-3">$1500</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="p-3">Emily Davis</td>
            <td className="p-3">Deposit</td>
            <td className="p-3">20-2-24</td>
            <td className="p-3">$5000</td>
          </tr>
          <tr className="bg-white">
            <td className="p-3">Michael Johnson</td>
            <td className="p-3">Credit</td>
            <td className="p-3">25-2-24</td>
            <td className="p-3">$2000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
