export function Discover({ widthInRem = 5.25 }: { widthInRem?: number }) {
	const aspectRatio = 100 / 17.42;

	const width = `${widthInRem}rem`;
	const height = `${widthInRem / aspectRatio}rem`;

	return (
		<svg
			style={{ width, height }}
			viewBox="61.445 189.779 391.036 68.139"
			xmlns="http://www.w3.org/2000/svg"
			overflow="visible"
		>
			<path
				d="M432.771,228.354c9.243-1.909,14.284-8.097,14.284-17.722c0-21.771-23.146-18.639-40.408-18.639l-0.001,62.639h12.223    v-25.055h1.681l16.958,25.055h14.973L432.771,228.354z M422.457,221.021h-3.589v-19.02h3.742c7.715,0,11.917,3.207,11.917,9.243    C434.527,217.66,430.325,221.021,422.457,221.021z"
				className="fill-white/85"
			/>
			<polygon
				points="363.943,192.07 398.549,192.07 398.549,202.764 376.168,202.764 376.168,216.668 397.784,216.668     397.784,227.208 376.168,227.208 376.168,244.167 398.549,244.167 398.549,254.708 363.943,254.708   "
				className="fill-white/85"
			/>
			<polygon
				points="311.465,192.07 328.194,234.236 345.153,192.07 358.521,192.07 331.403,256.389 324.834,256.389 298.097,192.07       "
				className="fill-white/85"
			/>
			<path
				d="M268.764,189.779c18.868,0,34.07,15.277,34.07,34.069c0,18.868-15.279,34.07-34.07,34.07    c-18.868,0-34.069-15.279-34.069-34.07C234.694,204.98,249.974,189.779,268.764,189.779z"
				className="fill-white/85"
			/>
			<path
				d="M231.104,194.438v14.514c-15.353-15.354-35.749-3.589-35.749,14.514c0,19.098,21.006,29.411,35.749,14.667v14.514    c-22.687,10.923-48.354-4.354-48.354-29.181C182.75,199.632,208.035,182.98,231.104,194.438z"
				className="fill-white/85"
			/>
			<path
				d="M156.855,245.083c8.708,0,17.111-11.687-2.521-18.638c-11.457-4.202-15.43-8.708-15.43-17.34    c0-17.723,23.374-23.986,37.965-10.922l-6.417,8.248c-7.944-8.86-19.021-4.736-19.021,1.912c0,3.36,2.063,5.269,9.396,7.866    c13.903,5.042,18.028,9.55,18.028,19.555c0,22.536-29.639,28.571-43.236,8.632l7.869-7.562    C146.313,242.257,151.049,245.083,156.855,245.083L156.855,245.083z"
				className="fill-white/85"
			/>
			<rect height="62.638" width="12.223" x="118.66" y="192.07" className="fill-white/85" />
			<path
				d="M79.321,192.07H61.445v62.638h17.875c23.604,0,33.687-17.11,33.687-31.242C113.008,205.056,99.258,192.07,79.321,192.07z     M93.604,239.278c-3.743,3.361-8.861,4.889-16.729,4.889h-3.209v-41.403h3.209c7.868,0,12.757,1.299,16.729,5.041    c4.354,3.821,6.799,9.625,6.799,15.66C100.404,229.5,97.958,235.305,93.604,239.278z"
				className="fill-white/85"
			/>
		</svg>
	);
}
