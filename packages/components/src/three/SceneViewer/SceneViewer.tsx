"use client"

import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { Suspense } from "react"
import { Canvas3D } from "../Canvas3D/Canvas3D"

interface SceneViewerProps {
  src:        string   // chemin vers le fichier .glb / .gltf
  className?: string
  scale?:     number
  position?:  [number, number, number]
}

function Model({ src, scale = 1, position = [0, 0, 0] }: Omit<SceneViewerProps, "className">) {
  const gltf = useLoader(GLTFLoader, src)
  return (
    <primitive
      object={gltf.scene}
      scale={scale}
      position={position}
    />
  )
}

export function SceneViewer({ src, className, scale, position }: SceneViewerProps) {
  return (
    <Canvas3D className={className}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Model src={src} scale={scale} position={position} />
      </Suspense>
    </Canvas3D>
  )
}
