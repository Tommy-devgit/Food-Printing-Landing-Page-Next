"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function FoodModel3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog("#2e3f22", 8, 20);

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.set(0, 1.2, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight("#fff8e8", 0.55);
    scene.add(ambient);

    const key = new THREE.DirectionalLight("#ffe9be", 1.25);
    key.position.set(2.4, 4, 3);
    scene.add(key);

    const rim = new THREE.PointLight("#8ad672", 1.8, 20, 2);
    rim.position.set(-3, 1.2, -2.8);
    scene.add(rim);

    const plate = new THREE.Mesh(
      new THREE.CylinderGeometry(3.1, 3.45, 0.25, 64),
      new THREE.MeshStandardMaterial({ color: "#e8e5d8", roughness: 0.32, metalness: 0.06 })
    );
    plate.position.set(0, -1.65, 0);
    scene.add(plate);

    const donut = new THREE.Mesh(
      new THREE.TorusGeometry(1.45, 0.55, 42, 120),
      new THREE.MeshPhysicalMaterial({
        color: "#a9603f",
        roughness: 0.38,
        metalness: 0.02,
        clearcoat: 0.26,
        clearcoatRoughness: 0.33,
      })
    );
    donut.rotation.x = 1.15;
    scene.add(donut);

    const glaze = new THREE.Mesh(
      new THREE.TorusGeometry(1.45, 0.46, 42, 120),
      new THREE.MeshPhysicalMaterial({
        color: "#8d3f66",
        roughness: 0.22,
        transmission: 0.06,
        thickness: 0.7,
      })
    );
    glaze.rotation.x = 1.17;
    glaze.position.y = 0.12;
    scene.add(glaze);

    const sprinkleGeometry = new THREE.CapsuleGeometry(0.045, 0.17, 2, 5);
    const sprinkleMaterial = new THREE.MeshStandardMaterial({ color: "#f4f1df", roughness: 0.35 });
    const sprinkles = new THREE.Group();
    for (let i = 0; i < 56; i += 1) {
      const sprinkle = new THREE.Mesh(sprinkleGeometry, sprinkleMaterial);
      const angle = (i / 56) * Math.PI * 2;
      const radius = 1.22 + Math.random() * 0.28;
      sprinkle.position.set(Math.cos(angle) * radius, 0.42 + Math.random() * 0.22, Math.sin(angle) * radius);
      sprinkle.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      sprinkles.add(sprinkle);
    }
    scene.add(sprinkles);

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshStandardMaterial({ color: "#314724", roughness: 1, metalness: 0 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.8;
    scene.add(ground);

    const clock = new THREE.Clock();
    let raf = 0;
    const animate = () => {
      const t = clock.getElapsedTime();
      donut.rotation.z = t * 0.55;
      glaze.rotation.z = t * 0.55;
      donut.position.y = Math.sin(t * 1.1) * 0.09;
      glaze.position.y = 0.12 + Math.sin(t * 1.1) * 0.09;
      sprinkles.rotation.y = t * 0.35;
      camera.position.x = Math.sin(t * 0.25) * 0.42;
      camera.lookAt(0, 0.2, 0);
      renderer.render(scene, camera);
      raf = window.requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(raf);
      sprinkleGeometry.dispose();
      sprinkleMaterial.dispose();
      renderer.dispose();
      scene.traverse((obj) => {
        if (!(obj instanceof THREE.Mesh)) return;
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <SectionTitle
          eyebrow="3D Showcase"
          title="Live 3D Printed Dessert Module"
          description="Real-time 3D visual for product storytelling. Rotate, light, and motion are rendered with Three.js."
        />
        <div className="mt-8 overflow-hidden rounded-[2rem] border border-[#727b4c] bg-[radial-gradient(circle_at_20%_20%,#617a3f_0%,#314724_54%,#25361d_100%)] p-4 md:p-6">
          <div ref={mountRef} className="h-[420px] w-full rounded-[1.5rem] border border-[#6a7348] bg-transparent md:h-[560px]" />
        </div>
      </Container>
    </section>
  );
}
