import img from "../images/image-web-3-desktop.jpg";
import style from "../components/Box1.module.css";
const Box1 = () => {
    return (
        <div className={style.box1}>
            <div><img className={style.img}></img></div>
            <div className={style.body}>
                <div className={style.title}><h2>The Bright Future of Web 3.0?</h2></div>
                <div className={style.text}>
                    <p className={style.para}>WE dive into the next evolution of the web that claims
                        to put the power of the platforms back into the hands of the people.
                        But is it really fulfilling its promise?</p>
                    <button className={style.btn}>READ MORE</button>
                </div>
            </div>
        </div>
    );
}

export default Box1;