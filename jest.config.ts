export {};

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	// use identity-obj-proxy to mock css modules for jest tests
	moduleNameMapper: {
		'\\.(css)$': 'identity-obj-proxy',
	},
};
