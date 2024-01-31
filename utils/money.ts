import { FormattedNumber } from './utils.types';

const isExponential = (number: number) => number.toString().includes('e');

const removeZero = (array: ReadonlyArray<string>): string => {
  if (!array.length) return '';

  if (array[array.length - 1] == '0') return removeZero(array.slice(0, -1));

  return array.join('');
};

export const removeUnnecessaryZeros = (string: string): string =>
  string.includes('.') ? removeZero(string.split('')) : string;

const treatNumberDecimals = (number: number, maxDecimals: number) => {
  const [integralPart, decimalPart] = (
    isExponential(number)
      ? removeUnnecessaryZeros(number.toFixed(maxDecimals))
      : number.toString()
  ).split('.');

  const integralDigits = integralPart.toString().length;

  const newNumber = Number(
    integralDigits > 12
      ? `${integralPart.slice(0, -12)}.${integralPart.slice(-12, -11)}`
      : integralDigits > 9
      ? `${integralPart.slice(0, -9)}.${integralPart.slice(-9, -8)}`
      : integralDigits > 6
      ? `${integralPart.slice(0, -6)}.${integralPart.slice(-6, -5)}`
      : integralDigits > 3
      ? `${integralPart.slice(0, -3)}.${integralPart.slice(-3, -2)}`
      : `${integralPart}.${
          +integralPart >= 10 ? decimalPart?.slice(0, 2) ?? 0 : decimalPart ?? 0
        }`
  );

  const newNumberString = isExponential(newNumber)
    ? removeUnnecessaryZeros(newNumber.toFixed(maxDecimals - integralDigits))
    : newNumber.toPrecision();

  const baseDecimals = integralDigits > 6 ? 0 : 2;

  const decimalDigits =
    integralDigits <= 3 && +integralPart >= 10
      ? 2
      : newNumberString.split('.')[1]?.length ?? baseDecimals;

  return {
    newNumber,
    decimalDigits,
    integralDigits,
  };
};

const treatMoneyDecimals = (money: number, maxDecimals: number) => {
  const [integralPart, decimalPart] = (
    isExponential(money)
      ? removeUnnecessaryZeros(money.toFixed(maxDecimals))
      : money.toString()
  ).split('.');

  const integralDigits = integralPart.toString().length;

  const newMoney = Number(
    integralDigits > 12
      ? `${integralPart.slice(0, -12)}.${integralPart.slice(-12, -10)}`
      : integralDigits > 9
      ? `${integralPart.slice(0, -9)}.${integralPart.slice(-9, -7)}`
      : integralDigits > 6
      ? `${integralPart.slice(0, -6)}.${integralPart.slice(-6, -4)}`
      : `${integralPart}.${
          +integralPart >= 10 ? decimalPart?.slice(0, 2) ?? 0 : decimalPart ?? 0
        }`
  );

  const newMoneyString = isExponential(newMoney)
    ? removeUnnecessaryZeros(newMoney.toFixed(maxDecimals - integralDigits))
    : newMoney.toPrecision();

  const baseDecimals = integralDigits > 6 ? 0 : 2;

  const decimalDigits =
    integralDigits <= 6 && +integralPart >= 10
      ? 2
      : newMoneyString.split('.')[1]?.length ?? baseDecimals;

  return {
    newMoney,
    decimalDigits,
    integralDigits,
  };
};

export const formatNumber = (
  number: number,
  maxFractionDigits = 20
): FormattedNumber => {
  const { integralDigits, newNumber } = treatNumberDecimals(
    number,
    maxFractionDigits
  );
  const value = newNumber ?? 0;
  const unit =
    integralDigits > 12
      ? 'T'
      : integralDigits > 9
      ? 'B'
      : integralDigits > 6
      ? 'M'
      : integralDigits > 3
      ? 'K'
      : '';

  const toString = (unitSeparator = '') => `${value}${unitSeparator}${unit}`;

  return {
    value,
    unit,
    toString,
  };
};

export const formatMoney = (money: number, maxFractionDigits = 20): string => {
  const { integralDigits, newMoney, decimalDigits } = treatMoneyDecimals(
    money,
    maxFractionDigits
  );

  const maximumFractionDigits =
    decimalDigits < maxFractionDigits ? decimalDigits : maxFractionDigits;

  const minimumFractionDigits =
    decimalDigits > maximumFractionDigits
      ? maximumFractionDigits
      : decimalDigits;

  return `${new Intl.NumberFormat('en-US', {
    currency: 'USD',
    style: 'currency',
    maximumFractionDigits,
    minimumFractionDigits,
  }).format(newMoney)}${
    integralDigits > 12
      ? 'T'
      : integralDigits > 9
      ? 'B'
      : integralDigits > 6
      ? 'M'
      : ''
  }`.slice(1);
};
