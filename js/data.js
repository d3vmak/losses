function getData() {
    return {
        personal: [
            800, 2800, 3000, 4500, 5300, 5710, 5840, 9000, 9166, 10000, 11000, 11250, 11800, 12200, 12350, 12490,
            12550, 12600, 12640, 13500, 13800, 14000, 14200, 14400, 14700, 15000, 15300, 15600, 15800, 16100, 16400,
            16600, 17000, 17200, 17300, 17500, 17700, 17800, 18000, 18300, 18500, 18600, 18900, 19000, 19100, 19300,
            19500, 19600, 19800, 19900, 20000, 20100, 20300, 20600
        ],
        tanks: [
            30, 80, 100, 150, 191, 198, 211, 217, 251, 269, 285, 290, 303, 317, 335, 353, 362, 374, 389, 404, 430, 444,
            450, 466, 476, 498, 509, 517, 530, 561, 575, 582, 586, 597, 605, 614, 625, 631, 644, 647, 676, 684, 698,
            700, 705, 722, 725, 732, 739, 753, 756, 762, 773, 790
        ],
        bbms: [
            130, 516, 540, 706, 816, 846, 862, 900, 939,945, 985, 999, 1036, 1070, 1105, 1165, 1205, 1226, 1249, 1279,
            1375, 1435, 1448, 1470, 1487, 1535, 1556, 1578, 1597, 1625, 1640, 1664, 1694, 1710, 1723, 1735, 1751, 1776,
            1830, 1844, 1858, 1861, 1891, 1891, 1895, 1911, 1923, 1946, 1964, 1968, 1976, 1982, 2002, 2041
        ],
        artillery: [
            0, 0, 0, 50, 74, 77, 85, 90, 105, 105, 109, 117, 120, 120, 123, 125, 135, 140, 150, 150, 190, 201, 205, 213,
            230, 240, 252, 267, 280, 291, 293, 294, 302, 303, 305, 311, 316, 317, 325, 330, 332, 332, 332, 333, 335,
            342, 347, 349, 358, 366, 366, 371, 376, 381
        ],
        gradAndBucks: [
            0, 0, 0, 5, 22, 25, 40, 42, 50, 50, 50, 50, 56, 56, 56, 58, 62, 62, 64, 64, 70, 72, 72, 72, 74, 80, 80, 80,
            82, 90, 91, 93, 95, 96, 96, 96, 96, 100, 105, 107, 107, 107, 108, 108, 108, 108, 111, 111, 115, 122, 122,
            125, 127, 130
        ],
        ppos: [
            0, 0, 0, 0, 0, 7, 9, 11, 18, 19, 21, 23, 27, 28, 29, 31, 33, 34, 34, 36, 43, 43, 43, 44, 44, 45, 45, 47, 47,
            49, 51, 52, 54, 54, 54, 54, 54, 54, 54, 54, 55, 55, 55, 55, 55, 55, 55, 63, 64, 64, 66, 66, 66, 67
        ],
        airplanes: [
            7, 10, 16, 27, 29, 29, 30, 30, 37, 39, 44, 46, 48, 49, 49, 57, 58, 74, 77, 81, 84, 86, 93, 95, 96, 97, 99,
            101, 108, 115, 117, 121, 123, 127, 131, 135, 143, 143, 143, 147, 150, 150, 150, 150, 151, 152, 154, 157, 158,
            160, 163, 163, 165, 167
        ],
        helicopters: [
            6, 7, 18, 26, 29, 29, 31, 31, 37, 40, 48, 68, 80, 81, 81, 83, 83, 86, 90, 95, 108, 108, 112, 115, 118, 121,
            123, 124, 124, 125, 127, 127, 127, 129, 131, 131, 131, 134, 134, 134, 134, 135, 135, 135, 136, 137, 137,
            140, 143, 144, 144, 145, 146, 147
        ],
        bpla: [
            0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 4, 7, 7, 7, 7, 7, 7, 7, 8, 9, 11, 11, 12, 17, 21, 24, 35, 42, 50, 53, 56, 56,
            66, 71, 81, 83, 85, 87, 89, 92, 94, 96, 111, 112, 112, 112, 119, 124, 132, 134, 135, 138, 148, 155
        ],
        autos: [
            0, 0, 0, 0, 291, 305, 355, 374, 404, 409, 447, 454, 474, 482, 526, 558, 585, 600, 617, 640, 819, 864, 879,
            914, 947, 969, 1000, 1008, 1033, 1089, 1131, 1144, 1150, 1178, 1184, 1201, 1220, 1236, 1249, 1273, 1322,
            1324, 1358, 1361, 1363, 1384, 1387, 1406, 1429, 1437, 1443, 1458, 1471, 1487
        ],
        tankers: [
            0, 0, 0, 0, 0, 0, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 70, 70, 72,
            72, 73, 73, 73, 73, 75, 75, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76, 76
        ],
        boats: [
            0, 0, 0, 2, 2, 2, 2, 2, 2, 2 ,2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 7, 7, 7, 7, 7, 7,
            7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8
        ],
        special: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 11, 11, 12, 13, 15, 15, 16, 18, 19, 21,
            21, 21, 21, 22, 24, 24, 24, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 26, 27, 27
        ],
        srbm: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 4,
            4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4
        ]
    }
}