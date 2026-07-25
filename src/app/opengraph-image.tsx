import { ImageResponse } from "next/og";

export const alt = "Jayson Alanano — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0B0D0F",
          color: "#E8ECEF",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#F5B13C", letterSpacing: 2 }}>
          // full-stack developer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 800, lineHeight: 1, letterSpacing: -4 }}>
            Jayson
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 132,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -4,
              color: "#F5B13C",
            }}
          >
            Alanano
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#96A0AB" }}>
          React · Next.js · Laravel · React Native — 9+ years · remote-first
        </div>
      </div>
    ),
    { ...size }
  );
}
