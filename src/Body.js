import img from "./asset/me2.jpg";
import TypingAnimation from "./TypingAnimation";
export default function Body() {
  return (
    <div id="body-section"className="new">
    <div className="body1">
      <div className="intro-container">
      <h1 className="intro">Hi! I'm <span className="name">OM PRAKASH KUMAR</span></h1>
      <h1><TypingAnimation /></h1>

      </div>
      
      <img className="img1"src={img} alt="img" />
      
    </div>
    <h3 className="resume"><a href="https://drive.google.com/file/d/1EMQGSRzOZQGS0ce-r8AYNfjGb9UL6-W5/view?usp=sharing" target="_blank">My resume <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"/></svg></a></h3>
    </div>
  );
}
