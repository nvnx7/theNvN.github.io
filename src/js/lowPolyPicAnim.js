import anime from "animejs/lib/anime.es.js";

const data = [
  {
    points: "75,55 105,0 161,86",
    fill: "rgb(41,45,39)",
  },
  {
    points: "103,220 99,166 136,172",
    fill: "rgb(27,28,27)",
  },
  {
    points: "117,131 66,126 99,69",
    fill: "rgb(237,235,237)",
  },
  {
    points: "188,173 184,212 150,171",
    fill: "rgb(78,78,78)",
  },
  {
    points: "78,8 115,30 37,174",
    fill: "rgb(86,89,85)",
  },
  {
    points: "0,98 80,168 44,27",
    fill: "rgb(97,100,96)",
  },
  {
    points: "153,90 87,157 215,187",
    fill: "rgb(185,184,185)",
  },
  {
    points: "26,43 142,40 104,0",
    fill: "rgb(127,129,126)",
  },
  {
    points: "107,114 132,107 123,84",
    fill: "rgb(65,64,65)",
  },
  {
    points: "74,137 109,125 84,75",
    fill: "rgb(208,208,208)",
  },
  {
    points: "41,156 111,122 92,163",
    fill: "rgb(75,75,74)",
  },
  {
    points: "210,142 190,230 165,93",
    fill: "rgb(150,150,150)",
  },
  {
    points: "91,166 54,193 0,161",
    fill: "rgb(155,154,155)",
  },
  {
    points: "79,143 83,76 130,78",
    fill: "rgb(202,201,202)",
  },
  {
    points: "179,180 96,168 187,187",
    fill: "rgb(50,49,50)",
  },
  {
    points: "116,211 128,184 117,256",
    fill: "rgb(225,225,225)",
  },
  {
    points: "200,256 255,256 255,155",
    fill: "rgb(230,230,230)",
  },
  {
    points: "150,55 147,81 97,52",
    fill: "rgb(45,48,45)",
  },
  {
    points: "51,156 57,88 101,46",
    fill: "rgb(73,76,72)",
  },
  {
    points: "109,62 78,83 115,158",
    fill: "rgb(189,189,189)",
  },
  {
    points: "66,133 52,142 122,179",
    fill: "rgb(56,59,56)",
  },
  {
    points: "147,84 181,159 93,157",
    fill: "rgb(186,186,186)",
  },
  {
    points: "45,79 140,54 125,5",
    fill: "rgb(100,102,99)",
  },
  {
    points: "183,148 149,77 178,113",
    fill: "rgb(106,106,107)",
  },
  {
    points: "91,118 151,162 155,181",
    fill: "rgb(141,141,141)",
  },
  {
    points: "200,228 145,256 161,187",
    fill: "rgb(192,192,192)",
  },
  {
    points: "89,151 98,135 81,149",
    fill: "rgb(200,199,201)",
  },
  {
    points: "156,180 166,185 184,208",
    fill: "rgb(0,0,0)",
  },
  {
    points: "96,144 161,160 97,160",
    fill: "rgb(192,192,192)",
  },
  {
    points: "134,95 118,107 131,105",
    fill: "rgb(31,31,31)",
  },
  {
    points: "121,98 119,112 133,88",
    fill: "rgb(219,219,219)",
  },
  {
    points: "205,98 201,105 237,74",
    fill: "rgb(111,111,111)",
  },
  {
    points: "114,114 125,85 118,96",
    fill: "rgb(0,0,0)",
  },
  {
    points: "167,177 177,175 184,153",
    fill: "rgb(91,91,91)",
  },
  {
    points: "217,169 204,242 177,195",
    fill: "rgb(184,184,184)",
  },
  {
    points: "215,206 166,181 186,208",
    fill: "rgb(187,187,187)",
  },
  {
    points: "102,146 104,137 88,132",
    fill: "rgb(33,32,34)",
  },
  {
    points: "73,79 42,134 82,106",
    fill: "rgb(74,77,72)",
  },
  {
    points: "128,18 0,125 48,25",
    fill: "rgb(117,120,117)",
  },
  {
    points: "38,187 0,155 99,178",
    fill: "rgb(147,147,147)",
  },
  {
    points: "167,132 105,124 166,84",
    fill: "rgb(186,186,187)",
  },
  {
    points: "140,166 172,133 138,175",
    fill: "rgb(122,122,122)",
  },
  {
    points: "138,79 123,94 155,89",
    fill: "rgb(201,200,201)",
  },
  {
    points: "67,130 100,127 129,74",
    fill: "rgb(192,192,192)",
  },
  {
    points: "186,108 208,157 159,95",
    fill: "rgb(138,138,138)",
  },
  {
    points: "247,103 217,195 192,106",
    fill: "rgb(198,198,198)",
  },
  {
    points: "119,256 110,235 20,194",
    fill: "rgb(123,128,121)",
  },
  {
    points: "121,74 141,55 109,69",
    fill: "rgb(69,71,68)",
  },
  {
    points: "57,85 29,167 64,159",
    fill: "rgb(93,96,91)",
  },
  {
    points: "84,86 71,79 82,95",
    fill: "rgb(159,157,159)",
  },
  {
    points: "28,168 0,98 6,170",
    fill: "rgb(135,136,135)",
  },
  {
    points: "136,107 66,113 120,134",
    fill: "rgb(177,177,177)",
  },
  {
    points: "222,89 250,195 258,68",
    fill: "rgb(207,207,207)",
  },
  {
    points: "95,133 79,151 79,142",
    fill: "rgb(29,29,30)",
  },
  {
    points: "84,137 124,84 102,62",
    fill: "rgb(197,197,197)",
  },
  {
    points: "97,143 116,168 151,157",
    fill: "rgb(186,186,186)",
  },
  {
    points: "58,100 131,36 44,81",
    fill: "rgb(91,92,90)",
  },
  {
    points: "71,133 71,114 123,75",
    fill: "rgb(195,195,195)",
  },
  {
    points: "151,179 136,178 181,208",
    fill: "rgb(196,195,196)",
  },
  {
    points: "183,177 214,191 205,155",
    fill: "rgb(163,163,163)",
  },
  {
    points: "94,177 84,158 59,161",
    fill: "rgb(131,130,131)",
  },
  {
    points: "39,118 22,113 37,123",
    fill: "rgb(162,161,163)",
  },
  {
    points: "169,108 156,172 182,155",
    fill: "rgb(174,174,174)",
  },
  {
    points: "140,76 124,89 124,85",
    fill: "rgb(82,81,82)",
  },
  {
    points: "135,93 133,95 137,103",
    fill: "rgb(53,52,53)",
  },
  {
    points: "93,140 154,88 81,152",
    fill: "rgb(178,178,178)",
  },
  {
    points: "149,73 160,86 154,70",
    fill: "rgb(208,207,208)",
  },
  {
    points: "136,180 112,209 196,216",
    fill: "rgb(184,184,184)",
  },
  {
    points: "98,152 125,98 115,137",
    fill: "rgb(150,150,150)",
  },
  {
    points: "120,73 149,64 130,38",
    fill: "rgb(72,76,71)",
  },
  {
    points: "151,90 129,73 155,137",
    fill: "rgb(191,191,191)",
  },
  {
    points: "105,178 136,180 91,157",
    fill: "rgb(75,76,75)",
  },
  {
    points: "87,79 79,99 131,145",
    fill: "rgb(198,198,198)",
  },
  {
    points: "10,68 70,11 105,4",
    fill: "rgb(129,130,129)",
  },
  {
    points: "180,147 160,178 153,177",
    fill: "rgb(193,193,193)",
  },
  {
    points: "138,49 47,59 127,17",
    fill: "rgb(103,107,102)",
  },
  {
    points: "159,88 151,79 126,68",
    fill: "rgb(27,25,27)",
  },
  {
    points: "81,142 81,127 109,108",
    fill: "rgb(196,196,196)",
  },
  {
    points: "32,38 91,0 65,10",
    fill: "rgb(174,173,174)",
  },
  {
    points: "203,100 239,74 184,117",
    fill: "rgb(132,132,132)",
  },
  {
    points: "184,156 179,106 176,124",
    fill: "rgb(95,94,94)",
  },
  {
    points: "28,46 4,18 25,39",
    fill: "rgb(228,228,228)",
  },
  {
    points: "243,128 184,121 223,89",
    fill: "rgb(192,192,192)",
  },
  {
    points: "129,173 99,161 169,174",
    fill: "rgb(161,161,161)",
  },
  {
    points: "48,41 34,106 48,104",
    fill: "rgb(130,128,130)",
  },
  {
    points: "219,84 245,72 255,69",
    fill: "rgb(149,149,149)",
  },
  {
    points: "0,19 77,-10 74,9",
    fill: "rgb(203,203,203)",
  },
  {
    points: "170,102 193,137 192,109",
    fill: "rgb(151,151,151)",
  },
  {
    points: "202,169 183,166 186,126",
    fill: "rgb(184,185,184)",
  },
  {
    points: "155,178 112,229 178,231",
    fill: "rgb(188,188,188)",
  },
  {
    points: "184,210 192,195 190,163",
    fill: "rgb(161,162,162)",
  },
  {
    points: "115,108 137,104 110,111",
    fill: "rgb(69,69,69)",
  },
  {
    points: "95,153 141,103 138,99",
    fill: "rgb(169,169,169)",
  },
  {
    points: "100,126 126,153 114,132",
    fill: "rgb(122,122,122)",
  },
  {
    points: "151,59 158,8 147,47",
    fill: "rgb(133,133,133)",
  },
  {
    points: "121,201 113,209 113,230",
    fill: "rgb(215,214,215)",
  },
  {
    points: "190,107 244,209 197,131",
    fill: "rgb(201,201,201)",
  },
  {
    points: "61,181 31,164 35,189",
    fill: "rgb(155,154,155)",
  },
  {
    points: "86,159 101,174 53,190",
    fill: "rgb(129,128,129)",
  },
  {
    points: "106,124 90,81 112,67",
    fill: "rgb(191,191,192)",
  },
  {
    points: "165,184 171,191 197,189",
    fill: "rgb(171,171,171)",
  },
  {
    points: "134,179 112,207 162,194",
    fill: "rgb(182,182,182)",
  },
  {
    points: "255,195 190,256 255,109",
    fill: "rgb(208,208,208)",
  },
  {
    points: "190,70 164,28 186,30",
    fill: "rgb(188,188,188)",
  },
  {
    points: "63,243 94,231 114,256",
    fill: "rgb(130,136,129)",
  },
  {
    points: "114,104 116,111 126,86",
    fill: "rgb(29,29,29)",
  },
  {
    points: "40,50 0,106 8,142",
    fill: "rgb(127,133,125)",
  },
  {
    points: "69,114 108,94 78,137",
    fill: "rgb(192,192,192)",
  },
  {
    points: "233,75 212,41 200,101",
    fill: "rgb(189,188,189)",
  },
  {
    points: "137,116 105,117 142,165",
    fill: "rgb(183,183,183)",
  },
  {
    points: "98,215 111,195 112,240",
    fill: "rgb(95,93,95)",
  },
  {
    points: "37,39 19,27 30,44",
    fill: "rgb(161,160,161)",
  },
  {
    points: "220,151 188,109 237,105",
    fill: "rgb(192,192,192)",
  },
  {
    points: "205,218 212,201 214,185",
    fill: "rgb(157,157,157)",
  },
  {
    points: "136,172 147,165 170,161",
    fill: "rgb(142,142,142)",
  },
  {
    points: "154,178 109,169 168,182",
    fill: "rgb(56,56,56)",
  },
  {
    points: "212,217 196,177 189,183",
    fill: "rgb(198,198,198)",
  },
  {
    points: "108,133 110,165 133,163",
    fill: "rgb(187,187,187)",
  },
  {
    points: "175,179 190,189 178,175",
    fill: "rgb(120,120,120)",
  },
  {
    points: "130,221 137,177 159,186",
    fill: "rgb(179,180,179)",
  },
  {
    points: "99,131 73,155 93,131",
    fill: "rgb(42,42,41)",
  },
  {
    points: "115,12 81,8 102,35",
    fill: "rgb(121,122,121)",
  },
  {
    points: "52,189 80,187 64,214",
    fill: "rgb(112,113,112)",
  },
  {
    points: "148,166 147,159 176,121",
    fill: "rgb(154,154,154)",
  },
  {
    points: "41,166 52,121 23,123",
    fill: "rgb(106,107,105)",
  },
  {
    points: "108,231 119,256 107,256",
    fill: "rgb(114,113,114)",
  },
  {
    points: "140,36 89,0 126,19",
    fill: "rgb(141,139,141)",
  },
  {
    points: "40,92 76,52 82,79",
    fill: "rgb(103,103,102)",
  },
  {
    points: "167,192 161,189 157,181",
    fill: "rgb(197,196,197)",
  },
  {
    points: "142,63 121,46 116,75",
    fill: "rgb(76,80,75)",
  },
  {
    points: "70,151 52,108 47,162",
    fill: "rgb(88,92,86)",
  },
  {
    points: "132,31 150,0 150,24",
    fill: "rgb(172,172,172)",
  },
  {
    points: "83,83 81,93 68,77",
    fill: "rgb(127,127,127)",
  },
  {
    points: "147,103 156,157 132,99",
    fill: "rgb(187,187,186)",
  },
  {
    points: "179,161 165,174 167,155",
    fill: "rgb(192,192,192)",
  },
  {
    points: "190,111 169,111 192,116",
    fill: "rgb(116,116,116)",
  },
  {
    points: "130,73 142,82 139,104",
    fill: "rgb(164,164,164)",
  },
  {
    points: "91,61 127,59 127,31",
    fill: "rgb(89,93,88)",
  },
  {
    points: "79,145 77,134 67,124",
    fill: "rgb(137,136,137)",
  },
  {
    points: "110,110 129,111 114,123",
    fill: "rgb(143,142,142)",
  },
  {
    points: "103,130 102,115 155,114",
    fill: "rgb(181,182,181)",
  },
  {
    points: "73,133 63,131 69,118",
    fill: "rgb(139,137,139)",
  },
  {
    points: "197,52 188,110 208,96",
    fill: "rgb(171,171,171)",
  },
  {
    points: "55,120 29,105 43,105",
    fill: "rgb(94,97,93)",
  },
  {
    points: "100,72 87,107 83,81",
    fill: "rgb(204,204,204)",
  },
  {
    points: "36,170 13,176 84,163",
    fill: "rgb(163,163,163)",
  },
  {
    points: "92,131 105,146 103,135",
    fill: "rgb(52,52,53)",
  },
  {
    points: "169,1 158,28 190,53",
    fill: "rgb(194,194,194)",
  },
  {
    points: "22,55 35,71 90,15",
    fill: "rgb(125,128,124)",
  },
  {
    points: "101,171 82,155 86,171",
    fill: "rgb(114,114,114)",
  },
  {
    points: "129,94 126,90 120,105",
    fill: "rgb(202,203,202)",
  },
  {
    points: "106,119 125,73 107,78",
    fill: "rgb(191,191,191)",
  },
  {
    points: "66,128 97,131 78,113",
    fill: "rgb(190,190,190)",
  },
  {
    points: "168,109 164,169 177,139",
    fill: "rgb(177,177,177)",
  },
  {
    points: "214,182 187,119 199,155",
    fill: "rgb(165,165,165)",
  },
  {
    points: "58,80 35,58 59,84",
    fill: "rgb(131,131,131)",
  },
  {
    points: "90,61 77,56 57,93",
    fill: "rgb(88,93,86)",
  },
  {
    points: "117,202 127,219 136,177",
    fill: "rgb(187,187,187)",
  },
  {
    points: "85,144 86,147 104,133",
    fill: "rgb(196,195,196)",
  },
  {
    points: "113,166 122,169 175,149",
    fill: "rgb(178,178,179)",
  },
  {
    points: "156,84 159,90 142,73",
    fill: "rgb(28,28,28)",
  },
  {
    points: "132,74 108,103 112,76",
    fill: "rgb(191,191,191)",
  },
  {
    points: "125,108 148,142 122,126",
    fill: "rgb(178,178,178)",
  },
  {
    points: "113,137 89,154 97,159",
    fill: "rgb(164,164,164)",
  },
  {
    points: "244,74 255,75 255,126",
    fill: "rgb(213,213,213)",
  },
  {
    points: "19,62 0,27 20,50",
    fill: "rgb(165,165,165)",
  },
  {
    points: "159,88 162,88 150,66",
    fill: "rgb(196,196,196)",
  },
  {
    points: "142,251 210,215 176,212",
    fill: "rgb(199,200,199)",
  },
  {
    points: "99,62 91,77 108,61",
    fill: "rgb(151,151,152)",
  },
  {
    points: "211,179 199,145 203,148",
    fill: "rgb(153,153,153)",
  },
  {
    points: "106,52 128,22 137,42",
    fill: "rgb(102,104,101)",
  },
  {
    points: "104,62 88,133 102,117",
    fill: "rgb(193,193,193)",
  },
  {
    points: "255,222 175,256 228,256",
    fill: "rgb(219,219,219)",
  },
  {
    points: "109,128 125,154 128,151",
    fill: "rgb(118,118,118)",
  },
  {
    points: "132,84 140,82 157,118",
    fill: "rgb(194,193,194)",
  },
  {
    points: "18,154 14,110 54,27",
    fill: "rgb(119,122,117)",
  },
  {
    points: "126,158 156,144 126,139",
    fill: "rgb(184,184,184)",
  },
  {
    points: "38,189 11,197 42,218",
    fill: "rgb(136,136,136)",
  },
  {
    points: "91,9 80,3 90,4",
    fill: "rgb(189,188,189)",
  },
  {
    points: "38,77 48,107 43,103",
    fill: "rgb(145,145,145)",
  },
  {
    points: "195,108 204,104 169,109",
    fill: "rgb(144,144,144)",
  },
  {
    points: "37,179 100,176 36,188",
    fill: "rgb(146,146,146)",
  },
  {
    points: "65,109 28,85 71,112",
    fill: "rgb(100,102,100)",
  },
  {
    points: "125,249 111,210 117,204",
    fill: "rgb(210,209,210)",
  },
  {
    points: "226,81 195,101 189,111",
    fill: "rgb(170,171,171)",
  },
  {
    points: "136,81 124,92 123,102",
    fill: "rgb(192,191,192)",
  },
  {
    points: "100,107 145,147 79,109",
    fill: "rgb(190,190,190)",
  },
  {
    points: "30,32 23,30 2,17",
    fill: "rgb(172,172,172)",
  },
  {
    points: "12,61 48,27 0,85",
    fill: "rgb(155,154,155)",
  },
  {
    points: "120,97 119,100 130,81",
    fill: "rgb(62,62,62)",
  },
  {
    points: "72,12 27,51 97,17",
    fill: "rgb(124,126,123)",
  },
  {
    points: "7,81 27,54 4,146",
    fill: "rgb(130,135,130)",
  },
  {
    points: "0,56 27,41 49,22",
    fill: "rgb(188,188,188)",
  },
  {
    points: "150,256 116,201 120,230",
    fill: "rgb(200,200,200)",
  },
  {
    points: "24,169 16,160 34,162",
    fill: "rgb(130,130,130)",
  },
  {
    points: "179,163 160,149 174,167",
    fill: "rgb(181,181,181)",
  },
  {
    points: "247,191 200,216 206,226",
    fill: "rgb(206,206,206)",
  },
  {
    points: "138,171 149,161 147,159",
    fill: "rgb(105,105,105)",
  },
  {
    points: "34,39 36,39 19,29",
    fill: "rgb(156,157,156)",
  },
  {
    points: "37,86 49,97 45,97",
    fill: "rgb(97,97,97)",
  },
];

function createPolygon(coords, fill) {
  const shape = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polygon"
  );

  shape.setAttribute("points", coords);

  shape.setAttribute("fill", fill);
  shape.setAttribute("fill-opacity", 0.5);
  shape.setAttribute("class", "shape");

  return shape;
}

function createPolygonsFragment() {
  const fragment = document.createDocumentFragment();
  for (let shape of data) {
    fragment.appendChild(createPolygon(shape.points, shape.fill));
  }
  return fragment;
}

function removeAllChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

export default function playLowPolyPicAnim(query) {
  const svg = document.querySelector(query);
  removeAllChildren(svg);
  svg.appendChild(createPolygonsFragment());

  anime({
    targets: `${query} .shape`,
    duration: 4000,
    direction: "reverse",
    easing: "easeInExpo",
    translateX: function () {
      return anime.random(0, 256);
    },
    translateY: function () {
      return anime.random(0, 256);
    },
    rotate: function () {
      return anime.random(-360, 360);
    },
    scale: [1, 0],
    delay: anime.stagger(200, { grid: [20, 10], from: "first" }),
  });
}
