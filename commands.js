const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('node:fs');

const commandRegister = (client) => {
    const commands = [
        new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
        new SlashCommandBuilder().setName('birthday').setDescription('Replies with a birthday message!'),
        new SlashCommandBuilder().setName('coinflip').setDescription('Replies with heads or tails!'),
        new SlashCommandBuilder().setName('hello').setDescription('Replies with hello!'),
        new SlashCommandBuilder().setName('familyguy').setDescription('Replies with a family guy quote!'),
        new SlashCommandBuilder().setName('futurama').setDescription('Replies with a futurama quote!'),
        new SlashCommandBuilder().setName('monday').setDescription('Replies with garfield!'),
        new SlashCommandBuilder().setName('quote').setDescription('Replies with a quote from the FD members!'),
        new SlashCommandBuilder().setName('friendlymeme').setDescription('Replies with a FD original piece!'),
        new SlashCommandBuilder().setName('cumzone').setDescription('Replies with a coomer!'),
        new SlashCommandBuilder().setName('insult').setDescription('Replies with an insult')
        .addStringOption(option =>
            option.setName('person')
            .setDescription('This is the person you want to insult')
            .setRequired(false)),
        new SlashCommandBuilder().setName('wiki').setDescription('Replies with the friendly discord wiki!'),
        new SlashCommandBuilder().setName('sneed').setDescription('Replies with a sneed meme'),
        new SlashCommandBuilder().setName('gigachad').setDescription('Replies with a gigachad meme'),
        new SlashCommandBuilder().setName('vin').setDescription('Replies with a gavin meme'),
        new SlashCommandBuilder().setName('wood').setDescription('Replies with a wood meme'),
        new SlashCommandBuilder().setName('jeter').setDescription('Replies with a jeter meme'),
        new SlashCommandBuilder().setName('todd').setDescription('Replies'),
        new SlashCommandBuilder().setName('pufferfish').setDescription('Posts the pufferfish emoji'),
        new SlashCommandBuilder().setName('pizzatime').setDescription('Starts pizza time!'),
        new SlashCommandBuilder().setName('pizzaboard').setDescription('Posts the current pizza time leaderboard!'),
        new SlashCommandBuilder().setName('serebii').setDescription('Posts the current news from Serebii!'),
        /* new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('this command makes a ticket and gives you a link to it')
        .addStringOption(option =>
            option.setName('issuename')
            .setDescription('This is the name of the issue being created')
            .setRequired(true))
        .addStringOption(option =>
            option.setName('description')
            .setDescription('This is the description of the problem')
            .setRequired(true)),
        new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with user information!')
        .addSubcommand(subcommand =>
            subcommand
                .setName('tag')
                .setDescription('displays the users tag'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('id')
                .setDescription('displays the users id')),     */
    ]
        .map(command => command.toJSON());

    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

    try {
        console.log('Started refreshing application (/) commands.');

        rest.put(
            Routes.applicationGuildCommands("497541741034078228", "418600278489694218"),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
};
exports.commandRegister = commandRegister;