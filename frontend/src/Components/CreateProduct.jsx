import React, { useState } from 'react'
import  axios  from "axios";
function CreateProduct() {
  // const csrfToken = document.cookie.match(/csrftoken=([\w-]+)/)[1];
  const getCookie = (name) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  };
  
  // const csrfToken = getCookie('csrftoken'); // Get CSRF token from cookies
  
  // if (!csrfToken) {
  //   console.error('CSRF token not found');
  //   return;
  // }
  const [values, setValues] = useState({
    ProductName:'',
    ProductCode:'',
    HSNCode:'',
    TotalStock:'',
    ProductImage:null,
  })
  console.log(values);

  // const handleInputs=(e)=>{
  //   setValues({
  //     ...values,
  //     [e.target.name]:e.target.value
  //   })
  // }

  const handleInputs = (e) => {
    const { name, value, type, files } = e.target;

    setValues({
      ...values,
      [name]: type === 'file' ? files[0] : value, // Handle file input separately
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Submitted', values);

    // Example for processing file upload
    const formData = new FormData();
    formData.append('ProductName', values.ProductName);
    formData.append('ProductCode', values.ProductCode);
    formData.append('HSNCode', values.HSNCode);
    formData.append('TotalStock', values.TotalStock);
    // formData.append('ProductDescription', values.ProductDescription);
    if (values.ProductImage) {
      formData.append('ProductImage', values.ProductImage);
    }

    // Log form data for demonstration
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Required for file upload
          // 'X-CSRFToken': csrfToken, 
        },
      });
      // return response.data

      console.log('Response:', response.data);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error posting product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <div class="w-screen h-screen bg-slate-50 p-10">
        <div class="w-full flex flex-col gap-3 justify-start items-center rounded-lg h-3/4 bg-slate-200 ">
            <h2 className='leading-10 text-2xl font-extrabold '>ADD PRODUCT</h2>
            <form action="" onSubmit={handleSubmit} 
                  className='w-3/6 flex flex-col gap-3 p-2 justify-center items-center rounded shadow-md bg-slate-300'>
              <div className="w-3/6 flex flex-row justify-center items-center rounded bg-slate-500">
                <input 
                className='w-full rounded p-2 shadow-md'
                  type="text"
                  placeholder='ProductName'
                  name='ProductName'
                  value={values.ProductName}
                  onChange={handleInputs} />
              </div>
              <div className="w-3/6 flex flex-row justify-center items-center rounded bg-slate-500">
                <input 
                  className='w-full rounded p-2 shadow-md'
                  type="text"
                  placeholder='ProductCode'
                  name='ProductCode'
                  value={values.ProductCode}
                  onChange={handleInputs} />
              </div>
              <div className="w-3/6 flex flex-row justify-center items-center rounded bg-slate-500">
                <input 
                  className='w-full rounded p-2 shadow-md'
                  type="text"
                  placeholder='HSNCode'
                  name='HSNCode'
                  value={values.HSNCode}
                  onChange={handleInputs} />
              </div>
              <div className="w-3/6 flex flex-row justify-center items-center rounded bg-slate-500">
                <input 
                  className='w-full rounded p-2 shadow-md'
                  type="text"
                  placeholder='TotalStock'
                  name='TotalStock'
                  value={values.TotalStock}
                  onChange={handleInputs} />
              </div>
              <div className="w-3/6 flex flex-row justify-center items-center rounded bg-slate-500">
                <input 
                  className='w-full rounded p-2 shadow-md'
                  type="file"
                  placeholder='ProductImage'
                  name='ProductImage'
                  // value={values.ProductImage}
                  onChange={handleInputs} />
              </div>
              <button 
                type='submit' 
                className="w-3/6 flex flex-row justify-center items-center rounded bg-slate-900 text-cyan-50 text-center text-lg py-2 font-bold"
                >Add</button>
            </form>
        </div>
    </div>
  )
}

export default CreateProduct