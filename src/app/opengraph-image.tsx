import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Irvine Consolidated: Engineering intelligence into every workflow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The default share image: the horizon ground, the white logo and the tagline. */
export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/brand/logo-white.png"), "base64");
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        color: "white",
        background:
          "radial-gradient(60% 45% at 50% 108%, rgba(92,136,236,0.55), rgba(5,8,20,0) 70%), linear-gradient(180deg, #05081a 0%, #080d20 100%)",
      }}
    >
      <img src={`data:image/png;base64,${logo}`} height={64} alt="" />
      <div
        style={{
          marginTop: 56,
          fontSize: 76,
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: -2,
          maxWidth: 900,
        }}
      >
        Engineering intelligence into every workflow.
      </div>
      <div style={{ marginTop: 28, fontSize: 30, color: "#c9d1db" }}>
        AI solutions · Software & workflows · Enterprise solutions
      </div>
    </div>,
    size,
  );
}
