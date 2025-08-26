// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import AddRecipePage from "./pages/AddRecipePage";
// import EditRecipePage from "./pages/EditRecipePage";
// import RecipeDetailPage from "./pages/RecipeDetailPage";

// function App() {
//   return (
//     <Router>
//       <Navbar />  
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/add" element={<AddRecipePage />} />
//         <Route path="/edit/:id" element={<EditRecipePage />} />
//         <Route path="/recipe/:id" element={<RecipeDetailPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import AddRecipePage from "./pages/AddRecipePage";
// import EditRecipePage from "./pages/EditRecipePage";
// import RecipeDetailPage from "./pages/RecipeDetailPage";

// function App() {
//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">
//         <Navbar />

      
//         <div className="flex-grow-1">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/add" element={<AddRecipePage />} />
//             <Route path="/edit/:id" element={<EditRecipePage />} />
//             <Route path="/recipe/:id" element={<RecipeDetailPage />} />
//           </Routes>
//         </div>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddRecipePage from "./pages/AddRecipePage";
import EditRecipePage from "./pages/EditRecipePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/edit/:id" element={<EditRecipePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
