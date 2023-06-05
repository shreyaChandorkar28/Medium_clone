// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import moment from 'moment';
// import Navbar from '../components/Navbar';
// import Cookies from 'js-cookie';
// import './Home2.css';
// import Footer from '../components/Footer/Footer.js';

// const Home2 = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const storedUsername = Cookies.get('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   useEffect(() => {
//     // Fetch the blogs from the backend API
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/home2'); // Replace with your API endpoint
//         setBlogs(response.data);
//       } catch (error) {
//         console.error('Error fetching blogs:', error);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       {/* <p>Welcome {username}</p> */}
//       <br />
//       <br />
//       <div className="home">
//         <div className="posts">
//           {blogs.map((blog) => (
//             <div key={blog.id} className="post">
//               <img
//                 src={`http://localhost:3001/uploads/${blog.img}`}
//                 alt={blog.title}
//                 className="img"
//                 style={{ width: '300px', height: '300px' }}
//               />
//               <div className="content2">
//                 <h2>{blog.title}</h2>
//                 <br />
//                 <button className="category">{blog.category}</button>
//                 <br />
//                 <p>{blog.subtitle}</p>
//                 <br />
//                 <p>Author: {blog.createdUser}</p>
//                 <br />
//                 <p>Time: {moment(blog.timeCreated).format('MMMM Do YYYY, h:mm:ss a')}</p>
//                 <br />
//                 <a href={`/blogs/${blog.id}`} className="link">
//                   <button className="btnlink">Read</button>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <br />
//       <br />
//       <Footer />
//     </div>
//   );
// };

// export default Home2;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import Navbar from '../components/Navbar';
import Cookies from 'js-cookie';
import './Home2.css';
import Footer from '../components/Footer/Footer.js';

const Home2 = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  useEffect(() => {
    // Fetch the blogs from the backend API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:3001/blogs', {
          params: { searchTerm },
        }); // Replace with your API endpoint
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [searchTerm]);

  const handleSearch = () => {
    // Trigger the fetchBlogs effect to perform the search
    setSearchTerm(searchTerm);
  };

  return (
    <div>
      <Navbar />
      {/* <p>Welcome {username}</p> */}
      <br />
      <br />
      <div className="home4">
        <div className="search">
          <input
            type="text"
            placeholder="Search by author or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="posts4">
          {blogs.map((blog) => (
            <div key={blog.id} className="post4">
              <img
                src={`http://localhost:3001/uploads/${blog.img}`}
                alt={blog.title}
                className="img4"
                style={{ width: '300px', height: '300px' }}
              />
              <div className="content4">
                <h2>{blog.title}</h2>
                <br />
                <button className="category">{blog.category}</button>
                <br /><br/>
                <p>{blog.subtitle}</p>
                <br />
                <p>Author: {blog.createdUser}</p>
                <br />
                <p>Time: {moment(blog.timeCreated).format('MMMM Do YYYY, h:mm:ss a')}</p>
                <br />
                <a href={`/blogs/${blog.id}`} className="link">
                  <button className="btnlink">Read</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home2;


