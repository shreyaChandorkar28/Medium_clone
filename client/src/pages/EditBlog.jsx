// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import './EditBlog.css';
// import Navbar from '../components/Navbar.js';
// function EditBlog() {
//   const { id } = useParams();
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubTitle]= useState("");
//   const [body, setBody] = useState("");
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     fetchBlogData();
//   }, []);

//   // Fetch the existing blog data
//   const fetchBlogData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/blogs/${id}`);
//       const { title,subtitle, body } = response.data;
//       setTitle(title);
//       setSubTitle(subtitle);
//       setBody(body);
//     } catch (error) {
//       console.error("Error fetching blog data:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("subtitle", subtitle);
//     formData.append("body", body);
//     if (image) {
//       formData.append("image", image);
//     }

//     try {
//       await axios.put(`http://localhost:3001/blogs/${id}`, formData);
//       // Handle success or redirect to the updated blog post
//     } catch (error) {
//       console.error("Error editing blog post:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar/>
//       <br/><br/>
//       <h1>Edit Blog</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Title:
//           <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           SubTitle:
//           <input type="text" value={subtitle} onChange={(e) => setSubTitle(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Body:
//           <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
//         </label>
//         <br />
//         <label>
//           Image:
//           <input type="file" onChange={(e) => setImage(e.target.files[0])} />
//         </label>
//         <br />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// }

// export default EditBlog;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./EditBlog.css";
import Navbar from "../components/Navbar.js";
import Footer from '../components/Footer/Footer.js';
function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchBlogData();
  }, []);

  // Fetch the existing blog data
  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/blogs/${id}`);
      const { title, subtitle, body } = response.data;
      setTitle(title);
      setSubtitle(subtitle);
      setBody(body);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("body", body);
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(`http://localhost:3001/blogs/${id}`, formData);
      // Handle success or redirect to the updated blog post
    } catch (error) {
      console.error("Error editing blog post:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <br/><br/>
    <div className="edit-blog-container">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="edit-label">Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="edit-input" />
        </div>
        <div className="form-group">
          <label className="edit-label">Subtitle:</label>
          <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} className="edit-input" />
        </div>
        <div className="form-group">
          <label className="edit-label">Body:</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)} className="edit-textarea"></textarea>
        </div>
        <div className="form-group">
          <label className="edit-label">Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} className="edit-input" />
        </div>
        <button type="submit" className="edit-btn">Update</button>
      </form>
    </div>
    <br/><br/>
    <Footer/>
    </div>
  );
}

export default EditBlog;
