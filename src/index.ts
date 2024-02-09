const baseFont1 = 'Arial';
const baseFont2 = 'Comic Sans MS';

const getTextWidth = (fontFamily: string, dummyText: string): number => {
  const span = document.createElement('span');
  span.style.visibility = 'hidden';
  span.style.pointerEvents = 'none';
  span.style.position = 'absolute';
  span.style.whiteSpace = 'nowrap';
  span.style.opacity = '0';
  span.innerHTML = dummyText;
  span.style.fontFamily = fontFamily;
  document.body.appendChild(span);
  const {width} = span.getBoundingClientRect();
  document.body.removeChild(span)
  return width
}


const isFontInstalledBase = (dummyText: string) => (fontFamily: string) => {
  // we need 2 baselines for when we are testing against, say, arial. Or in a rare scenario when our font matches the width of one of the baselines
  return !(
    getTextWidth(baseFont1, dummyText) === getTextWidth(fontFamily + ', ' + baseFont1, dummyText) &&
    getTextWidth(baseFont2, dummyText) === getTextWidth(fontFamily + ', ' + baseFont2, dummyText)
  )
};

export const isFontInstalledEnglish = isFontInstalledBase('Thequickbrownfoxjumps');

// the text samples should NOT contain spaces when checking for non-ascii font faces
// because otherwise spaces would be taken from the main font
export const isFontInstalledCyrillic = isFontInstalledBase('Улукоморьядубзеленыйзлатаяцепьнадубетом');
export const isFontInstalledExtLat = isFontInstalledBase('Poçžeśïtemñêspìñkú');

export default isFontInstalledEnglish;
