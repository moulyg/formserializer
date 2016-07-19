# Form Serializer

Convert Form fields in to JSON

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/mouly/formserializer/master/dist/formserializer.min.js
[max]: https://raw.github.com/mouly/formserializer/master/dist/formserializer.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/formserializer.min.js"></script>
<script>
jQuery(function($) {
  $('#element').formserializer(); // {}
});
</script>
```

## Documentation
This is just a simple plugin which convert the form element in to JSON object by name


## Examples

Usage is very simple have to create a form element with the name attribute
it converts all the element with the name tag to key value pair

```javascript
  $('#element').formserializer(); // {}
```
If you wants only the no empty field then you can pass the additional option here
{ showEmpty : false }

## Release History
 version 0.1.0 is released
