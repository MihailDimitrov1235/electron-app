/* eslint-disable no-param-reassign */
export default function blendColors(colors: string[], value: number): string {
  // Ensure value is between 0 and 100
  value = Math.max(0, Math.min(value, 100)) / 100;

  // Function to convert hex color to RGB
  function hexToRgb(hex: string): [number, number, number] {
    hex = hex.replace(/^#/, '');
    if (hex.length === 6) {
      return [
        parseInt(hex.substr(0, 2), 16),
        parseInt(hex.substr(2, 2), 16),
        parseInt(hex.substr(4, 2), 16),
      ];
    }
    throw new Error('Invalid hex color format');
  }

  // Function to convert RGB color to hex
  function rgbToHex(r: number, g: number, b: number): string {
    return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
  }

  // Function to blend two colors
  function blendTwoColors(
    c1: string,
    c2: string,
    ratio: number,
  ): [number, number, number] {
    const [r1, g1, b1] = hexToRgb(c1);
    const [r2, g2, b2] = hexToRgb(c2);
    const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
    const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
    const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
    return [r, g, b];
  }

  // Handle the case with at least two colors
  if (colors.length < 2) {
    throw new Error('At least two colors are required to blend.');
  }

  // Blend colors
  const totalSections = colors.length - 1;
  const segment = value * totalSections;

  const lowerIndex = Math.floor(segment);
  const upperIndex = Math.ceil(segment);

  if (lowerIndex === upperIndex) {
    // When the value falls exactly on a color segment
    return colors[lowerIndex];
  }

  // Calculate the ratio for blending between the two colors
  const ratio = segment - lowerIndex;

  // Blend the two colors
  return rgbToHex(
    ...blendTwoColors(colors[lowerIndex], colors[upperIndex], ratio),
  );
}
