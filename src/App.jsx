

import React from "react";
import CardList from "./components/CardList";
import "./App.css"; // Add some styling

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>Netflix Series</h1>
      <CardList />
    <p style={{textAlign:'center'}}>© 2025 Netflix India - Krishna Shukla All Rights Reserved.</p>
    </div>
  )
  
}

export default App;


/* 
You now have Netflix-style series cards with:
✅ Title
✅ Rating
✅ Summary
✅ Genre
✅ Release Year
✅ Watch Now Button
-----------------------------------
 Features of This Design
💎 Glassmorphism effect (modern transparent look with blur)

🔵 Cool neon blue & cyan colors (futuristic Netflix style)

🌠 Soft glow hover effect (feels high-tech)

🖼️ High-quality image presentation

📱 Fully responsive for mobile users
--------------------------------
Now, all "Watch Now" buttons will take the user to Netflix's main page (https://www.netflix.com/) instead of specific movie links.
✅ The target="_blank" opens Netflix in a new tab.
✅ The rel="noopener noreferrer" improves security when opening external links.

💡 Run your project (npm start) and test the button! 🚀 */

