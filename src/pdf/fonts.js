import { Font } from "@react-pdf/renderer";

// Use any TTF/OTF files you add under /public/fonts (or a CDN)
Font.register({
  family: "Inter",
  fonts: [
    { src: "/fonts/Inter-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/Inter-Medium.ttf", fontWeight: 500 },
    { src: "/fonts/Inter-Bold.ttf", fontWeight: 700 },
  ],
});
