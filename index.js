const axios = require('axios');

// Function to check website status
async function checkWebsiteStatus(url) {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            return { status: 'UP', message: '> @everyone Website is up and running smoothly 🟢 ||https://gmpsankalpa.xyz||' };
        } else {
            return { status: 'DOWN', message: '> @Developer  Website may be down 🔴, status code: ${response.status}' };
        }
    } catch (error) {
        return { status: 'ERROR', message: '> @Developer  Error checking website status 🛑 ||https://gmpsankalpa.xyz||' };
    }
}

// Function to send message to Discord webhook
async function sendToDiscordWebhook(webhookUrl, message) {
    try {
        await axios.post(webhookUrl, { content: message });
        console.log('Message sent to Discord webhook');
    } catch (error) {
        console.error('Error sending message to Discord webhook:', error.message);
    }
}

// Replace these with your actual website URL and Discord webhook URL
const websiteUrl = 'https://gmpsankalpa.xyz/';
const discordWebhookUrl = 'https://discord.com/api/webhooks/1240321598343610498/wuTIM3MLv5utRy5hishDWCkb_F7kk8S3uFXxEvala2uhShXcfr3uluko9pAzGyHLp_xd';

// Main function to check website status and send to Discord
async function main() {
    const { status, message } = await checkWebsiteStatus(websiteUrl);
    await sendToDiscordWebhook(discordWebhookUrl, `**Website Status: ${status}\n${message}**`);
}

// Run main function every 1 minute
setInterval(main, 60000); // 60000 milliseconds = 1 minute
