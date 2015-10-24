# Jasper

This is a port of Ghost's default theme [Casper](https://github.com/tryghost/casper) for Jekyll based on the work of 
[Kasper](https://github.com/rosario/kasper). 

You might well ask at this point why bother making a new port (repo)? 
Although this is based on a fork of Kasper, there are some *exciting* additional features, making this port closer 
to the full Casper Ghost install. 

The main difference still is the fact that Jasper expects a single author. With a 
bit of tweeking it shouldn't be too difficult to enable a per-post author. 

Other less important bits that can still be 
addressed are the tag-descriptions and parsing 'Test Content' as a single tag, instead of as 'Test' and 'Content'. Feel
free to fork, and improve on this.

## View the live demo

Live demo at [Jasper](https://biomadeira.github.io/jasper)

Here's the original [Casper](https://demo.ghost.io)


## Screenshots

![home page](https://raw.github.com/biomadeira/jasper/master/assets/images/jasper_theme_screen1.png)
![post page](https://raw.github.com/biomadeira/jasper/master/assets/images/jasper_theme_screen2.png)
![author page](https://raw.github.com/biomadeira/jasper/master/assets/images/jasper_theme_screen3.png)

## Jasper theme includes:

* Pagination
* Author page **(New)**
* Tag page(s) **(New)**
* 404 page **(New)**  (this is somehow overridden by my biomadeira.github.io page - should work fine for you)
* Rss
* Google Analytics Tracking code
* Code Syntax Highlight
* Author's profile with picture
* Disqus comments

## How to use it locally

Simply clone this repository, and then run `jekyll serve` inside the directory.

## Thanks 

Most of the work has been already done by the Ghost team and Rosario. Many thanks to them :)


## Copyright & License

Copyright (C) 2013-2015 Ghost Foundation - Released under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
