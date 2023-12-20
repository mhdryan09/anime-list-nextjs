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
    // jika tombol enter ditekan
    if (event.key === "Enter" || event.type === 'click') {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);

      // cek jika inputan kosong
      if(keyword === "") {
        return;
      }
    }
  }

  return (
    <div className="relative">
      <input type="text" placeholder='Search Anime...' className='p-2 rounded w-full' ref={searchRef} onKeyDown={handleSearch} />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  )
}

export default InputSearch