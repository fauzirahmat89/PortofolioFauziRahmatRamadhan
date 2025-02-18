import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class=" text-black py-8">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex justify-between">
            <div class="w-full sm:w-1/3 mb-6 sm:mb-0">
              <h3 class="text-[2vw] font-semibold">About Us</h3>
              <p class="mt-2 text-black text-justify text-[1vw]">Saya adalah seorang website developer yang berkomitmen untuk terus belajar dan mengembangkan skill saya.</p>
            </div>
            <div class=" mb-6 sm:mb-0">
              <h3 class="text-[1.2vw] font-semibold">Quick Links</h3>
              <ul class="mt-2 text-gray-400 text-[0.9vw]">
                <li><a href="#" class="hover:text-black">Beranda</a></li>
                <li><a href="#AboutMe" class="hover:text-black">Tentang Saya</a></li>
                <li><a href="#Skill" class="hover:text-black">Skill</a></li>
                <li><a href="#Sertifikat" class="hover:text-black">Sertifikat</a></li>
                <li><a href="#Sertifikat" class="hover:text-black">Galeri Proyek</a></li>
              </ul>
            </div>
            <div class="">
              <h3 class="text-[1.2vw] font-semibold">Follow Me</h3>
              <div class="flex space-x-4 mt-2 text-[0.9vw]">
                <a href="https://github.com/fauzirahmat89" class="text-gray-400 hover:text-black">Github</a>
                <a href="https://www.instagram.com/fauzi_rahmat_ramadhan?igsh=MW1ieGQybzBiY2l3dA==" class="text-gray-400 hover:text-black">Instagram</a>
                <a href="https://www.linkedin.com/in/fauzi-rahmat-ramadhan-a608331a9/" class="text-gray-400 hover:text-black">LinkedIn</a>
              </div>
            </div>
          </div>
          <div class="mt-8 border-t border-gray-700 pt-4 text-center">
            <p class="text-gray-400">&copy; 2025 Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
