/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                blurple: '#404EED',
				blackgray: '#23272A',
				grayprimary: '#F6F6F6'
            },
		},
	},
	plugins: [animations],
}
