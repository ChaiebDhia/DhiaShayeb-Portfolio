import '@testing-library/jest-dom';

window.scrollTo = jest.fn();

global.IntersectionObserver = class {
	observe() {}
	unobserve() {}
	disconnect() {}
};

window.requestAnimationFrame = (callback) => setTimeout(callback, 0);
window.cancelAnimationFrame = (id) => clearTimeout(id);

HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
	clearRect: jest.fn(),
	beginPath: jest.fn(),
	moveTo: jest.fn(),
	lineTo: jest.fn(),
	stroke: jest.fn(),
	arc: jest.fn(),
	fill: jest.fn()
}));
