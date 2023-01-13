import style from "../components/InfoCard.module.css";
import "../images/image-retro-pcs.jpg";
import img1 from "../images/image-retro-pcs.jpg";
import img2 from "../images/image-gaming-growth.jpg";
import img3 from "../images/image-top-laptops.jpg";
const InfoCard = (props) => {

  const blogs = props.blogs;
  const images = {img1,img2,img3};

    return ( 
        <div className={style.tab}>
            {blogs.map((blog)=>(
                <div className={style.card}>
                 <div >
                    <img src={images[blog.image]} className={style.img}></img>
                 </div>
                 <div className={style.body}>
                 <div className={style.title}>{blog.title}</div>
                 <div className={style.heading}>{blog.heading}</div>
                 <div className={style.text}>{blog.text}</div>
                 </div>
                 </div>
            ))}
           
           </div>
     );
}
 
export default InfoCard;