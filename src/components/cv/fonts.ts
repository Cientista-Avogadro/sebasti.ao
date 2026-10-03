import { Font } from "@react-pdf/renderer";

/**
 * IBM Plex Sans and Serif, self-hosted in public/fonts, registered once for
 * every react-pdf document so the downloadable CV matches the site's type.
 */
Font.register({
  family: "PlexSans",
  fonts: [
    { src: "/fonts/IBMPlexSans-Regular.ttf" },
    { src: "/fonts/IBMPlexSans-Medium.ttf", fontWeight: 500 },
    { src: "/fonts/IBMPlexSans-SemiBold.ttf", fontWeight: 600 },
  ],
});

Font.register({
  family: "PlexSerif",
  fonts: [
    { src: "/fonts/IBMPlexSerif-Regular.ttf" },
    { src: "/fonts/IBMPlexSerif-SemiBold.ttf", fontWeight: 600 },
  ],
});
