import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import font from '@/assets/scss/basic/fonts/gentilis_regular.json'

const skillsThreeJs = (box, data) => {
  let scene, camera, renderer

  const radius = 50
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(
    120,
    box.clientWidth / box.clientHeight,
    1,
    1000,
  )
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(box.clientWidth, box.clientHeight)

  camera.position.set(0, 0, 100)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.minDistance = 1
  controls.maxDistance = 1000
  controls.update()

  const random = (min, max) =>
    Math.floor(Math.random() * (max - min)) + min

  const textPosX = y => {
    const count = Math.sqrt(Math.pow(radius, 2) - Math.pow(y, 2))
    return random(1, 3) === 1 ? count * -1 : count
  }

  const createText = text => {
    const setFont = new THREE.Font(font)

    const geometry = new THREE.TextGeometry(text, {
      font: setFont,
      size: 7,
      height: 1,
      curveSegments: 0.2,
      color: 0x000000,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 0.5,
    })

    const letterMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0000,
    })

    const mesh = new THREE.Mesh(geometry, letterMaterial)

    const offset = new THREE.Object3D()
    const y = random(-radius, radius)

    offset.add(mesh)
    lettersBase.add(offset)

    mesh.position.x = textPosX(y)
    mesh.position.y = y
    mesh.position.z = random(-radius, radius)

    const geo = new THREE.SphereBufferGeometry(radius, 32, 32)
    const mat = new THREE.MeshPhongMaterial({
      wireframe: true,
    })
    return new THREE.Mesh(geo, mat)
  }

  const createPointLight = () => {
    return new THREE.HemisphereLight(0xffffff, 0xffffff, 0.6)
  }

  const lettersBase = new THREE.Object3D()
  const l1 = createPointLight()
  const skillText1 = data.map(text => createText(text))

  lettersBase.add(...skillText1)

  scene.add(lettersBase, l1)

  // animate
  const animate = () => {
    requestAnimationFrame(animate)
    // lettersBase.children.forEach(text => {
    //   text.rotation.y += -0.01
    // })
    controls.update()
    renderer.render(scene, camera)
  }

  const resize = () => {
    camera.aspect = box.clientrWidth / box.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(box.clientrWidth, box.clientHeight)
  }

  window.addEventListener('resize', resize, false)

  animate()
  return renderer
}

export default skillsThreeJs
