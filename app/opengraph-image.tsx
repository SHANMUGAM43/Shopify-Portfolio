import { ImageResponse } from "next/og";

export const alt = "Shanmugam Paramasivam portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(135deg, #050505 0%, #101014 40%, #1f0b3d 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(168,85,247,0.28), transparent 28%), radial-gradient(circle at bottom left, rgba(124,58,237,0.18), transparent 32%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px 72px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 74,
                  height: 74,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 22,
                  background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
                  fontSize: 30,
                  fontWeight: 800,
                  letterSpacing: -1,
                }}
              >
                SP
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <div style={{ fontSize: 22, color: "#c084fc", fontWeight: 700 }}>
                  Senior Shopify Plus Developer
                </div>
                <div style={{ fontSize: 18, color: "#a1a1aa" }}>
                  Custom storefronts, migrations, accessibility and headless commerce
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                borderRadius: 999,
                border: "1px solid rgba(192,132,252,0.3)",
                padding: "10px 18px",
                color: "#e9d5ff",
                fontSize: 18,
              }}
            >
              shanmugam.dev
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 900,
            }}
          >
            <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 800, letterSpacing: -2.5 }}>
              Shanmugam Paramasivam
            </div>
            <div style={{ fontSize: 34, lineHeight: 1.3, color: "#d4d4d8", maxWidth: 900 }}>
              Building premium Shopify Plus experiences with Liquid, React, Next.js, GraphQL and accessibility-first engineering.
            </div>
          </div>

          <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            {[
              "5+ Years",
              "30+ Shopify Features",
              "20+ Production Stores",
              "95+ Accessibility Score",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  borderRadius: 999,
                  padding: "14px 22px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#f5f5f5",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}
