import React from 'react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-bg">
      <SEO 
        title="About - Markdown Slicer"
        description="Learn how to use Markdown Slicer to split large markdown files into smaller sections"
      />
      
      <main className="max-w-[900px] mx-auto py-12 px-6">
        <article className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-txt mb-6">Markdown Slicer</h1>
          
          <p className="text-lg text-muted mb-8">
            A free, browser-based tool for splitting large markdown files into smaller, manageable sections.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-txt mb-4">What It Does</h2>
            <p className="text-txt leading-relaxed">
              Markdown Slicer helps you extract specific portions of large markdown files or automatically 
              split them into multiple files based on heading structure. Perfect for breaking down documentation, 
              manuals, and README files.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-txt mb-4">How to Use</h2>
            
            <h3 className="text-xl font-semibold text-txt mt-6 mb-3">Manual Selection Mode</h3>
            <ol className="list-decimal list-inside space-y-2 text-txt ml-4">
              <li>Paste your markdown content into the editor or click "Open File"</li>
              <li>Select the portion of text you want to extract</li>
              <li>Click "Save Selection" to download it as a separate .md file</li>
              <li>The filename will auto-generate from the first heading in your selection, or you can enter it manually</li>
            </ol>

            <h3 className="text-xl font-semibold text-txt mt-6 mb-3">Batch Split Mode</h3>
            <ol className="list-decimal list-inside space-y-2 text-txt ml-4">
              <li>Paste your markdown content into the editor or click "Open File"</li>
              <li>Choose which heading level to split on (H1, H2, H3, etc.)</li>
              <li>Click "Split & Download All"</li>
              <li>All sections will be downloaded as a .zip file, with each section named after its heading</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-txt mb-4">Features</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-txt mb-2">Auto-generate Filenames</h3>
                <p className="text-muted">
                  Enable this option to automatically name files based on the first heading found in the selected content.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-txt mb-2">Front-matter Support</h3>
                <p className="text-muted">
                  Add YAML front-matter to your exported files. Useful for static site generators and documentation tools.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-txt mb-2">Session Persistence</h3>
                <p className="text-muted">
                  Your content and settings are automatically saved in your browser, so you can close the tab and come back later.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-txt mb-2">Batch Processing</h3>
                <p className="text-muted">
                  Split entire documents at once by heading level. Great for converting large manuals into individual pages.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-txt mb-4">Why I Built This</h2>
            <p className="text-txt leading-relaxed">
              I needed to split a 170-page markdown manual into individual files and couldn't find a good tool 
              that handled this well. Markdown Slicer is completely free, works in your browser, and your content 
              never leaves your computer.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-txt mb-4">Privacy</h2>
            <p className="text-txt leading-relaxed">
              All processing happens locally in your browser. No data is sent to any server. Your markdown content 
              is stored only in your browser's localStorage.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};

export default About;
