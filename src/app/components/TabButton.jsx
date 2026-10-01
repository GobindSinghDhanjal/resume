import React from "react";
const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={selectTab}
      className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 sm:px-4 sm:text-base ${
        active
          ? "bg-gradient-to-r from-purple-500/20 to-cyan-400/10 text-white shadow-sm ring-1 ring-purple-300/20"
          : "text-gray-400 hover:bg-white/5 hover:text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
