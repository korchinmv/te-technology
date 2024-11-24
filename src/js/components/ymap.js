const mapPage = document.querySelector(".contacts__map");

const map = new YMap(mapPage, {
  location: { center: [37.588144, 55.733842], zoom: 5 },
  mode: "vector",
});

const layer = new YMapDefaultSchemeLayer({
  customization: [
    {
      tags: "country",
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ad8f85",
        },
        {
          opacity: 0.8,
          zoom: 0,
        },
        {
          opacity: 0.8,
          zoom: 1,
        },
        {
          opacity: 0.8,
          zoom: 2,
        },
        {
          opacity: 0.8,
          zoom: 3,
        },
        {
          opacity: 0.8,
          zoom: 4,
        },
        {
          opacity: 1,
          zoom: 5,
        },
        {
          opacity: 1,
          zoom: 6,
        },
        {
          opacity: 1,
          zoom: 7,
        },
        {
          opacity: 1,
          zoom: 8,
        },
        {
          opacity: 1,
          zoom: 9,
        },
        {
          opacity: 1,
          zoom: 10,
        },
        {
          opacity: 1,
          zoom: 11,
        },
        {
          opacity: 1,
          zoom: 12,
        },
        {
          opacity: 1,
          zoom: 13,
        },
        {
          opacity: 1,
          zoom: 14,
        },
        {
          opacity: 1,
          zoom: 15,
        },
        {
          opacity: 1,
          zoom: 16,
        },
        {
          opacity: 1,
          zoom: 17,
        },
        {
          opacity: 1,
          zoom: 18,
        },
        {
          opacity: 1,
          zoom: 19,
        },
        {
          opacity: 1,
          zoom: 20,
        },
        {
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "country",
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffb699",
        },
        {
          opacity: 0.15,
          zoom: 0,
        },
        {
          opacity: 0.15,
          zoom: 1,
        },
        {
          opacity: 0.15,
          zoom: 2,
        },
        {
          opacity: 0.15,
          zoom: 3,
        },
        {
          opacity: 0.15,
          zoom: 4,
        },
        {
          opacity: 0.15,
          zoom: 5,
        },
        {
          opacity: 0.25,
          zoom: 6,
        },
        {
          opacity: 0.5,
          zoom: 7,
        },
        {
          opacity: 0.47,
          zoom: 8,
        },
        {
          opacity: 0.44,
          zoom: 9,
        },
        {
          opacity: 0.41,
          zoom: 10,
        },
        {
          opacity: 0.38,
          zoom: 11,
        },
        {
          opacity: 0.35,
          zoom: 12,
        },
        {
          opacity: 0.33,
          zoom: 13,
        },
        {
          opacity: 0.3,
          zoom: 14,
        },
        {
          opacity: 0.28,
          zoom: 15,
        },
        {
          opacity: 0.25,
          zoom: 16,
        },
        {
          opacity: 0.25,
          zoom: 17,
        },
        {
          opacity: 0.25,
          zoom: 18,
        },
        {
          opacity: 0.25,
          zoom: 19,
        },
        {
          opacity: 0.25,
          zoom: 20,
        },
        {
          opacity: 0.25,
          zoom: 21,
        },
      ],
    },
    {
      tags: "region",
      elements: "geometry.fill",
      stylers: [
        {
          color: "#c2aba3",
          opacity: 0.5,
          zoom: 0,
        },
        {
          color: "#c2aba3",
          opacity: 0.5,
          zoom: 1,
        },
        {
          color: "#c2aba3",
          opacity: 0.5,
          zoom: 2,
        },
        {
          color: "#c2aba3",
          opacity: 0.5,
          zoom: 3,
        },
        {
          color: "#c2aba3",
          opacity: 0.5,
          zoom: 4,
        },
        {
          color: "#c2aba3",
          opacity: 0.5,
          zoom: 5,
        },
        {
          color: "#c2aba3",
          opacity: 1,
          zoom: 6,
        },
        {
          color: "#c2aba3",
          opacity: 1,
          zoom: 7,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 8,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 9,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 10,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 11,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 12,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 13,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 14,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 15,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 16,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 17,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 18,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 19,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 20,
        },
        {
          color: "#ad8f85",
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "region",
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffb699",
        },
        {
          opacity: 0.15,
          zoom: 0,
        },
        {
          opacity: 0.15,
          zoom: 1,
        },
        {
          opacity: 0.15,
          zoom: 2,
        },
        {
          opacity: 0.15,
          zoom: 3,
        },
        {
          opacity: 0.15,
          zoom: 4,
        },
        {
          opacity: 0.15,
          zoom: 5,
        },
        {
          opacity: 0.25,
          zoom: 6,
        },
        {
          opacity: 0.5,
          zoom: 7,
        },
        {
          opacity: 0.47,
          zoom: 8,
        },
        {
          opacity: 0.44,
          zoom: 9,
        },
        {
          opacity: 0.41,
          zoom: 10,
        },
        {
          opacity: 0.38,
          zoom: 11,
        },
        {
          opacity: 0.35,
          zoom: 12,
        },
        {
          opacity: 0.33,
          zoom: 13,
        },
        {
          opacity: 0.3,
          zoom: 14,
        },
        {
          opacity: 0.28,
          zoom: 15,
        },
        {
          opacity: 0.25,
          zoom: 16,
        },
        {
          opacity: 0.25,
          zoom: 17,
        },
        {
          opacity: 0.25,
          zoom: 18,
        },
        {
          opacity: 0.25,
          zoom: 19,
        },
        {
          opacity: 0.25,
          zoom: 20,
        },
        {
          opacity: 0.25,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "admin",
        none: ["country", "region", "locality", "district", "address"],
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ad8f85",
        },
        {
          opacity: 0.5,
          zoom: 0,
        },
        {
          opacity: 0.5,
          zoom: 1,
        },
        {
          opacity: 0.5,
          zoom: 2,
        },
        {
          opacity: 0.5,
          zoom: 3,
        },
        {
          opacity: 0.5,
          zoom: 4,
        },
        {
          opacity: 0.5,
          zoom: 5,
        },
        {
          opacity: 1,
          zoom: 6,
        },
        {
          opacity: 1,
          zoom: 7,
        },
        {
          opacity: 1,
          zoom: 8,
        },
        {
          opacity: 1,
          zoom: 9,
        },
        {
          opacity: 1,
          zoom: 10,
        },
        {
          opacity: 1,
          zoom: 11,
        },
        {
          opacity: 1,
          zoom: 12,
        },
        {
          opacity: 1,
          zoom: 13,
        },
        {
          opacity: 1,
          zoom: 14,
        },
        {
          opacity: 1,
          zoom: 15,
        },
        {
          opacity: 1,
          zoom: 16,
        },
        {
          opacity: 1,
          zoom: 17,
        },
        {
          opacity: 1,
          zoom: 18,
        },
        {
          opacity: 1,
          zoom: 19,
        },
        {
          opacity: 1,
          zoom: 20,
        },
        {
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "admin",
        none: ["country", "region", "locality", "district", "address"],
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffb699",
        },
        {
          opacity: 0.15,
          zoom: 0,
        },
        {
          opacity: 0.15,
          zoom: 1,
        },
        {
          opacity: 0.15,
          zoom: 2,
        },
        {
          opacity: 0.15,
          zoom: 3,
        },
        {
          opacity: 0.15,
          zoom: 4,
        },
        {
          opacity: 0.15,
          zoom: 5,
        },
        {
          opacity: 0.25,
          zoom: 6,
        },
        {
          opacity: 0.5,
          zoom: 7,
        },
        {
          opacity: 0.47,
          zoom: 8,
        },
        {
          opacity: 0.44,
          zoom: 9,
        },
        {
          opacity: 0.41,
          zoom: 10,
        },
        {
          opacity: 0.38,
          zoom: 11,
        },
        {
          opacity: 0.35,
          zoom: 12,
        },
        {
          opacity: 0.33,
          zoom: 13,
        },
        {
          opacity: 0.3,
          zoom: 14,
        },
        {
          opacity: 0.28,
          zoom: 15,
        },
        {
          opacity: 0.25,
          zoom: 16,
        },
        {
          opacity: 0.25,
          zoom: 17,
        },
        {
          opacity: 0.25,
          zoom: 18,
        },
        {
          opacity: 0.25,
          zoom: 19,
        },
        {
          opacity: 0.25,
          zoom: 20,
        },
        {
          opacity: 0.25,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "landcover",
        none: "vegetation",
      },
      stylers: [
        {
          hue: "#ffc6ad",
        },
      ],
    },
    {
      tags: "vegetation",
      elements: "geometry",
      stylers: [
        {
          color: "#ffa27a",
          opacity: 0.1,
          zoom: 0,
        },
        {
          color: "#ffa27a",
          opacity: 0.1,
          zoom: 1,
        },
        {
          color: "#ffa27a",
          opacity: 0.1,
          zoom: 2,
        },
        {
          color: "#ffa27a",
          opacity: 0.1,
          zoom: 3,
        },
        {
          color: "#ffa27a",
          opacity: 0.1,
          zoom: 4,
        },
        {
          color: "#ffa27a",
          opacity: 0.1,
          zoom: 5,
        },
        {
          color: "#ffa27a",
          opacity: 0.2,
          zoom: 6,
        },
        {
          color: "#ffc6ad",
          opacity: 0.3,
          zoom: 7,
        },
        {
          color: "#ffc6ad",
          opacity: 0.4,
          zoom: 8,
        },
        {
          color: "#ffc6ad",
          opacity: 0.6,
          zoom: 9,
        },
        {
          color: "#ffc6ad",
          opacity: 0.8,
          zoom: 10,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 11,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 12,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 13,
        },
        {
          color: "#ffcdb7",
          opacity: 1,
          zoom: 14,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 15,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 16,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 17,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 18,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 19,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 20,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "park",
      elements: "geometry",
      stylers: [
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 0,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 1,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 2,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 3,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 4,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 5,
        },
        {
          color: "#ffc6ad",
          opacity: 0.2,
          zoom: 6,
        },
        {
          color: "#ffc6ad",
          opacity: 0.3,
          zoom: 7,
        },
        {
          color: "#ffc6ad",
          opacity: 0.4,
          zoom: 8,
        },
        {
          color: "#ffc6ad",
          opacity: 0.6,
          zoom: 9,
        },
        {
          color: "#ffc6ad",
          opacity: 0.8,
          zoom: 10,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 11,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 12,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 13,
        },
        {
          color: "#ffcdb7",
          opacity: 1,
          zoom: 14,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 15,
        },
        {
          color: "#ffd4c2",
          opacity: 0.9,
          zoom: 16,
        },
        {
          color: "#ffd4c2",
          opacity: 0.8,
          zoom: 17,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 18,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 19,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 20,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 21,
        },
      ],
    },
    {
      tags: "national_park",
      elements: "geometry",
      stylers: [
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 0,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 1,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 2,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 3,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 4,
        },
        {
          color: "#ffc6ad",
          opacity: 0.1,
          zoom: 5,
        },
        {
          color: "#ffc6ad",
          opacity: 0.2,
          zoom: 6,
        },
        {
          color: "#ffc6ad",
          opacity: 0.3,
          zoom: 7,
        },
        {
          color: "#ffc6ad",
          opacity: 0.4,
          zoom: 8,
        },
        {
          color: "#ffc6ad",
          opacity: 0.6,
          zoom: 9,
        },
        {
          color: "#ffc6ad",
          opacity: 0.8,
          zoom: 10,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 11,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 12,
        },
        {
          color: "#ffc6ad",
          opacity: 1,
          zoom: 13,
        },
        {
          color: "#ffcdb7",
          opacity: 1,
          zoom: 14,
        },
        {
          color: "#ffd4c2",
          opacity: 1,
          zoom: 15,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 16,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 17,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 18,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 19,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 20,
        },
        {
          color: "#ffd4c2",
          opacity: 0.7,
          zoom: 21,
        },
      ],
    },
    {
      tags: "cemetery",
      elements: "geometry",
      stylers: [
        {
          color: "#ffc6ad",
          zoom: 0,
        },
        {
          color: "#ffc6ad",
          zoom: 1,
        },
        {
          color: "#ffc6ad",
          zoom: 2,
        },
        {
          color: "#ffc6ad",
          zoom: 3,
        },
        {
          color: "#ffc6ad",
          zoom: 4,
        },
        {
          color: "#ffc6ad",
          zoom: 5,
        },
        {
          color: "#ffc6ad",
          zoom: 6,
        },
        {
          color: "#ffc6ad",
          zoom: 7,
        },
        {
          color: "#ffc6ad",
          zoom: 8,
        },
        {
          color: "#ffc6ad",
          zoom: 9,
        },
        {
          color: "#ffc6ad",
          zoom: 10,
        },
        {
          color: "#ffc6ad",
          zoom: 11,
        },
        {
          color: "#ffc6ad",
          zoom: 12,
        },
        {
          color: "#ffc6ad",
          zoom: 13,
        },
        {
          color: "#ffcdb7",
          zoom: 14,
        },
        {
          color: "#ffd4c2",
          zoom: 15,
        },
        {
          color: "#ffd4c2",
          zoom: 16,
        },
        {
          color: "#ffd4c2",
          zoom: 17,
        },
        {
          color: "#ffd4c2",
          zoom: 18,
        },
        {
          color: "#ffd4c2",
          zoom: 19,
        },
        {
          color: "#ffd4c2",
          zoom: 20,
        },
        {
          color: "#ffd4c2",
          zoom: 21,
        },
      ],
    },
    {
      tags: "sports_ground",
      elements: "geometry",
      stylers: [
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 0,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 1,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 2,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 3,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 4,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 5,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 6,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 7,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 8,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 9,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 10,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 11,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 12,
        },
        {
          color: "#ffb294",
          opacity: 0,
          zoom: 13,
        },
        {
          color: "#ffb99e",
          opacity: 0,
          zoom: 14,
        },
        {
          color: "#ffc1a8",
          opacity: 0.5,
          zoom: 15,
        },
        {
          color: "#ffc2aa",
          opacity: 1,
          zoom: 16,
        },
        {
          color: "#ffc3ac",
          opacity: 1,
          zoom: 17,
        },
        {
          color: "#ffc4ad",
          opacity: 1,
          zoom: 18,
        },
        {
          color: "#ffc6af",
          opacity: 1,
          zoom: 19,
        },
        {
          color: "#ffc7b1",
          opacity: 1,
          zoom: 20,
        },
        {
          color: "#ffc8b3",
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "terrain",
      elements: "geometry",
      stylers: [
        {
          hue: "#ffdfd1",
        },
        {
          opacity: 0.3,
          zoom: 0,
        },
        {
          opacity: 0.3,
          zoom: 1,
        },
        {
          opacity: 0.3,
          zoom: 2,
        },
        {
          opacity: 0.3,
          zoom: 3,
        },
        {
          opacity: 0.3,
          zoom: 4,
        },
        {
          opacity: 0.35,
          zoom: 5,
        },
        {
          opacity: 0.4,
          zoom: 6,
        },
        {
          opacity: 0.6,
          zoom: 7,
        },
        {
          opacity: 0.8,
          zoom: 8,
        },
        {
          opacity: 0.9,
          zoom: 9,
        },
        {
          opacity: 1,
          zoom: 10,
        },
        {
          opacity: 1,
          zoom: 11,
        },
        {
          opacity: 1,
          zoom: 12,
        },
        {
          opacity: 1,
          zoom: 13,
        },
        {
          opacity: 1,
          zoom: 14,
        },
        {
          opacity: 1,
          zoom: 15,
        },
        {
          opacity: 1,
          zoom: 16,
        },
        {
          opacity: 1,
          zoom: 17,
        },
        {
          opacity: 1,
          zoom: 18,
        },
        {
          opacity: 1,
          zoom: 19,
        },
        {
          opacity: 1,
          zoom: 20,
        },
        {
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "geographic_line",
      elements: "geometry",
      stylers: [
        {
          color: "#ff5005",
        },
      ],
    },
    {
      tags: "land",
      elements: "geometry",
      stylers: [
        {
          color: "#ffded1",
          zoom: 0,
        },
        {
          color: "#ffded1",
          zoom: 1,
        },
        {
          color: "#ffded1",
          zoom: 2,
        },
        {
          color: "#ffded1",
          zoom: 3,
        },
        {
          color: "#ffded1",
          zoom: 4,
        },
        {
          color: "#ffe2d6",
          zoom: 5,
        },
        {
          color: "#ffe5db",
          zoom: 6,
        },
        {
          color: "#ffe9e0",
          zoom: 7,
        },
        {
          color: "#ffede5",
          zoom: 8,
        },
        {
          color: "#ffede5",
          zoom: 9,
        },
        {
          color: "#ffede5",
          zoom: 10,
        },
        {
          color: "#ffede5",
          zoom: 11,
        },
        {
          color: "#ffede5",
          zoom: 12,
        },
        {
          color: "#ffede5",
          zoom: 13,
        },
        {
          color: "#fff0ea",
          zoom: 14,
        },
        {
          color: "#fff4f0",
          zoom: 15,
        },
        {
          color: "#fff5f1",
          zoom: 16,
        },
        {
          color: "#fff5f2",
          zoom: 17,
        },
        {
          color: "#fff6f2",
          zoom: 18,
        },
        {
          color: "#fff7f3",
          zoom: 19,
        },
        {
          color: "#fff7f4",
          zoom: 20,
        },
        {
          color: "#fff8f5",
          zoom: 21,
        },
      ],
    },
    {
      tags: "residential",
      elements: "geometry",
      stylers: [
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 0,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 1,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 2,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 3,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 4,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 5,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 6,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 7,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 8,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 9,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 10,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          opacity: 0.5,
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          opacity: 1,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          opacity: 1,
          zoom: 14,
        },
        {
          color: "#ffede6",
          opacity: 1,
          zoom: 15,
        },
        {
          color: "#ffeee8",
          opacity: 1,
          zoom: 16,
        },
        {
          color: "#ffefe9",
          opacity: 1,
          zoom: 17,
        },
        {
          color: "#fff0eb",
          opacity: 1,
          zoom: 18,
        },
        {
          color: "#fff2ed",
          opacity: 1,
          zoom: 19,
        },
        {
          color: "#fff3ee",
          opacity: 1,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "locality",
      elements: "geometry",
      stylers: [
        {
          color: "#ffdfd1",
          zoom: 0,
        },
        {
          color: "#ffdfd1",
          zoom: 1,
        },
        {
          color: "#ffdfd1",
          zoom: 2,
        },
        {
          color: "#ffdfd1",
          zoom: 3,
        },
        {
          color: "#ffdfd1",
          zoom: 4,
        },
        {
          color: "#ffdfd1",
          zoom: 5,
        },
        {
          color: "#ffdfd1",
          zoom: 6,
        },
        {
          color: "#ffdfd1",
          zoom: 7,
        },
        {
          color: "#ffdfd1",
          zoom: 8,
        },
        {
          color: "#ffdfd1",
          zoom: 9,
        },
        {
          color: "#ffdfd1",
          zoom: 10,
        },
        {
          color: "#ffdfd1",
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          zoom: 13,
        },
        {
          color: "#ffe6db",
          zoom: 14,
        },
        {
          color: "#ffede6",
          zoom: 15,
        },
        {
          color: "#ffeee8",
          zoom: 16,
        },
        {
          color: "#ffefe9",
          zoom: 17,
        },
        {
          color: "#fff0eb",
          zoom: 18,
        },
        {
          color: "#fff2ed",
          zoom: 19,
        },
        {
          color: "#fff3ee",
          zoom: 20,
        },
        {
          color: "#fff4f0",
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "structure",
        none: ["building", "fence"],
      },
      elements: "geometry",
      stylers: [
        {
          opacity: 0.9,
        },
        {
          color: "#ffdfd1",
          zoom: 0,
        },
        {
          color: "#ffdfd1",
          zoom: 1,
        },
        {
          color: "#ffdfd1",
          zoom: 2,
        },
        {
          color: "#ffdfd1",
          zoom: 3,
        },
        {
          color: "#ffdfd1",
          zoom: 4,
        },
        {
          color: "#ffdfd1",
          zoom: 5,
        },
        {
          color: "#ffdfd1",
          zoom: 6,
        },
        {
          color: "#ffdfd1",
          zoom: 7,
        },
        {
          color: "#ffdfd1",
          zoom: 8,
        },
        {
          color: "#ffdfd1",
          zoom: 9,
        },
        {
          color: "#ffdfd1",
          zoom: 10,
        },
        {
          color: "#ffdfd1",
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          zoom: 13,
        },
        {
          color: "#ffe6db",
          zoom: 14,
        },
        {
          color: "#ffede6",
          zoom: 15,
        },
        {
          color: "#ffeee8",
          zoom: 16,
        },
        {
          color: "#ffefe9",
          zoom: 17,
        },
        {
          color: "#fff0eb",
          zoom: 18,
        },
        {
          color: "#fff2ed",
          zoom: 19,
        },
        {
          color: "#fff3ee",
          zoom: 20,
        },
        {
          color: "#fff4f0",
          zoom: 21,
        },
      ],
    },
    {
      tags: "building",
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffccb8",
        },
        {
          opacity: 0.7,
          zoom: 0,
        },
        {
          opacity: 0.7,
          zoom: 1,
        },
        {
          opacity: 0.7,
          zoom: 2,
        },
        {
          opacity: 0.7,
          zoom: 3,
        },
        {
          opacity: 0.7,
          zoom: 4,
        },
        {
          opacity: 0.7,
          zoom: 5,
        },
        {
          opacity: 0.7,
          zoom: 6,
        },
        {
          opacity: 0.7,
          zoom: 7,
        },
        {
          opacity: 0.7,
          zoom: 8,
        },
        {
          opacity: 0.7,
          zoom: 9,
        },
        {
          opacity: 0.7,
          zoom: 10,
        },
        {
          opacity: 0.7,
          zoom: 11,
        },
        {
          opacity: 0.7,
          zoom: 12,
        },
        {
          opacity: 0.7,
          zoom: 13,
        },
        {
          opacity: 0.7,
          zoom: 14,
        },
        {
          opacity: 0.7,
          zoom: 15,
        },
        {
          opacity: 0.9,
          zoom: 16,
        },
        {
          opacity: 0.6,
          zoom: 17,
        },
        {
          opacity: 0.6,
          zoom: 18,
        },
        {
          opacity: 0.6,
          zoom: 19,
        },
        {
          opacity: 0.6,
          zoom: 20,
        },
        {
          opacity: 0.6,
          zoom: 21,
        },
      ],
    },
    {
      tags: "building",
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffaf8f",
        },
        {
          opacity: 0.5,
          zoom: 0,
        },
        {
          opacity: 0.5,
          zoom: 1,
        },
        {
          opacity: 0.5,
          zoom: 2,
        },
        {
          opacity: 0.5,
          zoom: 3,
        },
        {
          opacity: 0.5,
          zoom: 4,
        },
        {
          opacity: 0.5,
          zoom: 5,
        },
        {
          opacity: 0.5,
          zoom: 6,
        },
        {
          opacity: 0.5,
          zoom: 7,
        },
        {
          opacity: 0.5,
          zoom: 8,
        },
        {
          opacity: 0.5,
          zoom: 9,
        },
        {
          opacity: 0.5,
          zoom: 10,
        },
        {
          opacity: 0.5,
          zoom: 11,
        },
        {
          opacity: 0.5,
          zoom: 12,
        },
        {
          opacity: 0.5,
          zoom: 13,
        },
        {
          opacity: 0.5,
          zoom: 14,
        },
        {
          opacity: 0.5,
          zoom: 15,
        },
        {
          opacity: 0.5,
          zoom: 16,
        },
        {
          opacity: 1,
          zoom: 17,
        },
        {
          opacity: 1,
          zoom: 18,
        },
        {
          opacity: 1,
          zoom: 19,
        },
        {
          opacity: 1,
          zoom: 20,
        },
        {
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "urban_area",
        none: [
          "residential",
          "industrial",
          "cemetery",
          "park",
          "medical",
          "sports_ground",
          "beach",
          "construction_site",
        ],
      },
      elements: "geometry",
      stylers: [
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 0,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 1,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 2,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 3,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 4,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 5,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 6,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 7,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 8,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 9,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 10,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 11,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 12,
        },
        {
          color: "#ffd1bd",
          opacity: 1,
          zoom: 13,
        },
        {
          color: "#ffd9c9",
          opacity: 1,
          zoom: 14,
        },
        {
          color: "#ffe2d6",
          opacity: 1,
          zoom: 15,
        },
        {
          color: "#ffebe3",
          opacity: 0.67,
          zoom: 16,
        },
        {
          color: "#fff4f0",
          opacity: 0.33,
          zoom: 17,
        },
        {
          color: "#fff4f0",
          opacity: 0,
          zoom: 18,
        },
        {
          color: "#fff4f0",
          opacity: 0,
          zoom: 19,
        },
        {
          color: "#fff4f0",
          opacity: 0,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          opacity: 0,
          zoom: 21,
        },
      ],
    },
    {
      tags: "poi",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "poi",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "poi",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "outdoor",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "outdoor",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "outdoor",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "park",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "park",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "park",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "cemetery",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "cemetery",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "cemetery",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "beach",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "beach",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "beach",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "medical",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "medical",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "medical",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "shopping",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "shopping",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "shopping",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "commercial_services",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "commercial_services",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "commercial_services",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "food_and_drink",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "food_and_drink",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
        },
      ],
    },
    {
      tags: "food_and_drink",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "road",
      elements: "label.icon",
      types: "point",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          "tertiary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "road",
      elements: "label.text.fill",
      types: "point",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      tags: "entrance",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
        {
          hue: "#ff4c05",
        },
      ],
    },
    {
      tags: "locality",
      elements: "label.icon",
      stylers: [
        {
          color: "#ff4c05",
        },
        {
          "secondary-color": "#ffffff",
        },
      ],
    },
    {
      tags: "country",
      elements: "label.text.fill",
      stylers: [
        {
          opacity: 0.8,
        },
        {
          color: "#e64100",
        },
      ],
    },
    {
      tags: "country",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "region",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#e64100",
        },
        {
          opacity: 0.8,
        },
      ],
    },
    {
      tags: "region",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "district",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#e64100",
        },
        {
          opacity: 0.8,
        },
      ],
    },
    {
      tags: "district",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: {
        any: "admin",
        none: ["country", "region", "locality", "district", "address"],
      },
      elements: "label.text.fill",
      stylers: [
        {
          color: "#e64100",
        },
      ],
    },
    {
      tags: {
        any: "admin",
        none: ["country", "region", "locality", "district", "address"],
      },
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "locality",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#992b00",
          zoom: 0,
        },
        {
          color: "#992b00",
          zoom: 1,
        },
        {
          color: "#992b00",
          zoom: 2,
        },
        {
          color: "#992b00",
          zoom: 3,
        },
        {
          color: "#992b00",
          zoom: 4,
        },
        {
          color: "#952a00",
          zoom: 5,
        },
        {
          color: "#912900",
          zoom: 6,
        },
        {
          color: "#8d2800",
          zoom: 7,
        },
        {
          color: "#882600",
          zoom: 8,
        },
        {
          color: "#842500",
          zoom: 9,
        },
        {
          color: "#802400",
          zoom: 10,
        },
        {
          color: "#802400",
          zoom: 11,
        },
        {
          color: "#802400",
          zoom: 12,
        },
        {
          color: "#802400",
          zoom: 13,
        },
        {
          color: "#802400",
          zoom: 14,
        },
        {
          color: "#802400",
          zoom: 15,
        },
        {
          color: "#802400",
          zoom: 16,
        },
        {
          color: "#802400",
          zoom: 17,
        },
        {
          color: "#802400",
          zoom: 18,
        },
        {
          color: "#802400",
          zoom: 19,
        },
        {
          color: "#802400",
          zoom: 20,
        },
        {
          color: "#802400",
          zoom: 21,
        },
      ],
    },
    {
      tags: "locality",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "road",
      elements: "label.text.fill",
      types: "polyline",
      stylers: [
        {
          color: "#b33300",
        },
      ],
    },
    {
      tags: "road",
      elements: "label.text.outline",
      types: "polyline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "road",
      elements: "geometry.fill.pattern",
      types: "polyline",
      stylers: [
        {
          scale: 1,
        },
        {
          color: "#ff5b1a",
        },
      ],
    },
    {
      tags: "road",
      elements: "label.text.fill",
      types: "point",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      tags: "structure",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#cc3d00",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "structure",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "address",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#cc3d00",
        },
        {
          opacity: 0.9,
          zoom: 0,
        },
        {
          opacity: 0.9,
          zoom: 1,
        },
        {
          opacity: 0.9,
          zoom: 2,
        },
        {
          opacity: 0.9,
          zoom: 3,
        },
        {
          opacity: 0.9,
          zoom: 4,
        },
        {
          opacity: 0.9,
          zoom: 5,
        },
        {
          opacity: 0.9,
          zoom: 6,
        },
        {
          opacity: 0.9,
          zoom: 7,
        },
        {
          opacity: 0.9,
          zoom: 8,
        },
        {
          opacity: 0.9,
          zoom: 9,
        },
        {
          opacity: 0.9,
          zoom: 10,
        },
        {
          opacity: 0.9,
          zoom: 11,
        },
        {
          opacity: 0.9,
          zoom: 12,
        },
        {
          opacity: 0.9,
          zoom: 13,
        },
        {
          opacity: 0.9,
          zoom: 14,
        },
        {
          opacity: 0.9,
          zoom: 15,
        },
        {
          opacity: 0.9,
          zoom: 16,
        },
        {
          opacity: 1,
          zoom: 17,
        },
        {
          opacity: 1,
          zoom: 18,
        },
        {
          opacity: 1,
          zoom: 19,
        },
        {
          opacity: 1,
          zoom: 20,
        },
        {
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "address",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
        },
      ],
    },
    {
      tags: "landscape",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#e64100",
          opacity: 1,
          zoom: 0,
        },
        {
          color: "#e64100",
          opacity: 1,
          zoom: 1,
        },
        {
          color: "#e64100",
          opacity: 1,
          zoom: 2,
        },
        {
          color: "#e64100",
          opacity: 1,
          zoom: 3,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 4,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 5,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 6,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 7,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 8,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 9,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 10,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 11,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 12,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 13,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 14,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 15,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 16,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 17,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 18,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 19,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 20,
        },
        {
          color: "#cc3d00",
          opacity: 0.5,
          zoom: 21,
        },
      ],
    },
    {
      tags: "landscape",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.5,
          zoom: 0,
        },
        {
          opacity: 0.5,
          zoom: 1,
        },
        {
          opacity: 0.5,
          zoom: 2,
        },
        {
          opacity: 0.5,
          zoom: 3,
        },
        {
          opacity: 0,
          zoom: 4,
        },
        {
          opacity: 0,
          zoom: 5,
        },
        {
          opacity: 0,
          zoom: 6,
        },
        {
          opacity: 0,
          zoom: 7,
        },
        {
          opacity: 0,
          zoom: 8,
        },
        {
          opacity: 0,
          zoom: 9,
        },
        {
          opacity: 0,
          zoom: 10,
        },
        {
          opacity: 0,
          zoom: 11,
        },
        {
          opacity: 0,
          zoom: 12,
        },
        {
          opacity: 0,
          zoom: 13,
        },
        {
          opacity: 0,
          zoom: 14,
        },
        {
          opacity: 0,
          zoom: 15,
        },
        {
          opacity: 0,
          zoom: 16,
        },
        {
          opacity: 0,
          zoom: 17,
        },
        {
          opacity: 0,
          zoom: 18,
        },
        {
          opacity: 0,
          zoom: 19,
        },
        {
          opacity: 0,
          zoom: 20,
        },
        {
          opacity: 0,
          zoom: 21,
        },
      ],
    },
    {
      tags: "water",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#e04000",
        },
        {
          opacity: 0.8,
        },
      ],
    },
    {
      tags: "water",
      elements: "label.text.outline",
      types: "polyline",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          opacity: 0.2,
        },
      ],
    },
    {
      tags: {
        any: "road_1",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 2.97,
          zoom: 6,
        },
        {
          scale: 3.19,
          zoom: 7,
        },
        {
          scale: 3.53,
          zoom: 8,
        },
        {
          scale: 4,
          zoom: 9,
        },
        {
          scale: 3.61,
          zoom: 10,
        },
        {
          scale: 3.06,
          zoom: 11,
        },
        {
          scale: 2.64,
          zoom: 12,
        },
        {
          scale: 2.27,
          zoom: 13,
        },
        {
          scale: 2.03,
          zoom: 14,
        },
        {
          scale: 1.9,
          zoom: 15,
        },
        {
          scale: 1.86,
          zoom: 16,
        },
        {
          scale: 1.48,
          zoom: 17,
        },
        {
          scale: 1.21,
          zoom: 18,
        },
        {
          scale: 1.04,
          zoom: 19,
        },
        {
          scale: 0.94,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_1",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 0,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 1,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 2,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 3,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 4,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 5,
        },
        {
          color: "#00000000",
          scale: 3.05,
          zoom: 6,
        },
        {
          color: "#00000000",
          scale: 3.05,
          zoom: 7,
        },
        {
          color: "#ffd8c7",
          scale: 3.15,
          zoom: 8,
        },
        {
          color: "#ffdfd1",
          scale: 3.37,
          zoom: 9,
        },
        {
          color: "#ffdfd1",
          scale: 3.36,
          zoom: 10,
        },
        {
          color: "#ffdfd1",
          scale: 3.17,
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          scale: 3,
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          scale: 2.8,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 2.66,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 2.61,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 2.64,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 2.14,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.79,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.55,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.41,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.35,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_2",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 2.97,
          zoom: 6,
        },
        {
          scale: 3.19,
          zoom: 7,
        },
        {
          scale: 3.53,
          zoom: 8,
        },
        {
          scale: 4,
          zoom: 9,
        },
        {
          scale: 3.61,
          zoom: 10,
        },
        {
          scale: 3.06,
          zoom: 11,
        },
        {
          scale: 2.64,
          zoom: 12,
        },
        {
          scale: 2.27,
          zoom: 13,
        },
        {
          scale: 2.03,
          zoom: 14,
        },
        {
          scale: 1.9,
          zoom: 15,
        },
        {
          scale: 1.86,
          zoom: 16,
        },
        {
          scale: 1.48,
          zoom: 17,
        },
        {
          scale: 1.21,
          zoom: 18,
        },
        {
          scale: 1.04,
          zoom: 19,
        },
        {
          scale: 0.94,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_2",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 0,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 1,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 2,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 3,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 4,
        },
        {
          color: "#00000000",
          scale: 1.4,
          zoom: 5,
        },
        {
          color: "#00000000",
          scale: 3.05,
          zoom: 6,
        },
        {
          color: "#00000000",
          scale: 3.05,
          zoom: 7,
        },
        {
          color: "#ffd8c7",
          scale: 3.15,
          zoom: 8,
        },
        {
          color: "#ffdfd1",
          scale: 3.37,
          zoom: 9,
        },
        {
          color: "#ffdfd1",
          scale: 3.36,
          zoom: 10,
        },
        {
          color: "#ffdfd1",
          scale: 3.17,
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          scale: 3,
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          scale: 2.8,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 2.66,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 2.61,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 2.64,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 2.14,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.79,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.55,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.41,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.35,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_3",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 0,
          zoom: 6,
        },
        {
          scale: 0,
          zoom: 7,
        },
        {
          scale: 0,
          zoom: 8,
        },
        {
          scale: 2.51,
          zoom: 9,
        },
        {
          scale: 2.62,
          zoom: 10,
        },
        {
          scale: 1.68,
          zoom: 11,
        },
        {
          scale: 1.67,
          zoom: 12,
        },
        {
          scale: 1.38,
          zoom: 13,
        },
        {
          scale: 1.19,
          zoom: 14,
        },
        {
          scale: 1.08,
          zoom: 15,
        },
        {
          scale: 1.04,
          zoom: 16,
        },
        {
          scale: 0.91,
          zoom: 17,
        },
        {
          scale: 0.84,
          zoom: 18,
        },
        {
          scale: 0.82,
          zoom: 19,
        },
        {
          scale: 0.84,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_3",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffffff",
          scale: 1.6,
          zoom: 0,
        },
        {
          color: "#ffffff",
          scale: 1.6,
          zoom: 1,
        },
        {
          color: "#ffffff",
          scale: 1.6,
          zoom: 2,
        },
        {
          color: "#ffffff",
          scale: 1.6,
          zoom: 3,
        },
        {
          color: "#ffffff",
          scale: 1.6,
          zoom: 4,
        },
        {
          color: "#ffffff",
          scale: 1.6,
          zoom: 5,
        },
        {
          color: "#ffffff",
          scale: 1.6,
          zoom: 6,
        },
        {
          color: "#ffffff",
          scale: 1.6,
          zoom: 7,
        },
        {
          color: "#ffffff",
          scale: 1.29,
          zoom: 8,
        },
        {
          color: "#ffdfd1",
          scale: 4.21,
          zoom: 9,
        },
        {
          color: "#ffdfd1",
          scale: 2.74,
          zoom: 10,
        },
        {
          color: "#ffdfd1",
          scale: 2.04,
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          scale: 2.13,
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          scale: 1.88,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 1.7,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 1.59,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 1.55,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 1.37,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.27,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.23,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.26,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.35,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_4",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 0,
          zoom: 6,
        },
        {
          scale: 0,
          zoom: 7,
        },
        {
          scale: 0,
          zoom: 8,
        },
        {
          scale: 0,
          zoom: 9,
        },
        {
          scale: 1.69,
          zoom: 10,
        },
        {
          scale: 1.26,
          zoom: 11,
        },
        {
          scale: 1.41,
          zoom: 12,
        },
        {
          scale: 1.19,
          zoom: 13,
        },
        {
          scale: 1.04,
          zoom: 14,
        },
        {
          scale: 0.97,
          zoom: 15,
        },
        {
          scale: 1.15,
          zoom: 16,
        },
        {
          scale: 0.99,
          zoom: 17,
        },
        {
          scale: 0.89,
          zoom: 18,
        },
        {
          scale: 0.85,
          zoom: 19,
        },
        {
          scale: 0.85,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_4",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 0,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 1,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 2,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 3,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 4,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 5,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 6,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 7,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 8,
        },
        {
          color: "#ffffff",
          scale: 1.12,
          zoom: 9,
        },
        {
          color: "#ffdfd1",
          scale: 1.9,
          zoom: 10,
        },
        {
          color: "#ffdfd1",
          scale: 1.62,
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          scale: 1.83,
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          scale: 1.64,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 1.51,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 1.44,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 1.69,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 1.47,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.34,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.28,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.28,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.34,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_5",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 0,
          zoom: 6,
        },
        {
          scale: 0,
          zoom: 7,
        },
        {
          scale: 0,
          zoom: 8,
        },
        {
          scale: 0,
          zoom: 9,
        },
        {
          scale: 0,
          zoom: 10,
        },
        {
          scale: 0,
          zoom: 11,
        },
        {
          scale: 1.25,
          zoom: 12,
        },
        {
          scale: 0.95,
          zoom: 13,
        },
        {
          scale: 0.81,
          zoom: 14,
        },
        {
          scale: 0.95,
          zoom: 15,
        },
        {
          scale: 1.1,
          zoom: 16,
        },
        {
          scale: 0.93,
          zoom: 17,
        },
        {
          scale: 0.85,
          zoom: 18,
        },
        {
          scale: 0.82,
          zoom: 19,
        },
        {
          scale: 0.84,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_5",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 0,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 1,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 2,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 3,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 4,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 5,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 6,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 7,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 8,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 9,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 10,
        },
        {
          color: "#ffffff",
          scale: 0.62,
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          scale: 1.61,
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          scale: 1.36,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 1.22,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 1.41,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 1.63,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 1.4,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.27,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.23,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.25,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.34,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_6",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 0,
          zoom: 6,
        },
        {
          scale: 0,
          zoom: 7,
        },
        {
          scale: 0,
          zoom: 8,
        },
        {
          scale: 0,
          zoom: 9,
        },
        {
          scale: 0,
          zoom: 10,
        },
        {
          scale: 0,
          zoom: 11,
        },
        {
          scale: 0,
          zoom: 12,
        },
        {
          scale: 2.25,
          zoom: 13,
        },
        {
          scale: 1.27,
          zoom: 14,
        },
        {
          scale: 1.25,
          zoom: 15,
        },
        {
          scale: 1.31,
          zoom: 16,
        },
        {
          scale: 1.04,
          zoom: 17,
        },
        {
          scale: 0.9,
          zoom: 18,
        },
        {
          scale: 0.85,
          zoom: 19,
        },
        {
          scale: 0.85,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_6",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 0,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 1,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 2,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 3,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 4,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 5,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 6,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 7,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 8,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 9,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 10,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 11,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          scale: 2.31,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 1.7,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 1.76,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 1.89,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 1.55,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.36,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.27,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.27,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.34,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_7",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 0,
          zoom: 6,
        },
        {
          scale: 0,
          zoom: 7,
        },
        {
          scale: 0,
          zoom: 8,
        },
        {
          scale: 0,
          zoom: 9,
        },
        {
          scale: 0,
          zoom: 10,
        },
        {
          scale: 0,
          zoom: 11,
        },
        {
          scale: 0,
          zoom: 12,
        },
        {
          scale: 0,
          zoom: 13,
        },
        {
          scale: 0.9,
          zoom: 14,
        },
        {
          scale: 0.78,
          zoom: 15,
        },
        {
          scale: 0.88,
          zoom: 16,
        },
        {
          scale: 0.8,
          zoom: 17,
        },
        {
          scale: 0.78,
          zoom: 18,
        },
        {
          scale: 0.79,
          zoom: 19,
        },
        {
          scale: 0.83,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_7",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 0,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 1,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 2,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 3,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 4,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 5,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 6,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 7,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 8,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 9,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 10,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 11,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 12,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 1.31,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 1.19,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 1.31,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 1.21,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.17,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.18,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.23,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.33,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_minor",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 0,
          zoom: 6,
        },
        {
          scale: 0,
          zoom: 7,
        },
        {
          scale: 0,
          zoom: 8,
        },
        {
          scale: 0,
          zoom: 9,
        },
        {
          scale: 0,
          zoom: 10,
        },
        {
          scale: 0,
          zoom: 11,
        },
        {
          scale: 0,
          zoom: 12,
        },
        {
          scale: 0,
          zoom: 13,
        },
        {
          scale: 0,
          zoom: 14,
        },
        {
          scale: 0,
          zoom: 15,
        },
        {
          scale: 0.9,
          zoom: 16,
        },
        {
          scale: 0.9,
          zoom: 17,
        },
        {
          scale: 0.9,
          zoom: 18,
        },
        {
          scale: 0.9,
          zoom: 19,
        },
        {
          scale: 0.9,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_minor",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 0,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 1,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 2,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 3,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 4,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 5,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 6,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 7,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 8,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 9,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 10,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 11,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 12,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 0.4,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 0.4,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 1.4,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 1.27,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.27,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.29,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.31,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.32,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_unclassified",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 0,
          zoom: 6,
        },
        {
          scale: 0,
          zoom: 7,
        },
        {
          scale: 0,
          zoom: 8,
        },
        {
          scale: 0,
          zoom: 9,
        },
        {
          scale: 0,
          zoom: 10,
        },
        {
          scale: 0,
          zoom: 11,
        },
        {
          scale: 0,
          zoom: 12,
        },
        {
          scale: 0,
          zoom: 13,
        },
        {
          scale: 0,
          zoom: 14,
        },
        {
          scale: 0,
          zoom: 15,
        },
        {
          scale: 0.9,
          zoom: 16,
        },
        {
          scale: 0.9,
          zoom: 17,
        },
        {
          scale: 0.9,
          zoom: 18,
        },
        {
          scale: 0.9,
          zoom: 19,
        },
        {
          scale: 0.9,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "road_unclassified",
      },
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 0,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 1,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 2,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 3,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 4,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 5,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 6,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 7,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 8,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 9,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 10,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 11,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 12,
        },
        {
          color: "#ffffff",
          scale: 0.4,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 0.4,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 0.4,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 1.4,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 1.27,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 1.27,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.29,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.31,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.32,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        all: "is_tunnel",
        none: "path",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffd8c7",
          zoom: 0,
        },
        {
          color: "#ffd8c7",
          zoom: 1,
        },
        {
          color: "#ffd8c7",
          zoom: 2,
        },
        {
          color: "#ffd8c7",
          zoom: 3,
        },
        {
          color: "#ffd8c7",
          zoom: 4,
        },
        {
          color: "#ffd8c7",
          zoom: 5,
        },
        {
          color: "#ffd8c7",
          zoom: 6,
        },
        {
          color: "#ffd8c7",
          zoom: 7,
        },
        {
          color: "#ffd8c7",
          zoom: 8,
        },
        {
          color: "#ffd8c7",
          zoom: 9,
        },
        {
          color: "#ffd8c7",
          zoom: 10,
        },
        {
          color: "#ffd8c7",
          zoom: 11,
        },
        {
          color: "#ffd8c7",
          zoom: 12,
        },
        {
          color: "#ffd8c7",
          zoom: 13,
        },
        {
          color: "#ffdfd1",
          zoom: 14,
        },
        {
          color: "#ffe6db",
          zoom: 15,
        },
        {
          color: "#ffe7dd",
          zoom: 16,
        },
        {
          color: "#ffe8df",
          zoom: 17,
        },
        {
          color: "#ffe9e0",
          zoom: 18,
        },
        {
          color: "#ffebe2",
          zoom: 19,
        },
        {
          color: "#ffece4",
          zoom: 20,
        },
        {
          color: "#ffede6",
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        all: "path",
        none: "is_tunnel",
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ff8e61",
        },
      ],
    },
    {
      tags: {
        all: "path",
        none: "is_tunnel",
      },
      elements: "geometry.outline",
      stylers: [
        {
          opacity: 0.7,
        },
        {
          color: "#ffdfd1",
          zoom: 0,
        },
        {
          color: "#ffdfd1",
          zoom: 1,
        },
        {
          color: "#ffdfd1",
          zoom: 2,
        },
        {
          color: "#ffdfd1",
          zoom: 3,
        },
        {
          color: "#ffdfd1",
          zoom: 4,
        },
        {
          color: "#ffdfd1",
          zoom: 5,
        },
        {
          color: "#ffdfd1",
          zoom: 6,
        },
        {
          color: "#ffdfd1",
          zoom: 7,
        },
        {
          color: "#ffdfd1",
          zoom: 8,
        },
        {
          color: "#ffdfd1",
          zoom: 9,
        },
        {
          color: "#ffdfd1",
          zoom: 10,
        },
        {
          color: "#ffdfd1",
          zoom: 11,
        },
        {
          color: "#ffdfd1",
          zoom: 12,
        },
        {
          color: "#ffdfd1",
          zoom: 13,
        },
        {
          color: "#ffe6db",
          zoom: 14,
        },
        {
          color: "#ffede6",
          zoom: 15,
        },
        {
          color: "#ffeee8",
          zoom: 16,
        },
        {
          color: "#ffefe9",
          zoom: 17,
        },
        {
          color: "#fff0eb",
          zoom: 18,
        },
        {
          color: "#fff2ed",
          zoom: 19,
        },
        {
          color: "#fff3ee",
          zoom: 20,
        },
        {
          color: "#fff4f0",
          zoom: 21,
        },
      ],
    },
    {
      tags: "road_construction",
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      tags: "road_construction",
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffb294",
          zoom: 0,
        },
        {
          color: "#ffb294",
          zoom: 1,
        },
        {
          color: "#ffb294",
          zoom: 2,
        },
        {
          color: "#ffb294",
          zoom: 3,
        },
        {
          color: "#ffb294",
          zoom: 4,
        },
        {
          color: "#ffb294",
          zoom: 5,
        },
        {
          color: "#ffb294",
          zoom: 6,
        },
        {
          color: "#ffb294",
          zoom: 7,
        },
        {
          color: "#ffb294",
          zoom: 8,
        },
        {
          color: "#ffb294",
          zoom: 9,
        },
        {
          color: "#ffb294",
          zoom: 10,
        },
        {
          color: "#ffb294",
          zoom: 11,
        },
        {
          color: "#ffb294",
          zoom: 12,
        },
        {
          color: "#ffb294",
          zoom: 13,
        },
        {
          color: "#ff8e61",
          zoom: 14,
        },
        {
          color: "#ffb294",
          zoom: 15,
        },
        {
          color: "#ffb89c",
          zoom: 16,
        },
        {
          color: "#ffbea5",
          zoom: 17,
        },
        {
          color: "#ffc4ad",
          zoom: 18,
        },
        {
          color: "#ffcbb6",
          zoom: 19,
        },
        {
          color: "#ffd1be",
          zoom: 20,
        },
        {
          color: "#ffd7c7",
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "ferry",
      },
      stylers: [
        {
          color: "#ff7b47",
        },
      ],
    },
    {
      tags: "transit_location",
      elements: "label.icon",
      stylers: [
        {
          hue: "#ff4c05",
        },
        {
          saturation: 0,
        },
      ],
    },
    {
      tags: "transit_location",
      elements: "label.text.fill",
      stylers: [
        {
          color: "#b88c7a",
        },
      ],
    },
    {
      tags: "transit_location",
      elements: "label.text.outline",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      tags: "transit_schema",
      elements: "geometry.fill",
      stylers: [
        {
          color: "#b88c7a",
        },
        {
          scale: 0.7,
        },
        {
          opacity: 0.6,
          zoom: 0,
        },
        {
          opacity: 0.6,
          zoom: 1,
        },
        {
          opacity: 0.6,
          zoom: 2,
        },
        {
          opacity: 0.6,
          zoom: 3,
        },
        {
          opacity: 0.6,
          zoom: 4,
        },
        {
          opacity: 0.6,
          zoom: 5,
        },
        {
          opacity: 0.6,
          zoom: 6,
        },
        {
          opacity: 0.6,
          zoom: 7,
        },
        {
          opacity: 0.6,
          zoom: 8,
        },
        {
          opacity: 0.6,
          zoom: 9,
        },
        {
          opacity: 0.6,
          zoom: 10,
        },
        {
          opacity: 0.6,
          zoom: 11,
        },
        {
          opacity: 0.6,
          zoom: 12,
        },
        {
          opacity: 0.6,
          zoom: 13,
        },
        {
          opacity: 0.6,
          zoom: 14,
        },
        {
          opacity: 0.5,
          zoom: 15,
        },
        {
          opacity: 0.4,
          zoom: 16,
        },
        {
          opacity: 0.4,
          zoom: 17,
        },
        {
          opacity: 0.4,
          zoom: 18,
        },
        {
          opacity: 0.4,
          zoom: 19,
        },
        {
          opacity: 0.4,
          zoom: 20,
        },
        {
          opacity: 0.4,
          zoom: 21,
        },
      ],
    },
    {
      tags: "transit_schema",
      elements: "geometry.outline",
      stylers: [
        {
          opacity: 0,
        },
      ],
    },
    {
      tags: "transit_line",
      elements: "geometry.fill.pattern",
      stylers: [
        {
          color: "#c2aca3",
        },
        {
          opacity: 0,
          zoom: 0,
        },
        {
          opacity: 0,
          zoom: 1,
        },
        {
          opacity: 0,
          zoom: 2,
        },
        {
          opacity: 0,
          zoom: 3,
        },
        {
          opacity: 0,
          zoom: 4,
        },
        {
          opacity: 0,
          zoom: 5,
        },
        {
          opacity: 0,
          zoom: 6,
        },
        {
          opacity: 0,
          zoom: 7,
        },
        {
          opacity: 0,
          zoom: 8,
        },
        {
          opacity: 0,
          zoom: 9,
        },
        {
          opacity: 0,
          zoom: 10,
        },
        {
          opacity: 0,
          zoom: 11,
        },
        {
          opacity: 0,
          zoom: 12,
        },
        {
          opacity: 1,
          zoom: 13,
        },
        {
          opacity: 1,
          zoom: 14,
        },
        {
          opacity: 1,
          zoom: 15,
        },
        {
          opacity: 1,
          zoom: 16,
        },
        {
          opacity: 1,
          zoom: 17,
        },
        {
          opacity: 1,
          zoom: 18,
        },
        {
          opacity: 1,
          zoom: 19,
        },
        {
          opacity: 1,
          zoom: 20,
        },
        {
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "transit_line",
      elements: "geometry.fill",
      stylers: [
        {
          color: "#c2aca3",
        },
        {
          scale: 0.4,
        },
        {
          opacity: 0,
          zoom: 0,
        },
        {
          opacity: 0,
          zoom: 1,
        },
        {
          opacity: 0,
          zoom: 2,
        },
        {
          opacity: 0,
          zoom: 3,
        },
        {
          opacity: 0,
          zoom: 4,
        },
        {
          opacity: 0,
          zoom: 5,
        },
        {
          opacity: 0,
          zoom: 6,
        },
        {
          opacity: 0,
          zoom: 7,
        },
        {
          opacity: 0,
          zoom: 8,
        },
        {
          opacity: 0,
          zoom: 9,
        },
        {
          opacity: 0,
          zoom: 10,
        },
        {
          opacity: 0,
          zoom: 11,
        },
        {
          opacity: 0,
          zoom: 12,
        },
        {
          opacity: 1,
          zoom: 13,
        },
        {
          opacity: 1,
          zoom: 14,
        },
        {
          opacity: 1,
          zoom: 15,
        },
        {
          opacity: 1,
          zoom: 16,
        },
        {
          opacity: 1,
          zoom: 17,
        },
        {
          opacity: 1,
          zoom: 18,
        },
        {
          opacity: 1,
          zoom: 19,
        },
        {
          opacity: 1,
          zoom: 20,
        },
        {
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "water",
      elements: "geometry",
      stylers: [
        {
          color: "#ffa07a",
          zoom: 0,
        },
        {
          color: "#ffa07a",
          zoom: 1,
        },
        {
          color: "#ffa07a",
          zoom: 2,
        },
        {
          color: "#ffa07a",
          zoom: 3,
        },
        {
          color: "#ffa07a",
          zoom: 4,
        },
        {
          color: "#ffa07a",
          zoom: 5,
        },
        {
          color: "#ffa07a",
          zoom: 6,
        },
        {
          color: "#ffa07a",
          zoom: 7,
        },
        {
          color: "#ffa27e",
          zoom: 8,
        },
        {
          color: "#ffa581",
          zoom: 9,
        },
        {
          color: "#ffa785",
          zoom: 10,
        },
        {
          color: "#ffa887",
          zoom: 11,
        },
        {
          color: "#ffaa88",
          zoom: 12,
        },
        {
          color: "#ffab8a",
          zoom: 13,
        },
        {
          color: "#ffad8c",
          zoom: 14,
        },
        {
          color: "#ffaf8f",
          zoom: 15,
        },
        {
          color: "#ffb191",
          zoom: 16,
        },
        {
          color: "#ffb294",
          zoom: 17,
        },
        {
          color: "#ffb496",
          zoom: 18,
        },
        {
          color: "#ffb699",
          zoom: 19,
        },
        {
          color: "#ffb89b",
          zoom: 20,
        },
        {
          color: "#ffba9e",
          zoom: 21,
        },
      ],
    },
    {
      tags: "water",
      elements: "geometry",
      types: "polyline",
      stylers: [
        {
          opacity: 0.4,
          zoom: 0,
        },
        {
          opacity: 0.4,
          zoom: 1,
        },
        {
          opacity: 0.4,
          zoom: 2,
        },
        {
          opacity: 0.4,
          zoom: 3,
        },
        {
          opacity: 0.6,
          zoom: 4,
        },
        {
          opacity: 0.8,
          zoom: 5,
        },
        {
          opacity: 1,
          zoom: 6,
        },
        {
          opacity: 1,
          zoom: 7,
        },
        {
          opacity: 1,
          zoom: 8,
        },
        {
          opacity: 1,
          zoom: 9,
        },
        {
          opacity: 1,
          zoom: 10,
        },
        {
          opacity: 1,
          zoom: 11,
        },
        {
          opacity: 1,
          zoom: 12,
        },
        {
          opacity: 1,
          zoom: 13,
        },
        {
          opacity: 1,
          zoom: 14,
        },
        {
          opacity: 1,
          zoom: 15,
        },
        {
          opacity: 1,
          zoom: 16,
        },
        {
          opacity: 1,
          zoom: 17,
        },
        {
          opacity: 1,
          zoom: 18,
        },
        {
          opacity: 1,
          zoom: 19,
        },
        {
          opacity: 1,
          zoom: 20,
        },
        {
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: "bathymetry",
      elements: "geometry",
      stylers: [
        {
          hue: "#ffa07a",
        },
      ],
    },
    {
      tags: {
        any: ["industrial", "construction_site"],
      },
      elements: "geometry",
      stylers: [
        {
          color: "#ffd7c7",
          zoom: 0,
        },
        {
          color: "#ffd7c7",
          zoom: 1,
        },
        {
          color: "#ffd7c7",
          zoom: 2,
        },
        {
          color: "#ffd7c7",
          zoom: 3,
        },
        {
          color: "#ffd7c7",
          zoom: 4,
        },
        {
          color: "#ffd7c7",
          zoom: 5,
        },
        {
          color: "#ffd7c7",
          zoom: 6,
        },
        {
          color: "#ffd7c7",
          zoom: 7,
        },
        {
          color: "#ffd7c7",
          zoom: 8,
        },
        {
          color: "#ffd7c7",
          zoom: 9,
        },
        {
          color: "#ffd7c7",
          zoom: 10,
        },
        {
          color: "#ffd7c7",
          zoom: 11,
        },
        {
          color: "#ffd7c7",
          zoom: 12,
        },
        {
          color: "#ffd7c7",
          zoom: 13,
        },
        {
          color: "#ffded1",
          zoom: 14,
        },
        {
          color: "#ffe5db",
          zoom: 15,
        },
        {
          color: "#ffe6dd",
          zoom: 16,
        },
        {
          color: "#ffe8de",
          zoom: 17,
        },
        {
          color: "#ffe9e0",
          zoom: 18,
        },
        {
          color: "#ffeae2",
          zoom: 19,
        },
        {
          color: "#ffece3",
          zoom: 20,
        },
        {
          color: "#ffede5",
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: "transit",
        none: [
          "transit_location",
          "transit_line",
          "transit_schema",
          "is_unclassified_transit",
        ],
      },
      elements: "geometry",
      stylers: [
        {
          color: "#ffd7c7",
          zoom: 0,
        },
        {
          color: "#ffd7c7",
          zoom: 1,
        },
        {
          color: "#ffd7c7",
          zoom: 2,
        },
        {
          color: "#ffd7c7",
          zoom: 3,
        },
        {
          color: "#ffd7c7",
          zoom: 4,
        },
        {
          color: "#ffd7c7",
          zoom: 5,
        },
        {
          color: "#ffd7c7",
          zoom: 6,
        },
        {
          color: "#ffd7c7",
          zoom: 7,
        },
        {
          color: "#ffd7c7",
          zoom: 8,
        },
        {
          color: "#ffd7c7",
          zoom: 9,
        },
        {
          color: "#ffd7c7",
          zoom: 10,
        },
        {
          color: "#ffd7c7",
          zoom: 11,
        },
        {
          color: "#ffd7c7",
          zoom: 12,
        },
        {
          color: "#ffd7c7",
          zoom: 13,
        },
        {
          color: "#ffded1",
          zoom: 14,
        },
        {
          color: "#ffe5db",
          zoom: 15,
        },
        {
          color: "#ffe6dd",
          zoom: 16,
        },
        {
          color: "#ffe8de",
          zoom: 17,
        },
        {
          color: "#ffe9e0",
          zoom: 18,
        },
        {
          color: "#ffeae2",
          zoom: 19,
        },
        {
          color: "#ffece3",
          zoom: 20,
        },
        {
          color: "#ffede5",
          zoom: 21,
        },
      ],
    },
    {
      tags: "fence",
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffc8b3",
        },
        {
          opacity: 0.75,
          zoom: 0,
        },
        {
          opacity: 0.75,
          zoom: 1,
        },
        {
          opacity: 0.75,
          zoom: 2,
        },
        {
          opacity: 0.75,
          zoom: 3,
        },
        {
          opacity: 0.75,
          zoom: 4,
        },
        {
          opacity: 0.75,
          zoom: 5,
        },
        {
          opacity: 0.75,
          zoom: 6,
        },
        {
          opacity: 0.75,
          zoom: 7,
        },
        {
          opacity: 0.75,
          zoom: 8,
        },
        {
          opacity: 0.75,
          zoom: 9,
        },
        {
          opacity: 0.75,
          zoom: 10,
        },
        {
          opacity: 0.75,
          zoom: 11,
        },
        {
          opacity: 0.75,
          zoom: 12,
        },
        {
          opacity: 0.75,
          zoom: 13,
        },
        {
          opacity: 0.75,
          zoom: 14,
        },
        {
          opacity: 0.75,
          zoom: 15,
        },
        {
          opacity: 0.75,
          zoom: 16,
        },
        {
          opacity: 0.45,
          zoom: 17,
        },
        {
          opacity: 0.45,
          zoom: 18,
        },
        {
          opacity: 0.45,
          zoom: 19,
        },
        {
          opacity: 0.45,
          zoom: 20,
        },
        {
          opacity: 0.45,
          zoom: 21,
        },
      ],
    },
    {
      tags: "medical",
      elements: "geometry",
      stylers: [
        {
          color: "#ffd7c7",
          zoom: 0,
        },
        {
          color: "#ffd7c7",
          zoom: 1,
        },
        {
          color: "#ffd7c7",
          zoom: 2,
        },
        {
          color: "#ffd7c7",
          zoom: 3,
        },
        {
          color: "#ffd7c7",
          zoom: 4,
        },
        {
          color: "#ffd7c7",
          zoom: 5,
        },
        {
          color: "#ffd7c7",
          zoom: 6,
        },
        {
          color: "#ffd7c7",
          zoom: 7,
        },
        {
          color: "#ffd7c7",
          zoom: 8,
        },
        {
          color: "#ffd7c7",
          zoom: 9,
        },
        {
          color: "#ffd7c7",
          zoom: 10,
        },
        {
          color: "#ffd7c7",
          zoom: 11,
        },
        {
          color: "#ffd7c7",
          zoom: 12,
        },
        {
          color: "#ffd7c7",
          zoom: 13,
        },
        {
          color: "#ffded1",
          zoom: 14,
        },
        {
          color: "#ffe5db",
          zoom: 15,
        },
        {
          color: "#ffe6dd",
          zoom: 16,
        },
        {
          color: "#ffe8de",
          zoom: 17,
        },
        {
          color: "#ffe9e0",
          zoom: 18,
        },
        {
          color: "#ffeae2",
          zoom: 19,
        },
        {
          color: "#ffece3",
          zoom: 20,
        },
        {
          color: "#ffede5",
          zoom: 21,
        },
      ],
    },
    {
      tags: "beach",
      elements: "geometry",
      stylers: [
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 0,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 1,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 2,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 3,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 4,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 5,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 6,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 7,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 8,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 9,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 10,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 11,
        },
        {
          color: "#ffd7c7",
          opacity: 0.3,
          zoom: 12,
        },
        {
          color: "#ffd7c7",
          opacity: 0.65,
          zoom: 13,
        },
        {
          color: "#ffded1",
          opacity: 1,
          zoom: 14,
        },
        {
          color: "#ffe5db",
          opacity: 1,
          zoom: 15,
        },
        {
          color: "#ffe6dd",
          opacity: 1,
          zoom: 16,
        },
        {
          color: "#ffe8de",
          opacity: 1,
          zoom: 17,
        },
        {
          color: "#ffe9e0",
          opacity: 1,
          zoom: 18,
        },
        {
          color: "#ffeae2",
          opacity: 1,
          zoom: 19,
        },
        {
          color: "#ffece3",
          opacity: 1,
          zoom: 20,
        },
        {
          color: "#ffede5",
          opacity: 1,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        all: ["is_tunnel", "path"],
      },
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ff8657",
        },
        {
          opacity: 0.3,
        },
      ],
    },
    {
      tags: {
        all: ["is_tunnel", "path"],
      },
      elements: "geometry.outline",
      stylers: [
        {
          opacity: 0,
        },
      ],
    },
    {
      tags: "road_limited",
      elements: "geometry.fill",
      stylers: [
        {
          color: "#ffa07a",
        },
        {
          scale: 0,
          zoom: 0,
        },
        {
          scale: 0,
          zoom: 1,
        },
        {
          scale: 0,
          zoom: 2,
        },
        {
          scale: 0,
          zoom: 3,
        },
        {
          scale: 0,
          zoom: 4,
        },
        {
          scale: 0,
          zoom: 5,
        },
        {
          scale: 0,
          zoom: 6,
        },
        {
          scale: 0,
          zoom: 7,
        },
        {
          scale: 0,
          zoom: 8,
        },
        {
          scale: 0,
          zoom: 9,
        },
        {
          scale: 0,
          zoom: 10,
        },
        {
          scale: 0,
          zoom: 11,
        },
        {
          scale: 0,
          zoom: 12,
        },
        {
          scale: 0.1,
          zoom: 13,
        },
        {
          scale: 0.2,
          zoom: 14,
        },
        {
          scale: 0.3,
          zoom: 15,
        },
        {
          scale: 0.5,
          zoom: 16,
        },
        {
          scale: 0.6,
          zoom: 17,
        },
        {
          scale: 0.7,
          zoom: 18,
        },
        {
          scale: 0.79,
          zoom: 19,
        },
        {
          scale: 0.83,
          zoom: 20,
        },
        {
          scale: 0.9,
          zoom: 21,
        },
      ],
    },
    {
      tags: "road_limited",
      elements: "geometry.outline",
      stylers: [
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 0,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 1,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 2,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 3,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 4,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 5,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 6,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 7,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 8,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 9,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 10,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 11,
        },
        {
          color: "#ffffff",
          scale: 1.4,
          zoom: 12,
        },
        {
          color: "#ffffff",
          scale: 0.1,
          zoom: 13,
        },
        {
          color: "#ffe6db",
          scale: 0.2,
          zoom: 14,
        },
        {
          color: "#ffe6db",
          scale: 0.3,
          zoom: 15,
        },
        {
          color: "#ffe9df",
          scale: 0.5,
          zoom: 16,
        },
        {
          color: "#ffebe3",
          scale: 0.6,
          zoom: 17,
        },
        {
          color: "#ffeee7",
          scale: 0.7,
          zoom: 18,
        },
        {
          color: "#fff1eb",
          scale: 1.18,
          zoom: 19,
        },
        {
          color: "#fff2ed",
          scale: 1.23,
          zoom: 20,
        },
        {
          color: "#fff4f0",
          scale: 1.33,
          zoom: 21,
        },
      ],
    },
    {
      tags: {
        any: ["urban_area", "locality"],
      },
      elements: "geometry",
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["terrain", "bathymetry", "landscape"],
        none: "land",
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["park", "cemetery"],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["vegetation"],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: [
          "industrial",
          "construction_site",
          "medical",
          "sports_ground",
          "beach",
        ],
      },
      types: "polygon",
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: "transit",
        none: [
          "transit_location",
          "transit_line",
          "transit_schema",
          "is_unclassified_transit",
        ],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: "urban_area",
        none: [
          "residential",
          "industrial",
          "cemetery",
          "park",
          "medical",
          "sports_ground",
          "beach",
          "construction_site",
        ],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["transit"],
      },
      elements: ["label.icon", "label.text"],
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["outdoor", "park", "cemetery", "medical"],
      },
      elements: "label",
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: "poi",
        none: ["outdoor", "park", "cemetery", "medical"],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: "road",
      },
      types: "point",
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["food_and_drink", "shopping", "commercial_services"],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["traffic_light"],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["entrance"],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["road"],
        none: ["road_1", "road_3", "road_4", "road_5", "road_6", "road_7"],
      },
      elements: "label.icon",
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: ["transit"],
      },
      stylers: {
        visibility: "off",
      },
    },
    {
      tags: {
        any: "landcover",
        none: "vegetation",
      },
      stylers: {
        visibility: "off",
      },
    },
  ],
});

map.addChild(layer);
