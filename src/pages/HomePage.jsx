import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './styles.css';
import Foto from '../assets/images/foto-1.png';
import FotoProfile from '../assets/images/FauziRahmatRamadhan.jpg';
import Sertifikat1 from '../assets/images/sanbercode.jpg'
import Sertifikat2 from '../assets/images/Infinite Learning.jpg'
import skill1 from '../assets/images/skill icon/919826.png'
import skill2 from '../assets/images/skill icon/CPP.png'
import skill3 from '../assets/images/skill icon/figma.png'
import skill4 from '../assets/images/skill icon/HTML.png'
import skill5 from '../assets/images/skill icon/JavaScript.png'
import skill6 from '../assets/images/skill icon/MongoDB.png'
import skill7 from '../assets/images/skill icon/Node-js.png'
import skill8 from '../assets/images/skill icon/ReactJS.svg'
import skill9 from '../assets/images/skill icon/SQL.png'
import skill10 from '../assets/images/skill icon/xampp.png'
import FrontEnd from '../assets/images/FrontEnd.png'
import BackEnd from '../assets/images/BackEnd.png'
import Porto1 from '../assets/images/GaleriPortofolio/kosan1.jpg'
import Porto2 from '../assets/images/GaleriPortofolio/kosan2.png'
import Porto3 from '../assets/images/GaleriPortofolio/kosan3.png'
import Porto4 from '../assets/images/GaleriPortofolio/Movera1.png'
import Porto5 from '../assets/images/GaleriPortofolio/Movera2.png'
import Porto6 from '../assets/images/GaleriPortofolio/Movera3.png'
import Porto7 from '../assets/images/GaleriPortofolio/Movera4.png'
import Porto8 from '../assets/images/GaleriPortofolio/Movera5.png'
import Porto9 from '../assets/images/GaleriPortofolio/Movera6.png'
import Porto10 from '../assets/images/GaleriPortofolio/Otopredx.png'
import Porto11 from '../assets/images/GaleriPortofolio/Pengaduan1.png'
import Porto12 from '../assets/images/GaleriPortofolio/Pengaduan 2.png'

const HomePage = () => {
 
  return (
    <div className="pt-24 flex flex-col items-center justify-center">
      <div className="flex justify-around items-center bg-white w-full p-20">
        <div className="flex flex-col pt-[15%]">
          <h1 className="text-[1.2vw]">Halo, Nama saya</h1>
          <h2 className="text-[2vw]">
            Fauzi Rahmat <span className="text-amber-800">Ramadhan</span>
          </h2>
          <h2 className="text-[1.2vw]">Saya seorang Full Stack Developer</h2>
          <a
            className="bg-sky-400 mt-4 text-xl w-fit p-2 text-white rounded-xl hover:bg-sky-300 hover:text-black transition-all text-[1.2vw]"
            href="#AboutMe"
          >
            Tentang saya !
          </a>
        </div>
        <div className="pt-12">
          <img className="pt-0 h-[30vw] rounded-2xl" src={Foto} alt="" />
        </div>
      </div>

      <div id="AboutMe" className="mt-10 mb-10 flex justify-center w-full gap-[2vw]">
        <img className="w-[15vw] rounded-4xl" src={FotoProfile} alt="" />
        <div className="w-1/3 flex flex-col gap-3 justify-center">
          <h1 className="text-[2vw]">
            About <span className="text-amber-800">Me</span>
          </h1>
          <hr className="border-amber-800" />
          <h2 className="text-[1.2vw]">
            Web Full Stack <span className="text-amber-800">Developer</span>
          </h2>
          <p className="text-[0.8vw] text-justify">
            Halo, saya Fauzi Rahmat Ramadhan. Saya memiliki latar belakang di bidang Ilmu Komputer
            dengan pengalaman dalam membangun berbagai aplikasi, seperti situs pengaduan, prediksi
            harga mobil bekas, dan layanan pindahan. Saya menguasai pengembangan web modern
            menggunakan React dan Node.js. Selain itu, saya juga memiliki keahlian dalam instalasi,
            perawatan, dan perbaikan perangkat keras dan lunak komputer serta sistem pendingin
            ruangan. Saya selalu bersemangat untuk belajar hal baru dan menghadapi tantangan
            teknologi.
          </p>
        </div>
      </div>

      <div id="Skill" class="bg-white py-10 w-full flex flex-col items-center justify-center">
        <h1 class="text-[2vw]">Skill</h1>
        <hr className="border-amber-800 w-1/14"/>
        <div class="w-3/5">
          <div class="flex justify-between mt-10">
            <img class="w-1/10 " src={skill1} alt="" />
            <img class="w-1/10" src={skill2} alt="" />
            <img class="w-1/10" src={skill3} alt="" />
            <img class="w-1/10" src={skill4} alt="" />
          </div>
          <div class="flex justify-between mt-20">
            <img class="w-1/10 " src={skill5} alt="" />
            <img class="w-1/10" src={skill9} alt="" />
            <img class="w-1/10" src={skill7} alt="" />
            <img class="w-1/10" src={skill8} alt="" />
          </div>
          <div class="flex justify-center mt-20 gap-60">
            <img class="w-2/10 " src={skill6} alt="" />
            <img class="w-1/10" src={skill10} alt="" />
          </div>
          <div class="flex gap-[5vw]">
            <div class="w-1/2 mt-15 shadow-xl rounded-2xl">
              <div class="bg-blue-200 mt-5 mb-2 rounded-t-2xl py-2"><img class="w-1/3 mx-auto bg-blue-200" src={FrontEnd} alt="" /></div>
              <h1 class="mb-2 ml-4 text-[1.8vw] font-bold">Front-end web developer</h1>
              <p class="mx-4 pb-4 text-justify text-[0.8vw]">Saya memiliki keahlian dalam pengembangan Front-End menggunakan React.js untuk membangun antarmuka pengguna yang responsif dan interaktif. Saya juga menguasai Tailwind CSS untuk menciptakan desain yang modern dan dinamis. Selain itu, saya terbiasa merancang wireframe serta high-fidelity prototype guna memastikan pengalaman pengguna yang optimal. Saya juga memiliki kemampuan dalam pengujian antarmuka pengguna untuk meningkatkan kenyamanan dan efisiensi aplikasi. Dalam pengelolaan proyek, saya menerapkan metode Agile/SCRUM agar proses pengembangan berjalan lebih efektif dan terstruktur.</p>
            </div>
            <div class="w-1/2 mt-15 shadow-xl rounded-2xl">
              <div class="bg-blue-200 mt-5 mb-2 rounded-t-2xl py-2"><img class="w-1/3 mx-auto bg-blue-200" src={BackEnd} alt="" /></div>
              <h1 class="mb-2 ml-4 text-[1.8vw] font-bold">Back-end web developer</h1>
              <p class="mx-4 pb-4 text-justify text-[0.8vw]">saya menguasai Node.js dan Express.js untuk mengembangkan aplikasi berbasis server. Saya berpengalaman dalam menggunakan MySQL dan MongoDB untuk mengelola dan menyimpan data secara efisien. Selain itu, saya mampu membangun dan mengelola REST API untuk memastikan komunikasi yang lancar antara Front-End dan Back-End. Saya juga memahami konsep middleware, validasi data, serta otorisasi dengan JWT untuk meningkatkan keamanan aplikasi. Dalam hal deployment, saya terbiasa menggunakan Vercel dan Cpanel untuk menyebarkan aplikasi ke lingkungan produksi.</p>
            </div>
          </div>
        </div>
      </div>

      <div id="Sertifikat" class=" pt-10 pb-10 flex flex-col items-center justify-center w-full">
        <h1 class="text-[2vw]">Setifikat</h1>
        <hr className="border-amber-800 w-1/4"/>
        <div class="flex items-center justify-center gap-20 mt-10">
          <img src={Sertifikat1} class="w-1/5" alt="" />
          <img src={Sertifikat2} class="w-2/5" alt="" />
        </div>
      </div>

      <div id="GaleriPortofolio" class="bg-white w-full flex items-center flex-col pb-10"> 
        <h1 class="text-[2vw] pt-10">Galery Portofolio</h1>
        <hr className="border-amber-800 w-1/4"/>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={5}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Porto1} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto2} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto3} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto4} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto5} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto6} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto7} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto8} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto9} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto10} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto11} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Porto12} />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  );
};

export default HomePage;
