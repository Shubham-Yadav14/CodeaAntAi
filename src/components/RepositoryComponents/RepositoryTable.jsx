import { Circle, DatabaseIcon } from "../../utils/svg";
import RepositoryHeader from "./RepositoryHeader";

export default function RepositoryTable() {

  const repositories = [
    {
      name: "design-system",
      visibility: "Public",
      technology: "React",
      sizeKB: 7320,
      lastUpdated: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      technology: "Javascript",
      sizeKB: 5871,
      lastUpdated: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      technology: "Python",
      sizeKB: 4521,
      lastUpdated: "5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      technology: "Swift",
      sizeKB: 3096,
      lastUpdated: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      technology: "Java",
      sizeKB: 6210,
      lastUpdated: "6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      technology: "HTML/CSS",
      sizeKB: 1876,
      lastUpdated: "4 days ago",
    },
    {
      name: "social-network",
      visibility: "Private",
      technology: "PHP",
      sizeKB: 5432,
      lastUpdated: "7 days ago",
    },
  ];

  return (
    <div className="border  font-inter border-[#E9EAEB] rounded-[12px] bg-white ">
      <RepositoryHeader />
      <div className="border-t rounded-b-lg border-[#D5D7DA]">
        {repositories.map((repository, index) => (
          <div key={index} className={`lg:p-6 max-lg:p-4 flex flex-col font-inter hover:bg-[#F5F5F5] cursor-pointer gap-y-3 border-b ${index === (repositories.length - 1) ? "rounded-b-lg": " border-b-[#D5D7DA]"}`}>
            <div className="inline-flex gap-x-2">
              <div className="text-[#181D27] text-xl leading-6 font-medium">{repository.name}</div>
              <div className="px-[10px] text-[#175CD3] py-[2px] bg-[#EFF8FF] border-[#B2DDFF] border rounded-full text-sm leading-5">
                {repository.visibility}
              </div>
            </div>
            <div className="flex max-lg:gap-x-6 lg:gap-x-10">
              <div className="text-[#181D27] leading-5">
                <div className="inline-flex items-center gap-x-2">
                  {repository.technology} <Circle />
                </div>
              </div>
              <div className="text-[#181D27] leading-5">
                <div className="inline-flex items-center gap-x-2">
                <DatabaseIcon /> {repository.sizeKB} KB
                </div>
              </div>
              <div className="text-[#181D27] leading-5">Updated {repository.lastUpdated}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}