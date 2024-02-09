const baseFont1 = 'Arial';
const baseFont2 = 'Comic Sans MS';

type Dimensions = {width: number, height: number};

const getTextDimensions = (fontFamily: string, dummyText: string): Dimensions => {
  const span = document.createElement('span');
  // span.style.visibility = 'hidden';
  // span.style.pointerEvents = 'none';
  span.style.position = 'absolute';
  span.style.whiteSpace = 'nowrap';
  // span.style.opacity = '0';
  span.innerHTML = dummyText;
  span.style.fontFamily = fontFamily;
  document.body.appendChild(span);
  const { width, height} = span.getBoundingClientRect();
  // document.body.removeChild(span)
  return {width, height}
}

const areSameDimensions = (d1: Dimensions, d2: Dimensions) => d1.width === d2.width && d1.height === d2.height;

const isFontInstalledBase = (dummyText: string) => (fontFamily: string) => {
  // we need 2 baselines for when we are testing against, say, arial. Or in a rare scenario when our font matches the width of one of the baselines
  return !(
    areSameDimensions(getTextDimensions(baseFont1, dummyText), getTextDimensions(fontFamily + ', ' + baseFont1, dummyText)) &&
    areSameDimensions(getTextDimensions(baseFont2, dummyText), getTextDimensions(fontFamily + ', ' + baseFont2, dummyText))
  )
};

export const isFontInstalledEnglish = isFontInstalledBase('Quick brown fox');
export const isFontInstalledCyrillic = isFontInstalledBase('У лукоморья дуб зеленый');
export const isFontInstalledExtLat = isFontInstalledBase('Poçžeśïte mñê spìñkú');

export default isFontInstalledEnglish;
