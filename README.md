# Where-To-Stream

The **Where-To-Stream** app is a web application that allows users to search for movies and find out where they are available for streaming. Built with modern technologies like **React**, **TypeScript**, **Express**, and **Tailwind CSS**, the app demonstrates efficient API integration and user-focused functionality.

---

## Key Features
- **Search for Movies**: Users can search for any movie by title.
- **Streaming Providers**: Displays a list of streaming platforms where the movie is available.
- **Detailed Information**: Provides the movie's poster, title, and release date.
- **Modern UI**: Clean and responsive design using **Tailwind CSS**.
- **Backend Proxy**: Uses an Express backend to interact with the **TMDB API**, ensuring secure API key handling.

---

## Tech Stack
- **Frontend**:
  - React with TypeScript
  - Vite for fast development
  - Tailwind CSS for styling
- **Backend**:
  - Express.js
  - TypeScript for server-side code
- **Deployment**:
  - **Frontend**: Deployed on [Vercel](https://vercel.com)
  - **Backend**: Deployed on [Render](https://render.com)
- **API Integration**:
  - **TMDB API** for fetching movie and streaming provider data.

---

## Project Structure
```
where-to-stream-app/
├── client/                     # Frontend React app
│   ├── public/                 # Static files
│   ├── src/                    # Source code
│   │   ├── components/         # React components
│   │   ├── hooks/              # Custom hooks
│   │   ├── services/           # API services
│   │   ├── types/              # TypeScript interfaces
│   │   ├── styles/             # CSS/Tailwind files
│   │   ├── App.tsx             # Main app component
│   │   └── main.tsx            # Entry point
├── server/                     # Backend Express app
│   ├── src/
│   │   ├── controllers/        # Route handlers
│   │   ├── services/           # TMDB API interaction
│   │   ├── routes/             # API routes
│   │   ├── middleware/         # Error handling
│   │   ├── index.ts            # Server entry point
│   │   └── config.ts           # Configuration and environment
├── README.md                   # Project documentation
└── package.json                # Dependencies and scripts
```

---

## How to Run Locally

### Prerequisites
- Node.js installed
- TMDB API key (Create an account at [TMDB](https://www.themoviedb.org/) to get your API key)

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

## Screenshots
### Home Page
Displays the search bar and movie results.

![Home Page](https://your-image-link.com/home-page)