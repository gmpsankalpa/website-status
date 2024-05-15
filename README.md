# Website Status Checker

This Node.js script checks the status of a website and sends notifications to a Discord webhook if the website is down or encounters an error.

##  Table of Contents

- [Prerequisites](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js installed on your system
- npm (Node.js package manager) to install dependencies
- A Discord webhook URL to send notifications to

## Installation

1. Clone this repository or download the `index.js` file.

2. Navigate to the directory containing the script in your terminal.

3. Install dependencies using npm:

   ```bash
   npm install

4. Edit the `websiteUrl` and `discordWebhookUrl` variables in the `index.js` file with your website URL and Discord webhook URL respectively.

## Usage

- Run the script using Node.js:

    ```bash
    npm start

The script will continuously check the status of the website at the specified interval (default is every 1 minute) and send notifications to the Discord webhook if the website is down or encounters an error.

- For development purposes, you can run the script using nodemon:

    ```bash
    npm run dev

## Customization

- You can customize the interval of website status checks by modifying the setInterval function call in the script.

- For advanced customization, you can modify the formatting of Discord messages in the formatDiscordMessage function.

## Contributing

Contributions to this project are welcome. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the [MIT](LICENSE) License.

---

<p align="center">
<b>
  Repo Details 🤙
</b>
</p>

<div align="center">

   ![repo size](https://img.shields.io/github/repo-size/gmpsankalpa/website-status?label=Repo%20Size&style=for-the-badge&labelColor=black&color=20bf6b)
   ![GitHub forks](https://img.shields.io/github/forks/gmpsankalpa/website-status?&labelColor=black&color=0fb9b1&style=for-the-badge)
   ![GitHub stars](https://img.shields.io/github/stars/gmpsankalpa/website-status?&labelColor=black&color=f7b731&style=for-the-badge)
   ![GitHub LastCommit](https://img.shields.io/github/last-commit/gmpsankalpa/website-status?logo=github&labelColor=black&color=d1d8e0&style=for-the-badge)

</div>

<p align="center">
<b>
  Deploy status badge 🤖
</b>
</p>  

<div align="center">
   
   [![Netlify Status](https://api.netlify.com/api/v1/badges/f8c54f31-10f6-42a4-80e6-342090a3c60e/deploy-status)](https://app.netlify.com/sites/website-status/deploys)
</div>