import { OrbitControls } from "@react-three/drei"
import { Physics } from "@react-three/rapier"
import Lights from "./Lights.jsx"
import Level from "./Level.jsx"

export default function Experience() {
  return (
    <>
      <Physics debug>
        <OrbitControls makeDefault />

        <Lights />

        <Level />
      </Physics>
    </>
  )
}
