import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#09090b",
          padding: "60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #10b981, #34d399)",
          }}
        />
        
        <div style={{ display: "flex", alignItems: "center", gap: "60px" }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              backgroundColor: "#1a1a1d",
              border: "3px solid #10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "72px",
              color: "#10b981",
              fontWeight: 700,
            }}
          >
            SM
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                fontSize: "52px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Sebastião de Sousa Moniz
            </div>
            <div
              style={{
                fontSize: "28px",
                color: "#10b981",
                fontWeight: 600,
              }}
            >
              Senior Software Engineer
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#a1a1aa",
              }}
            >
              System Analyst • AI • Frontend Specialist
            </div>
            <div
              style={{
                fontSize: "18px",
                color: "#71717a",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "8px",
              }}
            >
              📍 Luanda, Angola
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              borderRadius: "20px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              fontSize: "18px",
              color: "#10b981",
              fontWeight: 600,
            }}
          >
            sebasti.ao
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            {["React", "Next.js", ".NET", "AI"].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 16px",
                  borderRadius: "8px",
                  backgroundColor: "#1a1a1d",
                  border: "1px solid #27272a",
                  fontSize: "14px",
                  color: "#a1a1aa",
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}