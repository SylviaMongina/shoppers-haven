import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
// import React from 'react';
// import { useHistory } from 'react-router-dom';

// function Navbar() {
//   const history = useHistory();

//   const handleLoginClick = () => {
//     history.push('/login');
//   };

//   return (
//     <nav>
//       <ul>
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a onClick={handleLoginClick}>Login</a></li>
//         <li><a href="/signup">Sign Up</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

