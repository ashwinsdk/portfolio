import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Edges } from '@react-three/drei';
import * as THREE from 'three';

const HologramCard = ({ project, isActive, reducedMotion }) => {
    const meshRef = useRef();
    const groupRef = useRef();

    useFrame((state) => {
        if (!meshRef.current || !groupRef.current || reducedMotion) return;

        if (isActive && !document.hidden) {
            // Subtle rotation
            groupRef.current.rotation.y += 0.002;

            // Very subtle hover parallax
            const mouseX = (state.mouse.x * Math.PI) / 180;
            const mouseY = (state.mouse.y * Math.PI) / 180;

            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                mouseY * 0.05,
                0.1
            );
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                mouseX * 0.05,
                0.1
            );
        }
    });

    return (
        <group ref={groupRef}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#00AAFF" />

            <Box
                ref={meshRef}
                args={[3.5, 4.5, 0.1]}
                position={[0, 0, 0]}
            >
                <meshStandardMaterial
                    color="#ffffff"
                    transparent
                    opacity={0.05}
                    side={THREE.DoubleSide}
                    emissive="#00AAFF"
                    emissiveIntensity={0.1}
                />
                <Edges
                    threshold={15}
                    color="#ffffff"
                    lineWidth={1.5}
                />
            </Box>

            {/* Blue rim accent */}
            <lineLoop>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={4}
                        array={new Float32Array([
                            -1.75, -2.25, 0.06,
                            1.75, -2.25, 0.06,
                            1.75, 2.25, 0.06,
                            -1.75, 2.25, 0.06
                        ])}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#00AAFF" linewidth={2} transparent opacity={0.6} />
            </lineLoop>
        </group>
    );
};

export default HologramCard;
