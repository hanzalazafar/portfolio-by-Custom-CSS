import React from 'react'
import Heading from './Heading';
import Cards from './Cards';

const data =[
    {id:0,
        title: "Resume",
        desc: "An Static resume of my personal details ",
        img:"/project02.PNG",
        tags: ["Html","Css","Typescript"],
    },
    {id:1,
        title: "Grid Assignment",
        desc: "A Grid assignments for different layouts",
        img:"/project01.PNG",
        tags:["Html","Css","Typescript"],
    },
    {id:3,
        title:"Dynamic Resume builer",
        desc:"A Dynamic resume builder of my personal details",
        img:"/project03.PNG",
        tags:["Html","Typescript","Css"]
    }
]


const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My projects'/>
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
           {data.map((el) => (<Cards
           key={el.id}
           title={el.title}
           desc={el.desc}
           img={el.img}
           tags={el.tags}
           />))}
        </div>

    </div>
  )
}

export default Projects