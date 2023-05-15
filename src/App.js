import React, { useState } from 'react';
import './App.css';


function App() {
  const [formData, setFormData] = useState({ Username: '', Useremail: '',Password:'' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(formData);
  };

  return (
    <div className="App">
      
      
        <main id="main-holder">
        <div className="header-container">
          <h1 id="signin-header">SignIn</h1>

          <div className="image-container">
        <img
            src="https://th.bing.com/th/id/R.7eafaa088b425eb078a54ffed1fe058d?rik=XjVXyFKRbAojxA&pid=ImgRaw&r=0"
            alt="Metro Bus App"
            style={{ float: 'right', width: '450px', height: '500px' }}
          />
      </div>
      </div>
          
          <form id="Sign In-form" onSubmit={handleSubmit}>
          <div className="input-group"> 
          
            <input
              type="text"
              name="Username"
              id="username-field"
              value = {formData.Username}
              onChange={handleInputChange}
              className="Sign In-form-field"
              placeholder="Username"
            />
            </div>
            <div className="input-group"> 
           
            <input
              type="text"
              name="Useremail"
              id="useremail-field"
              value={formData.Useremail}
              onChange={handleInputChange}
              className="Sign In-form-field"
              placeholder="Email"
            />
            </div>
            <div className="input-group"> 
            <input
              type="password"
              name="Password"
              id="password-field"
              value={formData.password} 
              onChange={handleInputChange}
              className="Sign In-form-field"
              placeholder="Password"
            />
            </div>
            <div className="input-group"> 
            <button
              type="submit"
              id="signin-form-submit">
                SignIn
            </button>
            
            </div>
          </form>
        </main>
      
   
    </div>
  );

  }
export default App;
