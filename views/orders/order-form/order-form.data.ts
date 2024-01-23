export const ADDITIONAL_VALUES = Array.from({ length: 13 }, (_, index) => {
  const value = 0.5 + 0.25 * index;
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}`;
});

export const AXIS_VALUES = Array.from({ length: 181 }, (_, index) => {
  const value = 0 + index;
  return `${value}°`;
});

export const CYLINDER_VALUES = Array.from({ length: 49 }, (_, index) => {
  const value = 6 - 0.25 * index;
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}`;
});

export const SPHERICAL_VALUES = Array.from({ length: 161 }, (_, index) => {
  const value = 20 - 0.25 * index;
  return `${value > 0 ? '+' : ''}${value.toFixed(2)}`;
});

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
