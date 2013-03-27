# Inspiritas - a free Bootstrap theme 

From the Swedish web design and development firm Ripple comes the
highly anticipated release of <a href="http://dribbble.com/shots/156005-Campaign-UI">Campaign UI</a> - not only as a
PSD but as an entirely coded frontend theme. 

- All the goodness of Bootstrap 2
- A hand-crafted, completely new visual theme
- Easy to customize
- Free and maintained
- Uses overrides to make future updates to Bootstrap easy to get
- Photoshop-file included
- BONUS: Includes styling for Highcharts charting library

Just fork it and get started.

## Origins

Jonatan Littke debuted on Dribbble with his <a href="http://dribbble.com/shots/156005-Campaign-UI?list=users">Campaign UI</a>
and made it to the front page on the first day. Many have requested this
design as a PSD and now it's released by <a href="http://www.ripplehq.com">Ripple</a>
for free. 

## How to use

1. Fork this repo or <a href="https://github.com/littke/inspiritas-bootstrap/archive/master.zip">download the latest zip</a>.

2. Drop the inspiritas.css into your `<head>`.

3. Use it as you would the <a href="http://twitter.github.com/bootstrap/">regular Bootstrap</a>. It's that simple.

## Customizations

If you want to edit anything, fork or clone the repo and open `variables.less`.
It contains the original Bootstrap variables along with some new ones for Inspiritas.

Make whichever changes you want and then run a less compiler to create
the updated and minified CSS for you.

## Adding overrides

All styling by Inspiritas extends or overrides the original Bootstrap styling. This makes
it easy to get new patches from Bootstrap into the theme.

We recommend you use the same method if you want to change more than what the variables 
allow you to. In the end of `inspiritas-theme.less`, you can add your own styles. 

If you keep all the original styling of both Bootstrap and Inspiritas intact, you can
get new updates from us as well, without having to go through tons of git conflicts.

## Photoshop file included

We've included the original PSD file we used to build this design. Note that
when coding the theme some subtle changes were made and we perceive the coded theme 
to be the correct version in most cases, but the PSD file may still be useful for you.

Also, the PSD includes some elements we've not yet coded but may in the future.

## Highcharts charting library
The JavaScript library for the graph is called <a href="http://www.highcharts.com/">HighchartsJS</a>. 
It's free for non-commerical projects but quite costly for commerical use.
