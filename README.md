# 💼 Digital Business Card

A sleek, responsive, and easy-to-edit one-page digital business card website. Includes a working contact form using **EmailJS** — no backend required!

## ✨ Features

- Responsive and mobile-friendly design
- Clean layout with personal and professional info
- Contact form powered by EmailJS
- Minimal and easily customizable HTML, CSS, and JS
- Social links and contact info

## 📁 Project Structure

```
/business-card
│
├── index.html       # Main webpage
├── style.css        # Custom styles
├── script.js        # JavaScript with EmailJS
└── assets/          # Images, fonts, icons, etc.
```

## 🔧 Setup & Usage

### 1. Clone This Repo

```bash
git clone https://github.com/yourusername/business-card.git
cd business-card
```

### 2. Customize Content

- Edit `index.html` to add your name, job title, links, and contact info.
- Customize styles in `style.css`.
- Add any icons/images to the `assets` folder if needed.

### 3. Setup EmailJS

To enable the contact form:

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create an account.
2. Create an **Email Service** and an **Email Template**.
3. Get your **Service ID**, **Template ID**, and **Public Key** from the EmailJS dashboard.
4. In `script.js`, update the following:
   ```javascript
   emailjs.init("your_public_key"); // Replace with your actual Public Key
   ```

5. In the form submission handler:
   ```javascript
   emailjs.sendForm("your_service_id", "your_template_id", this)
   ```

### 4. Test the Contact Form

Open `index.html` in a browser and try submitting the contact form. You should receive the message at your configured email address via EmailJS.

## 🧠 Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- EmailJS

## 📸 Preview

You can upload a screenshot in `assets/screenshot.png` and use this line to show it here:

```markdown
![Preview](assets/screenshot.png)
```

Made with ❤️ for personal branding.

