"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useRef } from "react"

const InputSearch = () => {
  // untuk menangkap inputan dari form bisa gunakan useRef
  const searchRef = useRef();
  // gunakan useRouter untuk berpindah halaman 
  const router = useRouter();

  // event handler
  const handleSearch = (event) => {
    event.preventDefault();
    const keyword = searchRef.current.value;
    router.push(`/search/${keyword}`);
  }

  return (
    <div className="relative">
      <input type="text" placeholder='Search Anime...' className='p-2 rounded w-full' ref={searchRef} />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  )
}

export default InputSearch