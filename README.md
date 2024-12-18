<h1 align="center">Moon Home Theater</h1>
<h3 align="center">The Free Software Media System</h3>

---

<p align="center">
  <img alt="Logo Banner" src="https://raw.githubusercontent.com/moon-software-team/moon-home-theater/master/docs/assets/banner-logo-solid-holiday.svg"/>
  <br/>
  <br/>
  <a href="./LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/moon-software-team/moon-home-theater.svg"/>
  </a>
  <a href="https://github.com/moon-software-team/moon-home-theater/releases">
    <img alt="Releases" src="https://img.shields.io/github/release/moon-software-team/moon-home-theater.svg"/>
  </a>
</p>

---

<p>
Moon Home Theater is a Free Software Media System that puts you in control of managing and streaming your media.
It is an alternative to the proprietary Emby and Plex, to provide media management and access for your home theater. Moon Home Theater uses web frameworks to enable full cross-platform support.
There are no strings attached, no premium licenses or features, and no hidden agendas.
</p>

<p>
For further details, please see <a href="#">our documentation page</a>.
</p>

---

<h4>Want to get started?</h4>
<p>
Check out our <a href="#">downloads page</a> or our <a href="#">installation guide</a>, then see our <a href="#">quick start guide</a>.
You can also <a href="#">build from source</a>.
</p>

<h4>Want to contribute?</h4>
<p>
Check out <a href="#">our contributing guide</a> and our <a href="#">community standards</a>.
</p>

<h4>New idea or improvement?</h4>
<p>
Check out our <a href="#">feature request hub</a>
</p>

<h4>Don't see Moon Home  Theater in your language?</h4>
<p>
You can help translating Moon and its subprojects.
</p>

---

<table>
  <caption>Main dependencies of the project</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Version</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><a href="https://www.electronjs.org/">Electron</a></th>
      <td>33</td>
      <td>Create a desktop application for Moon Home Theater</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://react.dev/">React</a></th>
      <td>19</td>
      <td>Components base web framework for the UI</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://expressjs.com/">Express</a></th>
      <td>4.21</td>
      <td>Fast and minimalist web framework for the server</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://turbo.build/">TurboRepo</a></th>
      <td>2.3</td>
      <td>Building and pipelining tool for JavaScript and TypeScript codebases</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://sass-lang.com/">Sass</a></th>
      <td>1.83</td>
      <td>CSS extension language </td>
    </tr>
    <tr>
      <th scope="row"><a href="https://ffmpeg.org/">Ffmpeg</a></th>
      <td>5.1</td>
      <td>Cross-Platform solution for converting audio/video</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://ffmpeg.org/ffprobe.html">FFprobe</a></th>
      <td>5.1</td>
      <td>Gathers information from multimedia streams and prints it in human- and machine-readable fashion</td>
    </tr>
    <tr>
      <th scope="row"><a href="https://webpack.js.org/">Webpack</a></th>
      <td>5.97</td>
      <td>Bundle js scripts</td>
    </tr>
  </tbody>
</table>

---

<h2>Project structure</h2>

<ul>
  <li>
    <strong>Applications</strong> - Main content of Moon Home Theater
    <ul>
      <li><strong><a href="https://github.com/moon-software-team/moon-home-theater/blob/master/apps/desktop/README.md">Desktop</a></strong> - Desktop application</li>
      <li><strong><a href="https://github.com/moon-software-team/moon-home-theater/blob/master/apps/api/README.md">Api</a></strong> - Rest api to provide data/transcoder</li>
      <li><strong><a href="https://github.com/moon-software-team/moon-home-theater/blob/master/apps/web/README.md">Web</a></strong> - Web administrator/remote access</li>
      <li><strong><a href="https://github.com/moon-software-team/moon-home-theater/blob/master/apps/mobile/README.md">Mobile</a></strong> - Mobile application for remote</li>
    </ul>
  </li>
  <li>
    <strong>Packages</strong> - Sub content used in Moon Home Theater
    <ul>
      <li><strong>Components</strong> - Ui components individually</li>
      <li><strong>Database</strong> - Database related packages, configuration/models</li>
      <li><strong>Utilities</strong> - Shared utilities for server/interface</li>
      <li><strong>Core</strong> - Core functionnalities</li>
    </ul>
  </li>
  <li>
    <strong>Template</strong> - Boilerplate for package/component
  </li>
</ul>

<h2>Requierements</h2>

<ul>
  <li><a href="https://nodejs.org/">nodejs</a>@22.12.0 - Cross-Platform JavaScript interpretor</li>
  <li><a href="https://www.npmjs.com/">npm</a>@9.8.0 - Node modules manager</li>
  <li><a href="https://pnpm.io/">pnpm</a>@9.15.0 - Fast node modules manager and disk space saver</li>
</ul>

---

<h3 align="center">Made with ❤️ by <a href="https://github.com/mallory-scotton">Mallory Scotton</a</h3>
