import sharp from "sharp";

// const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgText)}`;

// const img = new Image();

// // Optional: If your SVG uses external resources, set crossOrigin (for inline SVG this is not necessary)
// // img.crossOrigin = "Anonymous";

// img.onload = () => {
// 	// Create a canvas element
// 	const canvas = document.createElement("canvas");
// 	canvas.width = img.width;
// 	canvas.height = img.height;
// 	const ctx = canvas.getContext("2d");

// 	// Draw the SVG image onto the canvas
// 	ctx?.drawImage(img, 0, 0);

// 	// Extract the pixel data from the canvas
// 	const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
// 	const data = imageData.data;

// 	// Build a 2D grid (array of rows) of pixel data.
// 	// Each pixel is represented as an object with r, g, b, a values.
// 	const grid = [];
// 	for (let y = 0; y < canvas.height; y++) {
// 		const row = [];
// 		for (let x = 0; x < canvas.width; x++) {
// 			const index = (y * canvas.width + x) * 4;
// 			const pixel = {
// 				r: data[index],
// 				g: data[index + 1],
// 				b: data[index + 2],
// 				a: data[index + 3],
// 			};
// 			row.push(pixel);
// 		}
// 		grid.push(row);
// 	}

// 	// Now grid is a 2D array of pixels
// 	console.log(grid);

// 	// Optionally, you can append the canvas to the document to see the image
// 	// document.body.appendChild(canvas);
// };

// // Start loading the SVG
// img.src = svgDataUrl;

export default (...[SVG]: [string]) => {
	const _Buffer = Buffer.from(SVG);

	console.log(_Buffer);
};
