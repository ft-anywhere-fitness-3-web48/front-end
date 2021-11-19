import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Register.css';

const Classes = (props) => {

  const [classType, setClassType] = useState([]);


  useEffect(() => {
    axios
      .get(`https://anywhere-fitness-back-end-2021.herokuapp.com/api/classes`)
      .then(resp => {
        setClassType(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  });

  if (!classType) {
    return <div>Loading Classes!</div>;
  }

  return (
    <div className='classes-info'>
      <h3>List of Classes</h3>
      <div className='flex'>
        {classType.map((sub) => (
          <div className='information'>
            <ul key={sub.id}>
              <li>Name: {sub.name}</li>
              <li>Time: {sub['start_time']}</li>
              <li>Intensity: {sub['intensity_level']}</li>
              <li>Duration: {sub.duration}</li>
              <li>Type of Activity: {sub['class_type_name']}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
