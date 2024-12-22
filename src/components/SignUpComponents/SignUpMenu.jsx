import React, { useState } from "react";
import logo from "../../utils/logo.svg";
import github from "../../utils/github.svg";
import bitbucket from "../../utils/bitbucket.svg";
import azure from "../../utils/azure-devops.svg";
import gitlab from "../../utils/gitlab.svg";
import sso from "../../utils/Icon.svg";

const providers = [
  { src: github, label: "Sign in with Github", link: "/", key: "github" },
  { src: bitbucket, label: "Sign in with Bitbucket", link: "/", key: "bitbucket" },
  { src: azure, label: "Sign in with Azure DevOps", link: "/", key: "azure" },
  { src: gitlab, label: "Sign in with GitLab", link: "/", key: "gitlab" },
];

const selfHostedProviders = [
  { src: gitlab, label: "Self Hosted GitLab", link: "/", key: "self_gitlab" },
  { src: sso, label: "Sign in with SSO", link: "/", key: "sso" },
];

function SignUpMenu() {
  const [saas, setSaas] = useState(true);

  const renderProviders = (providerList) =>
    providerList.map(({ src, label, link, key }) => (
      <a
        key={key}
        href={link}
        className="border flex items-center w-full gap-4 p-2 rounded-xl justify-center text-[#171717] text-[16px] font-semibold leading-[24px]"
      >
        <img src={src} alt={label} className="w-6 h-6" />
        {label}
      </a>
    ));

  return (
    <div className=" h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div className="flex h-[960px] p-6 flex-col justify-center items-center gap-8 ">
        <div className="bg-white flex flex-col rounded-xl w-[672px] border border-[#f6f8f7]">
          <div className="border-b flex flex-col py-8 px-6 w-full gap-4">
            <div className="flex items-center justify-center p-2 gap-4">
              <img className="w-[36px] h-[40px]" src={logo} alt="logo" />
              <span className="text-[#181D27] text-[30px] leading-[33px] font-satoshi">
                CodeAnt AI
              </span>
            </div>
            <div className="text-[#181D27] text-center text-3xl font-semibold leading-[48px] font-inter">
              Welcome to CodeAnt AI
            </div>
            <div className="bg-[#FAFAFA] border rounded-xl flex">
              <button
                className={`p-3 rounded-xl w-1/2 ${saas ? "bg-[#1570EF] text-white" : ""}`}
                onClick={() => setSaas(true)}
              >
                SAAS
              </button>
              <button
                className={`p-3 rounded-xl w-1/2 ${saas ? "" : "bg-[#1570EF] text-white"}`}
                onClick={() => setSaas(false)}
              >
                Self Hosted
              </button>
            </div>
          </div>
          <div className="flex flex-col py-6 px-0 items-center w-full">
            <div className="flex flex-col gap-4 w-full max-w-[400px]">
              {saas ? renderProviders(providers) : renderProviders(selfHostedProviders)}
            </div>
          </div>
        </div>
        <div className="text-[#181D27] text-center text-[16px] font-normal leading-[24px]">
          By signing up you agree to the <b className="font-bold">Privacy Policy</b>.
        </div>
      </div>
    </div>
  );
}

export default SignUpMenu;
