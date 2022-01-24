/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/finalhome.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions.wave.play()
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
    <group position={[0, -12, 0]} scale={14.01}>
    <primitive object={nodes.Hips} />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.EyeLeft.geometry}
        material={nodes.EyeLeft.material}
        skeleton={nodes.EyeLeft.skeleton}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.EyeRight.geometry}
        material={nodes.EyeRight.material}
        skeleton={nodes.EyeRight.skeleton}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials['Wolf3D_Body.001']}
        skeleton={nodes.Wolf3D_Body.skeleton}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials['Wolf3D_Glasses.001']}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials['Wolf3D_Hair.001']}
        skeleton={nodes.Wolf3D_Hair.skeleton}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials['Wolf3D_Outfit_Bottom.001']}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials['Wolf3D_Outfit_Footwear.001']}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials['Wolf3D_Outfit_Top.001']}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials['Wolf3D_Skin.001']}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        frustumCulled={false}
        castShadow={true}
      />
      <skinnedMesh
        castShadow
        receiveShadow
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials['Wolf3D_Teeth.001']}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        frustumCulled={false}
      />
    </group>
      
    </group>
  )
}

useGLTF.preload('/finalhome.glb')
