# Where-To-Stream

The **Where-To-Stream** app is a web application that allows users to search for movies and find out where they are available for streaming. Built with modern technologies like **React**, **TypeScript**, **Express**, and **Tailwind CSS**, the app demonstrates efficient API integration, responsive design, and a seamless user experience.

---

## Key Features
- **Search for Movies**: Users can search for any movie by title.
- **Streaming Providers**: Displays a list of streaming platforms where the movie is available.
- **Detailed Information**: Provides the movie's poster, title, release date, and streaming availability.
- **Responsive Design**: Clean and responsive UI using **Tailwind CSS**.
- **Backend Proxy**: Utilizes an Express backend to securely interact with the **TMDB API**, ensuring sensitive API keys remain protected.
- **Error Handling**: Provides clear feedback to users for scenarios like empty search results or server wake-up delays.
- **Server Wake-Up Indicator**: Notifies users when the backend server is waking up, minimizing confusion during delays.

---

## Tech Stack
- **Frontend**:
  - React with TypeScript
  - Vite for fast development
  - Tailwind CSS for modern and responsive styling
- **Backend**:
  - Express.js
  - TypeScript for strongly-typed server-side code
- **Deployment**:
  - **Frontend**: Deployed on [Vercel](https://vercel.com)
  - **Backend**: Deployed on [Render](https://render.com)
- **API Integration**:
  - **TMDB API** for fetching movie details and streaming provider data.

---

## Project Structure
```
where-to-stream-app/
├── client/                     # Frontend React app
│   ├── public/                 # Static files
│   ├── src/                    # Source code
│   │   ├── components/         # React components (e.g., MovieCard, SearchBar, Footer)
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API service functions
│   │   ├── types/              # TypeScript interfaces for TMDB and app data
│   │   ├── styles/             # Tailwind CSS configuration and global styles
│   │   ├── App.tsx             # Main app component
│   │   └── main.tsx            # Entry point for the app
├── server/                     # Backend Express app
│   ├── src/
│   │   ├── controllers/        # Handlers for API routes
│   │   ├── services/           # Logic for interacting with the TMDB API
│   │   ├── routes/             # API route definitions
│   │   ├── middleware/         # Error handling and other middleware
│   │   ├── index.ts            # Server entry point
│   │   └── config.ts           # Configuration and environment setup
├── README.md                   # Project documentation
└── package.json                # Dependencies and scripts
```

---

## How to Run Locally

### Prerequisites
- Node.js installed
- TMDB API key (Create an account at [TMDB](https://www.themoviedb.org/) to generate your API key)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/pamoralescs/Where-To-Stream.git
   cd Where-To-Stream
   ```

2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `server/` directory and add:
     ```
     TMDB_API_KEY=your_tmdb_api_key
     PORT=3000
     ```
   - For the frontend, ensure the Vite `VITE_BACKEND_URL` points to the backend:
     ```
     VITE_BACKEND_URL=http://localhost:3000
     ```

4. Run the app:
   - Start the backend:
     ```bash
     cd server
     npm run dev
     ```
   - Start the frontend:
     ```bash
     cd client
     npm run dev
     ```

5. Open the app in your browser at:
   ```
   http://localhost:5173
   ```

---

## Deployed Application
- **Frontend**: [Live on Vercel](https://wheretostream.vercel.app)
- **Backend**: [Hosted on Render](https://where-to-stream.onrender.com)

---

## Design Decisions
1. **Server Wake-Up Notification**: If the backend server is asleep (due to hosting constraints on Render), a notification informs users that the server is waking up.
2. **"Top Results" Notification**: When displaying search results, the app informs users that only the top 10 results are shown, with guidance to refine searches for better specificity.
3. **Fallback UI**: A clean "No results found" state is displayed for empty search results or invalid queries.

---

## Screenshots
### Home Page
Displays the search bar and movie results.

![Home Page](https://your-image-link.com/home-page)

### Search Results
Responsive design showcasing movie details and streaming platforms.

![Search Results](https://your-image-link.com/search-results)

---

## Credits
- **TMDB API**: This project uses the [TMDB API](https://www.themoviedb.org/) but is not endorsed or certified by TMDB.
- **Icons**: React icons used for styling and branding.

---

### **Final Notes**
The `Where-To-Stream` app is designed to highlight my skills as a developer, showcasing clean design, modern frameworks, and thoughtful UX. Feel free to expand or modify the app to explore additional features!