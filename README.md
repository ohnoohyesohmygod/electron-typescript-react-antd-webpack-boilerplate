# [GitHub Desktop](https://desktop.github.com)

[![CircleCI](https://circleci.com/gh/desktop/desktop.svg?style=svg)](https://circleci.com/gh/desktop/desktop) [![AppVeyor Build Status](https://ci.appveyor.com/api/projects/status/kstdl28ba3f7drbr/branch/master?svg=true)](https://ci.appveyor.com/project/github-windows/desktop/branch/master)

GitHub Desktop is an open source [Electron](https://electron.atom.io)-based
GitHub app. It is written in [TypeScript](http://www.typescriptlang.org) and
uses [React](https://facebook.github.io/react/).

![GitHub Desktop screenshot - Windows](https://cloud.githubusercontent.com/assets/359239/26094502/a1f56d02-3a5d-11e7-8799-23c7ba5e5106.png)

## Where can I get it?

Download the official installer for your operating system:

 - [macOS](https://central.github.com/deployments/desktop/desktop/latest/darwin)
 - [Windows](https://central.github.com/deployments/desktop/desktop/latest/win32)
 - [Windows machine-wide install](https://central.github.com/deployments/desktop/desktop/latest/win32?format=msi)

There are several community-supported package managers that can be used to install Github Desktop.
 - Windows users can install using [Chocolatey](https://chocolatey.org/) package manager:
      `c:\> choco install github-desktop`
 - macOS users can install using [Homebrew](https://brew.sh/) package manager:
      `$ brew cask install github-desktop`

You can install this alongside your existing GitHub Desktop for Mac or GitHub
Desktop for Windows application.

**NOTE**: there is no current migration path to import your existing
repositories into the new application - you can drag-and-drop your repositories
from disk onto the application to get started.


## I have a problem with GitHub Desktop

First, please search the [open issues](https://github.com/desktop/desktop/issues?q=is%3Aopen)
and [closed issues](https://github.com/desktop/desktop/issues?q=is%3Aclosed)
to see if your issue hasn't already been reported (it may also be fixed).

If you can't find an issue that matches what you're seeing, open a [new issue](https://github.com/desktop/desktop/issues/new)
and fill out the template to provide us with enough information to investigate
further.

## How can I contribute to GitHub Desktop?

The [CONTRIBUTING.md](./CONTRIBUTING.md) document will help you get setup and
familiar with the source. The [documentation](docs/) folder also contains more
resources relevant to the project.

If you're looking for something to work on, check out the [help wanted](https://github.com/desktop/desktop/issues?q=is%3Aissue+is%3Aopen+label%3A%22help%20wanted%22) label.

## More Resources

See [desktop.github.com](https://desktop.github.com) for more product-oriented
information about GitHub Desktop.

## License

**[MIT](LICENSE)**

The MIT license grant is not for GitHub's trademarks, which include the logo
designs. GitHub reserves all trademark and copyright rights in and to all
GitHub trademarks. GitHub's logos include, for instance, the stylized
Invertocat designs that include "logo" in the file title in the following
folder: [logos](app/static/logos).

GitHub® and its stylized versions and the Invertocat mark are GitHub's
Trademarks or registered Trademarks. When using GitHub's logos, be sure to
follow the GitHub [logo guidelines](https://github.com/logos).
