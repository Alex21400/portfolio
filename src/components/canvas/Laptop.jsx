import { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../CanvasLoader'

const Laptop = () => {
    const laptop = useGLTF('./gaming_laptop/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={1} />
            {/* <spotLight
                position={[0, 0, 0]}
                angle={0}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />     */}
            <pointLight intensity={2} />
            <primitive 
                object={laptop.scene}
                scale={1}
                position-y={-1}
                position-x={1}
            />
        </mesh>
    )
}

const LaptopCanvas = () => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [-4, 3, 6], fov: 45 }}
            gl={{ preserveDrawingBuffer: true }}
        >   
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Laptop />
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default LaptopCanvas