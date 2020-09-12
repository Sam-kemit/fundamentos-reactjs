const formatValue = (value: number): string =>
  Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(value); // TODO

export default formatValue;
