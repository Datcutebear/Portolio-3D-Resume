import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from '../sections/CanvasLoader'
import HackerRoom from '../sections/HackerRoom'
import { PerspectiveCamera, Ring } from '@react-three/drei'
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../sections/Target.jsx'
import ReactLogo from '../sections/ReactLogo.jsx'
import Cube from '../sections/Cube.jsx'
import Rings from '../sections/Ring.jsx'
import HeroCamera from '../sections/HeroCamera.jsx'
import { NavLink } from 'react-router-dom'
import Button from '../sections/Button.jsx'


const Hero = () => {
    // const controls = useControls('HackerRoom', {
    //     positionX: { value: 2.5, min: -10, max: 10},
    //     positionY: { value: 2.5, min: -10, max: 10},
    //     positionZ: { value: 2.5, min: -10, max: 10},
    //     rotationX: { value: 0, min: -10, max: 10},
    //     rotationY: { value: 0, min: -10, max: 10},
    //     rotationZ: {value: 0, min: -10, max: 10},
    //     scale: { value: 1, min: 0.1, max: 10},   
    // })
    const isSmall = useMediaQuery({ query: '(max-width: 480px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768p, max-width: 1024px)' });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-xl text-center font-medium text-white font-sans'>
                Hi, I am Dat Duong
                <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'> Building Products & Brands</p>
        </div>
        <div className='w-full h-full inset-0 absolute'>
            {/* <Leva /> */}
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                        // scale = {0.07} 
                        // position ={[controls.positionX, controls.positionY, controls.positionZ]} 
                        // rotation = {[controls.rotationX, controls.rotationY, controls.rotationZ]} 
                        // scale = {[controls.scale, controls.scale, controls.scale]} 
                        
                            position ={sizes.deskPosition} 
                            rotation = {[0, -Math.PI, 0]} 
                            scale = {sizes.deskScale}  
                        />  
                    </HeroCamera>
                    
                    <group>
                        <Target position = {sizes.targetPosition}/>
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Cube position = {sizes.cubePosition} />
                        <Rings position={sizes.ringPosition} />
                    </group>
                    <ambientLight intensity={5} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5}  />
                </Suspense>
            </Canvas>
        </div>
        <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space '>
            <a href="#about" className="w-fit ">
                <Button name="Let's work together" isBeam containerClass=" sm:w-fit w-full sm:min-w-96 border-5 border-white "  />
            </a>
        </div>
    </section>
  )
}

export default Hero