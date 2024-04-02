import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

const Plane = ({ isRotating, ...props }) => {
    const ref = useRef()
    // Load the 3D model and its animations
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref);

    // Use an effect to control the plane's animation based on 'isRotating'
    // Note: Animation names can be found on the Sketchfab website where the 3D model is hosted.
    useEffect(() => {
        if (isRotating) {
            actions["Take 001"].play();
        } else {
            actions["Take 001"].stop();
        }
    }, [actions, isRotating]);
    return (
        <mesh {...props}>
            <primitive object={scene} ref={ref} />
        </mesh>
    )
}

export default Plane