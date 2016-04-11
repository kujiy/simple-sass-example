# Simple example for scss compiling and making a sourcemap  

## How to use
1. git clone this project
1. Type the following commands
    
    ```sh
    $ npm i
    $ grunt
    ```
1. Then you'll get a compiled css and a sourcemap.
    - a.css
    - a.css.map
    - ![](https://raw.githubusercontent.com/kujiy/simple-sass-example/master/images/added.png)
1. See index.html with Chrome F12 tool
    - You'll see where the css parameters come from as in the original scss.
    - ![](https://raw.githubusercontent.com/kujiy/simple-sass-example/master/images/0411-01.png)

## If you had an error with grunt-contrib-sass
> You need to have Ruby and Sass installed and in your PATH for this task to work.  

Try to install sass from gem.

    $ gem install sass
