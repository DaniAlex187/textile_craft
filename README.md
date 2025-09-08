# 1. Create a new GitHub repository 
# 2. Setting up the server (backend) with TypeScript, Express and Mongoose
- cd server
- npm init -y
- npm install express mongoose cors dotenv
- npm install --save-dev typescript ts-node @types/node @types/express @types/cors
- npx tsc --init

# 3. Setting up the client (frontend) with React and TypeScript
- cd ../client
- npx create-react-app . --template typescript
- npm install axios react-router-dom @types/react-router-dom

# 3. Creating basic file structure in client (frontend)
- mkdir src/components
- mkdir src/pages
- mkdir src/assets

# 4. Adding Navbar, Body, Footer components 
# src/components/Navbar.tsx
# src/components/Footer.tsx
# src/pages/Home.tsx
# src/pages/Contact.tsx

- in server directory i run:
npm install --save-dev @types/express @types/cors
- in tsconfig.json "types" it must contain node, express, cors and will look like this
  "module": "nodenext",
  "target": "esnext",
  "types": ["node", "express", "cors"],

next command:
npm install express cors

- package.json must look like this so it can run
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "index.js",

Frontend

- in App.tsx i've added 
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        // handle response from backend
        console.log(response.data);
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  }, []);

...this helps to make the connection (fronend to backend)

# .// To keep the "product cards" sections always centered in the row—no matter how many there are (1, 2, 3, 4, etc) i modify the CSS style from the ProductList.tsx file

...and it looks like this: <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>

return (
    <div>
      <h2 style={{ fontWeight: "bold" }}>Products</h2>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
        {products.map((product, idx) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "1rem",
              width: "220px",
              background: "white",
              boxSizing: "border-box",
            }}

