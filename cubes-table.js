var CUBES_TABLE = [
  /*   0 */  [ ],
  /*   1 */  [ 0,2,0,1,0,0  ],
  /*   2 */  [ 0,0,1,1,1,2  ],
  /*   3 */  [ 0,2,0,1,1,1, 0,2,1,1,1,2  ],
  /*   4 */  [ 0,1,2,2,2,0  ],
  /*   5 */  [ 0,2,2,0,0,0, 0,2,2,2,2,0  ],
  /*   6 */  [ 2,2,2,0,0,1, 0,0,1,1,1,2  ],
  /*   7 */  [ 2,0,1,1,1,2, 2,0,1,2,2,2, 2,2,1,2,0,2  ],
  /*   8 */  [ 2,0,3,2,1,1  ],
  /*   9 */  [ 0,2,0,1,0,0, 2,0,3,2,1,1  ],
  /*  10 */  [ 0,0,3,2,1,2, 0,0,2,0,3,2  ],
  /*  11 */  [ 0,1,2,0,3,2, 0,1,3,2,0,2, 0,2,3,2,1,2  ],
  /*  12 */  [ 0,1,2,2,3,2, 0,1,3,2,1,1  ],
  /*  13 */  [ 0,0,3,2,1,1, 0,0,0,2,3,2, 0,2,2,2,3,2  ],
  /*  14 */  [ 0,1,1,2,0,0, 0,1,2,2,1,2, 2,2,3,2,1,2  ],
  /*  15 */  [ 0,2,2,2,1,2, 1,2,2,2,3,2  ],
  /*  16 */  [ 0,2,4,0,4,1  ],
  /*  17 */  [ 0,1,0,0,4,0, 0,1,4,0,4,1  ],
  /*  18 */  [ 4,1,0,2,4,0, 0,0,1,1,1,2  ],
  /*  19 */  [ 4,0,1,1,1,2, 4,0,4,1,1,1, 4,1,0,1,1,1  ],
  /*  20 */  [ 4,0,4,1,0,2, 0,1,2,2,2,0  ],
  /*  21 */  [ 4,1,2,2,2,0, 4,1,2,0,4,0, 4,0,2,0,0,0  ],
  /*  22 */  [ 1,1,1,2,0,0, 2,0,0,1,2,2, 4,0,4,1,0,2  ],
  /*  23 */  [ 4,1,2,2,2,0, 4,1,2,0,4,0, 4,0,2,0,1,1, 4,0,1,1,1,2  ],
  /*  24 */  [ 0,2,4,0,4,1, 2,0,3,2,1,1  ],
  /*  25 */  [ 4,1,0,0,4,0, 4,1,0,1,0,0, 3,2,1,1,2,0  ],
  /*  26 */  [ 2,0,3,2,1,2, 2,0,1,2,0,0, 4,1,0,2,4,0  ],
  /*  27 */  [ 0,1,4,0,4,1, 4,0,0,1,3,2, 0,1,2,0,3,2, 4,0,3,2,1,2  ],
  /*  28 */  [ 1,1,2,2,3,2, 1,1,0,1,2,2, 4,0,4,1,0,2  ],
  /*  29 */  [ 0,0,4,0,4,1, 4,1,3,2,0,0, 0,0,3,2,1,1, 4,1,2,2,3,2  ],
  /*  30 */  [ 0,2,4,0,4,1, 0,1,1,2,0,0, 0,1,2,2,1,2, 2,2,3,2,1,2  ],
  /*  31 */  [ 4,1,1,2,4,0, 4,1,2,2,1,2, 2,2,3,2,1,2  ],
  /*  32 */  [ 4,0,1,2,5,1  ],
  /*  33 */  [ 0,1,0,0,0,2, 4,0,1,2,5,1  ],
  /*  34 */  [ 0,0,1,1,5,1, 0,0,5,1,4,0  ],
  /*  35 */  [ 0,2,5,1,4,0, 0,2,0,1,5,1, 0,1,1,1,5,1  ],
  /*  36 */  [ 0,1,2,2,2,0, 4,0,1,2,5,1  ],
  /*  37 */  [ 2,2,2,0,0,0, 2,2,0,0,0,2, 5,1,4,0,1,2  ],
  /*  38 */  [ 4,0,1,1,5,1, 4,0,0,0,1,1, 2,2,2,0,0,1  ],
  /*  39 */  [ 0,2,2,2,2,0, 2,0,5,1,0,2, 0,2,5,1,4,0, 2,0,1,1,5,1  ],
  /*  40 */  [ 4,0,1,2,5,1, 1,1,2,0,3,2  ],
  /*  41 */  [ 0,1,0,0,0,2, 2,0,3,2,1,1, 4,0,1,2,5,1  ],
  /*  42 */  [ 5,1,2,0,3,2, 5,1,4,0,2,0, 4,0,0,0,2,0  ],
  /*  43 */  [ 5,1,2,0,3,2, 5,1,4,0,2,0, 4,0,0,1,2,0, 4,0,0,2,0,1  ],
  /*  44 */  [ 0,1,2,2,3,2, 0,1,3,2,1,1, 4,0,1,2,5,1  ],
  /*  45 */  [ 1,2,5,1,4,0, 0,0,3,2,1,1, 0,0,0,2,3,2, 0,2,2,2,3,2  ],
  /*  46 */  [ 0,0,5,1,4,0, 5,1,0,0,2,2, 0,0,0,1,2,2, 5,1,2,2,3,2  ],
  /*  47 */  [ 4,0,3,2,5,1, 4,0,0,2,3,2, 0,2,2,2,3,2  ],
  /*  48 */  [ 0,2,5,1,4,1, 0,2,1,2,5,1  ],
  /*  49 */  [ 0,0,1,2,5,1, 0,0,5,1,0,1, 0,1,5,1,4,1  ],
  /*  50 */  [ 0,2,0,0,1,1, 0,2,1,1,4,1, 4,1,1,1,5,1  ],
  /*  51 */  [ 0,1,1,1,4,1, 1,1,5,1,4,1  ],
  /*  52 */  [ 1,2,5,1,4,1, 1,2,4,1,0,2, 2,0,0,1,2,2  ],
  /*  53 */  [ 0,0,2,2,2,0, 2,2,0,0,5,1, 0,0,1,2,5,1, 2,2,5,1,4,1  ],
  /*  54 */  [ 0,1,2,2,2,0, 0,2,0,0,1,1, 0,2,1,1,4,1, 4,1,1,1,5,1  ],
  /*  55 */  [ 2,2,2,0,1,1, 2,2,1,1,4,1, 4,1,1,1,5,1  ],
  /*  56 */  [ 0,2,5,1,4,1, 0,2,1,2,5,1, 2,0,3,2,1,1  ],
  /*  57 */  [ 1,1,2,0,3,2, 0,0,1,2,5,1, 0,0,5,1,0,1, 0,1,5,1,4,1  ],
  /*  58 */  [ 0,0,2,0,3,2, 3,2,4,1,0,0, 0,0,4,1,0,2, 3,2,5,1,4,1  ],
  /*  59 */  [ 2,0,3,2,5,1, 2,0,5,1,0,1, 0,1,5,1,4,1  ],
  /*  60 */  [ 0,2,5,1,4,1, 0,2,1,2,5,1, 0,1,3,2,1,1, 0,1,2,2,3,2  ],
  /*  61 */  [ 4,1,2,2,3,2, 4,1,3,2,5,1, 0,0,1,2,1,1  ],
  /*  62 */  [ 5,1,2,2,3,2, 5,1,4,1,2,2, 0,0,0,1,0,2  ],
  /*  63 */  [ 4,1,2,2,3,2, 4,1,3,2,5,1  ],
  /*  64 */  [ 4,1,6,0,2,2  ],
  /*  65 */  [ 0,0,0,2,0,1, 4,1,6,0,2,2  ],
  /*  66 */  [ 0,0,1,1,1,2, 4,1,6,0,2,2  ],
  /*  67 */  [ 1,2,0,1,1,1, 1,2,0,2,0,1, 6,0,2,2,4,1  ],
  /*  68 */  [ 0,1,6,0,2,0, 0,1,4,1,6,0  ],
  /*  69 */  [ 0,2,4,1,6,0, 0,2,6,0,0,0, 0,0,6,0,2,0  ],
  /*  70 */  [ 4,1,6,0,2,0, 4,1,2,0,0,1, 1,2,0,0,1,1  ],
  /*  71 */  [ 0,2,1,1,1,2, 1,1,0,2,6,0, 0,2,4,1,6,0, 1,1,6,0,2,0  ],
  /*  72 */  [ 4,1,6,0,2,2, 2,0,3,2,1,1  ],
  /*  73 */  [ 1,1,2,0,3,2, 0,0,0,2,0,1, 6,0,2,2,4,1  ],
  /*  74 */  [ 0,0,3,2,1,2, 0,0,2,0,3,2, 4,1,6,0,2,2  ],
  /*  75 */  [ 2,2,4,1,6,0, 0,1,2,0,3,2, 0,1,3,2,0,2, 0,2,3,2,1,2  ],
  /*  76 */  [ 6,0,3,2,1,1, 6,0,1,1,4,1, 4,1,1,1,0,1  ],
  /*  77 */  [ 4,1,0,0,0,2, 4,1,6,0,0,0, 6,0,1,1,0,0, 6,0,3,2,1,1  ],
  /*  78 */  [ 0,1,4,1,6,0, 6,0,1,2,0,1, 0,1,1,2,0,0, 6,0,3,2,1,2  ],
  /*  79 */  [ 4,1,6,0,3,2, 4,1,3,2,0,2, 0,2,3,2,1,2  ],
  /*  80 */  [ 0,2,4,0,6,0, 0,2,6,0,2,2  ],
  /*  81 */  [ 0,1,6,0,2,2, 0,1,0,0,6,0, 0,0,4,0,6,0  ],
  /*  82 */  [ 2,2,4,0,6,0, 2,2,0,2,4,0, 1,1,1,2,0,0  ],
  /*  83 */  [ 0,1,1,1,1,2, 1,2,6,0,0,1, 0,1,6,0,2,2, 1,2,4,0,6,0  ],
  /*  84 */  [ 0,2,2,0,0,1, 0,2,4,0,2,0, 4,0,6,0,2,0  ],
  /*  85 */  [ 0,0,4,0,2,0, 2,0,4,0,6,0  ],
  /*  86 */  [ 0,0,1,1,1,2, 0,2,2,0,0,1, 0,2,4,0,2,0, 4,0,6,0,2,0  ],
  /*  87 */  [ 1,2,2,0,1,1, 1,2,4,0,2,0, 4,0,6,0,2,0  ],
  /*  88 */  [ 0,2,4,0,6,0, 0,2,6,0,2,2, 1,1,2,0,3,2  ],
  /*  89 */  [ 2,0,3,2,1,1, 0,1,6,0,2,2, 0,1,0,0,6,0, 0,0,4,0,6,0  ],
  /*  90 */  [ 0,2,4,0,6,0, 0,2,6,0,2,2, 0,0,2,0,3,2, 0,0,3,2,1,2  ],
  /*  91 */  [ 4,0,3,2,1,2, 4,0,6,0,3,2, 0,1,2,0,2,2  ],
  /*  92 */  [ 0,1,3,2,1,1, 3,2,0,1,4,0, 0,1,0,2,4,0, 3,2,4,0,6,0  ],
  /*  93 */  [ 1,1,6,0,3,2, 1,1,0,0,6,0, 0,0,4,0,6,0  ],
  /*  94 */  [ 6,0,3,2,1,2, 6,0,1,2,4,0, 0,1,0,2,0,0  ],
  /*  95 */  [ 4,0,3,2,1,2, 4,0,6,0,3,2  ],
  /*  96 */  [ 2,2,4,1,6,0, 4,0,1,2,5,1  ],
  /*  97 */  [ 5,1,4,0,1,2, 6,0,2,2,4,1, 0,0,0,2,0,1  ],
  /*  98 */  [ 0,0,1,1,5,1, 0,0,5,1,4,0, 2,2,4,1,6,0  ],
  /*  99 */  [ 4,1,6,0,2,2, 0,2,5,1,4,0, 0,2,0,1,5,1, 0,1,1,1,5,1  ],
  /* 100 */  [ 0,1,6,0,2,0, 0,1,4,1,6,0, 1,2,5,1,4,0  ],
  /* 101 */  [ 4,0,1,2,5,1, 0,2,4,1,6,0, 0,2,6,0,0,0, 0,0,6,0,2,0  ],
  /* 102 */  [ 0,1,6,0,2,0, 0,1,4,1,6,0, 0,0,5,1,4,0, 0,0,1,1,5,1  ],
  /* 103 */  [ 2,0,1,1,5,1, 2,0,5,1,6,0, 0,2,4,1,4,0  ],
  /* 104 */  [ 4,1,6,0,2,2, 4,0,1,2,5,1, 2,0,3,2,1,1  ],
  /* 105 */  [ 0,2,0,1,0,0, 4,1,6,0,2,2, 1,1,2,0,3,2, 4,0,1,2,5,1  ],
  /* 106 */  [ 6,0,2,2,4,1, 5,1,2,0,3,2, 5,1,4,0,2,0, 4,0,0,0,2,0  ],
  /* 107 */  [ 5,1,6,0,3,2, 4,0,0,2,4,1, 2,0,2,2,0,1  ],
  /* 108 */  [ 5,1,4,0,1,2, 6,0,3,2,1,1, 6,0,1,1,4,1, 4,1,1,1,0,1  ],
  /* 109 */  [ 4,1,4,0,0,2, 6,0,3,2,5,1, 0,0,1,2,1,1  ],
  /* 110 */  [ 0,1,4,0,0,0, 0,1,4,1,4,0, 3,2,5,1,6,0  ],
  /* 111 */  [ 0,2,4,1,4,0, 6,0,3,2,5,1  ],
  /* 112 */  [ 6,0,1,2,5,1, 6,0,2,2,1,2, 2,2,0,2,1,2  ],
  /* 113 */  [ 0,1,6,0,2,2, 0,1,0,0,6,0, 0,0,5,1,6,0, 0,0,1,2,5,1  ],
  /* 114 */  [ 0,2,6,0,2,2, 6,0,0,2,1,1, 0,2,0,0,1,1, 6,0,1,1,5,1  ],
  /* 115 */  [ 2,2,5,1,6,0, 2,2,0,1,5,1, 0,1,1,1,5,1  ],
  /* 116 */  [ 0,2,1,2,5,1, 5,1,2,0,0,2, 0,2,2,0,0,1, 5,1,6,0,2,0  ],
  /* 117 */  [ 1,2,5,1,6,0, 1,2,6,0,0,0, 0,0,6,0,2,0  ],
  /* 118 */  [ 6,0,1,1,5,1, 6,0,2,0,1,1, 0,2,0,0,0,1  ],
  /* 119 */  [ 2,0,1,1,5,1, 2,0,5,1,6,0  ],
  /* 120 */  [ 3,2,1,1,2,0, 6,0,1,2,5,1, 6,0,2,2,1,2, 2,2,0,2,1,2  ],
  /* 121 */  [ 0,1,2,0,2,2, 0,0,1,2,1,1, 6,0,3,2,5,1  ],
  /* 122 */  [ 0,2,0,0,2,0, 0,2,2,0,2,2, 5,1,6,0,3,2  ],
  /* 123 */  [ 0,1,2,0,2,2, 6,0,3,2,5,1  ],
  /* 124 */  [ 0,2,1,1,0,1, 0,2,1,2,1,1, 6,0,3,2,5,1  ],
  /* 125 */  [ 0,0,1,2,1,1, 5,1,6,0,3,2  ],
  /* 126 */  [ 0,2,0,0,0,1, 6,0,3,2,5,1  ],
  /* 127 */  [ 6,0,3,2,5,1  ],
  /* 128 */  [ 6,0,5,1,3,2  ],
  /* 129 */  [ 0,2,0,1,0,0, 6,0,5,1,3,2  ],
  /* 130 */  [ 0,0,1,1,1,2, 5,1,3,2,6,0  ],
  /* 131 */  [ 0,2,0,1,1,1, 0,2,1,1,1,2, 6,0,5,1,3,2  ],
  /* 132 */  [ 0,1,2,2,2,0, 6,0,5,1,3,2  ],
  /* 133 */  [ 0,2,2,0,0,0, 0,2,2,2,2,0, 5,1,3,2,6,0  ],
  /* 134 */  [ 0,1,2,2,2,0, 0,0,1,1,1,2, 6,0,5,1,3,2  ],
  /* 135 */  [ 3,2,6,0,5,1, 2,0,1,1,1,2, 2,0,1,2,2,2, 2,2,1,2,0,2  ],
  /* 136 */  [ 2,0,5,1,1,1, 2,0,6,0,5,1  ],
  /* 137 */  [ 6,0,5,1,1,1, 6,0,1,1,2,0, 0,2,0,1,0,0  ],
  /* 138 */  [ 1,2,6,0,5,1, 1,2,0,0,6,0, 0,0,2,0,6,0  ],
  /* 139 */  [ 1,2,0,2,0,1, 0,1,6,0,1,2, 1,2,6,0,5,1, 0,1,2,0,6,0  ],
  /* 140 */  [ 2,2,6,0,5,1, 2,2,5,1,0,1, 0,1,5,1,1,1  ],
  /* 141 */  [ 2,2,0,0,0,2, 0,0,2,2,5,1, 2,2,6,0,5,1, 0,0,5,1,1,1  ],
  /* 142 */  [ 5,1,1,2,0,0, 5,1,0,0,6,0, 6,0,0,0,0,1, 6,0,0,1,2,2  ],
  /* 143 */  [ 6,0,5,1,1,2, 6,0,1,2,2,2, 2,2,1,2,0,2  ],
  /* 144 */  [ 0,2,4,0,4,1, 6,0,5,1,3,2  ],
  /* 145 */  [ 0,1,0,0,4,0, 0,1,4,0,4,1, 3,2,6,0,5,1  ],
  /* 146 */  [ 4,1,0,2,4,0, 6,0,5,1,3,2, 0,0,1,1,1,2  ],
  /* 147 */  [ 5,1,3,2,6,0, 4,0,1,1,1,2, 4,0,4,1,1,1, 4,1,0,1,1,1  ],
  /* 148 */  [ 5,1,3,2,6,0, 4,0,4,1,0,2, 2,0,0,1,2,2  ],
  /* 149 */  [ 6,0,5,1,3,2, 4,1,2,2,2,0, 4,1,2,0,4,0, 4,0,2,0,0,0  ],
  /* 150 */  [ 0,2,4,0,4,1, 0,1,2,2,2,0, 5,1,3,2,6,0, 0,0,1,1,1,2  ],
  /* 151 */  [ 4,1,2,2,6,0, 4,0,5,1,1,2, 2,0,1,1,3,2  ],
  /* 152 */  [ 2,0,5,1,1,1, 2,0,6,0,5,1, 0,2,4,0,4,1  ],
  /* 153 */  [ 0,1,0,0,4,0, 0,1,4,0,4,1, 2,0,6,0,5,1, 2,0,5,1,1,1  ],
  /* 154 */  [ 4,0,4,1,0,2, 1,2,6,0,5,1, 1,2,0,0,6,0, 0,0,2,0,6,0  ],
  /* 155 */  [ 0,1,2,0,6,0, 0,1,6,0,4,1, 1,2,4,0,5,1  ],
  /* 156 */  [ 4,1,0,2,4,0, 2,2,6,0,5,1, 2,2,5,1,0,1, 0,1,5,1,1,1  ],
  /* 157 */  [ 0,0,5,1,1,1, 0,0,4,0,5,1, 2,2,6,0,4,1  ],
  /* 158 */  [ 5,1,1,2,4,0, 6,0,4,1,2,2, 0,0,0,1,0,2  ],
  /* 159 */  [ 2,2,6,0,4,1, 4,0,5,1,1,2  ],
  /* 160 */  [ 4,0,1,2,3,2, 4,0,3,2,6,0  ],
  /* 161 */  [ 6,0,1,2,3,2, 6,0,4,0,1,2, 0,1,0,0,0,2  ],
  /* 162 */  [ 1,1,3,2,6,0, 1,1,6,0,0,0, 0,0,6,0,4,0  ],
  /* 163 */  [ 1,1,0,2,0,1, 0,2,1,1,6,0, 1,1,3,2,6,0, 0,2,6,0,4,0  ],
  /* 164 */  [ 4,0,1,2,3,2, 4,0,3,2,6,0, 0,1,2,2,2,0  ],
  /* 165 */  [ 0,2,2,0,0,0, 0,2,2,2,2,0, 4,0,3,2,6,0, 4,0,1,2,3,2  ],
  /* 166 */  [ 2,0,0,1,2,2, 1,1,3,2,6,0, 1,1,6,0,0,0, 0,0,6,0,4,0  ],
  /* 167 */  [ 0,2,6,0,4,0, 0,2,2,2,6,0, 1,1,3,2,2,0  ],
  /* 168 */  [ 1,2,1,1,2,0, 1,2,2,0,4,0, 4,0,2,0,6,0  ],
  /* 169 */  [ 0,0,0,2,0,1, 1,2,1,1,2,0, 1,2,2,0,4,0, 4,0,2,0,6,0  ],
  /* 170 */  [ 0,0,2,0,4,0, 2,0,6,0,4,0  ],
  /* 171 */  [ 0,2,0,1,2,0, 0,2,2,0,4,0, 4,0,2,0,6,0  ],
  /* 172 */  [ 1,1,0,1,2,2, 2,2,4,0,1,1, 1,1,4,0,1,2, 2,2,6,0,4,0  ],
  /* 173 */  [ 2,2,6,0,4,0, 2,2,4,0,0,2, 1,1,0,0,1,2  ],
  /* 174 */  [ 0,1,2,2,6,0, 0,1,6,0,0,0, 0,0,6,0,4,0  ],
  /* 175 */  [ 0,2,6,0,4,0, 0,2,2,2,6,0  ],
  /* 176 */  [ 4,1,3,2,6,0, 4,1,0,2,3,2, 0,2,1,2,3,2  ],
  /* 177 */  [ 4,1,0,1,0,0, 0,0,3,2,4,1, 4,1,3,2,6,0, 0,0,1,2,3,2  ],
  /* 178 */  [ 1,1,3,2,6,0, 1,1,6,0,0,0, 0,0,6,0,4,1, 0,0,4,1,0,2  ],
  /* 179 */  [ 6,0,1,1,3,2, 6,0,4,1,1,1, 4,1,0,1,1,1  ],
  /* 180 */  [ 2,2,2,0,0,1, 4,1,3,2,6,0, 4,1,0,2,3,2, 0,2,1,2,3,2  ],
  /* 181 */  [ 0,0,1,2,3,2, 0,0,3,2,2,0, 4,1,2,2,6,0  ],
  /* 182 */  [ 1,1,3,2,2,0, 0,0,0,1,0,2, 6,0,4,1,2,2  ],
  /* 183 */  [ 4,1,2,2,6,0, 2,0,1,1,3,2  ],
  /* 184 */  [ 1,2,4,1,0,2, 4,1,1,2,2,0, 1,2,1,1,2,0, 4,1,2,0,6,0  ],
  /* 185 */  [ 4,1,2,0,6,0, 4,1,0,1,2,0, 1,2,1,1,0,0  ],
  /* 186 */  [ 0,2,6,0,4,1, 0,2,0,0,6,0, 0,0,2,0,6,0  ],
  /* 187 */  [ 0,1,2,0,6,0, 0,1,6,0,4,1  ],
  /* 188 */  [ 1,2,1,1,0,1, 1,2,0,1,0,2, 6,0,4,1,2,2  ],
  /* 189 */  [ 0,0,1,2,1,1, 4,1,2,2,6,0  ],
  /* 190 */  [ 0,0,0,1,0,2, 4,1,2,2,6,0  ],
  /* 191 */  [ 4,1,2,2,6,0  ],
  /* 192 */  [ 4,1,3,2,2,2, 4,1,5,1,3,2  ],
  /* 193 */  [ 5,1,3,2,2,2, 5,1,2,2,4,1, 0,0,0,2,0,1  ],
  /* 194 */  [ 4,1,3,2,2,2, 4,1,5,1,3,2, 0,0,1,1,1,2  ],
  /* 195 */  [ 0,2,0,1,1,1, 0,2,1,1,1,2, 4,1,5,1,3,2, 4,1,3,2,2,2  ],
  /* 196 */  [ 2,0,5,1,3,2, 2,0,0,1,5,1, 0,1,4,1,5,1  ],
  /* 197 */  [ 2,0,0,0,0,2, 0,2,5,1,2,0, 2,0,5,1,3,2, 0,2,4,1,5,1  ],
  /* 198 */  [ 1,1,1,2,0,0, 2,0,5,1,3,2, 2,0,0,1,5,1, 0,1,4,1,5,1  ],
  /* 199 */  [ 0,2,4,1,5,1, 0,2,5,1,1,2, 2,0,1,1,3,2  ],
  /* 200 */  [ 2,2,1,1,2,0, 2,2,4,1,1,1, 4,1,5,1,1,1  ],
  /* 201 */  [ 0,1,0,0,0,2, 2,2,1,1,2,0, 2,2,4,1,1,1, 4,1,5,1,1,1  ],
  /* 202 */  [ 2,0,1,2,0,0, 1,2,2,0,4,1, 2,0,2,2,4,1, 1,2,4,1,5,1  ],
  /* 203 */  [ 1,2,4,1,5,1, 1,2,0,2,4,1, 2,0,2,2,0,1  ],
  /* 204 */  [ 0,1,4,1,1,1, 1,1,4,1,5,1  ],
  /* 205 */  [ 0,2,1,1,0,0, 0,2,4,1,1,1, 4,1,5,1,1,1  ],
  /* 206 */  [ 0,0,5,1,1,2, 0,0,0,1,5,1, 0,1,4,1,5,1  ],
  /* 207 */  [ 0,2,4,1,5,1, 0,2,5,1,1,2  ],
  /* 208 */  [ 4,0,5,1,3,2, 4,0,3,2,0,2, 0,2,3,2,2,2  ],
  /* 209 */  [ 4,0,0,1,0,0, 0,1,4,0,3,2, 4,0,5,1,3,2, 0,1,3,2,2,2  ],
  /* 210 */  [ 1,2,0,0,1,1, 4,0,5,1,3,2, 4,0,3,2,0,2, 0,2,3,2,2,2  ],
  /* 211 */  [ 0,1,3,2,2,2, 0,1,1,1,3,2, 4,0,5,1,1,2  ],
  /* 212 */  [ 0,1,0,2,4,0, 0,1,4,0,2,0, 2,0,4,0,5,1, 2,0,5,1,3,2  ],
  /* 213 */  [ 5,1,3,2,2,0, 5,1,2,0,4,0, 4,0,2,0,0,0  ],
  /* 214 */  [ 0,1,0,2,0,0, 2,0,1,1,3,2, 4,0,5,1,1,2  ],
  /* 215 */  [ 4,0,5,1,1,2, 1,1,3,2,2,0  ],
  /* 216 */  [ 2,2,0,2,4,0, 4,0,1,1,2,2, 2,2,1,1,2,0, 4,0,5,1,1,1  ],
  /* 217 */  [ 4,0,5,1,1,1, 4,0,1,1,0,0, 2,2,0,1,2,0  ],
  /* 218 */  [ 2,2,0,0,2,0, 2,2,0,2,0,0, 5,1,1,2,4,0  ],
  /* 219 */  [ 0,1,2,0,2,2, 4,0,5,1,1,2  ],
  /* 220 */  [ 0,2,4,0,5,1, 0,2,5,1,0,1, 0,1,5,1,1,1  ],
  /* 221 */  [ 0,0,5,1,1,1, 0,0,4,0,5,1  ],
  /* 222 */  [ 0,1,0,2,0,0, 4,0,5,1,1,2  ],
  /* 223 */  [ 4,0,5,1,1,2  ],
  /* 224 */  [ 4,1,4,0,1,2, 4,1,1,2,2,2, 2,2,1,2,3,2  ],
  /* 225 */  [ 0,2,0,1,0,0, 4,1,4,0,1,2, 4,1,1,2,2,2, 2,2,1,2,3,2  ],
  /* 226 */  [ 4,0,0,0,1,1, 1,1,2,2,4,0, 4,0,2,2,4,1, 1,1,3,2,2,2  ],
  /* 227 */  [ 1,1,3,2,2,2, 1,1,2,2,0,1, 4,0,0,2,4,1  ],
  /* 228 */  [ 4,1,2,0,0,1, 2,0,4,1,1,2, 4,1,4,0,1,2, 2,0,1,2,3,2  ],
  /* 229 */  [ 2,0,1,2,3,2, 2,0,0,0,1,2, 4,1,4,0,0,2  ],
  /* 230 */  [ 4,1,4,0,0,0, 4,1,0,0,0,1, 3,2,2,0,1,1  ],
  /* 231 */  [ 0,2,4,1,4,0, 2,0,1,1,3,2  ],
  /* 232 */  [ 1,1,4,0,1,2, 1,1,2,0,4,0, 2,0,4,1,4,0, 2,0,2,2,4,1  ],
  /* 233 */  [ 1,1,0,0,1,2, 2,0,2,2,0,1, 4,0,0,2,4,1  ],
  /* 234 */  [ 4,1,2,0,2,2, 4,1,4,0,2,0, 4,0,0,0,2,0  ],
  /* 235 */  [ 4,0,0,2,4,1, 0,1,2,0,2,2  ],
  /* 236 */  [ 4,0,1,2,1,1, 4,0,1,1,4,1, 4,1,1,1,0,1  ],
  /* 237 */  [ 4,1,4,0,0,2, 0,0,1,2,1,1  ],
  /* 238 */  [ 0,1,4,0,0,0, 0,1,4,1,4,0  ],
  /* 239 */  [ 0,2,4,1,4,0  ],
  /* 240 */  [ 0,2,1,2,2,2, 1,2,3,2,2,2  ],
  /* 241 */  [ 0,1,0,0,1,2, 0,1,1,2,2,2, 2,2,1,2,3,2  ],
  /* 242 */  [ 0,0,1,1,3,2, 0,0,3,2,0,2, 0,2,3,2,2,2  ],
  /* 243 */  [ 0,1,3,2,2,2, 0,1,1,1,3,2  ],
  /* 244 */  [ 0,1,3,2,2,0, 0,1,0,2,3,2, 0,2,1,2,3,2  ],
  /* 245 */  [ 0,0,1,2,3,2, 0,0,3,2,2,0  ],
  /* 246 */  [ 0,2,0,0,0,1, 2,0,1,1,3,2  ],
  /* 247 */  [ 2,0,1,1,3,2  ],
  /* 248 */  [ 2,0,1,2,1,1, 2,0,2,2,1,2, 2,2,0,2,1,2  ],
  /* 249 */  [ 2,2,0,1,2,0, 0,0,1,2,1,1  ],
  /* 250 */  [ 0,2,0,0,2,0, 0,2,2,0,2,2  ],
  /* 251 */  [ 0,1,2,0,2,2  ],
  /* 252 */  [ 0,2,1,1,0,1, 0,2,1,2,1,1  ],
  /* 253 */  [ 0,0,1,2,1,1  ],
  /* 254 */  [ 0,2,0,0,0,1  ],
  /* 255 */  [ ],
];

