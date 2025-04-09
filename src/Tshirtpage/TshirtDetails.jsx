import s1 from "./tshirt2.1.jpg"
import s2 from "./tshirt2.2.jpg"
import s3 from "./tshirt2.3.jpg"
import s4 from "./tshirt2.4.jpg"

const TshirtDetails=()=>{
    return(
        <>
         <div style={{display:"flex", flexDirection:"row"}} >
           <div className="tshirtpage">
            
            <img src={s1} style={{height:"350px", width:"350px"}}/>
            <img src={s2} style={{height:"350px", width:"350px"}}/>
            <img src={s3} style={{height:"350px", width:"350px"}}/>
            <img src={s4} style={{height:"350px", width:"350px"}}/>
           </div>
          
          

         </div>
        </>
    )
}
export default TshirtDetails;