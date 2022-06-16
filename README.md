# **`Ownr - Find premium houses & apartments`**

For demonstrative purposes.

## **`🔋 What is Ownr ?`**

**Ownr** is an estate agency specialising in rare and premium properties. This web application allows the user to search for the house of their dreams through a large selection of properties and numerous customer reviews.

![Mockup](assets/img/doc/mockup.png)

## **`🚀 Challenge`**

1- Integrate the graphic model and components in compliance with W3C standards, SEO and responsive design.

2 - Use external libraries for the use of carousels and filters.

3 - Ensure compatibility on different browsers and devices.

## **`⚙️ Technical approach`**

-   `GulpJS` `Twig` `Sass` `ES6`
-   External : `SwiperJS`
-   Mobile First/ Responsive design.
-   Reusable components (buttons, tabs, sections, ... ).
-   SEO friendly.
-   Browsers compatible.

Pieces of the cake :

```twig
<ul class="list is-socials flex">
    {% for item in social_items %}
        <li class="list_item">
            <a href="{{ item.path ? item.path : "" }}" title="{{ item.label }}" target="_blank">
                <span class="icon{{ item.icon ? " icon_" ~ item.icon : "" }}"></span>
            </a>
        </li>
    {% endfor %}
</ul>
```

```javascript
window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelectorAll(".form");

    form.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("is-active");
        });
    });
});
```

## **`🔗 Let's Connect`**

> Meet me on Malt : https://www.malt.fr/profile/thomasbarnabe

[![](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white0e76a8)](https://www.linkedin.com/in/thomasbarnab%C3%A9/)
