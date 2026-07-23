import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #050505 0%, #12111a 45%, #27114a 100%)",
          borderRadius: "18px",
          color: "white",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: -1,
          border: "2px solid rgba(192,132,252,0.35)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        SP
      </div>
    ),
    size
  );
}
