+++
title = 'Hugo Markdown Elements'
date = 2024-07-09T11:00:00-07:00
draft = false
tags = ['red','green','blue']
categories = ['battleground','rpg']
authors =['Kr Gaurav']
image = 'featured.jpg'
+++
---

# Hugo Markdown Elements
---
Emoji! 👋

---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***

**This is bold text**

__This is also a bold text__

*This is italic text*

_This is italic text_

~~StrikethroughTHis~~

---
> example blockquote

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

---
* Create a list by starting a line with `+`, `-`, or `*`
* Sub-lists are made by indenting 2 spaces:
   * Marker character change forces new list start:
   * Ac tristique libero volutpat at
   * Facilisis in pretium nisl aliquet
   * Nulla volutpat aliquam velit
* Very easy!
---
1. Dog
2. Cat
    1. Siberian
    2. Siamese
3. Lorem ipsum dolor sit amet
4. Consectetur adipiscing elit
    1. Another
    1. Another another
5. Integer molestie lorem at massa
---

Start numbering with offset:

57. foo
1. bar
1. bar

---
## Code

Inline `code`

Indented code
```
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```

Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables
-----
| Option | Description |
| ------ | ----------- |
| data   | path to data  |
| engine | engine to be used f |
| ext    | extension to be used for dest files. |


-----


Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")


---
### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

----

### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

