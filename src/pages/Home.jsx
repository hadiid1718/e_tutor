import React from 'react'
import Banner from '../components/Banner';
import BannerSection from '../components/BannerSection';
import ChooseUs from '../components/ChooseUs';
import Hero from '../components/Hero';
import Numbercounter from '../components/Numbercounter';
import Img1 from "../assets/banner1.png"
import Img2 from "../assets/banner02.png"
import SubjectCard from '../components/SubjectCard';
import Testimonial from '../components/Testimonial';
//Data 
const BannerData = 
    {
        image: Img1,
        tag: "CUSTOMIZE WITH YOUR SERVICE",
        title: "Personalized professional Online tutor pn your Schedule",
        subtitle: "Our Schduling system allows you to select based on  your free time. Lorem ipsum demo text for template,. Keep track of your student class and tutoring schedule, and never miss your lectures. The best online class scheduliing system with easy accessibility. Lorem ipsum is a placeholder text commonly use to demonstrate the visual form",
        link : "#",
    }

const BannerData2 = 
    {
        image: Img2,
        tag: "CUSTOMIZE WITH YOUR SERVICE",
        title: "Talented and Qualified Tutors to Serve You for Help",
        subtitle: "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
        link : "#",
        reverse: ''
    }

const Home = () => {
  return (
    <div>
      <main className='overflow-x-hidden overflow-y-hidden'>
     
       <Banner/>
       <Hero/>
       <Numbercounter/>
       <ChooseUs/>
       <BannerSection {...BannerData}/>
       <BannerSection {...BannerData2} reverse=  {true}/>
       <SubjectCard/>
        <Testimonial/>
        
     </main>
    </div>
  )
}

export default Home
