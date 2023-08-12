import { useState,Suspense } from 'react'
import axios from "axios";
import useSWR from "swr";

function App() {
  return (
    <>
      <p style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        fontSIze:"60px",
        fontWeight:900
      }}> Data from Json-place-holder</p>
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        
      }}>
        
        <Suspense fallback={<Loader/>}>
        <Cards/>
        </Suspense>
        </div>
    </>
  )
}

export default App

const fetcher = url => axios.get(url).then(res => res.data)
const Cards = ()=>{
  const {data} = useSWR("https://jsonplaceholder.typicode.com/posts",fetcher,{ suspense: true })
  return(<>
  {
    data.map(el=>{
      return(
        <div class="card">
      <p class="card-title">{el.title}</p>
      <p class="small-desc">
      {el.body}
      </p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
      )
    })
  }
  
  </>)
}


const Loader = ()=>{
  return(
    <div class="spinner">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
  )
}