var companies = [
  {
    "rank": 1,
    "previous": 1,
    "company": "Barrett Business Services",
    "hq": "Vancouver, WA",
    "sector": "business",
    "symbol": "BBSI",
    "roic": 15.5,
    "marketCap": 664,
    "freeCash": 66.1,
    "sales": 532.8,
    "profit": 17.9,
    "profitDelta": 36,
    "roa": 6.6,
    "employees": 468,
    "pe": 38.8
  },
  {
    "rank": 2,
    "previous": 41,
    "company": "Microsoft ",
    "hq": "Redmond",
    "sector": "computer",
    "symbol": "MSFT",
    "roic": 22.9,
    "marketCap": 310503,
    "freeCash": 24576,
    "sales": 77849,
    "profit": 21863,
    "profitDelta": 29,
    "roa": 16.6,
    "employees": 99000,
    "pe": 13.2
  },
  {
    "rank": 3,
    "previous": 12,
    "company": "Alaska Air Group",
    "hq": "Seattle",
    "sector": "travel",
    "symbol": "ALK",
    "roic": 21.3,
    "marketCap": 5044,
    "freeCash": 415,
    "sales": 5156,
    "profit": 508,
    "profitDelta": 61,
    "roa": 9,
    "employees": 13177,
    "pe": 13.6
  },
  {
    "rank": 4,
    "previous": "",
    "company": "Nautilus ",
    "hq": "Vancouver, WA",
    "sector": "consumer",
    "symbol": "NLS",
    "roic": 26.7,
    "marketCap": 263,
    "freeCash": 17.5,
    "sales": 218.8,
    "profit": 48,
    "profitDelta": 184,
    "roa": 40.3,
    "employees": 311,
    "pe": 18
  },
  {
    "rank": 5,
    "previous": 58,
    "company": "Washington Banking",
    "hq": "Oak Harbor",
    "sector": "banking",
    "symbol": "WBCO",
    "roic": 28,
    "marketCap": 275,
    "freeCash": 62.8,
    "sales": 86.5,
    "profit": 14.5,
    "profitDelta": -14,
    "roa": 0.9,
    "employees": 464,
    "pe": 19.1
  },
  {
    "rank": 6,
    "previous": 69,
    "company": "StanCorp Financial Group",
    "hq": "Portland",
    "sector": "insurance",
    "symbol": "SFG",
    "roic": 9.2,
    "marketCap": 2923,
    "freeCash": 265.8,
    "sales": 2860.1,
    "profit": 228.5,
    "profitDelta": 65,
    "roa": 1.1,
    "employees": 2702,
    "pe": 12.4
  },
  {
    "rank": 7,
    "previous": 36,
    "company": "Symetra Financial",
    "hq": "Bellevue",
    "sector": "insurance",
    "symbol": "SYA",
    "roic": 5.3,
    "marketCap": 2232,
    "freeCash": 1019.6,
    "sales": 2139.5,
    "profit": 220.7,
    "profitDelta": 7,
    "roa": 0.7,
    "employees": 1230,
    "pe": 11.9
  },
  {
    "rank": 8,
    "previous": 15,
    "company": "Columbia Sportswear",
    "hq": "Portland",
    "sector": "consumer",
    "symbol": "COLM",
    "roic": 12.3,
    "marketCap": 2724,
    "freeCash": 204.8,
    "sales": 1685,
    "profit": 94.3,
    "profitDelta": -6,
    "roa": 6.2,
    "employees": 4320,
    "pe": 28.3
  },
  {
    "rank": 9,
    "previous": "",
    "company": "Sound Financial",
    "hq": "Seattle",
    "sector": "banking",
    "symbol": "SFBC",
    "roic": 6.5,
    "marketCap": 43,
    "freeCash": 7.4,
    "sales": 24.5,
    "profit": 3.9,
    "profitDelta": 49,
    "roa": 1,
    "employees": 92,
    "pe": 11.3
  },
  {
    "rank": 10,
    "previous": 50,
    "company": "Nike",
    "hq": "Beaverton, OR",
    "sector": "consumer",
    "symbol": "NKE",
    "roic": 20.6,
    "marketCap": 69282,
    "freeCash": 2391,
    "sales": 25313,
    "profit": 2485,
    "profitDelta": 12,
    "roa": 15,
    "employees": 48000,
    "pe": 26.5
  },
  {
    "rank": 11,
    "previous": 14,
    "company": "Banner ",
    "hq": "Walla Walla",
    "sector": "banking",
    "symbol": "BANR",
    "roic": 7.1,
    "marketCap": 874,
    "freeCash": 86.8,
    "sales": 220.1,
    "profit": 46.6,
    "profitDelta": -28,
    "roa": 1.1,
    "employees": 1131,
    "pe": 19.5
  },
  {
    "rank": 12,
    "previous": 74,
    "company": "Pacific Continental",
    "hq": "Eugene, OR",
    "sector": "banking",
    "symbol": "PCBK",
    "roic": 3.2,
    "marketCap": 283,
    "freeCash": 26.4,
    "sales": 66.8,
    "profit": 13.8,
    "profitDelta": 9,
    "roa": 1,
    "employees": 290,
    "pe": 19.5
  },
  {
    "rank": 13,
    "previous": 76,
    "company": "Micron Technology",
    "hq": "Boise, ID",
    "sector": "semiconductors",
    "symbol": "MU",
    "roic": -3,
    "marketCap": 23273,
    "freeCash": 567,
    "sales": 9073,
    "profit": 1190,
    "profitDelta": "",
    "roa": 7.1,
    "employees": 30900,
    "pe": 11.4
  },
  {
    "rank": 14,
    "previous": 44,
    "company": "Starbucks",
    "hq": "Seattle",
    "sector": "retail",
    "symbol": "SBUX",
    "roic": 37.5,
    "marketCap": 59043,
    "freeCash": 1757.1,
    "sales": 14892.2,
    "profit": 8.3,
    "profitDelta": -99,
    "roa": 0.1,
    "employees": 182000,
    "pe": 16.8
  },
  {
    "rank": 15,
    "previous": 6,
    "company": "Blucora",
    "hq": "Bellevue",
    "sector": "computer",
    "symbol": "BCOR",
    "roic": 5,
    "marketCap": 1227,
    "freeCash": 90.3,
    "sales": 574,
    "profit": 24.4,
    "profitDelta": 8,
    "roa": 3.1,
    "employees": 450,
    "pe": 36
  },
  {
    "rank": 16,
    "previous": 45,
    "company": "Timberland Bancorp",
    "hq": "Hoquiam",
    "sector": "banking",
    "symbol": "TSBK",
    "roic": 5.9,
    "marketCap": 68,
    "freeCash": 10.3,
    "sales": 40.5,
    "profit": 4.8,
    "profitDelta": 4,
    "roa": 0.6,
    "employees": 267,
    "pe": 17.9
  },
  {
    "rank": 17,
    "previous": 4,
    "company": "Cascade Microtech",
    "hq": "Beaverton, OR",
    "sector": "semiconductors",
    "symbol": "CSCD",
    "roic": 15.8,
    "marketCap": 151,
    "freeCash": 10.6,
    "sales": 120,
    "profit": 13.4,
    "profitDelta": 120,
    "roa": 13.2,
    "employees": 426,
    "pe": 10.6
  },
  {
    "rank": 18,
    "previous": 37,
    "company": "Mentor Graphics",
    "hq": "Wilsonville, OR",
    "sector": "computer",
    "symbol": "MENT",
    "roic": 12.7,
    "marketCap": 2785,
    "freeCash": 94.2,
    "sales": 1088.7,
    "profit": 138.7,
    "profitDelta": 65,
    "roa": 8.4,
    "employees": 5220,
    "pe": 17.6
  },
  {
    "rank": 19,
    "previous": 97,
    "company": "Umpqua Holdings",
    "hq": "Portland",
    "sector": "banking",
    "symbol": "UMPQ",
    "roic": 4.5,
    "marketCap": 2143,
    "freeCash": 379.1,
    "sales": 564.3,
    "profit": 98.4,
    "profitDelta": -4,
    "roa": 0.8,
    "employees": 2490,
    "pe": 20.7
  },
  {
    "rank": 20,
    "previous": 54,
    "company": "TrueBlue ",
    "hq": "Tacoma",
    "sector": "business",
    "symbol": "TBI",
    "roic": 10.3,
    "marketCap": 1059,
    "freeCash": 73.1,
    "sales": 1668.9,
    "profit": 44.9,
    "profitDelta": 34,
    "roa": 6.8,
    "employees": 3200,
    "pe": 22.4
  },
  {
    "rank": 21,
    "previous": 61,
    "company": "Precision Castparts",
    "hq": "Portland",
    "sector": "manufacturing",
    "symbol": "PCP",
    "roic": 10.1,
    "marketCap": 39110,
    "freeCash": 1137.9,
    "sales": 8377.8,
    "profit": 1426.6,
    "profitDelta": 17,
    "roa": 10.4,
    "employees": 28500,
    "pe": 23.4
  },
  {
    "rank": 22,
    "previous": 43,
    "company": "Flir Systems",
    "hq": "Wilsonville, OR",
    "sector": "manufacturing",
    "symbol": "FLIR",
    "roic": 10.6,
    "marketCap": 4238,
    "freeCash": 302.9,
    "sales": 1496.4,
    "profit": 177,
    "profitDelta": -20,
    "roa": 7.8,
    "employees": 2839,
    "pe": 22
  },
  {
    "rank": 23,
    "previous": 26,
    "company": "FEI ",
    "hq": "Hillsboro, OR",
    "sector": "manufacturing",
    "symbol": "FEIC",
    "roic": 13.3,
    "marketCap": 3765,
    "freeCash": 175.5,
    "sales": 927.5,
    "profit": 126.7,
    "profitDelta": 10,
    "roa": 9.5,
    "employees": 2611,
    "pe": 29.5
  },
  {
    "rank": 24,
    "previous": 94,
    "company": "Sterling Financial",
    "hq": "Spokane",
    "sector": "banking",
    "symbol": "STSA",
    "roic": 3.1,
    "marketCap": 2125,
    "freeCash": 393.4,
    "sales": 519.6,
    "profit": 93.6,
    "profitDelta": -76,
    "roa": 1,
    "employees": 2547,
    "pe": 21.6
  },
  {
    "rank": 25,
    "previous": 60,
    "company": "First Financial",
    "hq": "Renton",
    "sector": "banking",
    "symbol": "FFNW",
    "roic": 9,
    "marketCap": 170,
    "freeCash": 15.5,
    "sales": 39.3,
    "profit": 24.5,
    "profitDelta": 802,
    "roa": 2.6,
    "employees": 93,
    "pe": 7
  },
  {
    "rank": 26,
    "previous": 20,
    "company": "Onvia ",
    "hq": "Seattle",
    "sector": "business",
    "symbol": "ONVI",
    "roic": 12,
    "marketCap": 36,
    "freeCash": 2.2,
    "sales": 22,
    "profit": -0.6,
    "profitDelta": "",
    "roa": -2.6,
    "employees": 130,
    "pe": -82.7
  },
  {
    "rank": 27,
    "previous": "",
    "company": "Intermountain Community Bancorp",
    "hq": "Sandpoint, ID",
    "sector": "banking",
    "symbol": "IMCB",
    "roic": 10.4,
    "marketCap": 102,
    "freeCash": 19.2,
    "sales": 43.9,
    "profit": 11.8,
    "profitDelta": 212,
    "roa": 1.2,
    "employees": 271,
    "pe": 10.2
  },
  {
    "rank": 28,
    "previous": "",
    "company": "FS Bancorp ",
    "hq": "Mountlake Terrace",
    "sector": "banking",
    "symbol": "FSBW",
    "roic": 8.6,
    "marketCap": 56,
    "freeCash": 4,
    "sales": 30.6,
    "profit": 3.9,
    "profitDelta": -26,
    "roa": 1,
    "employees": 160,
    "pe": 13.2
  },
  {
    "rank": 29,
    "previous": 33,
    "company": "Nordstrom",
    "hq": "Seattle",
    "sector": "retail",
    "symbol": "JWN",
    "roic": 22.9,
    "marketCap": 11816,
    "freeCash": 597,
    "sales": 12134,
    "profit": 735,
    "profitDelta": 8,
    "roa": 8.9,
    "employees": 62500,
    "pe": 16.6
  },
  {
    "rank": 30,
    "previous": 21,
    "company": "Expeditors International",
    "hq": "Seattle",
    "sector": "travel",
    "symbol": "EXPD",
    "roic": 14.6,
    "marketCap": 8963,
    "freeCash": 354.1,
    "sales": 6080.3,
    "profit": 348.5,
    "profitDelta": 5,
    "roa": 11.7,
    "employees": 13910,
    "pe": 26.2
  },
  {
    "rank": 31,
    "previous": 30,
    "company": "F5 Networks",
    "hq": "Seattle",
    "sector": "computer",
    "symbol": "FFIV",
    "roic": 19,
    "marketCap": 6909,
    "freeCash": 473.1,
    "sales": 1481.3,
    "profit": 277.3,
    "profitDelta": 1,
    "roa": 13.4,
    "employees": 3356,
    "pe": 25.8
  },
  {
    "rank": 32,
    "previous": 22,
    "company": "US Ecology ",
    "hq": "Boise, ID",
    "sector": "business",
    "symbol": "ECOL",
    "roic": 6.7,
    "marketCap": 798,
    "freeCash": 28.3,
    "sales": 201.1,
    "profit": 32.2,
    "profitDelta": 25,
    "roa": 12.4,
    "employees": 458,
    "pe": 21.4
  },
  {
    "rank": 33,
    "previous": 5,
    "company": "Outerwall",
    "hq": "Bellevue",
    "sector": "retail",
    "symbol": "OUTR",
    "roic": 13.6,
    "marketCap": 1759,
    "freeCash": 166.4,
    "sales": 2306.6,
    "profit": 174.8,
    "profitDelta": 16,
    "roa": 10.1,
    "employees": 2900,
    "pe": 10.7
  },
  {
    "rank": 34,
    "previous": 55,
    "company": "Potlatch ",
    "hq": "Spokane",
    "sector": "forest",
    "symbol": "PCH",
    "roic": 14.6,
    "marketCap": 1692,
    "freeCash": 66.6,
    "sales": 570.3,
    "profit": 70.6,
    "profitDelta": 66,
    "roa": 10.1,
    "employees": 880,
    "pe": 23.8
  },
  {
    "rank": 35,
    "previous": 3,
    "company": "Jewett-Cameron Trading",
    "hq": "North Plains, OR",
    "sector": "forest",
    "symbol": "JCTCF",
    "roic": 14.7,
    "marketCap": 33,
    "freeCash": 0.6,
    "sales": 49.3,
    "profit": 3.1,
    "profitDelta": 2,
    "roa": 14.2,
    "employees": 43,
    "pe": -1741.7
  },
  {
    "rank": 36,
    "previous": 23,
    "company": "Blue Nile ",
    "hq": "Seattle",
    "sector": "retail",
    "symbol": "NILE",
    "roic": 47,
    "marketCap": 609,
    "freeCash": 17.9,
    "sales": 450,
    "profit": 10.9,
    "profitDelta": 30,
    "roa": 6.7,
    "employees": 291,
    "pe": 55.4
  },
  {
    "rank": 37,
    "previous": 75,
    "company": "Weyerhaeuser ",
    "hq": "Federal Way",
    "sector": "forest",
    "symbol": "WY",
    "roic": 11.1,
    "marketCap": 18423,
    "freeCash": 711,
    "sales": 8529,
    "profit": 563,
    "profitDelta": 46,
    "roa": 4.2,
    "employees": 13700,
    "pe": 27.1
  },
  {
    "rank": 38,
    "previous": 10,
    "company": "Costco Wholesale",
    "hq": "Issaquah",
    "sector": "retail",
    "symbol": "COST",
    "roic": 18.1,
    "marketCap": 52355,
    "freeCash": 1354,
    "sales": 105156,
    "profit": 2039,
    "profitDelta": 19,
    "roa": 7.1,
    "employees": 184000,
    "pe": 26.7
  },
  {
    "rank": 39,
    "previous": 25,
    "company": "Heritage Financial",
    "hq": "Olympia",
    "sector": "banking",
    "symbol": "HFWA",
    "roic": 4.1,
    "marketCap": 277,
    "freeCash": 25.7,
    "sales": 80.6,
    "profit": 9.6,
    "profitDelta": -28,
    "roa": 0.6,
    "employees": 373,
    "pe": 27
  },
  {
    "rank": 40,
    "previous": 13,
    "company": "Expedia ",
    "hq": "Bellevue",
    "sector": "travel",
    "symbol": "EXPE",
    "roic": 10.6,
    "marketCap": 9034,
    "freeCash": 454.6,
    "sales": 4771.3,
    "profit": 232.9,
    "profitDelta": -17,
    "roa": 3.1,
    "employees": 14570,
    "pe": 33.3
  },
  {
    "rank": 41,
    "previous": 65,
    "company": "Zumiez ",
    "hq": "Everett",
    "sector": "retail",
    "symbol": "ZUMZ",
    "roic": 14.3,
    "marketCap": 770,
    "freeCash": 25.2,
    "sales": 669.4,
    "profit": 42.2,
    "profitDelta": 13,
    "roa": 10.9,
    "employees": 5600,
    "pe": 18.4
  },
  {
    "rank": 42,
    "previous": 16,
    "company": "Key Tronic ",
    "hq": "Spokane Valley",
    "sector": "manufacturing",
    "symbol": "KTCC",
    "roic": 18,
    "marketCap": 116,
    "freeCash": 26.3,
    "sales": 361,
    "profit": 12.6,
    "profitDelta": 8,
    "roa": 8.8,
    "employees": 2584,
    "pe": 12.4
  },
  {
    "rank": 43,
    "previous": 90,
    "company": "Lattice Semiconductor",
    "hq": "Hillsboro, OR",
    "sector": "semiconductors",
    "symbol": "LSCC",
    "roic": 6.6,
    "marketCap": 635,
    "freeCash": 44,
    "sales": 332.5,
    "profit": 22.3,
    "profitDelta": "",
    "roa": 5.2,
    "employees": 783,
    "pe": 28.1
  },
  {
    "rank": 44,
    "previous": "",
    "company": "HomeStreet",
    "hq": "Seattle",
    "sector": "banking",
    "symbol": "HMST",
    "roic": 3.1,
    "marketCap": 294,
    "freeCash": 281.2,
    "sales": 279.7,
    "profit": 23.8,
    "profitDelta": -71,
    "roa": 0.8,
    "employees": 1502,
    "pe": 9.6
  },
  {
    "rank": 45,
    "previous": 81,
    "company": "Ambassadors Group",
    "hq": "Spokane",
    "sector": "retail",
    "symbol": "EPAX",
    "roic": 0.8,
    "marketCap": 79,
    "freeCash": 11.6,
    "sales": 51.2,
    "profit": -7.1,
    "profitDelta": "",
    "roa": -7.6,
    "employees": 218,
    "pe": -69.4
  },
  {
    "rank": 46,
    "previous": 48,
    "company": "Lithia Motors",
    "hq": "Medford, OR",
    "sector": "retail",
    "symbol": "LAD",
    "roic": 9.9,
    "marketCap": 1797,
    "freeCash": -18,
    "sales": 4005.7,
    "profit": 106,
    "profitDelta": 32,
    "roa": 6.6,
    "employees": 5700,
    "pe": 16.9
  },
  {
    "rank": 47,
    "previous": 86,
    "company": "Washington Federal",
    "hq": "Seattle",
    "sector": "banking",
    "symbol": "WAFD",
    "roic": 3.7,
    "marketCap": 2383,
    "freeCash": 152.2,
    "sales": 538.2,
    "profit": 151.5,
    "profitDelta": 10,
    "roa": 1.2,
    "employees": 1457,
    "pe": 15.5
  },
  {
    "rank": 48,
    "previous": 27,
    "company": "Columbia Banking System",
    "hq": "Tacoma",
    "sector": "banking",
    "symbol": "COLB",
    "roic": 1.6,
    "marketCap": 1409,
    "freeCash": 66.5,
    "sales": 323.6,
    "profit": 60,
    "profitDelta": 30,
    "roa": 1,
    "employees": 1695,
    "pe": 17.7
  },
  {
    "rank": 49,
    "previous": 72,
    "company": "Greenbrier Cos.",
    "hq": "Lake Oswego, OR",
    "sector": "travel",
    "symbol": "GBX",
    "roic": 1.9,
    "marketCap": 913,
    "freeCash": 43.8,
    "sales": 1756.4,
    "profit": -11,
    "profitDelta": "",
    "roa": -0.8,
    "employees": 7959,
    "pe": 17.4
  },
  {
    "rank": 50,
    "previous": 38,
    "company": "Esterline Technologies",
    "hq": "Bellevue",
    "sector": "manufacturing",
    "symbol": "ESL",
    "roic": 8,
    "marketCap": 3240,
    "freeCash": 195.4,
    "sales": 1969.8,
    "profit": 164.7,
    "profitDelta": 46,
    "roa": 5.1,
    "employees": 12049,
    "pe": 17.1
  },
  {
    "rank": 51,
    "previous": 71,
    "company": "Pope Resources",
    "hq": "Poulsbo",
    "sector": "forest",
    "symbol": "POPE",
    "roic": 3.9,
    "marketCap": 289,
    "freeCash": 15.7,
    "sales": 70.7,
    "profit": 13.1,
    "profitDelta": "",
    "roa": 4.5,
    "employees": 58,
    "pe": 23.3
  },
  {
    "rank": 52,
    "previous": 24,
    "company": "MWI Veterinary Supply",
    "hq": "Boise, ID",
    "sector": "business",
    "symbol": "MWIV",
    "roic": 14,
    "marketCap": 2185,
    "freeCash": 46.7,
    "sales": 2347.5,
    "profit": 62.8,
    "profitDelta": 18,
    "roa": 8.4,
    "employees": 1732,
    "pe": 33.1
  },
  {
    "rank": 53,
    "previous": 82,
    "company": "Idacorp ",
    "hq": "Boise, ID",
    "sector": "utilities",
    "symbol": "IDA",
    "roic": 6.8,
    "marketCap": 2604,
    "freeCash": 70.2,
    "sales": 1246.2,
    "profit": 182.4,
    "profitDelta": 5,
    "roa": 3.4,
    "employees": 2042,
    "pe": 14.2
  },
  {
    "rank": 54,
    "previous": 78,
    "company": "Paccar",
    "hq": "Bellevue",
    "sector": "travel",
    "symbol": "PCAR",
    "roic": 7.6,
    "marketCap": 20964,
    "freeCash": 502.9,
    "sales": 17123.8,
    "profit": 1171.3,
    "profitDelta": 5,
    "roa": 6,
    "employees": 21800,
    "pe": 17.9
  },
  {
    "rank": 55,
    "previous": 39,
    "company": "Cascade Bancorp",
    "hq": "Bend, OR",
    "sector": "banking",
    "symbol": "CACB",
    "roic": 22.1,
    "marketCap": 248,
    "freeCash": 8.5,
    "sales": 65.4,
    "profit": 50.8,
    "profitDelta": 754,
    "roa": 3.8,
    "employees": 399,
    "pe": 4.8
  },
  {
    "rank": 56,
    "previous": 62,
    "company": "Clearwater Paper",
    "hq": "Spokane",
    "sector": "forest",
    "symbol": "CLW",
    "roic": 13.1,
    "marketCap": 1107,
    "freeCash": -728.4,
    "sales": 1889.8,
    "profit": 107,
    "profitDelta": 67,
    "roa": 6.3,
    "employees": 3860,
    "pe": 27.6
  },
  {
    "rank": 57,
    "previous": 19,
    "company": "Bsquare ",
    "hq": "Bellevue",
    "sector": "computer",
    "symbol": "BSQR",
    "roic": 182.1,
    "marketCap": 40,
    "freeCash": -780.3,
    "sales": 92.1,
    "profit": -5.3,
    "profitDelta": "",
    "roa": -11.6,
    "employees": 187,
    "pe": -7.6
  },
  {
    "rank": 58,
    "previous": 83,
    "company": "Northwest Natural Gas",
    "hq": "Portland",
    "sector": "utilities",
    "symbol": "NWN",
    "roic": 5.8,
    "marketCap": 1159,
    "freeCash": -832.2,
    "sales": 758.5,
    "profit": 60.5,
    "profitDelta": 3,
    "roa": 2.1,
    "employees": 1100,
    "pe": 19.1
  },
  {
    "rank": 59,
    "previous": 73,
    "company": "Plum Creek Timber",
    "hq": "Seattle",
    "sector": "forest",
    "symbol": "PCL",
    "roic": 5.5,
    "marketCap": 8232,
    "freeCash": -884.1,
    "sales": 1340,
    "profit": 214,
    "profitDelta": 5,
    "roa": 4.2,
    "employees": 1308,
    "pe": 34.1
  },
  {
    "rank": 60,
    "previous": "",
    "company": "Erickson ",
    "hq": "Portland",
    "sector": "travel",
    "symbol": "EAC",
    "roic": 7,
    "marketCap": 287,
    "freeCash": -936.1,
    "sales": 318.2,
    "profit": 9.7,
    "profitDelta": -37,
    "roa": 2,
    "employees": 1200,
    "pe": 15.2
  },
  {
    "rank": 61,
    "previous": 49,
    "company": "Key Technology",
    "hq": "Walla Walla",
    "sector": "manufacturing",
    "symbol": "KTEC",
    "roic": 12,
    "marketCap": 90,
    "freeCash": 6.3,
    "sales": 136.8,
    "profit": 4,
    "profitDelta": 793,
    "roa": 4,
    "employees": 602,
    "pe": 35.8
  },
  {
    "rank": 62,
    "previous": 28,
    "company": "Schnitzer Steel",
    "hq": "Portland",
    "sector": "manufacturing",
    "symbol": "SCHN",
    "roic": -0.7,
    "marketCap": 870,
    "freeCash": -51.1,
    "sales": 2621.9,
    "profit": -281.4,
    "profitDelta": "",
    "roa": -17.8,
    "employees": 3643,
    "pe": -95.3
  },
  {
    "rank": 63,
    "previous": 40,
    "company": "Marchex ",
    "hq": "Seattle",
    "sector": "business",
    "symbol": "MCHX",
    "roic": -0.1,
    "marketCap": 333,
    "freeCash": 10.6,
    "sales": 152.6,
    "profit": 1.8,
    "profitDelta": "",
    "roa": 1.2,
    "employees": 405,
    "pe": -216.5
  },
  {
    "rank": 64,
    "previous": 11,
    "company": "Amazon.com ",
    "hq": "Seattle",
    "sector": "retail",
    "symbol": "AMZN",
    "roic": 2.6,
    "marketCap": 183045,
    "freeCash": 2031,
    "sales": 74452,
    "profit": 274,
    "profitDelta": "",
    "roa": 0.8,
    "employees": 117300,
    "pe": 705.8
  },
  {
    "rank": 65,
    "previous": "",
    "company": "T-Mobile US",
    "hq": "Bellevue",
    "sector": "telecom",
    "symbol": "TMUS",
    "roic": -0.8,
    "marketCap": 26975,
    "freeCash": -480,
    "sales": 24420,
    "profit": 35,
    "profitDelta": -91,
    "roa": 0.1,
    "employees": 40000,
    "pe": 316.2
  },
  {
    "rank": 66,
    "previous": 35,
    "company": "Home Federal Bancorp",
    "hq": "Nampa, ID",
    "sector": "banking",
    "symbol": "HOME",
    "roic": -6,
    "marketCap": 221,
    "freeCash": 12.4,
    "sales": 46.1,
    "profit": -0.3,
    "profitDelta": "",
    "roa": 0,
    "employees": 276,
    "pe": 106.4
  },
  {
    "rank": 67,
    "previous": 80,
    "company": "Zillow ",
    "hq": "Seattle",
    "sector": "business",
    "symbol": "Z",
    "roic": -2.3,
    "marketCap": 3220,
    "freeCash": 9.3,
    "sales": 197.5,
    "profit": -12.5,
    "profitDelta": "",
    "roa": -2.7,
    "employees": 817,
    "pe": -188.2
  },
  {
    "rank": 68,
    "previous": 59,
    "company": "Avista ",
    "hq": "Spokane",
    "sector": "utilities",
    "symbol": "AVA",
    "roic": 5.2,
    "marketCap": 1694,
    "freeCash": -60.6,
    "sales": 1618.5,
    "profit": 111.1,
    "profitDelta": 42,
    "roa": 2.6,
    "employees": 1643,
    "pe": 15.1
  },
  {
    "rank": 69,
    "previous": 2,
    "company": "Cray",
    "hq": "Seattle",
    "sector": "hardware",
    "symbol": "CRAY",
    "roic": 5.2,
    "marketCap": 1111,
    "freeCash": -100.5,
    "sales": 525.7,
    "profit": 32.2,
    "profitDelta": -80,
    "roa": 5.8,
    "employees": 1042,
    "pe": 34.9
  },
  {
    "rank": 70,
    "previous": 31,
    "company": "Concur Technologies",
    "hq": "Redmond",
    "sector": "business",
    "symbol": "CNQR",
    "roic": -0.5,
    "marketCap": 5786,
    "freeCash": 27.8,
    "sales": 545.8,
    "profit": -24.4,
    "profitDelta": -248,
    "roa": -1.7,
    "employees": 3800,
    "pe": -192
  },
  {
    "rank": 71,
    "previous": 42,
    "company": "eMagin",
    "hq": "Bellevue",
    "sector": "manufacturing",
    "symbol": "EMAN",
    "roic": 95.5,
    "marketCap": 68,
    "freeCash": -2.7,
    "sales": 28,
    "profit": -14.1,
    "profitDelta": "",
    "roa": -41.3,
    "employees": 110,
    "pe": -4.9
  },
  {
    "rank": 72,
    "previous": 70,
    "company": "Rentrak ",
    "hq": "Portland",
    "sector": "business",
    "symbol": "RENT",
    "roic": -45.9,
    "marketCap": 456,
    "freeCash": -8.8,
    "sales": 99.2,
    "profit": -22.6,
    "profitDelta": -252,
    "roa": -31.3,
    "employees": 471,
    "pe": -112.9
  },
  {
    "rank": 73,
    "previous": 64,
    "company": "Craft Brew Alliance",
    "hq": "Portland",
    "sector": "consumer",
    "symbol": "BREW",
    "roic": 1.9,
    "marketCap": 312,
    "freeCash": -1.4,
    "sales": 179.2,
    "profit": 2,
    "profitDelta": -22,
    "roa": 1.2,
    "employees": 745,
    "pe": 128.8
  },
  {
    "rank": 74,
    "previous": 47,
    "company": "Emeritus ",
    "hq": "Seattle",
    "sector": "personal",
    "symbol": "ESC",
    "roic": 3.8,
    "marketCap": 1041,
    "freeCash": 29.7,
    "sales": 1960.6,
    "profit": -152.6,
    "profitDelta": -80,
    "roa": -3.3,
    "employees": 32000,
    "pe": -7.6
  },
  {
    "rank": 75,
    "previous": 77,
    "company": "Portland General Electric",
    "hq": "Portland",
    "sector": "utilities",
    "symbol": "POR",
    "roic": 4.2,
    "marketCap": 2358,
    "freeCash": -113,
    "sales": 1810,
    "profit": 105,
    "profitDelta": -26,
    "roa": 1.8,
    "employees": 2596,
    "pe": 22.4
  },
  {
    "rank": 76,
    "previous": 92,
    "company": "Hecla Mining ",
    "hq": "Coeur D'Alene, ID",
    "sector": "mining",
    "symbol": "HL",
    "roic": 5,
    "marketCap": 1055,
    "freeCash": -124.1,
    "sales": 382.6,
    "profit": -25.1,
    "profitDelta": "",
    "roa": -1.4,
    "employees": 1312,
    "pe": -53.3
  },
  {
    "rank": 77,
    "previous": 17,
    "company": "Digimarc ",
    "hq": "Beaverton, OR",
    "sector": "computer",
    "symbol": "DMRC",
    "roic": 5.8,
    "marketCap": 143,
    "freeCash": 1.8,
    "sales": 35,
    "profit": -0.5,
    "profitDelta": "",
    "roa": -0.9,
    "employees": 149,
    "pe": -192.6
  },
  {
    "rank": 78,
    "previous": 18,
    "company": "Itron",
    "hq": "Liberty Lake",
    "sector": "manufacturing",
    "symbol": "ITRI",
    "roic": 4.1,
    "marketCap": 1622,
    "freeCash": 45.4,
    "sales": 1948.7,
    "profit": -146.8,
    "profitDelta": "",
    "roa": -7.4,
    "employees": 8200,
    "pe": -166.4
  },
  {
    "rank": 79,
    "previous": 79,
    "company": "Seattle Genetics",
    "hq": "Bothell",
    "sector": "biotech",
    "symbol": "SGEN",
    "roic": -27.3,
    "marketCap": 4891,
    "freeCash": -23.3,
    "sales": 269.3,
    "profit": -62.5,
    "profitDelta": -16,
    "roa": -13.1,
    "employees": 582,
    "pe": -76.7
  },
  {
    "rank": 80,
    "previous": 85,
    "company": "TriQuint Semiconductor",
    "hq": "Hillsboro, OR",
    "sector": "semiconductors",
    "symbol": "TQNT",
    "roic": -4.6,
    "marketCap": 1349,
    "freeCash": -40.3,
    "sales": 892.9,
    "profit": -38,
    "profitDelta": -45,
    "roa": -3.6,
    "employees": 3109,
    "pe": -196.6
  },
  {
    "rank": 81,
    "previous": 66,
    "company": "CUI Global ",
    "hq": "Tualatin, OR",
    "sector": "hardware",
    "symbol": "CUI",
    "roic": -2.1,
    "marketCap": 130,
    "freeCash": -0.9,
    "sales": 60.7,
    "profit": -1.8,
    "profitDelta": 30,
    "roa": -2.7,
    "employees": 170,
    "pe": -105.3
  },
  {
    "rank": 82,
    "previous": 68,
    "company": "Willamette Valley Vineyards",
    "hq": "Turner, OR",
    "sector": "consumer",
    "symbol": "WVVI",
    "roic": -0.2,
    "marketCap": 30,
    "freeCash": -4.3,
    "sales": 13.3,
    "profit": 1.4,
    "profitDelta": 18,
    "roa": 5.2,
    "employees": 126,
    "pe": 21.7
  },
  {
    "rank": 83,
    "previous": 34,
    "company": "Northwest Pipe",
    "hq": "Vancouver, WA",
    "sector": "manufacturing",
    "symbol": "NWPX",
    "roic": 5.6,
    "marketCap": 357,
    "freeCash": -8.4,
    "sales": 475.6,
    "profit": -0.9,
    "profitDelta": "",
    "roa": -0.2,
    "employees": 1050,
    "pe": 21.1
  },
  {
    "rank": 84,
    "previous": 32,
    "company": "Coeur Mining ",
    "hq": "Coeur D'Alene, ID",
    "sector": "mining",
    "symbol": "CDE",
    "roic": 3.7,
    "marketCap": 1116,
    "freeCash": 12.7,
    "sales": 746,
    "profit": -650.6,
    "profitDelta": "",
    "roa": -21.3,
    "employees": 1967,
    "pe": -8.2
  },
  {
    "rank": 85,
    "previous": 9,
    "company": "Anchor Bancorp",
    "hq": "Lacey",
    "sector": "banking",
    "symbol": "ANCB",
    "roic": 7.1,
    "marketCap": 45,
    "freeCash": -0.8,
    "sales": 24.7,
    "profit": -0.3,
    "profitDelta": 85,
    "roa": -0.1,
    "employees": 134,
    "pe": -46.9
  },
  {
    "rank": 86,
    "previous": 95,
    "company": "OncoGenex Pharmaceuticals",
    "hq": "Bothell",
    "sector": "biotech",
    "symbol": "OGXI",
    "roic": -84.4,
    "marketCap": 123,
    "freeCash": -36.2,
    "sales": 29.9,
    "profit": -31.8,
    "profitDelta": -51,
    "roa": -46.3,
    "employees": 41,
    "pe": -3.9
  },
  {
    "rank": 87,
    "previous": 29,
    "company": "Electro Scientific Industries",
    "hq": "Portland",
    "sector": "hardware",
    "symbol": "ESIO",
    "roic": -14.7,
    "marketCap": 315,
    "freeCash": 10.9,
    "sales": 216.6,
    "profit": -54.7,
    "profitDelta": "",
    "roa": -14.5,
    "employees": 599,
    "pe": -5.2
  },
  {
    "rank": 88,
    "previous": 88,
    "company": "Omeros ",
    "hq": "Seattle",
    "sector": "biotech",
    "symbol": "OMER",
    "roic": -2389.6,
    "marketCap": 343,
    "freeCash": -29.9,
    "sales": 1.6,
    "profit": -39.8,
    "profitDelta": -4,
    "roa": -184.6,
    "employees": 75,
    "pe": -6.8
  },
  {
    "rank": 89,
    "previous": 93,
    "company": "RealNetworks ",
    "hq": "Seattle",
    "sector": "comm",
    "symbol": "RNWK",
    "roic": 14.4,
    "marketCap": 270,
    "freeCash": -57.6,
    "sales": 206.2,
    "profit": -57.4,
    "profitDelta": "",
    "roa": -14.7,
    "employees": 946,
    "pe": -4.9
  },
  {
    "rank": 90,
    "previous": 96,
    "company": "Red Lion Hotels",
    "hq": "Spokane",
    "sector": "travel",
    "symbol": "RLH",
    "roic": -14.2,
    "marketCap": 119,
    "freeCash": -6.1,
    "sales": 120.1,
    "profit": -17,
    "profitDelta": -16,
    "roa": -6.9,
    "employees": 1847,
    "pe": -6.9
  },
  {
    "rank": 91,
    "previous": "",
    "company": "ClearSign Combustion",
    "hq": "Seattle",
    "sector": "manufacturing",
    "symbol": "CLIR",
    "roic": -107.7,
    "marketCap": 101,
    "freeCash": -4.5,
    "sales": 0.1,
    "profit": -5.3,
    "profitDelta": -26,
    "roa": -76.6,
    "employees": 15,
    "pe": -19.3
  },
  {
    "rank": 92,
    "previous": 52,
    "company": "Schmitt Industries",
    "hq": "Portland",
    "sector": "manufacturing",
    "symbol": "SMIT",
    "roic": -5.5,
    "marketCap": 8,
    "freeCash": -0.9,
    "sales": 12.5,
    "profit": -0.5,
    "profitDelta": "",
    "roa": -4.6,
    "employees": 54,
    "pe": -10.7
  },
  {
    "rank": 93,
    "previous": 91,
    "company": "Radisys",
    "hq": "Hillsboro, OR",
    "sector": "hardware",
    "symbol": "RSYS",
    "roic": -22.5,
    "marketCap": 67,
    "freeCash": -8.1,
    "sales": 237.9,
    "profit": -49.4,
    "profitDelta": -14,
    "roa": -24.2,
    "employees": 984,
    "pe": -1.6
  },
  {
    "rank": 94,
    "previous": 84,
    "company": "Dendreon ",
    "hq": "Seattle",
    "sector": "biotech",
    "symbol": "DNDN",
    "roic": -52.3,
    "marketCap": 470,
    "freeCash": -223,
    "sales": 283.7,
    "profit": -296.8,
    "profitDelta": 25,
    "roa": -51.4,
    "employees": 755,
    "pe": -1.7
  }
]