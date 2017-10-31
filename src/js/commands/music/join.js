require(`rootpath`)();
const Command = require(`src/js/structures/command.js`);

class Join extends Command {
	constructor(any) {
		super(any);
		this.command = `join`;
		this.category = `music`;
	}

	apply({ message, options }) {
		this.voiceDevice.join(message, options)
			.then(({ connection, alreadyJoined }) => {
				if (!alreadyJoined) this.quickResponse(`music.join.success`, { channel_name: connection.channel.name });
			})
			.catch(error => this.quickResponse(error, { channel_name: options.voice }));
	}
}

module.exports = Join;
