let res = {};
let data = {};

res = await fetch(merchantURL);

// function getQuote() {
// 	return fetch("https://zenquotes.io/api/random")
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((data) => {
// 			return data[0]["q"] + " -" + data[0]["a"];
// 		});
// }

// async function getMerchants() {
//   res = await fetch(merchantURL);
//   data = await res.json();
// }


// async function getMerchants(message) {
// 	const timestamp = Date.now();
// 	console.log(timestamp);
// 	requestRandom();
// 	const merchantURL = "https://bushwhacker2.djartsgames.ca/~bushwhacker2/post.php?call=getGreeterDialogDetails&dl=1%2E33&request%5Fid=" + requestIDValue + "&hash=" + userHash + "&user%5Fid=" + userID + "&network%5Fid=18&instance%5Fid=" + instanceID + "&timestamp=" + timestamp;
// 	res = await fetch(merchantURL);
// 	data = await res.json();
// 	for (var i = 0; i < data.available_merchants.length; i++) {
// 		console.log("slot: " + i);
// 		console.log(data.available_merchants[i].name);
// 		for (var j = 0; j < data.available_merchants[i].items.length; j++) {
// 			console.log(data.available_merchants[i].items[j].name);
// 		}
// 	}
// 	const embed = new Discord.RichEmbed(); //Ver 11.5.1 of Discord.js
// 	embed.setTitle("Available Merchants");
// 	for (var i = 0; i < data.available_merchants.length; i++) {
// 		embed.addField(data.available_merchants[i].name, data.available_merchants[i].items[0].name + "\n" + data.available_merchants[i].items[1].name + "\n" + data.available_merchants[i].items[2].name);
// 	}
// 	message.channel.send(embed);
// }
