'use strict';

const file_system = require('fs'),
      Browser = require('./browser.js');

const error_names = ['SyntaxError', 'ReferenceError', 'RangeError', 'TypeError', 'EvalError', 'URIError', 'XMLHttpRequest cannot load', 'net::ERR_', 'Uncaught '];

let url = process.argv[2],
    timeout = Math.max(parseInt(process.argv[3], 10), 5000);

if(!file_system.existsSync(url))
{
	console.log('maybe');
	process.exit(1);
}


let browser = new Browser();

browser.start();

browser.load( url, timeout, function(console_logs)
{
	console_logs.forEach(function(log)
	{
		error_names.forEach(function(error)
		{
			if(log.indexOf(error) > -1)
			{
				console.log('yes');
				process.exit(0);
			}
		});
	});

	console.log('no');

	browser.stop();

	process.exit(0);
});
