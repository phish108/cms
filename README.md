## cms

little jekyll tool for creating pages and blog post

The tool create stubs for 

### Running

The general Synopsis is: 

```
npx -p @phish108/cms jcms [page_type] "title of page"
```

To create a page

```
npx -p @phish108/cms jcms  page "hello world"
```

To create a post in _posts

```
npx -p @phish108/cms jcms post "hello world"
```

The difference between `post` and other page types is that `post` will add a date and other meta-data for blogging. 

### Installation

cms is intended to be used via npx, but 

```
npm install @phish108/cms
```
