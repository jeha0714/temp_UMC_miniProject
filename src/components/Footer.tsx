import React from "react";
import Logo from "../assets/images/FooterSMU.svg"; // SVG를 경로로 불러오기
import GitCat from "../assets/images/GitCat.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[10vh] bg-white text-black flex justify-center items-end py-6 gap-6">
      <Link to={"https://github.com/SMUMC-8th/WEB_B"} >
        <img src={GitCat} alt="Logo" className="w-auto h-auto"/> {/* GitHub 로고 */}
      </Link>
      <div className="w-[3px] h-6 bg-black" />
      <Link to={"/"} >
        <img src={Logo} alt="Logo" className="w-auto h-auto" /> {/* SMU 로고 */}
      </Link>
    </div>
  );
};

export default Footer;

// import footer from '../assets/images/footer.svg';

// const Footer: React.FC = () => {
//     return (
//         <div className="absolute left-[1030px] top-[960px] justify-center w-[300px] h-[150px]">
//             <a
//                 href="https://github.com/SMUMC-8th"
//                 target="_blank"
//                 rel="noopener noreferrer"
//             >
//                 <img src={footer} alt="Logo" className="w-auto h-auto" />
//             </a>
//         </div>
//     );
// };

// export default Footer;
