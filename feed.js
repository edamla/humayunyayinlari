---
layout: null
permalink: feed.json
---

{
    "version": "https://jsonfeed.org/version/1",
    "title": "{{ site.title }}",
    "home_page_url": "{{ site.url }}",
    "feed_url": "{{ site.url }}/feed.json",
    "description": "{{ site.description }}",
    "icon": "{{ site.url }}{{ site.logo }}",
    "favicon": "{{ site.url }}/favicon.ico",
    "expired": false,
    "author": {
        "name": "{{ site.author.name }}",
        "url": "{{ site.url }}"
    },
    "posts": [
        {% for post in site.posts %}
        {
            "id": "{{ post.url | absolute_url | sha1 }}",
            "url": "{{ site.url }}{{ post.url }}",
            "title": {{ post.title | jsonify }},
            "date_published": "{{ post.date | date_to_xmlschema }}",
            {% if post.date-updated %}
            "date_modified": "{{ post.date-updated | date_to_xmlschema }}",
            {% else %}
            "date_modified": "{{ post.date | date_to_xmlschema }}",
            {% endif %}
            "author": {
                "name": "{{ site.author.name }}",
                "url": "{{ site.url }}"
            },
            "summary": {{ post.excerpt | jsonify }},
            "content_html": {{ post.content | jsonify }},
            "tags": {{ post.tags | jsonify }},
            "image": "{{ post.image | absolute_url }}"
        }{% if forloop.last == false %},{% endif %}
        {% endfor %}
    ],
    "pages": [
        {% for page in site.pages %}
        {
            "id": "{{ page.url | absolute_url | sha1 }}",
            "url": "{{ site.url }}{{ page.url }}",
            "title": {{ page.title | jsonify }},
            "date_published": "{{ page.date | date_to_xmlschema }}",
            {% if page.date-updated %}
            "date_modified": "{{ page.date-updated | date_to_xmlschema }}",
            {% else %}
            "date_modified": "{{ page.date | date_to_xmlschema }}",
            {% endif %}
            "author": {
                "name": "{{ site.author.name }}",
                "url": "{{ site.url }}"
            },
            "summary": {{ page.excerpt | jsonify }},
            "content_html": {{ page.content | jsonify }},
            "tags": {{ page.tags | jsonify }},
            "image": "{{ page.image | absolute_url }}"
        }{% if forloop.last == false %},{% endif %}
        {% endfor %}
    ],
    "books": [
        {% for book in site.books %}
        {
            "id": "{{ book.url | absolute_url | sha1 }}",
            "url": "{{ site.url }}{{ book.url }}",
            "title": {{ book.title | jsonify }},
            "date_published": "{{ book.date | date_to_xmlschema }}",
            {% if book.date-updated %}
            "date_modified": "{{ book.date-updated | date_to_xmlschema }}",
            {% else %}
            "date_modified": "{{ book.date | date_to_xmlschema }}",
            {% endif %}
            "author": {
                "name": "{{ book.authors |  array_to_sentence_string }}",
                "url": "{{ site.url }}"
            },
            "summary": {{ book.excerpt | jsonify }},
            "content_html": {{ book.content | jsonify }},
            "tags": {{ book.tags | jsonify }},
            "image": "{{ book.image | absolute_url }}"
        }{% if forloop.last == false %},{% endif %}
        {% endfor %}
    ],
    "authors": [
        {% for author in site.authors %}
        {
            "id": "{{ author.url | absolute_url | sha1 }}",
            "url": "{{ site.url }}{{ author.url }}",
            "title": {{ author.title | jsonify }},
            "date_published": "{{ author.date | date_to_xmlschema }}",
            {% if author.date-updated %}
            "date_modified": "{{ author.date-updated | date_to_xmlschema }}",
            {% else %}
            "date_modified": "{{ author.date | date_to_xmlschema }}",
            {% endif %}
            "author": {
                "name": "{{ site.author.name }}",
                "url": "{{ site.url }}"
            },
            "summary": {{ author.excerpt | jsonify }},
            "content_html": {{ author.content | jsonify }},
            "tags": {{ author.tags | jsonify }},
            "image": "{{ author.image | absolute_url }}"
        }{% if forloop.last == false %},{% endif %}
        {% endfor %}
    ]
    
}