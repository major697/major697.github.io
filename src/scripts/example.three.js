import * as THREE from 'three'
import font from '@/assets/scss/basic/fonts/gentilis_regular.json'

const skillsThreeJs = (box, data) => {
  console.log(data)
  let scene, camera, renderer
  // var color = new THREE.Color('hsl(343, 85%, 50%)')

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(
    120,
    box.clientWidth / box.clientHeight,
    0.1,
    1000,
  )
  camera.position.set(0, 0, 100)

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(box.clientWidth, box.clientHeight)

  const createText = text => {
    const setFont = new THREE.Font(font)

    var textGeo = new THREE.TextGeometry(text, {
      font: setFont,
      size: 15,
      height: 1,
      curveSegments: 1,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.3,
      bevelOffset: 0.5,
      bevelSegments: 1,
    })

    var textMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0000,
    })
    return new THREE.Mesh(textGeo, textMaterial)
  }

  const createPointLight = color => {
    const light = new THREE.PointLight(color, 1)
    light.position.set(0, 0, 20)
    return light
  }

  const l1 = createPointLight(0xffffff)
  const skill = createText('JavaScript')
  skill.position.set(0, 0, 0)

  scene.add(skill, l1)

  const animate = () => {
    requestAnimationFrame(animate)
    // skill.rotation.x += 0.01
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
