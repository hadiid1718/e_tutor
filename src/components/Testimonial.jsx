import React from 'react'
import img1 from "../assets/jd.jpg";
import img2 from "../assets/kristen.jpg";
import img3 from "../assets/ss.jpg";
import img4 from "../assets/ariana.jpg";
import img5 from "../assets/jd.jpg"
import Slider from 'react-slick';




const TestimonialData = [
    {
        id: 1,
        name: "Rehan Shaukat",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed in voluptate, quidem repellendus labore ea at animi aliquam deserunt numquam obcaecati. Ut voluptates vero, praesentium dolorem, ea sit hic necessitatibus dolores reiciendis, saepe quaerat blanditiis commodi explicabo corporis mollitia sed veritatis iure eveniet ipsa asperiores. Laudantium illum nobis ad corrupti.",
        image: img1,
        delay: 0.2
    },
    {
        id: 2,
        name: "Rehan Shaukat",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed in voluptate, quidem repellendus labore ea at animi aliquam deserunt numquam obcaecati. Ut voluptates vero, praesentium dolorem, ea sit hic necessitatibus dolores reiciendis, saepe quaerat blanditiis commodi explicabo corporis mollitia sed veritatis iure eveniet ipsa asperiores. Laudantium illum nobis ad corrupti.",
        image: img2,
        delay: 0.3
    },
    {
        id: 3,
        name: "Umer Marwat",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed in voluptate, quidem repellendus labore ea at animi aliquam deserunt numquam obcaecati. Ut voluptates vero, praesentium dolorem, ea sit hic necessitatibus dolores reiciendis, saepe quaerat blanditiis commodi explicabo corporis mollitia sed veritatis iure eveniet ipsa asperiores. Laudantium illum nobis ad corrupti.",
        image: img3,
        delay: 0.4
    },
    {
        id: 4,
        name: "Muqadas",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed in voluptate, quidem repellendus labore ea at animi aliquam deserunt numquam obcaecati. Ut voluptates vero, praesentium dolorem, ea sit hic necessitatibus dolores reiciendis, saepe quaerat blanditiis commodi explicabo corporis mollitia sed veritatis iure eveniet ipsa asperiores. Laudantium illum nobis ad corrupti.",
        image: img4,
        delay: 0.5
    },
    {
        id: 4,
        name: "Sana Ariana",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed in voluptate, quidem repellendus labore ea at animi aliquam deserunt numquam obcaecati. Ut voluptates vero, praesentium dolorem, ea sit hic necessitatibus dolores reiciendis, saepe quaerat blanditiis commodi explicabo corporis mollitia sed veritatis iure eveniet ipsa asperiores. Laudantium illum nobis ad corrupti.",
        image: img5,
        delay: 0.6
    },
]


const Testimonial = () => {
    const setting = {
      dots: true,
      arrow: false,
      infinite: true,
      speed: 500,
      SlidesToScroll : 1,
      autoplay : true,
      autoplaySpeed: 2000,
      cssEase:  "linear",
      pauseOnHover : true,
      pauseOnfocus : true,
      responsive: [
        {
            breakpoint : 1000,
            settings: {
              SlideToShow : 3,
              SlideToScroll : 1,
              infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings : {
                    SlideToShow: 2,
                    SlideToScroll: 1,
                    initialSlide : 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                SlideToShow: 1,
                SlideToScroll: 1
            }
        }
    ]
    }
  return (
    
    <div className='py-14 mb-10'>
      <div className="container max-w-[850px] ">
        {/* Header Section  */}
        <div className='space-y-4 p-6 text-center max-w-[600px] mx-auto mb-8'>
            <h1 className='text-orange-600 uppercase font-semibold'>Our Testimonial</h1>
            <p className='font-semibold text-3xl'>Why our students say about us</p>
        </div>
        {/* testmonial section */}
        <div>
            <Slider {...setting}>
                {
                    TestimonialData.map((item)=> {
                     return (
                        <div key={item.id}>
                        <div className='flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-blue-50'>
                          {/* Upper Section */}
                          <div className='flex justify-start gap-5 items-center'>
                             <img src={item.image} alt="" className='w-16 h-16 rounded-full'/>
                             <div>
                            <p className='text-lg font-bold text-black/80'>{item.name}</p>
                            <p>{item.name}</p>
                          </div>
                          </div>
                      
                         {/* Bottom Section */}
                         <div className='py-6 space-y-4'>
                            <p className='text-sm text-gray-500'>{item.text}</p>
                            <p>⭐⭐⭐⭐⭐</p>
                         </div>
                        </div>
                     </div>
                     )
                    })
                }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
