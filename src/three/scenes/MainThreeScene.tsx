import styles from './MainThreeScene.module.css';
import * as THREE from 'three';
import { useRef, useEffect, useState } from 'react';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import pepe_lod1 from '../objects/pepe_lod0.glb';
import Navbar from '../../components/Navbar/Navbar';

const MainThreeScene = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const [onLink, setOnLink] = useState(false);

    useEffect(() => {
        const container = containerRef.current;
        const cursor = cursorRef.current;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
        const renderer = new THREE.WebGLRenderer();
        const loader = new GLTFLoader();

        let mesh: any;
        let mouseX = 0;
        let mouseY = 0;
        let fingerX = 0;
        let fingerY = 0;

        let targetX = 0;
        let targetY = 0;

        const windowHalfX = window.innerWidth / 2;
        const windowHalfY = window.innerHeight / 2;
        let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
        let mouseIn = true;

        init();
        animate();

        function init() {
            // Scene
            scene.background = new THREE.Color(0x0D0D0D);

            // Camera
            camera.position.x = 0;
            camera.position.y = 0;
            camera.position.z = 8;
            camera.castShadow = true

            // Lights
            const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.2);
            scene.add(ambientLight);

            const pointLight = new THREE.PointLight(0xFFFFFF, 0.2);
            pointLight.position.x = 10;
            pointLight.position.y = 10;
            pointLight.position.z = 10;
            scene.add(pointLight);

            const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.5);
            scene.add(directionalLight);

            const directionalLight2 = new THREE.DirectionalLight(0xFFFFFF, 0.5);
            directionalLight2.position.x = 0;
            directionalLight2.position.y = 50;
            directionalLight2.position.z = 0;
            scene.add(directionalLight2);


            // Renderer
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            renderer.outputEncoding = THREE.sRGBEncoding;
            container?.appendChild(renderer.domElement);

            // GLTF
            loader.load(pepe_lod1, (gltf) => createScene(gltf))

            // Listener

            if (isMobile) {
                container?.addEventListener('touchmove', onDocumentTouchMove);
            } else {
                container?.addEventListener('mousemove', onDocumentMouseMove);
            }

            window.addEventListener('resize', onWindowResize);
            window.addEventListener('scroll', onDocumentScroll);
            container?.addEventListener('mouseleave', onMouseLeave);
            container?.addEventListener('mouseenter', onMouseEnter);
        };

        function onWindowResize() {
            renderer.setSize(window.innerWidth, window.innerHeight);

            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

        function onDocumentTouchMove(event: TouchEvent) {
            fingerX = (event.targetTouches[0].clientX - windowHalfX);
            fingerY = (event.targetTouches[0].clientY - windowHalfY);
        };

        function onDocumentMouseMove(event: MouseEvent) {
            mouseX = (event.clientX - windowHalfX);
            mouseY = (event.clientY - windowHalfY);

            let x = event.clientX;
            let y = event.clientY + window.scrollY;

            cursor!.style.left = x + "px";
            cursor!.style.top = y + "px";
        };

        function onDocumentScroll(event: Event) {
            if (event) {
                cursor!.style.opacity = '0';
            }

            if (!mouseIn) {
                cursor!.style.opacity = '0';
            } else {
                setTimeout(() => {
                    cursor!.style.opacity = '1';
                }, 1000)
            }
        };

        function onMouseLeave(event: MouseEvent) {
            if (event) {
                cursor!.style.opacity = '0';
                mouseIn = false;
            }
        }

        function onMouseEnter(event: MouseEvent) {
            if (event) {
                cursor!.style.opacity = '1';
                mouseIn = true;
            }
        }

        function createScene(geometry: GLTF) {
            if (!geometry) {
                throw new Error('Unsuccessful creating scene, undefined geometry');
            }

            mesh = geometry.scene.children[0]

            if (mesh.material.normalScale) {
                mesh.material.normalScale.x = 0.2;
                mesh.material.normalScale.y = 0.2;
            }

            scene.add(mesh);
        };

        function animate() {
            requestAnimationFrame(animate);

            if (isMobile) {
                targetX = fingerX * .0015;
                targetY = fingerY * .0015;

                if (mesh) {
                    mesh.rotation.y += 0.055 * (targetX - mesh.rotation.y);
                    mesh.rotation.x += 0.055 * (targetY - mesh.rotation.x);
                }
            } else {
                targetX = mouseX * .001;
                targetY = mouseY * .001;

                if (mesh) {
                    mesh.rotation.y += 0.05 * (targetX - mesh.rotation.y);
                    mesh.rotation.x += 0.05 * (targetY - mesh.rotation.x);
                }
            };

            renderer.render(scene, camera);
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.wrapper}>
            <Navbar />
            <div ref={cursorRef} className={styles.cursor} />
        </div>
    )
}

export default MainThreeScene