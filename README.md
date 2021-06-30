# Utils-CSS

## What is Utils-CSS

It's a CSS Library, inspired by Bootstrap and TailwindCSS. There is NO JS in this library, all is done with CSS.


## How to use it ?

Just clone the repository and copy the utils-css.min.css file from the dist directory, and copy it on your CSS folder.
Add it in the head part of your html page

<link href="/css/utils-css.min.css" rel="stylesheet" />


## To see how it works

The "example" folder contains the index.html file. Open it in your favorite browser, to show all the CSS class in action.

Or you can go on: https://overconsulting.tech to see it in action. For the moment, it's just example, you 


## Developpement

Installation of the tools to generate the min.css file. I used uglifycss and I installed it with npm.

```bash
$ npm install uglifycss -g
```
To generate the min.css files from the multiple css files.

```bash
$ git clone https://github.com/ldandoy/Utils-CSS.git
$ cd Utils-CSS
$ uglifycss ./src/*.css > ./dist/utils-css.min.css
```
After runngin this commandn, you will found the min.css in the dist folder.

## The Road MAP

- Add the disabled for the button and other fields
x Add the different pointer
x Render active link for the navbar
- Add hover for the navbar
- Responsive de la navbar
- Responsive global