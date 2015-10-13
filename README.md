# di
### DI is a small set of tools that can be added to a web project to help with the design process.
It is free and open source and may be useful for designers/developers who spend some time designing in the browser.

## Make it work good (for people who already know stuff)
* DI requires jQuery.
* Add the whole DI folder to your project.
* Add the di-main.js file to any pages that you wish to use it on
* Configure things in the di-main.js file

## Make it work good (for designers & others)
* You'll need to have jQuery setup in your project. <br>
See here for deets: https://jquery.com/download/
* Add the whole DI folder to the top level of your project
* Link to the di-main.js file by adding this to the footer of all your pages: <br>
`<script src="di/js/di-main.js"></script>` <br>
Make sure it's added after jQuery.
* For the script to work, your project will need to be using some sort of server. Public Dropbox folder or Codekit are simple ways of doing that.

## Configure stuff
* Everything can be configured in the Setup area of the di-main.js file.
* To remove a module, change the value of any of the addModName variables
to anything other than true (eg false).
* Use the pageLinks to create navigation for all your html files
* The page links can be sorted alphabetically
* Select the number of options you'd like to have access to. <br>
Max of 10 options will have shortcut keys available (see below) <br>
You can add more than 10 and the buttons will work but the shortcuts won't.

## Current keyboard shortcuts
Typing `n`, `a` or `v` will open and close the interface

`o` will toggle a 1px outline on all elements on the pages

`h` will do the same thing but on hover

Numbers `1` through to `9` will toggle the options. `0` removes all options.

## The modules
### _Pages_
This is a useful way to navigate through the pages, especially when your project doesn't have it's own navigation built in yet. It's also good for getting to pages that aren't linked within your site, like style-guides and demos and such.

### _Options (Variations)_
The options buttons will add the corresponding class to the body of the page. Class name starts with `opt` followed by the option number. Eg, `opt1`, `opt2`.
This is useful for designing small variations on a page. You can nest different styles within the classes and view them quickly with the shortcut keys.

### _Tools_
Current tools available:

**Outline** <br>
Outline will add a 1px outline to all elements on the page. This is useful for trying to find invisible containers. **All** will just outline everything. **Hover** will outline elements on hover. This will often include parent elements too.

**Display keypress/keydown codes** <br>
When these two dropdowns are open, typing a letter will display the keypress or keydown code. Saves having to look it up on a table somewhere.

**Show guides** (Visible but not yet functional) <br>
This component will create a grid on screen.

### _Reference_ (visible but not yet functional)
These will display handy code snippets and cheat sheets

## Compatibility
This interface is only intended for use on the latest version of Chrome, and has never been tested on [insert any annoying browser here].
