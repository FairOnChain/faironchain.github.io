# Jekyll website guide

Version 1.1: 2024/05/08

The website is made with Jekyll, the engine behind GitHub pages, so their [guide](https://jekyllrb.com/) is a useful resource.



## Running locally (optional)

You need to install `ruby` and the gems (packages) `bundler` and `jekyll`. Please follow [these instructions](https://jekyllrb.com/docs/installation/).

To copy the latest version of the website
```sh
git clone git@github.com:FairOnChain/faironchain.github.io.git
```

Then visit the directory of the website and run
```sh
bundler exec jekyll serve
```

This will run the website locally and you can visit it by going to [localhost:4000](http://localhost:4000).

## Adding updates to website

### Directly on github.com
For minor changes, you may simply want to login into GitHub, go to the [repository](https://github.com/FairOnChain/faironchain.github.io), click on the file you want to edit, change it, then commit your changes.

### In terminal

This can be done in any terminal of any machine of any OS (Linux, Windows, Mac) with `git` installed.

To copy the latest version of the website
```sh
git clone git@github.com:FairOnChain/faironchain.github.io.git
```

If you have already run the above command, you may want to update your local copy to make sure it is at the latest version
```sh
git pull
```

To add changes
```sh
git add changed_file1.md changed_directory1/ 
```

To save changes 
```sh
git commit -m "Message describing the changes made"
```

To upload changes to the website
```sh
git push
```

### On GitHub desktop 
Alternatively you may want to consider using [Github Desktop](https://desktop.github.com/). Please contact me if you need help setting this up.



# Website details

Below I have written up specifics on how the website is designed that give you all the necessary details to help you update it and modify it yourself.
 
## Configuration

To configure a Jekyll website, a `_config.yml` is present in the root directory. This specifies not only configuration such as title, description, theme used, and URL, but also custom configuration.

> [!NOTE]
> In the FairOnChain website, the sponsor and partners information, which is repeated on at least two website pages, is also included in this config file. Any other such repeated information such as contact email or social media links should be added here.

## Theme

The website uses the super-simple GitHub pages theme [`minima`](https://github.com/jekyll/minima) which is the default when starting a new Jekyll site. 

The files in the directories `_includes` and `_layouts` on the website are modified versions of the originals in the theme. To overwrite a file in the theme, simply add a file with the same name in the corresponding directory in the website and it will be overwritten.
For example, adding a new page layout is done by adding a `page.html` file to the `_layouts` folder. See more below.

## Directory structure

This section describes the directory structure of the site. Most likely you do not need to make changes to layouts (`_layouts`) or snippets (`_includes`) as these contain design rather than content.

Changes you will likely make are to add new assets (`assets`), new blog posts (`_posts`) or new pages (`.md` and `.html` files in the root directory).

### Pages

Any file with a `.md` or `.html` extension in the root folder is rendered as a page on the website. See the [Add new page](#add-new-page) section below for details.

### `_layouts`
`_layouts` folder contains page layouts for the website, as stated above these overwrite the layouts from the theme
  - `default`, which adds the `<head>`, `<body>`, header and footer elements
  - `page`, which inherits `default`, and places elements on the page such as the *hero image* or *hero video* (namely, when an image or video covers the whole screen when landing on that page, often with some text on top), the *page title* and *subtitle*; this is recommended for pages where there are multiple sections of multiple colours, as its page width is 100% (such as the home and team pages)
  - `simple-page`, which inherits `page`, and also enforces a black background and 1200px width to the content; this is best for just adding some text or images in markdown to a new page, and recommended to most non-technical or non-designer users
  - `post`, which inherits `default`, and places elements on the page specific to a blog post, such as the *post image*, *post title*, *post date*, and *table of contents*

### `_includes`

`_includes` folder contains snippets of code that are reused around the site; some of these can take variables as parameters. The ones listed below *do not take variables* and are part of the structure of the site, based on the existing theme.
  - `head`, which adds SEO, feeds, social media (note it uses theme default snippets `seo` and `feed_meta`), but also includes CSS stylesheets, any `<head>` JavaScript, and favicon
  - `header`, which sets the top `<header>` bar, with the logo and menu; the menu is auto-generated from the list of pages, read more on [Add new page](#add-new-page) below for details
  - `footer`, which sets the bottom `<footer>` bars, containing a three column structure and a copyright notice; a copy of the menu is included in the middle column, which is also picked from the list of pages same as the header
	
> [!NOTE]
> These snippets below are **custom to the FairOnChain website**, rather than copied and modified from the theme, and are detailed in the [Add new snippets](#add-new-snippets) section:

  - `images-gallery`, creates a list of images with optional links and text underneath them; this is used in the partners, sponsors, and team sections, and takes a list of images and CSS classes as *parameter variable*
  - `partners` uses the `image-gallery` and passes the partner information from the `_config.yml` file as *parameter variable* to create the snippets at the bottom of the homepage and team page that show the partners and sponsors.  Unless new partners and sponsors are added, this snippet does not need change.

### `assets`

The `assets` folder contains CSS, images, videos, fonts etc. To include an image, for example, `img-1.png` located in `assets/img`, absolute paths to the assets folders should be used e.g.

```html
<img src="/assets/img/image-1.png">

```
Note that videos cannot be included directly from the `assets` folder. To include a video `video-1.mp4` located in `assets/video`, the below *will **not** work*:

```html
<video>
	<source src="/assets/video/video-1.mp4" type="video/mp4">
</video> 
```
Instead, the **raw URL** from GitHub needs to be used:

```html
<video>
	<source src="https://media.githubusercontent.com/media/FairOnChain/faironchain.github.io/main/assets/video/video-1.mp4" type="video/mp4">
</video> 
```

### `_site`

If you are running the website locally, you will notice the Jekyll engine compiles the templates and Markdown into a static pure HTML website located in the `_site` folder. These files are for your convenience and do not need to be added to the repository when they change. The GitHub pages engine will create this folder when serving your site.


# Add new page

The web design is made so that adding a new page is as simple as creating a new `.html` or `.md` file in the root folder of the site. The website is configured so that file name is different from the page title. For convenience the pages are named with numbers that show their **order in the menu** e.g. `1-index.md` and `2-team.md` will always be the first two pages. To reorder pages, simply rename them with the right number.

The pages currently on the site are:

- `1-index.md`, for the home page (using layout `page`)
- `2-team.md`, for the team members (using layout `page`)
- `5-contact.md` for contact details / form (using layout `simple-page`)
- `404.html` to show a page not found message (using layout `simple-page`)


It is recommended you use the simple page layout to add a new page, for example by copying the `5-contact` page and changing the content. The rest of this section will show an example of a page using the `simple-page` layout. The next section, [Page structure](#page-structure), presents more details of how a page works.

## Simple page layout

If you only need to add sections, text, images and lists, after possibly a `hero_img` or a `hero_video`, you should use the `simple-page` layout.

For example, a simple page located at the URL `simple_page` with menu item "simple page" would be created as follows:

```md
---
layout: simple-page
permalink: simple_page
menu: simple page
title: Simple page
description: This is a super simple page
hero_img: /assets/img/hero-img.png
---

## some heading
Some text, which will be shown as a centered paragraph

A list:
- item 1
- item 2

An image:

![image alt](assets/img/image-1.png)
```

If you'd like certain text to have specific colours, you can use CSS classes. But for this, HTML elements need to be added instead of Markdown:

```html
<h1 class="aqua">Aqua title</h1>
<p class="blue">Blue paragraph text that also includes a <span class="white">white</span> word.</p>
```

## Custom page layouts (advanced)

For a custom looking page, such as `1-index.md` or `2-team.md`, the `page` layout should be used as it has more flexibility.
In the `page` layout, the content is built by mixing HTML and Markdown. This is because some elements on the site are more complex and styled, and nested `<div>` elements with different classes are required.

Please contact me with any custom page design ideas or if you would like a detailed set of instructions of how to add a custom page.


# Page structure


The page is made of **front matter** and **content**, which are expanded on below.

## Front matter
This is written between three dashes `---` in YAML style key-value pairs. The syntax and features of this front matter are defined [in the documentation](https://docs.github.com/en/contributing/writing-for-github-docs/using-yaml-frontmatter).

The documentation above lists a lot of variables and features which are not necessarily relevant to the current website. Below I will list variables that the current website uses in the `page` layout:

- `layout`: this is used to specify which of the templates in `_layouts` is used to render ths page; this should almost always be `layout: page`
- `title`: this is used as the HTML `<title>` as well as the main heading `<h1>` element on the page giving the page title
- `subtitle`: this is used as the second heading `<h2>` element on the page
- `permalink`: this is the page relative URL. 

> [!IMPORTANT]
> This **should be set**, otherwise the page name e.g. `/1-index` for the homepage will be the URL.

- `menu`: this is the text for the link in the menu that links to the page

> [!IMPORTANT]
> If the `menu` is **not set** the page will **not be displayed in the menu**.

- `logo_img`: this is for using a logo instead of writing a `<h1>` element. If this is set, the title and subtitle from above will not be shown. This is used on the `1-index.md` page 
- `hero_img`: a full width, full height image that is shown the first thing when landing on the page, and will be covered with title and subtitle
- `hero_video`: same as the `hero_img` but a video that autoplays and loops

For example you can check the [first 10 lines in the `1-index.md` page](https://github.com/FairOnChain/faironchain.github.io/blob/main/1-index.md?plain=1#L1-L10).

Variables declared in the front matter can also be used inside a snippet. For example, the images, URLs, and text for each person in the `2-team.md` page are [declared in the front matter in the `images` array](https://github.com/FairOnChain/faironchain.github.io/blob/main/2-team.md?plain=1#L7-L51).


## Content

The content of the page starts after the front matter. It should be written in Markdown, but HTML can also be mixed in. Nice online Markdown editors that let you preview your writing are [stackedit](https://stackedit.io/app#) and [dilinger](https://dillinger.io/). Of course, this will preview the overall structure such as headings, lists, paragraphs etc. but not the explicit design of the website.

Any dynamic programmatic additions (such as looping through images in a folder, or `if` conditionals) can be done in the template language of Jekyll, [`liquid`](https://shopify.github.io/liquid/) (which is also used by Shopify). Here is a useful [cheat sheet](https://www.fabriziomusacchio.com/blog/2021-08-12-Liquid_Cheat_Sheet/).

Accessing the page variables as defined in the front matter is done through the variable `page`. To access a variable, you need double curly braces `{{}}`. For example, to get the page title simply use `{{ page.title }}` and this will print the page title on the page.


Snippets can be added to pages to reduced duplicated code or text.

### Add new snippets

Snippets are added with `{% include snippet-name.html %}`, if there are no variables, or by passing some variables. The specific snippets you can use on this website are:

#### Partners and sponsors

To include this snippet:

```liquid
{% include partners.html %}
```

#### Image gallery

To include this snippet, you need to pass a list of images. These are best declared in the **front matter** and then passed on. Let's say you want to add 2 images, the front matter will contain the array variable:

```yaml
images: 
  - alt: Image alt text
    src: /assets/img/img1.png
  - alt: Image alt text2
    src: /assets/img/img2.png
    url: example.com
    text: some text
```
Where only `src` is compulsory. To make the images links, you can add a `url:` to each image (without `https://`). To place some text below the image, you can add `text: ` to each image.

Then you include it by writing:

```liquid
{% assign imgs = page.images %}
{% include images-gallery.html imgs = imgs class = 'col-1-of-2 circle' %}
```

The snippet also takes an optional `{{ class }}` to set the CSS class of each item in the image list. `col-1-of-2` and `col-1-of-3` can be used to create responsive 2 and 3-column layouts. `circle` is the class used on the `2-team.md` page.

