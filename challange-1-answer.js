var fs = require('fs');

console.log("Starting Reading File")
fs.readFile("input.txt", function(err,data){
	if (err) console.log(err)
		console.log(data.toString());
	console.log("Finish Reading File")
	console.log("Begin appending file")
	fs.appendFile('input.txt', 'data to append', 
		(err) => {
			if (err) throw err;
			console.log('Finish appending file');
			consoel.log('Begin re-reading file!')
			fs.readFile("input.text", function(err,data){
				if (err) console.log(err);
				console.log(data.toString());
				console.log('Finish re-reading file!')
			})
		});
})
