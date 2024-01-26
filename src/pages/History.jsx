import React from 'react'
import { Link } from 'react-router-dom'
import "../Stylesheet/course.css";
import Footer from '../Components/Footer';


const History = () => {
    const data = []
  return (
    <div>
        <div className='history'>
         <div className="card_table">
           {data.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Course Name</th>
                  <th>Start Date</th>
                  <th>Completion Date</th>
                  <th>Price</th>
                  <th>Status</th>
                  
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.role}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="cart_table">
                <table>
            <thead>
              <tr>
              <th>ID</th>
                  <th>Course Name</th>
                  <th>Start Date</th>
                  <th>Completion Date</th>
                  <th>Price</th>
                  <th>Status</th>
              </tr>
            </thead>
            
          </table>
            <p>No Course Purchased.  <Link>Click here to check out Courses</Link></p>
            </div>
            
          )}
     </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export default History