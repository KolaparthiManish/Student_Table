import React, { useState } from 'react';
import Table from './Table';

function Form() {
  const [shown, setShown] = useState([]);
  const [data, setData] = useState({ id:'',name: '', dateOfBirth: '', sex: '', standard: '', age: '', address: '' });
  const [state, setState] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    if (name === 'dateOfBirth') {
      const Age = calculateAge(value);
      setData({ ...data, [name]: value, age: Age });
    } else {
      setData({ ...data, [name]: value });
    }
    
  };
  if (data.standard === '1') {
    if (data.age < 6) {
      alert('Age is less than the default age for Standard 1st.');
    } else if (data.age > 8) {
      alert('Age is more than expected for Standard 1st.');
    }
  }
  if (data.standard === '2') {
    if (data.age < 7) {
      alert('Age is less than the default age for Standard 2nd.');
    } else if (data.age > 9) {
      alert('Age is more than expected for Standard 2nd.');
    }
  }
  if (data.standard === '3') {
    if (data.age < 8) {
      alert('Age is less than the default age for Standard 3rd.');
    } else if (data.age > 10) {
      alert('Age is more than expected for Standard 3rd.');
    }
  }
  if (data.standard === '4') {
    if (data.age < 9) {
      alert('Age is less than the default age for Standard 4th.');
    } else if (data.age > 11) {
      alert('Age is more than expected for Standard 4th.');
    }
  }
  if (data.standard === '5') {
    if (data.age < 10) {
      alert('Age is less than the default age for Standard 5th.');
    } else if (data.age > 12) {
      alert('Age is more than expected for Standard 5th.');
    }
  }
  if (data.standard === '6') {
    if (data.age < 11) {
      alert('Age is less than the default age for Standard 6th.');
    } else if (data.age > 13) {
      alert('Age is more than expected for Standard 6th.');
    }
  }
  if (data.standard === '7') {
    if (data.age < 12) {
      alert('Age is less than the default age for Standard 7th.');
    } else if (data.age > 14) {
      alert('Age is more than expected for Standard 7th.');
    }
  }
  if (data.standard === '8') {
    if (data.age < 13) {
      alert('Age is less than the default age for Standard 8th.');
    } else if (data.age > 15) {
      alert('Age is more than expected for Standard 8th.');
    }
  }
  if (data.standard === '9') {
    if (data.age < 14) {
      alert('Age is less than the default age for Standard 9th.');
    } else if (data.age > 16) {
      alert('Age is more than expected for Standard 9th.');
    }
  }
  if (data.standard === '10') {
    if (data.age < 15) {
      alert('Age is less than the default age for Standard 10th.');
    } else if (data.age > 17) {
      alert('Age is more than expected for Standard 10th.');
    }
  }


  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const currentDate = new Date();

    if (!isNaN(birthDate)) {
      const ageDiff = currentDate - birthDate;
      const ageDate = new Date(ageDiff);
      console.log(ageDiff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    } else {
      return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({id:'',name:"",dateOfBirth:"",sex:'',standard:"",age:"",address:""})
    setShown([...shown,data]);
    setState(true);
  };

  return (
    <div>
        <div className='form-control p-5 m-auto mt-5 bg-info border border-success'>
          <h1 className='text-center mb-5'>Student Data Form</h1>
          <form onSubmit={handleSubmit}>
            <label className='fw-bold'>S.No:</label><br />
            <input type="text" name='id' value={data.id} onChange={handleInputChange}  className='form-control'/><br />
            <label className='fw-bold' htmlFor='name'>
              Student Name:
            </label>
            <br />
            <input
              className='form-control'
              type='text'
              name='name'
              value={data.name}
              onChange={handleInputChange}
              required
            />
            <br />
            <label className='fw-bold'>Date Of Birth:</label>
            <br />
            <input
              className='dob-input'
              type='date'
              name='dateOfBirth'
              value={data.dateOfBirth}
              onChange={handleInputChange}
              required
            />
            <br />
            <br />
            <label className='fw-bold mb-3'>Gender:</label>
            <br />
            <div>
              <input
                type='radio'
                name='sex'
                value='male'
                onChange={handleInputChange}
                required
              />
              <label className='fw-semibold ps-1'>Male</label>
              <input
                type='radio'
                name='sex'
                value='female'
                onChange={handleInputChange}
                required
              />
              <label className='fw-semibold ps-1'>Female</label>
            </div>
            <br />
            <label className='fw-bold'>Standard:</label>
            <br />
            <select
              className='form-select'
              name='standard'
              value={data.standard}
              onChange={handleInputChange}
              aria-label='Default select example'
              required
            >
              <option value=''>Select</option>
              <option value='1'>1st</option>
              <option value='2'>2nd</option>
              <option value='3'>3rd</option>
              <option value='4'>4th</option>
              <option value='5'>5th</option>
              <option value='6'>6th</option>
              <option value='7'>7th</option>
              <option value='8'>8th</option>
              <option value='9'>9th</option>
              <option value='10'>10th</option>
            </select>
            <br />
            <label className='fw-bold'>Age:</label>
            <br />
            <input
              className='form-control'
              type='text'
              name='age'
              value={data.age}
              readOnly
              required
            />
            <br />
            <div className='mb-3'>
              <label htmlFor='address' className='fw-bold'>
                Address:
              </label>
              <textarea
                className='form-control'
                rows='3'
                value={data.address}
                name='address'
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div>
              <button className='btn btn-primary'>Add Student</button>
              
            </div>
          </form>
        </div>
      <div><Table rowData={shown}/></div>
    </div>
  );
}

export default Form;
