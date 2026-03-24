import { ImageResponse } from "next/og";
import path from "path";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: 700,
          color: "#10b981",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        SM
      </div>
    ),
    {
      ...size,
    }
  );
}