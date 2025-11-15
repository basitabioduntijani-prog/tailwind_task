import React from "react";


function StatsBox({ value, label }) {
    return (
        <div className="border rounded-xl p-3 text-center shadow-sm">
        <h3 className="text-lg font-bold text-gray-800">{value}</h3>
        <p className="text-xs text-gray-500">{label}</p>
        </div>
);
}

export default StatsBox;
