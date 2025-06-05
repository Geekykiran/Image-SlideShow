# Slideshow

A simple React project for displaying image slideshows.

## Features

- Browse through a collection of images.
- Next and previous navigation.
- Responsive design.

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Geekykiran/Image-SlideShow.git
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

### Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
/public
  index.html
/src
  App.js
  App.css
  index.js
  components/
     Slideshow.js
     Slide.js
     Slideshow.css
```

- **App.js**: Main application component.
- **components/Slideshow.js**: Handles slideshow logic and navigation.
- **components/Slide.js**: Renders individual slides.
- **App.css & Slideshow.css**: Styling for the app and slideshow.

## Customization

- Add or update images in the slideshow by modifying the image array in `Slideshow.js`.

## License

This project is licensed under the MIT License.