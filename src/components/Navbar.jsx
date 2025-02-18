import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [show,setShow] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () =>{
        setShow(!show);
        
    }

    let menuActive = show ? "left-0" : "left-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 5){
                setScroll(true);
                setShow(false);
            }else{
                setScroll(false);
            }
        })
    })

    let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div class={`navbar fixed w-full flex justify-center transition-all py-4 ${scrollActive}`}>
      <div className="container" class="px-8 w-full">
        <div className="nav-box" class="flex items-center justify-between">
            <div className="logo">
                <h1 class="text-2xl font-bold">Portofolio.</h1>
            </div>
            <ul class={`flex lg:p-0 lg:m-0 lg:static lg:bg-transparent lg:w-auto lg:h-auto lg:h-full lg:translate-y-0 lg:text-black lg:flex-row lg:shadow-none 
            gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col whitespace-nowrap 
            px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}>
                <li class="flex items-center gap-3">
                    <i class="ri-home-2-line text-3xl lg:hidden block"></i>
                    <a href="#" class="font-medium opacity-75">Beranda</a>
                </li>
                <li class="flex items-center gap-3">
                    <i class="ri-information-line text-3xl lg:hidden block"></i>
                    <a href="#AboutMe" class="font-medium opacity-75">Tentang Saya</a>
                </li>
                <li class="flex items-center gap-3">
                    <i class="ri-school-line text-3xl lg:hidden block"></i>
                    <a href="#Skill" class="font-medium opacity-75">Skill</a>
                </li>
                <li class="flex items-center gap-3">
                    <i class="ri-tools-line text-3xl lg:hidden block"></i>
                    <a href="#Sertifikat" class="font-medium opacity-75">Sertifikat</a>
                </li>
                <li class="flex items-center gap-3">
                    <i class="ri-gallery-view text-3xl lg:hidden block"></i>
                    <a href="#GaleriPortofolio" class="font-medium opacity-75">Galeri Proyek</a>
                </li>
            </ul>
            <div className="social flex flex-row items-center gap-2">
                <ul class="whitespace-nowrap">
                    <li>
                        <a href="#" class="bg-sky-400 px-5 py-2 rounded-full text-white hover:bg-sky-500 transition-all">Social Media</a>
                    </li>
                </ul>
                <i class="ri-menu-3-line text-3xl lg:hidden" onClick={handleClick}></i> 
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Navbar
