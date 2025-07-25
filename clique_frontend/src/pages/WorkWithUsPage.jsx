import React, {useState} from 'react';
import './WorkWithUsPage.css';
import {useNavigate} from 'react-router-dom';
import {ArrowLeft} from 'lucide-react';

function WorkWithUsPage() {
  const navigate=useNavigate();
  const [forminfo, setforminfo]=useState({
    name:'',
    email:'',
    role:'',
    motivation:''
 });

  const [submitted, setsubmitted]=useState(false);
  const [error, seterror]=useState(null);

  const handlechange=(e)=> {
    const {name, value}=e.target;
    setforminfo((prev)=> ({...prev, [name]:value}));
 };

  const handlesubmit=(e)=> {
    e.preventDefault();
    if (Object.values(forminfo).some((field)=> field.trim()==='')) {
      seterror('Please fill all fields.');
      return;
   }
    seterror(null);
    setsubmitted(true);
 };

  return (
    <div className="work-container">
      <div className="workcontent">
        <button className="backb" onClick={()=> navigate(-1)}>
          <ArrowLeft size={20} /> <span>Back</span>
        </button>

        <h1 className="pagetitle">Work With Us</h1>

        {submitted ? (
          <div className="successmsg">
            Thanks for applying! We'll get back to you soon.
          </div>
        ) :(
          <form className="workform" onsubmit={handlesubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={forminfo.name}
                onchange={handlechange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={forminfo.email}
                onchange={handlechange}
              />
            </label>
            <label>
              Role Interested In:
              <input
                type="text"
                name="role"
                value={forminfo.role}
                onchange={handlechange}
              />
            </label>
            <label>
              Why do you want to work with us?
              <textarea
                name="motivation"
                rows="4"
                value={forminfo.motivation}
                onchange={handlechange}
              />
            </label>

            {error && <div className="formerror">{error}</div>}
            <button type="submit" className="submitb">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default WorkWithUsPage;
