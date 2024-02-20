import { Canvas } from "@react-three/fiber";
import css from './Earth.module.css'
import Sphere from "./Sphere";



function Earth() {
     return (
         <div className={css.container}>
             <Canvas
                 camera={{
                     fov: 90,
                     position: [0, 0, 3],
                 }}
             >
                 <ambientLight intensity={0.1} />
                 <directionalLight position={[1, 1, 1]} intensity={0.8} />
                 <Sphere/>
             </Canvas>
         </div>
     );
}

export default Earth;
