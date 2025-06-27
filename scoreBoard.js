/**
 * scoreBoard - Simple Scoreboard Display System
 * Author: IlReDelTrucco
 * License: Custom
 */

const scoreBoard = {
    /**
     * Updates the content of a scoreboard element.
     * @param {string} selector - CSS selector of the scoreboard element.
     * @param {number} score - The score to display.
     */
    update(selector, score) {
        const element = document.querySelector(selector);
        if (!element) {
            console.error(`[scoreBoard] Element "${selector}" not found.`);
            return;
        }
        if (typeof score !== 'number') {
            console.error('[scoreBoard] Invalid score value.');
            return;
        }
        element.textContent = `Score: ${score}`;
    },

    /**
     * Resets the scoreboard display to zero.
     * @param {string} selector - CSS selector of the scoreboard element.
     */
    reset(selector) {
        this.update(selector, 0);
    }
};

// Example usage:
// scoreBoard.update('#scoreDisplay', 150);
// scoreBoard.reset('#scoreDisplay');

module.exports = scoreBoard;
