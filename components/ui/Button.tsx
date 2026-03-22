import React from "react";

// Bouton réutilisable avec un style "light" professionnel
interface ButtonWp {
  children: React.ReactNode;
  isDefault?: boolean;
}

// 2. Le composant
export function Button({ children, isDefault = true }: ButtonWp) {
  // Utilisation de 'border-gray-300' pour un effet "light" professionnel
  const defaultStyle = "bg-white border border-gray-300 text-gray-800 hover:border-black hover:bg-gray-50";
  const primaryStyle = "bg-blue-600 text-white hover:bg-blue-700";
  const style = isDefault ? defaultStyle : primaryStyle;

  return (
    <button className={`px-6 py-2 rounded-lg transition-all duration-200 ${style}`}>
      {children}
    </button>
  );
}