import React from 'react'

const Api = () => {
    const api="https://newsdata.io/api/1/latest?apikey=pub_6e2f03cc057140eab2dcd3613f62c849&country=in"

    async function getNews(){
        try{
            const res=await fetch(api);
            const data= await res.json();
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Api
