function generateColorShades(baseColor) {
    // Remove '#' if present in the base color
    baseColor = baseColor.replace('#', '');
  
    // Split the base color into RGB values
    const red = parseInt(baseColor.substr(0, 2), 16);
    const green = parseInt(baseColor.substr(2, 2), 16);
    const blue = parseInt(baseColor.substr(4, 2), 16);
  
    // Calculate lighter and darker shades
    const lighterShade = `#${getHexCode(Math.min(red + 50, 255))}${getHexCode(Math.min(green + 50, 255))}${getHexCode(Math.min(blue + 50, 255))}`;
    const darkerShade = `#${getHexCode(Math.max(red - 50, 0))}${getHexCode(Math.max(green - 50, 0))}${getHexCode(Math.max(blue - 50, 0))}`;
  
    return [lighterShade, baseColor, darkerShade];
  }
  
  function getHexCode(value) {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }
  
  // Example usage
  const baseColor = '#FF0000';
  const shades = generateColorShades(baseColor);
  console.log(shades); // ['#FF3232', '#FF0000', '#802626']
  