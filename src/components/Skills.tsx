import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div  data-aos='fade-right'>
                <h2 className='text-4xl md:text-5xl'  >Technologies I Work with</h2>
                <p className='text-gray-500 pt-2'> 
                    I have solid foundation in web development,specialization in HTML,CSS,Typescript & Javascript .My experience extends to using frameworks like React & Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind css for effictive styling and design. With a passion for learning. I stay updated on the latest technologies to enhance my skills set and contribute effectively to projects.   
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-purple-950 text-3xl sm:text-4xl'>
<div className='space-y-2'>
    <h2  data-aos='fade-right'>Typescript</h2>
    <h2  data-aos='fade-right'>React.js</h2>
    <h2  data-aos='fade-right' >Next.js</h2>
</div>
<div className='space-y-2'>
    <h2  data-aos='fade-right'>Tailwind</h2>
    <h2  data-aos='fade-right'>CSS</h2>
    <h2  data-aos='fade-right'>Node.js</h2>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills