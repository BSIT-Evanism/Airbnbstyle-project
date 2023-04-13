import { DateRangePicker } from "react-date-range";
import Image from "next/image";
import {
  GlobeAltIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="airbnb logo"
        />
      </div>

      <div className="flex items-center md:border-2 md:shadow-md rounded-full py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 flex-grow bg-transparent"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2" />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-4 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5861"]}
            onChange={handleSelect}
          />
        </div>
      )}
    </header>
  );
}

export default Header;
