const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	filefilter: function (req: any, file: any, cb: any) {
		const ext = path.extname(file.originalname);
		if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
			cb(new Error('file type is not supported'));
			return;
		}
		cb(null, true);
	},

	filename: function (req: any, file: any, cb: any) {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.fieldname +
				'-' +
				uniqueSuffix +
				path.extname(file.originalname)
		);
	},
});

module.exports = multer({ storage: storage });
