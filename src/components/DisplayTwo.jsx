import { useEffect,useState } from 'react'
import AWS from 'aws-sdk'

const getData = async () => {
    try {
        const response = await fetch('/data')
        return response.json()
        
    } catch (error) {
        console.log(error)     
    }
}

function DisplayTwo() {
    const [data,setData] = useState(null)

    useEffect(() => {
        getData().then((response) => {
            setData(response)
        })
    },[])

    const handleButtonPress = (e) => {
        e.preventDefault()
        getData().then((response) => {
            console.log(response['6ATF12016'].timestamp)
        })
    }

  return (
    <div className="container">
    <div className="inner-square">{data['6ATF12016'].deviceId}</div>
    <div className="inner-square">3</div>
    <div className="inner-square">{data['6ATF12018'].deviceId}</div>
    <div className="inner-square">1</div>
  </div>
  )
}

export default DisplayTwo