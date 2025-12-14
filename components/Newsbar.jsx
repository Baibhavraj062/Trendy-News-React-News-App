import React, { useState , useEffect } from 'react'
import Card from './Card'

function Newsbar() {
const [search , setSearch]=useState('india')
const[newsData, setnewData]= useState('')

const API_key = "2c626656a022441d98f8ce18f67d3c17";

const handledSeach=async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_key}`)
    const jsonData=  await response.json();
    console.log(jsonData.articles)
    setnewData(jsonData.articles)
}
 useEffect(() => {
    handledSeach()
  }, [setSearch, search])


  return (
    <>
    <div className='bg-blue-100 w-full h-fit p-3 rounded-b-lg'>
        <nav className='flex justify-around item-center'>
            <div>
                <h1 className='font-bold text-red-900 text-2xl'>Trendy News</h1>
            </div>
            <div >
                <ul className='flex gap-2 font-semibold'>
                    <li>All News</li>
                    <li>Trending</li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <input
                className='border-amber-50 bg-white rounded-lg px-1'
                 type="text" 
                 placeholder='Search News..'
                 onChange={(e)=>setSearch(e.target.value)}
                 />
                <button className='bg-yellow-100 text-black rounded-lg px-3 py-1 hover:bg-yellow-200'
                onClick={handledSeach}
                >Search</button>
            </div>
        </nav>
    </div>
    <div className='flex items-center justify-center '>
        <p className=' text-2xl'>
            Stay updated with trendy news
        </p>
    </div>
    <div className='flex items-center justify-center gap-3 mt-4'>
        <button className='bg-red-500 hover:bg-red-700 rounded-lg px-3 py-1 '
        onClick={()=> setSearch('sports')}
        >Sports</button>
        <button className='bg-red-500 hover:bg-red-700 rounded-lg px-3 py-1 '
        onClick={()=> setSearch('entertainment')}
        >Entertainment</button>
        <button className='bg-red-500 hover:bg-red-700 rounded-lg px-3 py-1 '
        onClick={()=> setSearch('health')}
        >Health</button>
        <button className='bg-red-500 hover:bg-red-700 rounded-lg px-3 py-1 '
        onClick={()=> setSearch('environment')}
        >Environment</button>
        <button className='bg-red-500 hover:bg-red-700 rounded-lg px-3 py-1 '
        onClick={()=> setSearch('fitness')}
        >Fitness</button>
        <button className='bg-red-500 hover:bg-red-700 rounded-lg px-3 py-1 '
        onClick={()=> setSearch('politics')}
        >Politics</button>
    </div>
    
    <Card data={newsData}/>
    </>
  )
}

export default Newsbar
