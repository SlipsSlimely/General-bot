module.exports = {
    name: 'cumzone',
    description:"this is a silly command!",
    async execute(interaction, args){
        

        // This command just posts a single emoji for users
        await interaction.deferReply();
            interaction.editreply('<a:CoomT:763569529879920671>');
        
    }
}