# Be A Yogi – Yoga & Wellness Website

A yoga and wellness website built as a frontend web development project. **Be A Yogi** presents yoga classes, meditation and fitness activities, a gallery, class schedules, instructor information, events, and contact details in one scrolling website.

The project gave me hands-on practice building a multi-section website, arranging content with Bootstrap, styling pages with CSS, adding interactive behaviour with JavaScript/jQuery, and integrating media and a map.

## Features

- **Hero section:** Full-width introduction with a looping background video and wellness-focused message.
- **Class highlights:** Introductory cards for Power Yoga, Meditation, Aerobics, and Spiritual Yoga.
- **About section:** Studio introduction and supporting imagery.
- **Gallery:** Image gallery showcasing yoga and related activities.
- **Training classes:** Content and video sections for yoga, cardio, and meditation.
- **Class schedule:** Timetable with category filtering.
- **Team section:** Area presenting the instructors/team.
- **Events section:** Event information and images.
- **Contact section:** Contact information and a form area.
- **Animations and navigation:** Scroll animations, smooth section navigation, and interactive UI elements.
- **Map experiment:** TomTom Maps integration with browser geolocation, markers, and route calculation.

> Some sections and integrations may require configuration or further testing before being used as a production website.

## Built With

- **HTML5** – page structure and content.
- **CSS3** – custom styling and layout.
- **JavaScript** – interactive behaviour and map integration.
- **jQuery** – DOM interactions and UI behaviour.
- **Bootstrap 4** – responsive grid and common interface components.
- **Font Awesome** – icons.
- **AOS (Animate On Scroll)** – scroll-based animations.
- **TomTom Maps SDK** – map display, geolocation-based markers, and route calculation.
- **Axios** – HTTP client library included by the page.

## Project Structure

```text
yoga/
├── index.html
├── css/
│   ├── aos.css
│   ├── bootstrap.min.css
│   ├── font-awesome.min.css
│   └── style.css
├── js/
│   ├── bootstrap.min.js
│   ├── jquery-3.3.1.min.js
│   ├── jquery.magnific-popup.min.js
│   ├── jquery.nice-select.min.js
│   ├── jquery.slicknav.js
│   ├── main.js
│   ├── masonry.pkgd.min.js
│   ├── mixitup.min.js
│   ├── owl.carousel.min.js
│   └── script.js
├── image/
│   └── Website images and graphics
└── video/
    └── Background and class videos
```

## Run Locally

This is a static frontend project and does not require a package installation or build step.

1. Clone the repository:

   ```bash
   git clone https://github.com/Nancyrana1/yoga.git
   ```

2. Move into the project directory:

   ```bash
   cd yoga
   ```

3. Open `index.html` in a browser.

   For a better local development experience, use a local server such as the **Live Server** extension in Visual Studio Code.

## Map Configuration

The map code in `js/script.js` uses the TomTom Maps SDK and requests the visitor's browser location.

Before relying on the map:

1. Create/configure a TomTom developer account and obtain your own API key.
2. Replace the key currently present in `js/script.js` with your own key.
3. Restrict the key to the domains where the website will run, using the provider's available key restrictions.
4. Run the page on localhost or HTTPS and allow location access when prompted.

**Security note:** Do not commit private or unrestricted API credentials to a public repository. If the existing key is active, rotate it and use a restricted replacement.

The current nearby-place markers are generated from coordinate offsets around the visitor's location. They are demonstration markers, not verified listings or live nearby business search results.

## What I Learned

Working on this project helped me practise:

- Building a multi-section website with HTML.
- Organizing layouts using Bootstrap's grid and utility classes.
- Styling page sections and responsive layouts with CSS.
- Using JavaScript and jQuery to add interactions.
- Adding scroll-based animations and smooth navigation.
- Embedding video and working with image assets.
- Exploring third-party map SDKs and browser geolocation.
- Structuring a larger frontend project across separate asset folders.

## Future Improvements

- Review and improve responsiveness on mobile and tablet screens.
- Improve accessibility, semantic markup, and keyboard navigation.
- Validate and connect the contact form to a working submission service.
- Replace placeholder text and sample content with complete studio information.
- Improve timetable and gallery interactions.
- Replace generated map demo markers with verified location data.
- Move API keys to a safer configuration approach and document setup clearly.
- Add a deployment link and screenshots to this README.

## Disclaimer

This project is intended for educational and demonstration purposes. It is not a medical service and does not provide medical advice. Any exercise or wellness information should be assessed by users in light of their own needs and professional guidance.

## Author

Created by [Nancyrana1](https://github.com/Nancyrana1) as a web development project while learning frontend technologies.

Feedback and suggestions are welcome!
