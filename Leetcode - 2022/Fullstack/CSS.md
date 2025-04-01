
# Things to know for CSS

Super simple:
body {
    background-color: blue; 
}
center {
    color: white,
    text-align: center
    font-family: verdana, 
    font-size: 20px
}

Using CSS in HTML:
<p class="center">This paragraph refers to two classes.</p>

3 ways to insert CSS:
- Use an external CSS sheet, which gets imported into the 
html sheet  

- Smush it into a html sheet:
        <!DOCTYPE html>
        <html>
        <head>

        <style>
        body {
        background-color: linen;
        }
        h1 {
        color: maroon;
        margin-left: 40px;
        }
        </style>

        </head>
        <body>
            <h1>This is a heading</h1>
        </body>
        </html>

- Inline CSS:
        <!DOCTYPE html>
        <html>
        <body>

        <h1 style="color:blue;text-align:center;">This is a heading</h1>
        <p style="color:red;">This is a paragraph.</p>

        </body>
        </html>

- RGB color option, other than just color names:
    - rgb(red, green, blue)

- Hex color option: #rrggbb





- Hackerrank : just skip, have to do so much other stuff 
- Animation 
- Object-fit : resizes element to fit its container
No clipping, preserves the ratio of the image 
- Ellipsis : The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped, display an ellipsis ('…'), or display a custom string.
- Text coloring 
- Selection : Pointer-events make things selectable
or not selectable
- Input placeholder : Hide place holder text by 
color: transparent 
- Centering  ??? 
- Vertical-align 