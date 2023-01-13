
import style from "../components/Box3.module.css";
import InfoCard from "./InfoCard";
import { useState } from "react";
import img1 from "../images/image-retro-pcs.jpg";
import img2 from "../images/image-gaming-growth.jpg";
import img3 from "../images/image-top-laptops.jpg";
const Box3 = () => {
    const [blogs, setBlogs] = useState([
       {image:'img1', title: '01', heading: 'Reviving Retro Pcs', text: 'What happens when old PCs are given modern upgrades?'},
       {image:'img2', title: '02', heading: 'Reviving Retro Pcs', text: 'What happens when old PCs are given modern upgrades?'},
       {image:'img3', title: '03', heading: 'Reviving Retro Pcs', text: 'What happens when old PCs are given modern upgrades?'}
    ]);
    return ( 
     <div className={style.footer}>
        <InfoCard blogs={blogs}/>
     </div>
     );
}
 
export default Box3;