import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      <h3>List of Classes</h3>
      {classType.map((sub) => (
        <ol key={sub.id}>
          <li>{sub.name}</li>
        </ol>
      ))}
    </div>
  );
};

export default Classes;
