import style from "../components/Box2.module.css"

const Box2 = () => {

    return ( 
        <div className={style.card}>
         <div className={style.title}>New</div>
         <div>
            <div className={style.news_title}>Hydrogen VS Electric Cars</div>
            <div className={style.news_text}>Will hydrogen-fueled cars ever catch up the EVs?</div>
            <div className={style.line}><hr></hr></div>
            <div className={style.news_title}>The Downsides of AI Artistry</div>
            <div className={style.news_text}>What are the possible adverse effects of on-demand AI image generation?</div>
            <div className={style.line}><hr></hr></div>
            <div className={style.news_title}>Is Vs Funding Drying Up?</div>
            <div className={style.news_text}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</div>
         </div>
        </div>
     );
}
 
export default Box2;