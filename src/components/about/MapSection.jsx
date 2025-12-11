// src/components/WorldMap.jsx
import React from "react";
import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
    { name: "Pakistan", coordinates: [67.0011, 24.8607] },
    { name: "Iran", coordinates: [51.389, 35.6892] },
    { name: "UAE", coordinates: [55.2708, 25.2048] },
    { name: "Egypt", coordinates: [31.2357, 30.0444] },
    { name: "Brazil", coordinates: [-47.9292, -15.7801] },
    { name: "Santiago", coordinates: [-70.6693, -33.4489] },
    { name: "Argentina", coordinates: [-58.3816, -34.6037] },
    { name: "Guatemala", coordinates: [-90.5133, 14.6349] },
    { name: "Austria", coordinates: [16.3738, 48.2082] },
    { name: "Bangladesh", coordinates: [90.4125, 23.8103] },
    { name: "Singapore", coordinates: [103.8198, 1.3521] },
    { name: "Belarus", coordinates: [27.5619, 53.9006] },
];

const WorldMap = () => {
    return (
        <div className="w-full min-h-[80vh] flex sm:flex-col md:flex-col sm:p-[4vw] md:p-[4vw]  items-center justify-between p-10 py-[6vw] pb-[0]">
            {/* Left Side */}
            <div className="lg:w-1/2 md:w-full w-full md:max-w-full max-w-xl mb-10 lg:mb-0">
                <h2 className="sm:text-[7vw] md:text-[5vw] mb-[2vw] text-[3vw] leading-tight sm:mb-[6vw]">
                Global Presence <br />
                Through Innovation
                </h2>
                <p className="sm:text-[4.5vw] md:text-[2.5vw] sm:w-full w-[80%] lg:text-[2vw] xl:text-[1.8vw] text-[1vw] sm:mt-[2.5vw] md:mt-[2.5vw]">
                At Allastir, our reach extends far beyond boundaries. With a presence in key regions across Asia, Europe, North America, and South America, we work alongside forward-thinking partners and clients around the globe.
                    <br />
                    <br />
                    This international footprint allows us to stay closely connected to diverse markets, adapt swiftly to changing demands, and bring localized insights to every project we undertake.
                </p>
            </div>

            {/* Right Side (Map) */}
            <div className="lg:w-1/2 md:w-full w-full bg-white select-none">
                <ComposableMap
                    projectionConfig={{ scale: 200 }}
                    width={980}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: { fill: "#EAEAEC", outline: "none" },
                                        hover: { fill: "#D6D6DA", outline: "none" },
                                        pressed: { fill: "#D6D6DA", outline: "none" },
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                    {markers.map(({ name, coordinates }) => (
                        <Marker key={name} coordinates={coordinates}>
                            <circle r={6} fill="#DE2A1C" stroke="#fff" strokeWidth={2} />
                            <text
                                textAnchor="middle"
                                y={-10}
                                style={{
                                    fontFamily: "system-ui",
                                    fill: "#5D5A6D",
                                    fontSize: 12,
                                }}
                            >
                                {name}
                            </text>
                        </Marker>
                    ))}
                </ComposableMap>
            </div>
        </div>
    );
};

export default WorldMap;
