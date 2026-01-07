/**
 * @returns {any}
 */
const heartShape = () => {
    return window.confetti.shapeFromPath({
        path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z',
        matrix: [0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666, -5.533333333333333]
    });
};

/**
 * @returns {void}
 */
export const basicAnimation = () => {
    return; // 🔴 MATI
    window.confetti({
        origin: { y: 1 },
        zIndex: 1057
    });
};


/**
 * @param {number} [until=15]
 * @returns {void}
 */
export const openAnimation = (until = 30) => {
    return; // 🔴 MATI
    const duration = until * 1000;
  
};


/**
* @param {HTMLElement} div
* @returns {void}
*/
export const tapTapAnimation = (div) => {
    return; // 🔴 MATI
    if (!window.confetti) {
        return;
    }

};

