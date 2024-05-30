

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/Button";



export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="bg-[#182b50] p-8 font-[sans-serif] max-w-full">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 md:!leading-[55px]">Unlock Premium Features</h2>
            <p className="text-lg lg:text-xl text-white mb-8">Upgrade to our premium plan and supercharge your experience. Don't miss out!</p>
            <Button className="bg-[#a91079] hover:bg-opacity-80 text-white py-3 px-10 text-lg lg:text-xl transform hover:scale-105 hover:shadow-xl">Upgrade Now</Button>
          </div>
          <div className="text-center">
            <img src="https://readymadeui.com/feature-img.webp" alt="Premium Benefits" className="w-11/12 mx-auto" />
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="pt-20">
        <div className="font-sans text-[#333]">
          <div className="text-center max-w-2xl max-md:max-w-md mx-auto">
            <div>
              <h2 className="md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">Crafting Digital Elegance - Exploring <span className="text-blue-600">Tailwind CSS</span> for Intuitive User Interfaces</h2>
              <p className="mt-6 text-sm leading-relaxed">Indulge in a symphony of flavors as we curate culinary masterpieces designed to tantalize your taste buds. Our dishes, meticulously crafted with passion and precision, promise to transform your dining experience into a gastronomic journey.</p>
              <div className="grid sm:grid-cols-3 gap-6 items-center mt-14">
                <div className="flex flex-col items-center text-center">
                  <h5 className="font-bold text-2xl text-blue-600 mb-1">10+</h5>
                  <p className="text-sm font-semibold">Years Experience</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h5 className="font-bold text-2xl text-blue-600 mb-1">890</h5>
                  <p className="text-sm font-semibold">Cases Solved</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <h5 className="font-bold text-2xl text-blue-600 mb-1">250</h5>
                  <p className="text-sm font-semibold">Business Partners</p>
                </div>
              </div>
              <div className="mt-14 flex gap-x-8 gap-y-4 justify-center max-sm:flex-col">
                <button type='button'
                  className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-bold text-sm rounded px-5 py-3">Start a free trial</button>
                <button type='button'
                  className="bg-transparent hover:bg-[#333] hover:text-white border-2 border-[#333] transition-all font-bold text-sm rounded px-5 py-3">API documentation</button>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="px-4 sm:px-10 mt-28">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10">
          <div>
            <h2 className="md:text-4xl text-3xl font-semibold mb-6">100% Secure your data</h2>
            <p>Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit
              occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in. consectetur velit ullamco
              veniam minim aute sit.</p>
            <button
              className="bg-black hover:bg-[#222] text-white flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] fill-current ml-2" viewBox="0 0 492.004 492.004">
                <path
                  d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                  data-original="#000000"></path>
              </svg>
            </button>
          </div>
          <div className="w-full h-full">
            <img src="https://readymadeui.com/login-image.webp" alt="feature" className="w-full h-full object-cover" />
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="py-12">
        <div className="bg-white font-[sans-serif] p-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[#333] inline-block">LATEST BLOGS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
              <img src="https://readymadeui.com/Imagination.webp" alt="Blog Post 1" className="lg:w-2/5 min-h-[250px] h-full object-cover" />
              <div className="p-6 lg:w-3/5">
                <h3 className="text-xl font-bold text-[#333]">A Guide to Igniting Your Imagination</h3>
                <span className="text-sm block text-gray-400 mt-2">10 FEB 2023 | BY JOHN DOE</span>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                <a href="#" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
              </div>
            </div>
            <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
              <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" className="lg:w-2/5 min-h-[250px] h-full object-cover" />
              <div className="p-6 lg:w-3/5">
                <h3 className="text-xl font-bold text-[#333]">Hacks to Supercharge Your Day</h3>
                <span className="text-sm block text-gray-400 mt-2">7 JUN 2023 | BY MARK ADAIR</span>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                <a href="#" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
              </div>
            </div>
            <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
              <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 2" className="lg:w-2/5 min-h-[250px] h-full object-cover" />
              <div className="p-6 lg:w-3/5">
                <h3 className="text-xl font-bold text-[#333]">Trends and Predictions</h3>
                <span className="text-sm block text-gray-400 mt-2">5 OCT 2023 | BY SIMON KONECKI</span>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                <a href="#" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
              </div>
            </div>
            <div className="flex max-lg:flex-col bg-white cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:scale-105 transition-all duration-300">
              <img src="https://readymadeui.com/team-image.webp" alt="Blog Post 2" className="lg:w-2/5 min-h-[250px] h-full object-cover" />
              <div className="p-6 lg:w-3/5">
                <h3 className="text-xl font-bold text-[#333]">Innovators Changing the Game</h3>
                <span className="text-sm block text-gray-400 mt-2">10 DEC 2023 | BY SIMON KONECKI</span>
                <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nunc et tempus blandit.</p>
                <a href="#" className="mt-4 inline-block text-blue-600 text-sm hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper className="max-w-full bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700 py-20 px-6 relative font-[sans-serif]">
        <div className="text-center text-white">
          <h2 className="text-4xl font-extrabold">Subscribe to Our Newsletter</h2>
          <div className="my-6">
            <p className="text-base text-gray-200">Subscribe to our newsletter and stay up to date with the latest news, updates, and exclusive offers. Get valuable insights. Join our community today!</p>
          </div>
          <div className="max-w-2xl left-0 right-0 mx-auto w-full bg-white p-5 flex items-center shadow-lg absolute -bottom-10">
            <input type="email" placeholder="Enter your email" className="w-full bg-gray-50 py-3.5 px-4 text-[#333] text-base focus:outline-none" />
            <button className="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base font-semibold py-3.5 px-6 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </MaxWidthWrapper>


    </>
  )
}
