import React from 'react'
import { motion } from 'framer-motion'
import { FaBook, FaComputer } from 'react-icons/fa6'


const SubjectData = [
    {
        id: '1',
        name: 'Engineering',
        icon: <FaComputer/>,
        color: "#0063ff",
        delay: 0.2

    },
    {
        id: '2',
        name: 'English',
        icon: <FaBook/>,
        color: "#00C986",
        delay: 0.3

    },
    {
        id: '3',
        name: 'Programming',
        icon: <FaComputer/>,
        color: "#922aee",
        delay: 0.4

    },
    {
        id: '4',
        name: 'Science',
        icon: <FaBook/>,
        color: "#ea7516",
        delay: 0.5

    },
    {
        id: '5',
        name: 'History',
        icon: <FaBook/>,
        color: "#075267",
        delay: 0.6

    },
    {
        id: '6',
        name: 'Psychology',
        icon: <FaBook/>,
        color: "#986d1d",
        delay: 0.7

    },
    {
        id: '7',
        name: 'Web Eng.',
        icon: <FaComputer/>,
        color: "#b93838",
        delay: 0.8

    },
    {
        id: '8',
        name: 'See All',
        icon: <FaBook/>,
        color: "#464646",
        delay: 0.9

    },
]
const SubjectCard = () => {
  return (
    <>
      <div className="container py-16 md:py-24">
        {/* Header sec */}
        <div className='space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5'>
         <h1 className='font-semibold text-orange-500 uppercase '>Our Tutor subject</h1>
         <p className='font-semibold capitalize text-3xl'>find online tutor in any subject</p>
        </div>
        {/* Card section  */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {
                SubjectData.map((subject)=> {
                    return (
                        <motion.div 
                           key={subject.id}
                           initial={{ opacity: 0, x:-200}}
                           whileInView={{ opacity: 1, x:0}}
                           transition={ { type: 'spring', stiffness: 100, delay: subject.delay}}

                        
                        className='border rounded-lg border-purple-950 flex p-4 justify-center items-center gap-4 hover:!scale-105 hover:!shadow-lg duration-200 cursor-pointer'>
                                <div style= {{ backgroundColor: subject.color  + '95'}} className='w-10 h-10 rounded-md flex justify-center items-center text-white '>
                                    {subject.icon}
                                </div>
                                <p>{subject.name}</p>
                            </motion.div>
                    )
                })
            }
        </div>
      </div>
    </>
  )
}

export default SubjectCard
