# Hugo Ava Theme

<div align="center">
  <img src="https://raw.githubusercontent.com/jmau111/hugo-theme-ava/main/images/screenshot2.png" alt="" width="100%">

[![LICENSE](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/jmau111/hugo-theme-ava/blob/main/LICENSE)
[![release](https://img.shields.io/github/release/jmau111/hugo-theme-ava.svg)](https://github.com/jmau111/hugo-theme-ava/releases/latest)
[![release date](https://img.shields.io/github/release-date/jmau111/hugo-theme-ava.svg)](https://github.com/jmau111/hugo-theme-ava/releases)
[![release feed](https://img.shields.io/badge/release-feed-yellow)](https://github.com/jmau111/hugo-theme-ava/releases.atom)

</div>

[See online demo](https://jmau111.github.io/hugo-theme-ava-demo)

[Code source demo](https://github.com/jmau111/hugo-theme-ava-demo)

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
cd my-site
git clone https://github.com/jmau111/hugo-theme-ava.git themes/hugo-theme-ava
```

### Copy example content

You can use contents generated for the demo:

```
cp -a themes/hugo-theme-ava/exampleSite/. .
```

### SVGs

It's not the best practice, but I like to keep things simple.

That's why I call svgs in templates now.

### Images

#### Default image

Use absolute URLs:

```
[params]
  defaultImage = "https://raw.githubusercontent.com/jmau111/hugo-theme-ava/main/images/default.jpeg"
```

#### Default og & meta image

Use absolute URLs:

```
[params]
  [params.meta_tags]
    meta_og_image = "https://raw.githubusercontent.com/jmau111/hugo-theme-ava/main/images/default.jpeg"
```

#### Subheader and featured images

Use the `image` parameter in your frontmatter (posts). If you want to use an external image use an absolute path.

If you host your images on the same installation, create a folder for your post in the `content/` directory:

```
content
   my-post/
    index.md
    images/
      myfeatured.jpg
```

Then, use relative path in your frontmattter:

```
---
title: "Example 8"
description: "This is desc 8"
date: 2023-01-05T11:11:11+01:00
type: "post"
draft: false
image: "images/myfeatured.jpg"
---
```

It's a bit more constraining, but it allows a better organization, as all resources of the same page are grouped in the content folder.

**These few changes should not impact previous installations too much. If so, please open an issue.**

### Change colors

Feel free to change colors for both light and dark mode. See `themes/hugo-theme-ava/assets/scss/_mode_light.scss` or `themes/hugo-theme-ava/assets/scss/_mode_dark.scss`.

You can customize other CSS variables in `themes/hugo-theme-ava/assets/scss/_variables.scss`

### Icons

The theme uses [feather icons](https://feathericons.com/), a beautiful and free set of svg icons. The `/assets/images/` folder contains everything.

It's probably a bit too much, so do not hesitate to delete unused files.

### Don't forget to change the favicon

You don't have to remove the one set in the theme but ensure you replace the one in the `/static/` folder at the root or your project.

### humans.txt

I've included the `humans.txt` file cause I care about this file. Use custom params to customize it:

```
 [params.humans_txt]
    dev_team = ""
    dev_github = ""
    thanks = ""
    standards = ""
    software = ""
    other_notes = ""
```

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

### Google Analytics

Add you google analytics ID to the `config.toml`

```
// config.toml
[params]
  ga_id="UA-XXXXXXXX-X"
```

### Menu

You can edit and add main menu links in the `config.toml` under `[[menu.main]]`

### Images

You can set a default image in `config.toml`:

```
  [params.meta_tags]
          meta_og_image = "https://raw.githubusercontent.com/jmau111/hugo-theme-ava/main/images/default.jpeg"
```

You can customize per each post in the front matter:

```md
image: "/images/mangoose.jpeg"
```


If you don't set anything then the theme display the default image "https://raw.githubusercontent.com/jmau111/hugo-theme-ava/main/images/default.jpeg".

## Comments

There's now a custom Disqus partial. Please be aware this is not the most privacy-focused solution on the market.

To enable it, edit the Site variable `disqus` in the `config.toml` and replace "xxxxxxx" by your Disqus handle. Otherwise, nothing will be loaded.

## TODO

A lot of stuff, including:

* i18n
* more shortcodes
* author box 

But still, it's not a multi-purpose theme.

## License

You're welcome to fork this, but keep the license MIT please. 
