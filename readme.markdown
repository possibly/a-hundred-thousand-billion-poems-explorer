#One Hundred Thousand Billion Poems Explorer
A nifty Node module for exploring [Stanley Chapman](https://en.wikipedia.org/wiki/Stanley_Chapman)'s English translation of [Raymond Queneau](https://en.wikipedia.org/wiki/Raymond_Queneau)'s famous set of poems entitled [*Cent mille milliards de poèmes*](https://en.wikipedia.org/wiki/Hundred_Thousand_Billion_Poems).

##Loading the explorer
You can `require` the explorer in your own project, like so:
```
var book = require('[YOUR PATH HERE]')
```

##API
###getSonnet(`sonnet_number`), returns `Array`
Return one of the "original" sonnets as an array of strings. Index starts at 1, "the first sonnet".

###getLines(`line_number`), returns `Array`
Return all of the lines that appear on the given `line_number` as an array of strings. Index starts at 1, "the first line".

###assembleSonnet(`page_numbers`), returns `Array`
Input is an array containing Integers that indicate which page to take a line from. The position of the Integer in the array is the line number to take from the specified page. Index starts at 1 for the sonnet numbers.

###withLineNumber(`Array`), returns `Object`
Returns an `Object` whose key/value pairs are the number of the line and the line itself, e.g.
```
{
'1': 'Don Pedro from his shirt has washed the fleas',
...
}
```

Usage would look like
```
book.withLineNumbers(book.getSonnet(1))
```
