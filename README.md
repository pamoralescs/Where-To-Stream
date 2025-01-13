Here is the full README formatted and ready for copy-pasting:

---

# **Where-To-Stream**

The **Where-To-Stream** app is a full-stack web application that allows users to search for movies and find where they are available for streaming. This project demonstrates modern web development practices, including responsive design, API integration, and robust error handling.

---

## **Key Features**

- **Movie Search**: Search for movies by title with a clean and intuitive interface.
- **Streaming Providers**: See a list of streaming platforms offering the movie.
- **Detailed Movie Info**: Includes the movie's poster, runtime, certification, release date, and more.
- **Responsive Design**: Seamless experience across desktop and mobile devices, styled with **Tailwind CSS**.
- **Backend Proxy**: Secures API interactions through an Express backend.
- **Error Handling**: Provides user-friendly notifications for empty results, server delays, and other issues.
- **Server Wake-Up Notification**: Informs users when the backend server (hosted on Render) is waking up.

---

## **Tech Stack**

- **Frontend**:
  - React (TypeScript)
  - Vite for development and builds
  - Tailwind CSS for responsive design
- **Backend**:
  - Express.js (TypeScript)
  - Proxy for **TMDB API** interactions
- **Deployment**:
  - Frontend: [Vercel](https://vercel.com)
  - Backend: [Render](https://render.com)
- **API**:
  - [TMDB API](https://www.themoviedb.org/documentation/api) for movie and streaming data

---

## **Project Structure**

```
where-to-stream/
├── client/                   # Frontend
│   ├── public/               # Static files
│   ├── src/                  # Source code
│   │   ├── components/       # React components (MovieCard, SearchBar, etc.)
│   │   ├── hooks/            # Custom hooks (useFetchMovies)
│   │   ├── services/         # API service functions
│   │   ├── types/            # TypeScript interfaces for TMDB and app data
│   │   ├── App.tsx           # Main app component
│   │   └── main.tsx          # Entry point
├── server/                   # Backend
│   ├── src/
│   │   ├── controllers/      # API route handlers
│   │   ├── services/         # TMDB API logic
│   │   ├── routes/           # Express routes
│   │   ├── middleware/       # Middleware (e.g., error handling)
│   │   └── index.ts          # Server entry point
├── .gitignore                # Ignored files
├── README.md                 # Project documentation
└── package.json              # Dependencies and scripts
```

---

## **How to Run Locally**

### **Prerequisites**
- Node.js installed
- TMDB API key

### **Steps**
1. Clone the repository:
   ```bash
   git clone https://github.com/pamoralescs/where-to-stream.git
   cd where-to-stream
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:
   - Create `.env` in the `server/` directory:
     ```
     TMDB_API_KEY=your_tmdb_api_key
     PORT=3000
     ```
   - For the frontend, ensure the backend URL is set in Vite’s `.env`:
     ```
     VITE_BACKEND_URL=http://localhost:3000
     ```

4. Run the app:
   - **Backend**:
     ```bash
     cd server
     npm run dev
     ```
   - **Frontend**:
     ```bash
     cd client
     npm run dev
     ```

5. Open the app in your browser:
   ```
   http://localhost:5173
   ```

---

## **Deployment**

### **Live Demo**
- [Live on Vercel](https://wheretostream.vercel.app)

---

## **Design Highlights**

- **Certification Accuracy**: Ensures movie certifications are accurate by prioritizing US ratings when available.
- **Runtime Conversion**: Converts runtimes into hours and minutes for readability.
- **Server Wake-Up Notifications**: Informs users when the backend is waking up to minimize confusion.

---

## **Future Enhancements**
- Add user authentication for personalized movie lists.
- Allow users to filter movies by streaming provider.
- Add multi-language support for a global audience.

---

## **Screenshots**

### **Home Page**
_Search for movies, view details, and streaming platforms._

![Home Page](https://dummyimage.com/800x400/cccccc/000000&text=Home+Page)

---

## **Credits**
- **TMDB API**: [The Movie Database API](https://www.themoviedb.org/documentation/api)
- **React Icons**: For branding and design elements.

---

Feel free to modify and enhance the app further to suit your needs. 🚀
