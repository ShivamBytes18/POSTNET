# 🚀 PostNet - Social Media Platform

PostNet is a full-stack social media application built using the MERN stack. Users can register, log in, create posts with images, like posts, comment on posts, and interact with content in a modern responsive interface.

## 📌 Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Secure Password Hashing

### Posts

* Create Posts
* Upload Images
* View Public Feed
* Delete Own Posts

### Social Interactions

* Like / Unlike Posts
* Add Comments
* View Like Count
* View Comment Count
* Display Username with Posts and Comments

### UI & UX

* Responsive Design
* Mobile Friendly Interface
* Modern Navbar
* User Initial Avatar
* Password Show/Hide Toggle
* Error Handling

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* React Icons
* CSS3

### Backend

* Node.js
* Express.js
* JWT Authentication
* Multer

### Database

* MongoDB
* Mongoose

### Cloud Storage

* Cloudinary

---

## 📂 Project Structure

```bash
Postnet/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/postnet.git

cd postnet
```

---

### Backend Setup

```bash
cd Backend

npm install
```

Create `.env`

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

ACCESS_TOKEN_SECRET=your_access_secret

REFRESH_TOKEN_SECRET=your_refresh_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

Start Backend

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd Frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:8000/api/v1
```

Start Frontend

```bash
npm run dev
```

---

## 📸 Screenshots

### Login Page

Add screenshot here

### Signup Page

Add screenshot here

### Home Feed

Add screenshot here

### Create Post

Add screenshot here

---

## 🔗 API Endpoints

### Authentication

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout
GET  /api/v1/auth/me
```

### Posts

```http
POST   /api/v1/posts/create
GET    /api/v1/posts/feed
PUT    /api/v1/posts/:postId/like
POST   /api/v1/posts/:postId/comment
DELETE /api/v1/posts/:postId
```

---

## 🚀 Deployment

### Frontend

Vercel

### Backend

Render

### Database

MongoDB Atlas

### Media Storage

Cloudinary

---

## 🎯 Future Enhancements

* User Profiles
* Follow / Unfollow System
* Real-Time Notifications
* Search Functionality
* Dark Mode
* Infinite Scrolling
* Real-Time Chat

---

## 👨‍💻 Author

**Shivam Upadhyay**

B.Tech Student | Full Stack Developer

GitHub: https://github.com/your-github-username

LinkedIn: https://linkedin.com/in/your-linkedin-profile

---

## 📄 License

This project is developed for educational and learning purposes.
