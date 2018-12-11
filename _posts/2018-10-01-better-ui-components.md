---
layout: post
title: Custom HTML Tags
date: 2018-10-25 12:00
author: Jordan Brennan
comments: true
categories: [ui, web]
product: blog
doctype: blog
disqus: 1
---

# Custom HTML Tags
## How to design better UI components and avoid over-engineering

**tl;dr:** it's a new approach and it's NOT another js thing vying for market share. Yay!

### HTML now and forever
I like writing code. I've written in Java, PHP, C#, perl *shutters*, and JavaScript. As much as I love js, my favorite is probably HTML because of the way its declarative nature allows me to easily express what I'm envisioning in my mind and, with one click of the refresh button, I get to immediately see my creation on screen. It's design and engineering all in one motion and I love it! But HTML doesn't get the kind of use it ought to. Let's take a brief look at the basics and dig into a new approach that you might find worth considering.

So HTML’s job is to give content structure and meaning. This is called semantics. As the web progressed HTML adapted to include new elements to provide semantic support for more content, like `<nav>` for navigation and `<video>` for videos and `<article>` for, well, articles. Over the years it also added new capabilities to existing elements like the addition of the `autofocus` attribute, which tells the browser which element to focus on page load (you know that one is a must for login and search UI!).

These additions were implemented through the usual HTML constructs: *tags*, *attributes*, and *nesting*. In case you need a refresher, here's some examples:

```html
<h1>Hello World!</h1>
```
`h1` is the "heading level 1" _tag_.
```html
<p>Ready for <a href="example.com" download>download</a></p>
```
That's an "anchor" element, the `a` tag, with download and "hypertext reference" _attributes_ and it's _nested_ inside a `p` or paragraph. Here's some more examples:
```html
<section>
  <header>...</header>
  <footer>...</footer>
</section>

<input type="email" placeholder="name@example.com" autofocus>

<video src="example.com/vids/cats.mp4" poster="example.com/posters/cats.jpg" autoplay loop controls></video>
```
HTML gives us lots of these elements to work with, but as you well know it doesn't give us enough elements for everything we need. Not by a long shot! Take icons as a simple example, here's some in GitHub's UI:
<img src="/public/images/github-tabs.png" alt="Icons used in a tabs user interface">

Because HTML doesn't give us an `icon` tag to markup a site's icons we've had to come up with our own solutions. Here are four similar approaches you've likely seen before:

```html
<i class="fa fa-phone"></i>

<i class="icon icon-phone"></i>

<span class="oi oi-phone"></span>

<svg class="octicon octicon-code">...</svg> <!-- this is what GitHub is doing for those icons above -->
```
Those solutions use classes to define both the component type and its attributes, and while there is nothing wrong with that, there are drawbacks:

#### 1) Repetitive naming:
`fa`, `icon`, `oi`, and `octicon` have to be repeated twice. Not DRY.

#### 2) Loss of clarity when the following inevitably happens (or the extra effort required to prevent it):
```html
<i class="icon icon-phone"></i>  original code
<i class="icon icon-phone foo"></i>  six weeks later
<i class="bar baz icon icon-phone foo"></i>  a year later
```
What exactly is that last one supposed to be? It's no longer clear. 
#### 3) The tag becomes unavoidable boilerplate with no meaning:
```html
<div class="icon icon-phone"></div>
```
That means `<div class=""></div>` is all boilerplate. Bummer.
#### 4) Next to standard elements the class-based design looks out of place:
```html
<i class="icon icon-phone"></i>
<input type="email" autofocus>
```
What if the standard elements used classes like this? So instead of the above we'd have:
```html
<i class="icon icon-phone"></i>
<i class="input input-type-email input-autofocus">
```
Pretty gross, but that's class-based design, and it gets even worse if you follow BEM. Here's an example of that from a popular design system: 
```html
<div class="mdc-dialog__actions mdc-dialog__actions--full-width">
``` 
Other approaches get even weirder:
```html
<span uk-icon="icon: phone"></span>
```
We don't have to do it this way. We don't have to use classes or trickery. There's something better. 

### Custom HTML tags

We can design custom components with more meaningful APIs by using tags, attributes, and nesting - just like real elements. Here's what that means:

_A typical class-based design_
```html
<i class="icon icon-phone"></i>
```
_Now done with a custom tag and attribute_
```html
<icon name="phone"></icon>
```
If this kind of makes you uneasy, don't worry. Custom tags are compatible with all modern browsers and later versions of IE. Browsers happily download, parse, and render custom tags just like any "real" HTML because this _is_ real HTML. Sure, it's not a standard element and browsers won't have any default styles or built-in behaviors for your custom or _unknown_ tags, but that's not a problem at all. You can create CSS rules for custom tags, like `icon`, just like you can for standard tags and classes:
```css
icon {
  /* display: inline; Browsers display all unknown tags as inline, you can set it to whatever you want */
  font-family: 'My Icons';
}

icon[name="phone"]:before {
  content: "\u123"; /* a phone glyph */
}
```

So there we go. It works perfectly and other than specificity it's no different than `.icon` and `.icon-phone:before`.


Let's do another one. 

A typical class-based Badge design looks like:
```html
<span class="badge badge-success">1</span>
```
Not awful, but here's the same thing using a tag and attributes:
```html
<badge count="1" type="success"></badge>
```
The second one is clearly a Badge element with it's own attributes. Again, not unlike real elements. And with a little CSS we can add some intelligence to Badge so when it has a zero count or no count it hides: 
```css
badge[count="0"], badge[count=""] { 
  display: none 
}
``` 
That's cool!

Here's some other examples of components built with custom tags and attributes instead of classes:
```html
<loader loading></loader>

<alert type="success">...</alert>

<row>
  <col span="6" hide="sm">...</col>
  <col span="6 sm-12">...</col>
</row>
```
How about we redo Material's Dialog Actions from earlier? That'd go like this:
```html
<div class="mdc-dialog__actions mdc-dialog__actions--full-width">...</div>
```
becomes
```html
<mdc-dialog-actions size="full-width">...</mdc-dialog-actions>
```

Can you see the difference? 

Are you starting to sense the benefits? 

Designing these simple UI components with tags and attributes instead of classes is fun and it's better. It is objectively better:

* Enables UI engineers to design components with much more meaningful APIs instead of a boilerplate tag and list of classes
* Custom tags have strong semantic meaning and are easily identifiable: `<badge>` vs. `<span class="badge">`
* No more BEM or similar methodologies for engineering around the problems with class-based design
* In many cases you can ditch the need for abstraction:  {% raw %}`{{> icon name="phone"}}`{% endraw %} or `<OverEngineeredIcon name="phone"/>` is replaced with `<icon name="phone"></icon>`
* The result is clean, standards-based markup that has a nice uniform look with excellent readability
* Using custom tags and attributes is officially supported. It's how HTML thought we'd design custom components, but we instead went crazy for classes!

There's also another big benefit to using custom tags and attributes: it better positions your component for future improvements. How so? Let’s get into that now.

### Component evolution
Creating and sharing custom components is a commitment. Your components will evolve and have new capabilities added to them over time. Let's look at the possible evolution of a custom Alert (aka Callout) component:

_Original design_
```html
<alert type="success">
  <p>Custom tags are great!</p>
</alert>
```
```css
alert { 
  display: flex; 
  color: white;
}

alert[type="success"] { background-color: green; }
alert[type="warn"] { background-color: orange; }
alert[type="error"] { background-color: red; }
```
That would look something like:

<img src="/public/images/alert-component-v1.png" alt="Alert component">

Please note that there are no dependencies here. There's nothing to download, no tools and nothing to build. No magic, no hacks, nothing proprietary, no frameworks or special syntax, nothing. And when it comes to building software, _nothing_ is better than something.

Our Alert is pretty plain right now, so let’s see if we can give it an icon:

_With an icon_
```html
<alert type="success">
  <icon name="check"></icon>
  <p>Custom tags are great!</p>
</alert>
```
That works, but it's not the right way to design a component. Let's get an icon without leaving it up to the implementer:

_With the icon inferred_
```html
<alert type="success">
  <p>Custom tags are great!</p>
</alert>
```
```css
alert[type="success"]:before {
  font-family: 'My Icons';
  content: "\u555"; /* gets us a ✓ icon */
}
```

<img src="/public/images/alert-component-v2.png" alt="Alert component with an icon">

Ok, that's starting to really look like something. (Note that the CSS here does not include all the properties needed) 

It's pretty common for Alerts to disappear automatically, so let's add support for that. If there really was an HTML `alert` element and it had an auto-disappearing feature one could imagine it would have an `autodismiss` attribute for triggering this behavior, so let's go with that:

_New autodismiss feature_
```html
<alert type="success" autodismiss>
  <p>Custom tags are great!</p>
</alert> 
```
```css
alert {
     transition: opacity 2s 4s ease-in-out; /* 4 second delay, then fade out */
     opacity: 1; 
}

alert[autodismiss] {
    opacity: 0; 
}
```
Nice! We've really got ourselves a useful component without a single build step or polyfill required - imagine that! And check out its friendly little API:
* `alert` tag
* `type` attribute (_required_) - one of "success", "warn", or "error"
* `autodismiss` attribute (_optional_) - if present, the Alert will disappear after four seconds
* `id`, `class`, `aria-` and other "inherited" attributes still apply
* `transitionend` event - DOM event, fires after Alert disappears
* Accepts nested content, including other custom tags

If you didn't know any better you might think this was one of them fancy HTML5 elements. That's a sign we are on the right track! 

#### Close, but not quite
There is a small problem, though. The problem is our tag name is not totally future-proof. There are two considerations here:

##### Collisions
The first is that some day HTML might get a tag with the same name as ours. I pray every night before bed that WHATWG will give us `<icon>`, but if WHATWG doesn't it's still possible some other developer will. Either way there's risk of a collision and that brings us to the second consideration: prefixing. 

##### Prefixing
Although these aren't technically Custom Elements at this point, you'll want to follow that spec by using a prefix for your custom tags. At Avalara we use `s-` as our prefix. The `s` is short for Skylab, which is the name of our design system, but it also means:
* **s**tandards - we always go for standards until we actually need to bring in a dependency
* **s**emantic - tags with attributes are much more semantic than `div` with classes
* **s**mall - basic HTML and CSS can take you very far without the overhead of something like React
* **s**hared - these components are shared by our 20+ web apps and three times as many developers
* **S**eattle - ok not really, but that's where we are! Come [join us](https://www.avalara.com/us/en/about/jobs/job-details.oUKm8fwS.html)

So yeah, prefixing is a best-practice. It solves the risk of colliding tags and it's a helpful visual distinguisher between standard and custom tags. More importantly it sets you up very nicely for when JavaScript-enabled functionality is required and your happy little "micro" component needs to grow up and become a true Custom Element (or similar). You see, using prefixed custom tags instead of classes allows your components to scale in either direction: you can scale down to lightweight CSS-only components like icon, or all the way up to interactive components that respond to state changes _all while maintaining the same HTML interface_. The secret is prefixed custom tags.

Let's see how our Alert can go from a basic custom tag with styles to interactive JavaScript-enabled component without breaking changes or a shifting paradigm.

In a future release of Alert let's say we're adding the ability to set the `autodismiss` duration. You can take the default four seconds by simply adding the attribute, or you can shorten or extend that duration by setting its value to a number:

_Override autodismiss duration_
```html
<alert type="success" autodismiss="10">
  <p>Custom tags are great!</p>
</alert>
```
But as we've learned it's best-practice to prefix, so that really should be:
```html
<s-alert type="success" autodismiss="10">
  <p>Custom tags are great!</p>
</s-alert>
```
> Side note: If you're the maintainer of a shared library, pick a short prefix that's meaningful to you. Twitter's Bootstrap, for example, would go from:
> ```html
> <div class="alert alert-success">
> ```
> to
> ```html
> <twbs-alert type="success">
> ```
> or maybe just
> ```html
> <b-alert type="success">
> ```
> Material could use `mdc-` as shown above.  

Anyway, back to `autodismiss`. Supporting a value of seconds now requires the use of JavaScript. At this point most people go with what they know, or try the flavor-of-the-day ramping up on whatever idioms and special syntax is required. That's not a problem if you're a small team with one app, but if you have lots of consumers of your Alert component you're entering into a code contract and the less that contract asks of the implementer, the better.

We can minimize the contract and be better positioned for the long-term if we pick a solution that follows, or stays close to, Custom Elements. Here are some options available today:
* [Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements) or full-blown [Web Components](https://www.webcomponents.org/introduction) of course
* [Polymer](https://www.polymer-project.org/3.0/start/)
* [Slim](http://slimjs.com/#/getting-started)
* [Vue](https://vuejs.org/v2/guide/#Relation-to-Custom-Elements)
* [Riot](https://riot.js.org), which has the best DX out there imo, [try it](https://riot.js.org/play/). There's even a w3c [proposal that takes the Custom Elements spec in a similar direction](https://github.com/w3c/webcomponents/blob/gh-pages/proposals/Declarative-Custom-Elements-Strawman.md)

Here are two examples where Alert has been upgraded to a stateful component to support a user-defined value for `autodismiss` delay:

_Custom Elements + `<template>` element_
```html
<template id="s-alert">
  <style>
    :host {...}
  </style>
  
  <s-icon></s-icon>
  <slot></slot>
</template>

<script>
  let tmpl = document.querySelector('#s-alert');

  customElements.define('s-alert', class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({mode: 'open'});
      shadowRoot.appendChild(tmpl.content.cloneNode(true));
    }
    
    static get observedAttributes() {
      return ['type', 'autodismiss'];
    }

    get type() {
      return this.getAttribute('type', val);
    }

    set type(val) {
      if (val) {
        this.setAttribute('type', val);
      }
    }
  
    get seconds() {
      if (this.hasAttribute('autodismiss')) {
        let seconds = (typeof this.getAttribute('autodismiss') === 'number' ? this.getAttribute('autodismiss') : 4) * 1000;
      } else {
        let seconds = 0
      }
      
      return seconds;
    }

    set seconds(val) {
      if (val) {
        this.setAttribute('autodismiss', val);
      } else {
        this.removeAttribute('autodismiss');
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
      // Update the type or autodismiss attribute
    }

    connectedCallback() {
      let icon = this.type === 'success' ? 'check' : this.type === 'error' ? 'info' : 'warn';
      this.getElementsByTagName('s-icon')[0].setAttribute('name', icon);
  
      if (this.seconds > 0) setTimeout(this.remove(), this.seconds);
    }
  });
</script>
```
_Riot_
```html
<s-alert>
    <s-icon name="{icon}"></i>
    <yield/> <!-- same as <slot> -->

    <script>
        this.icon = this.opts.type === 'success' ? 'check' : this.opts.type === 'error' ? 'info' : 'warn';

        this.on('mount', () => {
            if (this.opts.autodismiss) {
                let seconds = (typeof this.opts.autodismiss === 'number' ? this.opts.autodismiss : 4) * 1000;
                setTimeout(this.unmount(), seconds);
            }
        })
    </script>
    <style>
      :scope {...}
    </style>  
</s-alert>
```

Regardless of the implementation, our markup for Alert hasn't changed:
```html
<s-alert type="success" autodismiss="10">
  <p>Custom tags are great!</p>
</s-alert>
```
And the default still works the same too:
```html
<s-alert type="success" autodismiss>
  <p>Custom tags are great!</p>
</s-alert>
```
### Going forward
The front-end space is notorious for rapidly changing. It's a place of hype and fads. That probably won't change, but going forward if the thing you pick enables you and other devs to compose UIs using HTML, then it's a good choice. If something forces you to add lots of kb (more than 10 min+gz) and write special syntax, then it's not a good choice for UI composition because we already have HTML for that. We just haven't been using it correctly!

Being able to write apps built with this kind of standards-based markup is not just a better DX, it's less costly since there's nothing proprietary that will inevitably fall out of fashion and need to be refactored. Take GitHub's UI for example. No idea what they built it with, but as I write this article I look at the interface imagining myself using Skylab to recreate it:

```html
<body>
  <nav>...</nav>
  <s-tabs>
    <s-tab for="code">
      <s-icon name="code"></s-icon> Code
    </s-tab>
    <div id="code">
      <s-editor mode="md"></s-editor>
    </div>
    <s-tab for="pull-req">
      <s-icon name="merge"></s-icon> Pull requests <s-badge count="0"></s-badge>
    </s-tab>
    <div id="pull-req">
      ...
    </div> 
    <s-tab for="projects">
      <s-icon name="board"></s-icon> Projects <s-badge count="1"></s-badge>
    </s-tab>
    <div id="projects">
      ...
    </div>
  </s-tabs>
  <footer>...</footer>
</body>
```

Now I know this doesn't address the hard problem of application state management and having the UI reliably reflect that state. That's what React and others set out to solve and they did. But the front-end community seems to have been unable to take a balanced approach to adopting these new technologies and just started over-engineering everything in sight. It's very pervasive in the React community in particular. I'll go out on a limb and say that if you use React you no doubt have an over-engineered app, or at least in part. When I see things like this I just wonder what the heck are all the React devs doing to themselves (these are real React components, there's 100's of examples out there like this):
```html
<DisplayText size="extraLarge" element="h4">Good evening, Dominic.</DisplayText>
```
which outputs
```html
<h4 class="Polaris-DisplayText Polaris-DisplayText--sizeExtraLarge">Good evening, Dominic.</h4>
```
Just take a minute to think about what happened there...

Here's another one from a great company that should know better:
```html
<UitkInlineBadge shape="shape-pill" theme="theme-success">10% off</UitkInlineBadge>
```
which outputs
```html
<span class="uitk-badge uitk-badge-inline shape-pill theme-success">10% off</span>
```
The overuse of these libraries diminishes the potential gains, even to the point of resulting in an overall negative outcome. But I don't know, maybe it's not so obvious: 

_Should an engineer write a dozen lines of CSS to make Badge, or should they write **474 total lines of code across 8 files with multiple dependencies and a mandatory build pipleine**?_ (true story btw)

"So it can scale," I hear. So it can...and yet 9 out of 10 implementations were in zero danger of not being able to scale, but all 10 were solved with [insert favorite js library] and now the app has 10x the amount of code as necessary and an extremely high degree of dependency. Can it scale _down_? Down so much that it can get out of its own way and not be needed at all? 

And that's really what the custom tag approach is about. Yes, a tag plus attributes design is much nicer than class-based (the time for that switch has definitely come), but being able to design and build components that scale in either direction with good ol' HTML across a wide range of use cases is a very compelling opportunity!

## Conclusion
Custom HTML tags, Web Components, the Custom Elements spec and the few js libs that stay close to it - that's the path to designing better UI components and getting past this over-engineered era. 

Loved it? Hated it? Any custom tag experience you'd like to share? Comment below!
