import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Products() {
    const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/'); // Replace with your API endpoint
        console.log(response.data); 
        setItems(response.data); // Assuming the data is an array of items
      } catch (err) {
        setError(err.message || 'Failed to fetch items.');
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div class="w-screen h-screen bg-slate-50 p-10">
        <div class="w-full flex flex-col gap-3 justify-start items-center rounded-lg h-3/4 bg-slate-200 ">
            <h2 className='leading-10 text-2xl font-extrabold '> PRODUCTS</h2>
            <div className='w-full h-full flex flex-col gap-2 p-2 bg-slate-300 overflow-y-scroll scroll-smooth'>
            {items && items.length>0?
            items.map((item, index) => (
                <div
                    className='w-full h-30 p-2 flex flex-col gap-2 bg-slate-100 shadow-md' 
                    key={index}>
                    <h4>{item.ProductName}</h4>
                    <h4>{item.ProductCode}</h4>
                    <h4>{item.HSNCode}</h4>
                    <h4>{item.TotalStock}</h4>
                    <h4>{item.ProductImage}</h4>
                </div>
            )):null
            }
            </div>
        </div>
    </div>
  )
}

export default Products