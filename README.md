# Jasper

This is a port of Ghost's default theme [Casper](https://github.com/tryghost/casper) for Jekyll inspired by the work of 
[Kasper](https://github.com/rosario/kasper). 

You might well ask at this point why bother making a new Casper's clone? 
Although this is inspired by Kasper, there are some *additional* features which make this port closer 
to the original theme. 

The main difference to the original is still the fact that Jasper expects a single author. With a 
bit of tweaking it shouldn't be too difficult to enable a per-post author. Feel free to fork and improve on this.

**Important:**  For security reasons, Github doesn't allow plugins (under _plugins/) when deploying with Github Pages. This means 
that we need to generate your site locally (as explained below) and push the resulting HTML to a Github repository. 
This is exactly what I have done for the generating the live demo.

## Live demo

[Jasper Live Demo](https://biomadeira.github.io/jasper)

[Casper's Original Here](https://demo.ghost.io)


## Screenshots

**Home page**
![home page](https://raw.githubusercontent.com/biomadeira/jasper/master/assets/images/jasper_screen1.png)

**Post page**
![post page](https://raw.githubusercontent.com/biomadeira/jasper/master/assets/images/jasper_screen2.png)

**Author page**
![author page](https://raw.githubusercontent.com/biomadeira/jasper/master/assets/images/jasper_screen3.png)

**Tags page**
![tag page](https://raw.githubusercontent.com/biomadeira/jasper/master/assets/images/jasper_screen4.png)

## Jasper theme includes

* Pagination
* Author page **(New)**
* Tag page(s) **(New)**
* 404 page **(New)**
* Rss
* Google Analytics Tracking code
* Code Syntax Highlight
* Author's profile with picture
* Disqus comments

## How to use it

Simply clone this repository (*master branch*), and then run `jekyll serve` inside the directory. Upload the resulting 
_site/ contents to your repository (*gh-pages branch*).

## Thanks 

Most of the work has been already done by the Ghost team and Rosario. Many thanks to them :smile:


## Copyright & License

Copyright (C) 2015 - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
