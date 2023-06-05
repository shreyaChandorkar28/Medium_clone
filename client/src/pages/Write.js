// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Cookies from 'js-cookie';

// // const Write = () => {
// //   const [title, setTitle] = useState('');
// //   const [subtitle, setSubTitle]= useState('');
// //   const [category, setCategory] = useState('art');
// //   const [body, setBody] = useState('');
// //   const [image, setImage] = useState(null);
// //   const [username, setUsername] = useState('');

// //   useEffect(() => {
// //     const storedUsername = Cookies.get('username');
// //     if (storedUsername) {
// //       setUsername(storedUsername);
// //     }
// //   }, []);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const formData = new FormData();
// //     formData.append('title', title);
// //     formData.append('subtitle', subtitle);
// //     formData.append('category', category);
// //     formData.append('body', body);
// //     formData.append('image', image);
// //     formData.append('createdUser', username);

// //     axios
// //       .post('http://localhost:3001/write', formData)
// //       .then((response) => {
// //         console.log('Post created successfully');
// //         setTitle('');
// //         setSubTitle('');
// //         setCategory('art');
// //         setBody('');
// //         setImage(null);
// //       })
// //       .catch((error) => {
// //         console.error('Error creating post: ', error);
// //       });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label htmlFor="title">Title:</label>
// //       <input
// //         type="text"
// //         id="title"
// //         value={title}
// //         onChange={(e) => setTitle(e.target.value)}
// //         required
// //       />

// //       <label htmlFor="title">SubTitle:</label>
// //       <input
// //         type="text"
// //         id="subtitle"
// //         value={subtitle}
// //         onChange={(e) => setSubTitle(e.target.value)}
// //         required
// //       />

// //       <label htmlFor="category">Category:</label>
// //       <select
// //         id="category"
// //         value={category}
// //         onChange={(e) => setCategory(e.target.value)}
// //       >
// //         <option value="art">Art</option>
// //         <option value="science">Science</option>
// //         <option value="technology">Technology</option>
// //         <option value="movie">Movie</option>
// //         <option value="fashion">Fashion</option>
// //         <option value="food">Food</option>
// //       </select>

// //       <label htmlFor="body">Body:</label>
// //       <textarea
// //         id="body"
// //         value={body}
// //         onChange={(e) => setBody(e.target.value)}
// //         required
// //       ></textarea>

// //       <label htmlFor="image">Image:</label>
// //       <input
// //         type="file"
// //         id="image"
// //         onChange={(e) => setImage(e.target.files[0])}
// //       />

// //       <button type="submit">Publish</button>
// //     </form>
// //   );
// // };

// // export default Write;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import './Write.css';
// import { Link } from 'react-router-dom';
// const Write = () => {
//   const [title, setTitle] = useState('');
//   const [subtitle, setSubtitle] = useState('');
//   const [category, setCategory] = useState('art');
//   const [body, setBody] = useState('');
//   const [image, setImage] = useState(null);
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const storedUsername = Cookies.get('username');
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('subtitle', subtitle);
//     formData.append('category', category);
//     formData.append('body', body);
//     formData.append('image', image);
//     formData.append('createdUser', username);

//     axios
//       .post('http://localhost:3001/write', formData)
//       .then((response) => {
//         console.log('Post created successfully');
//         setTitle('');
//         setSubtitle('');
//         setCategory('art');
//         setBody('');
//         setImage(null);
//       })
//       .catch((error) => {
//         console.error('Error creating post: ', error);
//       });
//   };

//   return (
//     <div className="write-container">
//       <Link to="/Home2" className="go-back-link">
//         Go back
//       </Link>
//       <form className="write-form" onSubmit={handleSubmit}>
//         <div className="input-group">
//           <div className="input-group-item">
//             <label htmlFor="title" className='label'>Title:</label>
//             <input
//               type="text"
//               id="title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               required
//               className='input'
//             />
//           </div>
//           <div className="input-group-item">
//             <label htmlFor="subtitle">Subtitle:</label>
//             <input
//               type="text"
//               id="subtitle"
//               value={subtitle}
//               onChange={(e) => setSubtitle(e.target.value)}
//               required
//               className='input'
//             />
//           </div>
//         </div>

//         <div className="input-group">
//           <div className="input-group-item">
//             <label htmlFor="category">Category:</label>
//             <select
//               id="category"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className='select'
//             >
//               <option value="art">Art</option>
//               <option value="science">Science</option>
//               <option value="technology">Technology</option>
//               <option value="movie">Movie</option>
//               <option value="fashion">Fashion</option>
//               <option value="food">Food</option>
//             </select>
//           </div>
//         </div>

//         <label htmlFor="body" className='label'>Body:</label>
//         <textarea
//           id="body"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}
//           required
//           rows={10}
//           className='textarea'
//         ></textarea>

//         <label htmlFor="image" className='label'>Image:</label>
//         <input
//           type="file"
//           id="image"
//           onChange={(e) => setImage(e.target.files[0])}
//           className='input'
//         />

//         <button type="submit" className='button'>Publish</button>
//       </form>
//     </div>
//   );
// };

// export default Write;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import './Write.css';
import { Link } from 'react-router-dom';

const Write = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('art');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = Cookies.get('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('subtitle', subtitle);
    formData.append('category', category);
    formData.append('body', body);
    formData.append('image', image);
    formData.append('createdUser', username);

    axios
      .post('http://localhost:3001/write', formData)
      .then((response) => {
        console.log('Post created successfully');
        setTitle('');
        setSubtitle('');
        setCategory('art');
        setBody('');
        setImage(null);
      })
      .catch((error) => {
        console.error('Error creating post: ', error);
      });
  };

  return (
    <div className="write-container">
      <form className="write-form" onSubmit={handleSubmit}>
        <Link to="/Home2" className="go-back-link">
          Go back
        </Link>
        <div className="input-group">
          <div className="input-group-item">
            <label htmlFor="title" className="label">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="input"
            />
          </div>
          <div className="input-group-item">
            <label htmlFor="subtitle">Subtitle:</label>
            <input
              type="text"
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              required
              className="input"
            />
          </div>
        </div>

        <div className="input-group">
          <div className="input-group-item">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select"
            >
              <option value="art">Art</option>
              <option value="science">Science</option>
              <option value="technology">Technology</option>
              <option value="movie">Movie</option>
              <option value="fashion">Fashion</option>
              <option value="food">Food</option>
            </select>
          </div>
        </div>

        <label htmlFor="body" className="label">
          Body:
        </label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={10}
          className="textarea"
        ></textarea>

        <label htmlFor="image" className="label">
          Image:
        </label>
        <input
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          className="input"
        />

        <button type="submit" className="button">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
