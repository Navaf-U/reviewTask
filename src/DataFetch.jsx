import { useEffect, useState } from "react"
import axios from 'axios'

function DataFetch() {
  const [products,setProducts]=useState([])
  const [selectId,setSelectId]=useState(null)
    useEffect(()=>{
        const fetchingData = async()=>{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setProducts(data.slice(0,9))
        }
        fetchingData()
    },[])  

    const eventhandler =(item)=>{
        setSelectId(selectId === item.id ? null : item.id);
    }
    return (
    <div>
    <div className="grid grid-cols-3 gap-4 border-2 border-[red]">
      {products?.map((item)=>{
        return <div key={item.id}><h1 className="border-[1px] border-[violet]" onClick={()=>eventhandler(item)}>{item.title}</h1> {selectId === item.id && <p className="bg-[violet]"><h2 className="font-[]">body</h2>{item.body}</p>}
        </div>
      })}
        </div>
    </div>
  )
}

export default DataFetch