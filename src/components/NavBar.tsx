import React from "react";
import logo from "../assets/images/logo.svg"; // SVG를 경로로 불러오기
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className="relative w-full h-[15vh] bg-white text-black flex items-center ps-16 z-40 overflow-visible">
      <a href="/">
        <img src={logo} alt="Logo" className="w-[180px] h-[80px] mr-12" />
      </a>
      <div className="flex-1">
        <div className="relative group w-full">
          {/* 상단 메뉴 */}
          <ul className="flex w-full">
            <li className="flex-1 text-center">
              <Link
                to={"/introweb"}
                className="text-[18px] font-semibold hover:text-gray-400"
              >
                웹사이트 소개
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                to={"/clubintro"}
                className="text-[18px] font-semibold hover:text-gray-400"
              >
                동아리 소개
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                to={"/clubmatching"}
                className="text-[18px] font-semibold hover:text-gray-400"
              >
                동아리 매칭
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                to={"/calendar"}
                className="text-[18px] font-semibold hover:text-gray-400"
              >
                모집 일정
              </Link>
            </li>
            <li className="flex-1 text-center">
              <Link
                to={"/infoweb"}
                className="text-[18px] font-semibold hover:text-gray-400"
              >
                도움말
              </Link>
            </li>
          </ul>
          {/* 드롭다운 메뉴 */}
          <div className="absolute left-0 top-full w-full shadow-lg z-50 bg-white rounded-b-3xl hidden group-hover:flex">
            <ul className="flex w-full py-6 text-[18px] font-medium">
              <li className="flex-1 flex flex-col gap-2 items-center py-3">
                <Link
                  to="/introweb/intro"
                  className="text-[18px] text-black hover:text-gray-600"
                >
                  소개
                </Link>
                <Link
                  to="/introweb/guide"
                  className="text-[18px] text-black hover:text-gray-600"
                >
                  이용안내
                </Link>
              </li>
              <li className="flex-1 flex flex-col gap-2 items-center">
                  <Link
                    to="/clubintro/academy"
                    className="text-[18px] text-black hover:text-gray-600"
                  >
                    학술
                  </Link>
                  <Link
                    to="/clubintro/arts"
                    className="text-[18px] text-black hover:text-gray-600"
                  >
                    예술
                  </Link>
                  <Link
                    to="/clubintro/sports"
                    className="text-[18px] text-black hover:text-gray-600"
                  >
                    스포츠
                  </Link>
                  <Link
                    to="/clubintro/spirit"
                    className="text-[18px] text-black hover:text-gray-600"
                  >
                    종교
                  </Link>
              </li>
              <li className="flex-1"></li>
              <li className="flex-1"></li>
              <li className="flex-1 flex flex-col gap-2 items-center">
                <Link
                  to="/infoweb/notice"
                  className="text-[18px] text-black hover:text-gray-600"
                >
                  공지사항
                </Link>
                <Link
                  to="/infoweb/qna"
                  className="text-[18px] text-black hover:text-gray-600"
                >
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
