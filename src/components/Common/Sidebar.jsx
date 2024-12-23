import { useState } from "react";
import {
  BookIcon,
  ChevronIcon,
  CloseIcon,
  CloudIcon,
  CodeAntAI,
  CodeReviewIcon,
  Hamburger,
  LogoutIcon,
  PhoneIcon,
  RepositoryIcon,
  SettingIcon,
} from "../../utils/svg";
import { Link } from "react-router";

export default function Sidebar() {
  const selected = 0;

  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: <RepositoryIcon fill="white" />, label: "Repositories" },
    { icon: <CodeReviewIcon />, label: "AI Code Review" },
    { icon: <CloudIcon />, label: "Cloud Security" },
    { icon: <BookIcon />, label: "How to Use" },
    { icon: <SettingIcon />, label: "Settings" },
  ];
  const menuItemsMobile = [
    { icon: <RepositoryIcon fill="#414651" />, label: "Repositories" },
    { icon: <CodeReviewIcon />, label: "AI Code Review" },
    { icon: <CloudIcon />, label: "Cloud Security" },
    { icon: <BookIcon />, label: "How to Use" },
    { icon: <SettingIcon />, label: "Settings" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="adf max-lg:hidden py-6 px-5 border-r border-r-[#E9EAEB] fixed left-0 top-0 w-[240px] font-inter flex flex-col justify-between bg-white h-screen">
        <div className="flex flex-col">
          <div className="inline-flex space-x-[11px]">
            <div>
              <CodeAntAI />
            </div>
            <div className="font-satoshi text-2xl font-normal text-[#181D27]">CodeAnt AI</div>
          </div>
          <div className="inline-flex px-3 cursor-pointer gap-x-2 font-normal text-[#181D27] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] py-2 mt-5 items-center justify-center rounded-lg border border-[#D5D7DA]">
            <div className="text-ellipsis overflow-hidden">UtkarshDhairyaPanwar</div>
            <div>
              <ChevronIcon />
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`inline-flex cursor-pointer gap-x-2 font-semibold px-[14px] py-[10px] rounded-lg ${
                  index === selected
                    ? "text-white shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)] bg-[#1570EF]"
                    : "text-[#414651]"
                }`}
              >
                <div>{item.icon}</div>
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="inline-flex cursor-pointer px-3 py-2 gap-x-2 text-[#414651] font-semibold">
            <div>
              <PhoneIcon />
            </div>
            <div className="">Support</div>
          </div>
          <Link to="/login" className="inline-flex cursor-pointer px-3 py-2 gap-x-2 text-[#414651] font-semibold">
            <div>
              <LogoutIcon />
            </div>
            <div className="">Logout</div>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={"adffsdf lg:hidden w-screen fixed top-0 left-0 z-40 bg-white p-4 border-b border-b-[#E9EAEB]"}>
        <div className="flex justify-between items-center">
          <div className="inline-flex space-x-[11px]">
            <div>
              <CodeAntAI />
            </div>
            <div className="font-satoshi text-2xl font-normal text-[#181D27]">CodeAnt AI</div>
          </div>
          <div className="cursor-pointer"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <CloseIcon /> : <Hamburger />}
          </div>
        </div>
        {/* Menu Section */}
        <div className={` transition-all cursor-pointer duration-300 overflow-hidden  ${open ? "max-h-[500px]" : "max-h-0"}`}>
          <div className="inline-flex px-3 gap-x-2 justify-between font-normal w-full text-[#181D27] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] py-2 mt-5 items-center rounded-lg border border-[#D5D7DA]">
            <div className="text-ellipsis overflow-hidden">UtkarshDhairyaPanwar</div>
            <div>
              <ChevronIcon />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4 ">
            {menuItemsMobile.map((item, index) => (
              <div
                key={index}
                className="inline-flex cursor-pointer gap-x-2 font-semibold px-[14px] py-2 leading-6 rounded-lg text-[#414651]"
              >
                <div>{item.icon}</div>
                <div>{item.label}</div>
              </div>
            ))}
            <div className="inline-flex cursor-pointer gap-x-2 font-semibold px-[14px] py-2 leading-6 rounded-lg text-[#414651]">
              <div>
                <PhoneIcon />
              </div>
              <div>Support</div>
            </div>
            <Link to="/login" className="inline-flex cursor-pointer gap-x-2 font-semibold px-[14px] py-2 leading-6 rounded-lg text-[#414651]">
              <div>
                <LogoutIcon />
              </div>
              <div>Logout</div>
            </Link>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}