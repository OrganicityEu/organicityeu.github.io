Organicity Technical Documentation
==================================

This documentation is available here https://organicityeu.github.io/

This repository contains the source documentation in markdown. We use [MkDocs](
http://www.mkdocs.org/) to create the final webpage. 

Feel free to contribute by adding new tutorials and resources. Simply fork the repository and use pull requests to contribute the new content.

## How to edit the documentation

### Clone the repository

```bash
 git clone https://github.com/OrganicityEu/organicityeu.github.io.git
```
You will see the default branch is `mkdocs` instead of `master`. `master` is where the final html files will be created.

### Install MkDocs

Install the `mkdocs` package using pip:

```bash
pip install mkdocs
```

If you do not have **Python** or **Pip** installed check the [MkDocs documentation](http://www.mkdocs.org/#installation)


### Run MkDocs

There's a single configuration file named `mkdocs.yml`, and a folder named
`docs` that will contain your documentation source files. 

After addinf a new page in the `docs` folder you will need to edit the index at `mkdocs.yml` like:

```
pages:
  -  home: index.md
  -  new section:
		- new page name: newpagefile.md
```

MkDocs comes with a built-in dev-server that lets you preview your documentation
as you work on it. Make sure you're in the same directory as the `mkdocs.yml`
configuration file, and then start the server by running the `mkdocs serve`
command:

```bash
$ mkdocs serve
INFO    -  Building documentation...
INFO    -  Cleaning site directory
[I 160402 15:50:43 server:271] Serving on http://127.0.0.1:8000
[I 160402 15:50:43 handlers:58] Start watching changes
[I 160402 15:50:43 handlers:60] Start detecting changes
```

### Deploy in [organicityeu.github.io](https://organicityeu.github.io/)

On the `mkdocs` branch of the git repository run the following command:

```sh
mkdocs gh-deploy --remote-branch master
```

That's it! Behind the scenes, MkDocs will build your docs and use the [ghp-import]
tool to commit them to the master branch and push the master branch to
GitHub.

*We use the master branch since we are using a Github personal page. For other repositories you can use the gh-pages branch*

Be aware that you will not be able to review the built site before it is pushed
to GitHub. Therefore, you may want to verify any changes you make to the docs
beforehand by using the `build` or `serve` commands and reviewing the built
files locally.

**Warning**

You should never edit files in the `master` branch by hand always edit them on the `mkdocs` branch and then deploy them using **mkdocs**.

[GitHub]: https://github.com/
[GitHub Pages]: https://pages.github.com/
[ghp-import]: https://github.com/davisp/ghp-import

## API documentation and swagger

The `/api` documentation is maintained at [OrganicityEu-Platform/api](https://github.com/OrganicityEu-Platform/api). Follow the instructions there to generate the **html** files and copy them to `docs/api`.

## Other files

Other files generated outside MkDocs as the `/example/foo.html` files can be added on:

```
docs/
     index.md
	 example/
	 	foo.html
```

https://organicityeu.github.io/example/foo.html

## License

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

