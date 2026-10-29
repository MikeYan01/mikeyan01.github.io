import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const require = createRequire(import.meta.url);
const svelteRequire = createRequire(require.resolve("@astrojs/svelte"));
const viteRequire = createRequire(
	svelteRequire.resolve("@sveltejs/vite-plugin-svelte"),
);
const deepmergeRequire = createRequire(viteRequire.resolve("deepmerge"));

for (const [format, merge] of Object.entries({
	cjs: viteRequire("deepmerge"),
	umd: deepmergeRequire("./umd.js"),
})) {
	test(`${format}: rejects prototype keys with null or own-key defaults`, () => {
		const source = JSON.parse(
			'{"__proto__":{"admin":true},"constructor":{"prototype":{"admin":true}},"prototype":{"admin":true},"allowed":true}',
		);
		const defaults = [
			null,
			undefined,
			false,
			0,
			"",
			Object.create(null),
			JSON.parse('{"__proto__":{}}'),
		];

		for (const session of defaults) {
			const result = merge({ session }, { session: source });
			assert.deepEqual(result.session, { allowed: true });
			assert.equal(Object.getPrototypeOf(result.session), Object.prototype);
			assert.equal(result.session.admin, undefined);
		}
	});

	test(`${format}: rejects prototype keys copied from the target`, () => {
		const target = JSON.parse(
			'{"__proto__":{"admin":true},"constructor":{"prototype":{"admin":true}},"prototype":{"admin":true},"allowed":{"value":1}}',
		);
		const result = merge(target, { extra: true });

		assert.deepEqual(result, { allowed: { value: 1 }, extra: true });
		assert.equal(Object.getPrototypeOf(result), Object.prototype);
		assert.equal(result.admin, undefined);
	});

	test(`${format}: preserves nested options and existing array merge modes`, () => {
		const defaults = {
			compilerOptions: { dev: false },
			extensions: [".js"],
		};
		const options = {
			compilerOptions: { css: "external" },
			extensions: [".svelte"],
		};

		assert.deepEqual(merge.all([defaults, options]), {
			compilerOptions: { dev: false, css: "external" },
			extensions: [".js", ".svelte"],
		});
		assert.deepEqual(
			merge(defaults, options, {
				arrayMerge: (target, source) => source ?? target,
			}),
			{
				compilerOptions: { dev: false, css: "external" },
				extensions: [".svelte"],
			},
		);
		assert.deepEqual(defaults, {
			compilerOptions: { dev: false },
			extensions: [".js"],
		});
	});
}
