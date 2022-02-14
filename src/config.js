"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));
const description = "TEST";
const baseUri = "ipfs://NewUriToReplace";
const itemName = "TEST";
const symbol = "SYM";

const layerConfigurations = [
	{
		growEditionSizeTo: 1,
		layersOrder: [{ name: "Background" } /* , { name: "Character" }, { name: "Equipment" } */],
	},
];

const shuffleLayerConfigurations = false;

const debugLogs = false;
// 640 * 640 per file
// The Length of the file will be 640 * n frame
/* const format = {
	width: 5120,
	height: 640,
}; */
const format = {
	width: 24318,
	height: 386,
};
const background = {
	generate: true,
	brightness: "80%",
};

const extraMetadata = {
	seller_fee_basis_points: 0,
	symbol: "TESTSYM",
	collection: {
		name: "Solflare X NFT",
		family: "Solflare",
	},
	creators: [
		{
			address: "SOLFLR15asd9d21325bsadythp547912501b",
			share: 100,
		},
	],
	external_url: "https://solflare.com",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

//Preview option not compatible with sprite sheet
// const preview = {
//   thumbPerRow: 5,
//   thumbWidth: 50,
//   imageRatio: format.width / format.height,
//   imageName: "preview.png",
// };

module.exports = {
	itemName,
	format,
	baseUri,
	description,
	background,
	uniqueDnaTorrance,
	layerConfigurations,
	rarityDelimiter,
	//preview,
	shuffleLayerConfigurations,
	debugLogs,
	extraMetadata,
};
