import React from 'react'
import Globe from 'react-globe.gl'
import Button from './Button'

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('datdt240902@gmail.com')
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
  return (
    <section className='c-space my-20 ' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3 border-2 border-gray-400 rounded-lg'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' alt='grid-1' className = "w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className='grid-headtext'>Hi I'm Dat Duong</p>
                        <p className='grid-subtext'>I am a software engineer with a passion for building innovative solutions. I have honed my skills in frontend and AI development, concentrate on normal website and training data AI I love to create products that make a difference in people's lives.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3  border-2 border-gray-400 rounded-lg '>
                <div className='grid-container'>
                    <img src='/assets/grid2.png' alt='grid2' className = "w-full sm:h-[276px] h-fit object-contain" />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>I specialize in some programming languages and frameworks, including React, Node.js, and Python. I have experience with machine learning and AI development, and I am always eager to learn new technologies.</p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-4  border-2 border-gray-400 rounded-lg' >
                <div className='grid-container'>
                    <div className = "rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe width={326}
                            height={326}
                            backgroundColor='rgba(0, 0, 0, 0)'
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            
                        />
                    </div>
                    <div>
                        <p className='grid-headtext'>I work remotely across most timezone</p>
                        <p className='grid-subtext'>• Full-time Software Engineering roles (AI, Full-stack)</p>
                        <p className='grid-subtext'>• Internships or early-career programs </p>
                        <p className='grid-subtext'>• Remote or hybrid work setting</p>
                        <Button name = "Contact Me" containerClass = " w-full mt-20" isBeam />
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3 border-2 border-gray-400 rounded-lg '>
                <div className='grid-container'>
                    <img src='/assets/grid3.png' alt='grid3' className = "w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className='grid-headtext'>My Passion For Coding</p>
                        <p className='grid-subtext'>I’m Dat Duong, a Computer Science graduate from the University of Information and Technology, Vietnam. 
                            I’m currently seeking opportunities in Software Engineering, with a strong interest in AI/ML and Full-stack Web Development. 
                            I love solving real-world problems through code and am always eager to learn and grow in technical environments.</p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-1 xl:row-span-2  border-2 border-gray-400 rounded-lg'>
                <div className='grid-container'>
                    <img src='/assets/grid4.png' alt='grid4' className = "w-full md:h-[180px] sm:h-[276px] h-fit object-cover sm:object-top" />
                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>
                            Contact me
                        </p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg' } alt='copy'/>
                            <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>datdt240902@gmai.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About