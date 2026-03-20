import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Box } from "@react-three/drei";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function FourWDDesigner3D() {
  const [vehicle, setVehicle] = useState("landcruiser");
  const [color, setColor] = useState("red");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">3D 4WD Builder (Toyota LandCruiser)</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Controls */}
        <Card className="p-4">
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Customize</h2>

            <div className="space-y-4">
              <div>
                <label>Vehicle</label>
                <Select onValueChange={setVehicle} defaultValue={vehicle}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landcruiser">Toyota LandCruiser</SelectItem>
                    <SelectItem value="chevy">Chevrolet Silverado</SelectItem>
                    <SelectItem value="patrol_y60">Nissan Patrol Y60</SelectItem>
                    <SelectItem value="patrol_y61">Nissan Patrol Y61</SelectItem>
                    <SelectItem value="patrol_y62">Nissan Patrol Y62</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label>Vehicle Color</label>
                <Select onValueChange={setColor} defaultValue={color}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="red">Red</SelectItem>
                    <SelectItem value="blue">Blue</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="green">Green</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            </div>
          </CardContent>
        </Card>

        {/* 3D Viewer */}
        <Card className="lg:col-span-2 h-[500px]">
          <CardContent className="h-full">
            <Canvas camera={{ position: [5, 3, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} />

              {/* Dynamic vehicle body (placeholder shapes for each model) */}
              {vehicle === "landcruiser" && (
                <mesh>
                  <boxGeometry args={[3.5, 1.6, 1.8]} />
                  <meshStandardMaterial color={color} />
                </mesh>
              )}

              {vehicle === "chevy" && (
                <mesh>
                  <boxGeometry args={[4.2, 1.7, 2]} />
                  <meshStandardMaterial color={color} />
                </mesh>
              )}

              {(vehicle === "patrol_y60" || vehicle === "patrol_y61" || vehicle === "patrol_y62") && (
                <mesh>
                  <boxGeometry args={[3.6, 1.7, 1.9]} />
                  <meshStandardMaterial color={color} />
                </mesh>
              )}

              {/* Wheels */}
              <mesh position={[-1.2, -1, 1]}>
                <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
                <meshStandardMaterial color="black" />
              </mesh>
              <mesh position={[1.2, -1, 1]}>
                <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
                <meshStandardMaterial color="black" />
              </mesh>
              <mesh position={[-1.2, -1, -1]}>
                <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
                <meshStandardMaterial color="black" />
              </mesh>
              <mesh position={[1.2, -1, -1]}>
                <cylinderGeometry args={[0.4, 0.4, 0.5, 32]} />
                <meshStandardMaterial color="black" />
              </mesh>

              <OrbitControls enableZoom={true} />
            </Canvas>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
