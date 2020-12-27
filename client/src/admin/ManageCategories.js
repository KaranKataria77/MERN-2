import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../auth/helper';
import Base from '../core/Base';
import { getCategories, deleteCategory } from './helper/adminapicall';


function ManageCategories() {

    const { user, token } = isAuthenticated();

    const [category, setCategory ] = useState([]);

    const preload = () => {
        getCategories()
         .then(data => {
             if(data.error){
                 console.log(data.error)
             }else{
                 setCategory(data)
             }
         })
    }

    useEffect(() => {
        preload()
    }, [])

    const deleteThisCategory = (categoryId) => {
        deleteCategory(user._id, token, categoryId)
         .then(data => {
             if(data.error){
                 console.log(data.error)
             }else{
                 preload()
             }
         })
    }


    return (
        <Base title="Welcome admin" description="Manage products here">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total 3 products</h2>

          {category.map((cate, index) => {
              return (
                <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                  <h3 className="text-white text-left">{cate.name}</h3>
                </div>
                <div className="col-4">
                  <Link
                    className="btn btn-success"
                    to={`/admin/category/update/${cate._id}`}
                  >
                    <span className="">Update</span>
                  </Link>
                </div>
                <div className="col-4">
                  <button onClick={() => {deleteThisCategory(cate._id)}} className="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
              )
          })}
        </div>
      </div>
    </Base>
    )
}

export default ManageCategories;
