# Hugo Ava Theme

[See demo](https://hugo-theme-ava.netlify.app/)

## Installation

### Install Hugo

Follow [the official installation guide](https://gohugo.io/getting-started/installing/)

**You need the extended version**

### Create a new Hugo site

```
hugo new site my-site
```

This will create a fresh Hugo site in the folder `my-site`.

### Install theme with Git

Clone this repo into the themes folder
```
cd mynewsite
git clone https://github.com/jmau111/hugo-theme-ava.git themes/hugo-ava
```

## Copy example content

You can use contents generated for the demo:

```
cp -a themes/hugo-theme-ava/exampleSite/. .
```

## Change colors

Feel free to change colors for both light and dark mode. See `themes/hugo-theme-ava/assets/scss/_mode_light.scss` or `themes/hugo-theme-ava/assets/scss/_mode_dark.scss`.

You can customize other CSS variables in `themes/hugo-theme-ava/assets/scss/_variables.scss`

## Don't forget to change the favicon

You don't have to remove the one set in the theme but ensure you replace the one in the `/static/` folder at the root or your project.

## humans.txt

I've included the `humans.txt` file cause I care about this file. You can put your name in it or replace this entire file in your `/static/` folder at the root of the project:

### Using the config.toml

Copy the `config.toml` file into the root folder of your Hugo site, then you can modify the copy.

## Run Hugo

Run dev server:

```
hugo server
```

Then you can go to [`localhost:1313`](http://localhost:1313).

Build:

```
hugo
```

## Configuration

### Change baseURL

```
baseURL = "https://www.mysite.com/"
```

Ensure you use a trailing slash.

### Google Analytics

Add you google analytics ID to the `config.toml`

```
// config.toml
[params]
  ga_id="UA-XXXXXXXX-X"
```

### Menu

You can edit and add main menu links in the `config.toml` under `[[menu.main]]`

## TODO

A lot of stuff, including:

* handling images in templates with hugo features (but you can use images as meta og for SEO purpose starting from now)
* i18n
* shortcodes

But still, it's not a multi-purpose theme.

## License

You're welcome to fork this, but keep the licence MIT please. 
