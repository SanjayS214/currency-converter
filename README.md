# 💱 Currency Converter

A simple and responsive currency converter built with HTML, CSS, and JavaScript using the ExchangeRate API to fetch currency exchange rates.

## ✨ Features

- 💱 Convert between different currencies
- 🌍 Display currency flags
- 📊 Fetch exchange rates using the ExchangeRate API
- 🔄 Select different currencies for conversion
- 📱 Responsive design
- 🎨 Pink-themed interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- ExchangeRate API
- FlagsAPI
- Font Awesome

## 🔑 API Key Required

⚠️ **This project will NOT work without a valid ExchangeRate API key.**

This project uses the [ExchangeRate API](https://www.exchangerate-api.com/) to fetch currency exchange rates.

### How to Get Your API Key

1. Create an account on ExchangeRate API.
2. Get your API key from your account.
3. Open `script.js` in this project.
4. Find:

```js
const apiKey = "YOUR_API_KEY";
```

5. Replace `YOUR_API_KEY` with your own API key.

For example:

```js
const apiKey = "your_api_key_here";
```

🔒 **Do not share or commit your personal API key to GitHub.**
Each user or contributor should use their own API key.

## 🚀 How to Run

1. **Clone the Repository**

```bash
git clone https://github.com/momina-codebase/currency-converter.git
```

2. **Open the Project**
Open the project folder in VS Code or another code editor.

3. **Add Your API Key**
Open `script.js` and replace:

```js
const apiKey = "YOUR_API_KEY";
```

with your own ExchangeRate API key.

⚠️ The currency converter will not work until a valid API key has been added.

4. **Run the Project**
Open `index.html` in your browser.
You can also use the Live Server extension in VS Code.

## 🤝 Contributing

Contributions are welcome!
If you'd like to improve this project, you can:

- Check the existing issues
- Work on an open issue
- Suggest a new feature
- Report a bug
- Improve the user interface
- Submit a pull request

Before contributing, please make sure you use your own ExchangeRate API key and do not commit it to the repository.

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.