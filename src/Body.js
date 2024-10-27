import img from "./asset/me2.jpg";
import TypingAnimation from "./TypingAnimation";
export default function Body() {
  return (
    <div className="body1">
      <div className="intro-container">
      <h1 className="intro">Hi! I'm <span className="name">OM PRAKASH KUMAR</span></h1>
      <h1><TypingAnimation /></h1>

      </div>
      
      <img className="img1"src={img} alt="img" />
    </div>
  );
}
