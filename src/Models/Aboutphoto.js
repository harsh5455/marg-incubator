/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/aboutphoto.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="sample_one"
          geometry={nodes.sample_one.geometry}
          material={nodes.sample_one.material}
          position={[-0.05867974, 2.33902621, -0.20608769]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'sample_one' }}
        />
        <mesh
          name="sample_one001"
          geometry={nodes.sample_one001.geometry}
          material={nodes.sample_one001.material}
          position={[-0.84859049, 1.35843396, 0.02076307]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.7368142, 0.7368142, 0.7368142]}
          userData={{ name: 'sample_one.001' }}
        />
        <mesh
          name="sample_one002"
          geometry={nodes.sample_one002.geometry}
          material={nodes.sample_one002.material}
          position={[1.44049418, 2.38777018, -0.94353235]}
          rotation={[Math.PI / 2, -3e-8, -1.57453967]}
          userData={{ name: 'sample_one.002' }}
        />
        <mesh
          name="sample_one003"
          geometry={nodes.sample_one003.geometry}
          material={nodes.sample_one003.material}
          position={[1.31284475, 1.28011024, -1.1771971]}
          rotation={[Math.PI / 2, 0, -1.54620088]}
          scale={[0.68899041, 0.68899041, 0.68899041]}
          userData={{ name: 'sample_one.003' }}
        />
        <mesh
          name="sample_one004"
          geometry={nodes.sample_one004.geometry}
          material={nodes.sample_one004.material}
          position={[0.35925838, 2.12834954, -1.48961329]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'sample_one.004' }}
        />
        <mesh
          name="sample_two"
          geometry={nodes.sample_two.geometry}
          material={nodes.sample_two.material}
          position={[1.00049686, 1.46869349, -0.06540719]}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'sample_two' }}
        />
        <mesh
          name="sample_two001"
          geometry={nodes.sample_two001.geometry}
          material={nodes.sample_two001.material}
          position={[-0.73355848, 1.17336249, -0.75904053]}
          rotation={[Math.PI / 2, 0, 1.57400324]}
          userData={{ name: 'sample_two.001' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/aboutphoto.glb')
