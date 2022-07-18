// import React from "react";

// function Header({ isDarkMode, onDarkModeClick }) {
//     const onDarkModeClick =() => {
//         <Header onDarkModeClick={onDarkModeClick} />;
//   return (
//     <header>
//       <h2>Shopster</h2>
//       <button onClick={onDarkModeClick}>
//         {isDarkMode ? "Dark" : "Light"} Mode
//       </button>
//     </header>
//   );
// }

// export default Header;

import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;