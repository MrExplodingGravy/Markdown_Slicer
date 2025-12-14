# Markdown Slicer

![Markdown Slicer](./mdlogo.png)

A free, open-source, browser-based tool for splitting large markdown files into smaller, manageable sections. Perfect for breaking down documentation, manuals, and README files.

## Features

- **Manual Selection Mode**: Select and extract specific portions of markdown text
- **Batch Split Mode**: Automatically split documents by heading level (H1-H6)
- **Auto-generate Filenames**: Files are automatically named based on their first heading
- **Front-matter Support**: Add YAML front-matter to exported files for static site generators
- **Session Persistence**: Your content and settings are automatically saved in localStorage
- **Batch Processing**: Download all sections as a convenient .zip file
- **Privacy-focused**: All processing happens locally in your browser - no data ever leaves your computer
- **Dark Theme**: Easy on the eyes with a modern dark interface

## Live Demo

Try it out at: [markdownslicer.com](https://markdownslicer.com) *(coming soon)*

## Tech Stack

- React 18 with Vite
- Tailwind CSS for styling
- React Router v6 for navigation
- JSZip for batch downloads
- FileSaver.js for file downloads
- 100% client-side - no backend required

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/MrExplodingGravy/Markdown_Slicer.git
cd Markdown_Slicer
npm install
```

## Getting Started

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## How to Use

### Manual Selection Mode
1. Paste your markdown content into the editor or click "Open File"
2. Select the portion of text you want to extract
3. Click "Save Selection" to download it as a separate .md file
4. The filename will auto-generate from the first heading in your selection, or you can enter it manually

### Batch Split Mode
1. Paste your markdown content into the editor or click "Open File"
2. Choose which heading level to split on (H1, H2, H3, etc.)
3. The tool will show you how many sections it found
4. Click "Split & Download All"
5. All sections will be downloaded as a .zip file, with each section named after its heading

## Privacy & Security

- **100% Local Processing**: All markdown processing happens in your browser
- **No Server Communication**: Your content never leaves your computer
- **localStorage Only**: Content is saved only in your browser's local storage
- **Open Source**: Full transparency - inspect the code yourself

## Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

Please open an issue first to discuss what you would like to change.

## Why This Exists

I needed to split a 170-page markdown manual into individual files and couldn't find a good tool that handled this well. Markdown Slicer is completely free, works in your browser, and your content never leaves your computer.

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Built with care for the open-source community.

---

**Star this repo** if you find it useful!
