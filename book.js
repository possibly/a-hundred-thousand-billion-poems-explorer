var Book = function() {};

Book.prototype._pages = require('./pages.js');

Book.prototype.getLines = function(line_number){
  //Return all of the lines that appear on the given LINE_NUMBER
  //as an array of strings.
  //Index starts at 1, "the first line".
  lines = [];
  for (i = 1; i <= Object.keys(this._pages).length; i++){
    lines = lines.concat(this._pages[i][line_number-1]);
  }
  return lines;
};

Book.prototype.getSonnet = function(sonnet_number){
  //Return one of the "original" sonnets as an array of strings.
  //Index starts at 1, "the first sonnet".
  return this._pages[sonnet_number];
};

Book.prototype.assembleSonnet = function(page_numbers){
  //Input is an array containing Integers that indicate which page
  //to take a line from. The position of the Integer in the array
  //is the line number to take from the specified page.
  //Index starts at 1 for the sonnet numbers.
  if (page_numbers.length != 14){
    throw "Every sonnet must be 14 lines long. The input only specified "+page_numbers.length+" lines";
  }

  var assembledSonnet = page_numbers.map( function(page, line){
    return this._pages[page][line] 
  }, this );

  return assembledSonnet;
};

Book.prototype.withLineNumbers = function(array){
  //Return an object structured as index:line
  //Index starts at 1.
  lines = {};
  for (i = 1; i <= array.length; i++){
    lines[i] = array[i-1];
  }
  return lines;
};

module.exports = new Book();
