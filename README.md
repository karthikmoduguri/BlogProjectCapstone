# React Appwrite Vite Project

This project is a modern web application built using **React** and **Vite**, integrated with **Appwrite** for backend services. It demonstrates a scalable structure for building CRUD-based apps with authentication, rich text editing, file uploads, and more.

---

## Features

- **Fast Development:** Powered by Vite for instant hot module replacement and fast builds.
- **React Components:** Modular and reusable UI components.
- **Appwrite Integration:** Secure backend for authentication, database, storage, and more.
- **Rich Text Editor:** Create and edit posts with formatting using TinyMCE.
- **Image Uploads:** Upload and manage images for posts.
- **Routing:** Client-side navigation using React Router.
- **State Management:** Uses Redux for global state (e.g., user authentication).
- **Form Handling:** Uses React Hook Form for easy and validated forms.
- **Environment Variables:** Sensitive config managed via `.env` (see `.gitignore`).

---

## Getting Started

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd vite-project
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and add your Appwrite credentials:

```
VITE_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
VITE_APPWRITE_PROJECT_ID=<your-appwrite-project-id>
VITE_APPWRITE_COLLECTION_ID=<your-appwrite-collection-id>
VITE_APPWRITE_BUCKET_ID=<your-appwrite-bucket-id>
VITE_APPWRITE_DATABASE_ID=<your-appwrite-database-id>
VITE_APP_TINYMCE_API_KEY=<your-tinymce-api-key>
```

### 4. Start the Development Server

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## Project Structure

```
vite-project/
├── public/                # Static assets
├── src/
│   ├── appwrite/          # Appwrite config and service functions
│   ├── components/        # Reusable React components (RTE, PostForm, etc.)
│   ├── pages/             # Page-level components (Home, Dashboard, etc.)
│   ├── store/             # Redux store and slices
│   ├── conf/              # App configuration
│   ├── main.jsx           # App entry point
│   └── index.js           # Main JS file
├── .env                   # Environment variables (not committed)
├── .gitignore             # Files to ignore in git
├── package.json           # Project metadata and scripts
└── README.md              # Project documentation
```

---

## Usage

- **Authentication:** Sign up, log in, and manage sessions using Appwrite.
- **Create/Edit Posts:** Use the rich text editor to write posts, upload images, and set status.
- **View Posts:** Browse posts with formatted content and images.
- **Admin Features:** (If implemented) Manage users, posts, and media.

---

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/my-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Create a pull request.

---

## License

This project is licensed under the MIT License.

---

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Appwrite](https://appwrite.io/)
- [TinyMCE](https://www.tiny.cloud/)
-