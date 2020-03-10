## cms

very basic jekyll tool for creating pages and blog post

The tool create stubs for pages and blog posts on gh-pages. I created this tool because I forget about the meta data and I was hoping to have a basic tool on  

### Running

The general Synopsis is: 

```
npx -p @phish108/cms cms [page_type] "title of page"
```

To create a page

```
npx -p @phish108/cms cms page "hello world"
```

To create a post in _posts

```
npx -p @phish108/cms cms post "hello world"
```

The difference between `post` and other page types is that `post` will add a date and blog-post related meta-data to the header.

Note that the commands will run on the local directory and do NOT create subdirectories for you. 

### Installation

cms is intended to be used via npx, but 

```
npm install @phish108/cms
```
