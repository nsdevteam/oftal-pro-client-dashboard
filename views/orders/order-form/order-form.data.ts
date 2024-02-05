export const ADDITION_VALUES = Array.from(
  { length: 13 },
  (_, index) => 0.5 + 0.25 * index
);

export const CYLINDER_VALUES = Array.from(
  { length: 49 },
  (_, index) => 6 - 0.25 * index
);

export const SPHERICAL_VALUES = Array.from(
  { length: 161 },
  (_, index) => 20 - 0.25 * index
);

export const AXIS_VALUES = Array.from({ length: 181 }, (_, index) => 0 + index);

export const ADDITION_VALUES_LEGEND = ADDITION_VALUES.reduce(
  (acc, value) => ({
    ...acc,
    [value]: value.toFixed(2).replace('+', '').replace('.', ','),
  }),
  {}
);

export const CYLINDER_VALUES_LEGEND = CYLINDER_VALUES.reduce(
  (acc, value) => ({
    ...acc,
    [value]: value.toFixed(2).replace('+', '').replace('.', ','),
  }),
  {}
);

export const SPHERICAL_VALUES_LEGEND = SPHERICAL_VALUES.reduce(
  (acc, value) => ({
    ...acc,
    [value]: value.toFixed(2).replace('+', '').replace('.', ','),
  }),
  {}
);

export const AXIS_VALUES_LEGEND = AXIS_VALUES.reduce(
  (acc, value) => ({
    ...acc,
    [value]: `${value}º`,
  }),
  {}
);

export const TREATMENT_VALUES = ['HMC', 'SHMC', 'UC', 'HC'];

export const TYPE_VALUES = [
  'single-focal',
  'boost',
  'dynamic',
  'extend',
  'office',
  'invisible',
  'bifocal',
];

export const TYPE_LEGEND = {
  ['single-focal']: 'Unifocal Fabrico',
  ['boost']: 'Anti-Fadiga BOOST',
  ['dynamic']: 'Progressiva Free-Form DYNAMIC',
  ['extend']: 'Progressiva Free-Form EXTENDED',
  ['office']: 'Regressiva OFFICE',
  ['invisible']: 'Bifocal Free-Form INVISIBLE',
  ['bifocal']: 'Bifocal',
};

export const COLOR_VALUES = [
  'white',
  'photochromatic',
  'transitions',
  'polarised',
];

export const COLOR_LEGEND = {
  white: 'Branca',
  photochromatic: 'Fotocromática',
  transitions: 'Transitions',
  polarised: 'Polarizada',
};

export const REFRACTIVE_VALUES: Record<
  string,
  Record<string, ReadonlyArray<string>>
> = {
  white: {
    '1.5': TYPE_VALUES,
    '1.5 Lenticular+': TYPE_VALUES.slice(0, 1),
    '1.56': TYPE_VALUES,
    '1.56 UV420 Blue Cut': TYPE_VALUES.slice(0, -1),
    '1.56 Bi-Concavo -': TYPE_VALUES.slice(0, 1),
    '1.59 Policabonato': TYPE_VALUES.slice(0, -1),
    '1.6': TYPE_VALUES.slice(0, -1),
    '1.6 UV420 Blue Cut': TYPE_VALUES.slice(0, -1),
    '1.67': TYPE_VALUES.slice(0, -1),
    '1.67 UV420 Blue Cut': TYPE_VALUES.slice(0, -1),
    '1.74': TYPE_VALUES.slice(0, -1),
    '1.74 UV420 Blue Cut': TYPE_VALUES.slice(0, -1),
  },
  photochromatic: {
    '1.56': TYPE_VALUES,
    '1.56 UV420 Blue Cut': TYPE_VALUES.slice(0, -1),
    '1.59 Policabonato': TYPE_VALUES.slice(0, -1),
    '1.6': TYPE_VALUES.slice(0, -1),
    '1.6 UV420 Blue Cut': TYPE_VALUES.slice(0, -1),
    '1.67': TYPE_VALUES.slice(0, -1),
    '1.67 UV420 Blue Cut': TYPE_VALUES.slice(0, -1),
  },
  transitions: {
    '1.5': TYPE_VALUES.slice(0, -1),
    '1.6': TYPE_VALUES.slice(0, -1),
    '1.67': TYPE_VALUES.slice(0, -1),
  },
  polarised: {
    '1.5': TYPE_VALUES.slice(0, -1),
    '1.56': TYPE_VALUES.slice(0, -1),
    '1.6': TYPE_VALUES.slice(0, -1),
    '1.67': TYPE_VALUES.slice(0, -1),
  },
};

type LensPrice = number | null;

export const BASE_PRICE: Record<
  string,
  [LensPrice, LensPrice, LensPrice, LensPrice, LensPrice, LensPrice, LensPrice]
> = {
  //LENTE: [UNIFOCAL, BOOST, DYNAMIC, EXTENDED, OFFICE, INVISBLE, BIFOCAL]
  '0:1.5': [8_000, 15_000, 16_000, 17_000, 16_000, 16_000, 13_500],
  '0:1.5 Lenticular+': [25_000, null, null, null, null, null, null],
  '0:1.56': [9_000, 16_000, 17_000, 18_000, 17_000, 17_000, 14_500],
  '0:1.56 UV420 Blue Cut': [
    17_000,
    29_000,
    30_000,
    31_000,
    30_000,
    30_000,
    null,
  ],
  '0:1.56 Bi-Concavo -': [25_000, null, null, null, null, null, null],
  '0:1.59 Policabonato': [10_000, 18_000, 19_000, 20_000, 19_000, 19_000, null],
  '0:1.6': [15_000, 22_000, 23_000, 24_000, 23_000, 23_000, null],
  '0:1.6 UV420 Blue Cut': [
    24_000,
    36_000,
    37_000,
    38_000,
    37_000,
    37_000,
    null,
  ],
  '0:1.67': [20_000, 27_000, 28_000, 29_000, 28_000, 28_000, null],
  '0:1.67 UV420 Blue Cut': [
    28_000,
    38_000,
    39_000,
    40_000,
    39_000,
    39_000,
    null,
  ],
  '0:1.74': [35_000, 47_000, 48_000, 49_000, 48_000, 48_000, null],
  '0:1.74 UV420 Blue Cut': [
    54_000,
    59_000,
    60_000,
    61_000,
    60_000,
    60_000,
    null,
  ],
  '1:1.56': [15_000, 21_000, 22_000, 23_000, 22_000, 22_000, 16_000],
  '1:1.56 UV420 Blue Cut': [
    20_000,
    31_000,
    32_000,
    33_000,
    32_000,
    32_000,
    null,
  ],
  '1:1.59 Policabonato': [20_000, 33_000, 34_000, 35_000, 34_000, 34_000, null],
  '1:1.6': [25_000, 36_000, 37_000, 38_000, 37_000, 37_000, null],
  '1:1.6 UV420 Blue Cut': [
    30_000,
    38_000,
    39_000,
    40_000,
    39_000,
    39_000,
    null,
  ],
  '1:1.67': [30_000, 40_000, 41_000, 42_000, 41_000, 41_000, null],
  '1:1.67 UV420 Blue Cut': [
    35_000,
    42_000,
    43_000,
    44_000,
    43_000,
    43_000,
    null,
  ],
  '2:1.5': [25_000, 29_000, 30_000, 32_000, 30_000, 30_000, null],
  '2:1.6': [41_000, 45_000, 46_000, 47_000, 46_000, 46_000, null],
  '2:1.67': [45_000, 49_000, 50_000, 51_000, 50_000, 50_000, null],
  '3:1.5': [26_000, 30_000, 31_000, 32_000, 31_000, 31_000, null],
  '3:1.56': [27_000, 31_000, 32_000, 33_000, 32_000, 32_000, null],
  '3:1.6': [31_000, 35_000, 36_000, 37_000, 36_000, 36_000, null],
  '3:1.67': [36_000, 40_000, 41_000, 42_000, 41_000, 41_000, null],
};

export const EXTRA_PRICE = {
  HMC: 0,
  SHMC: 1000,
  UC: -2000,
  HC: -1000,
  prisma: 2000,
  cil: 2000,
  precal: 2000,
  receita: 5000,
};
