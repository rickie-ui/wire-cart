import React, { useState } from "react";
import { currencies } from "@/constants/currencies";
import { Currency } from "@/types/global";

const CurrencyDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    currencies[0],
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCurrencySelect = (currency: Currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex w-full justify-center rounded-md px-4 text-sm"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {selectedCurrency ? selectedCurrency.code : "Select Currency"}
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform ${
            isOpen ? "rotate-180 transform" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 011.414 0 1 1 0 000 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="absolute -right-40  mt-2 w-56 origin-top-right rounded-md px-1.5 py-4 shadow-lg"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleCurrencySelect(currency)}
                className="block w-full px-4 py-2 text-left text-sm opacity-60 hover:bg-secondary hover:text-primary"
                role="menuitem"
              >
                {currency.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyDropdown;
