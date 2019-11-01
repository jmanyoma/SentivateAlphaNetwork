module.exports = (server) => {
	const path = require('path');
	const {
		logImprt,
		cnsl,
		alert,
		utility: {
			stringify,
			keys,
			assign,
			cleanPath,
			isString,
		},
		configuration: {
			resourceDirectory,
			cacheMaxAge,
			allowOrigin,
			contentSecurityPolicy,
			serverName,
			encoding,
			language,
			onConnectMessage
		},
		crypto: {
			toBase64,
		},
		file: {
			read
		}
	} = server;
	logImprt('APP', __dirname);
	const isValid = require('is-valid-path');
	const api = {
		async open(socket, request, response) {
			cnsl(request);
			response.head = {};
			if (cacheMaxAge) {
				response.head.cacheMaxAge = cacheMaxAge;
			}
			if (allowOrigin) {
				response.head.allowOrigin = allowOrigin;
			}
			if (contentSecurityPolicy) {
				response.head.contentSecurityPolicy = contentSecurityPolicy;
			}
			if (serverName) {
				response.head.server = serverName;
			}
			if (encoding) {
				response.head.encoding = encoding;
			}
			if (language) {
				response.head.language = language;
			}
			if (onConnectMessage) {
				response.body = onConnectMessage;
			}
			response.status = 101;
			response.scid = socket.serverIdRaw;
			return true;
		},
		async reKey(socket, body) {
			cnsl(`${toBase64(body.certificate.key)}`);
			socket.reKey(body.certificate);
		},
		async file(socket, request, responseBody, responseHeaders) {
			cnsl(request);
			const {
				path: location
			} = request.body;
			if (!isString(location) || !location.length || !isValid(location)) {
				console.log('No valid state request recieved - Returning empty data');
				responseHeaders.status = 404;
				return true;
			}
			const cleanedPath = cleanPath(`${resourceDirectory}/${location}`);
			const ext = path.extname(cleanedPath);
			console.log(`EXT => ${ext}`);
			responseHeaders.file = await read(cleanedPath);
			return true;
		},
		async state(socket, request, responseBody, responseHeaders) {
			cnsl(request);
			const {
				state: fileName
			} = request.body;
			if (!isString(fileName) || !isValid(fileName)) {
				console.log('No valid state request recieved - Returning empty data');
				responseHeaders.status = 404;
				return true;
			}
			const cleanedPath = (fileName) ? cleanPath(`${resourceDirectory}/states/${fileName}/index.js`) : cleanPath(`${resourceDirectory}/states/index.js`);
			const file = await read(cleanedPath);
			console.log(cleanedPath, file);
			responseHeaders.data = file;
			return true;
		},
	};
	assign(server.app, api);
	alert(`LOADED PUBLIC API: COUNT: ${keys(api).length} ||| ${keys(api).join(' , ')}`);
};