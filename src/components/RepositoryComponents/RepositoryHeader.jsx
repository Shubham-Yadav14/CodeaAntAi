import { AddIcon, RefreshIcon, SearchIcon } from "../../utils/svg";

export default function RepositoryHeader() {
  return (
    <div className="px-6 max-sm:px-4 py-5 font-inter space-y-4">
      <div className="flex max-lg:gap-y-3 max-lg:flex-col lg:justify-between lg:items-start">
        <div className="flex flex-col gap-x-1 gap-y-1">
          <div className="text-[#181D27] font-semibold text-2xl">Repositories</div>
          <div className="text-[#414651] font-normal leading-5">33 total repositories</div>
        </div>
        <div className="flex gap-x-3">
          <button className="inline-flex text-sm gap-x-1 items-center rounded-lg px-[14px] py-[10px] text-[#414651] leading-5 border border-[#D5D7DA]  ">
            <RefreshIcon />
            <div>Refresh All</div>
          </button>
          <button className="inline-flex text-sm gap-x-1 items-center rounded-lg px-[14px] py-[10px] text-white leading-5 bg-[#1570EF] border-2 border-[rgba(255,255,255,0.12)]  ">
            <AddIcon />
            <div>Add Repository</div>
          </button>
        </div>
      </div>
      <div className="inline-flex lg:w-[336px] w-full border-[#D5D7DA] text-[#414651] rounded-lg justify-start items-center px-[14px] py-[10px] leading-5 bg-white shadow-[0px_0px_0px_1px_rgba(10,13,18,0.18)_inset,0px_-2px_0px_0px_rgba(10,13,18,0.05)_inset,0px_1px_2px_0px_rgba(10,13,18,0.05)]">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Repositories"
          className="bg-transparent outline-none w-full px-2  placeholder: placeholder:text-[#414651] placeholder:leading-5"
        />
      </div>
    </div>
  );
}