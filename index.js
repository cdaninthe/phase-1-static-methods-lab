class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ']/g, '');

  }

  static titleize(string){
    const arr = string.split(" ");
    arr[0] = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] == 'the' || arr[i] == 'a' || arr[i] == 'an' || arr[i] == 'but' || arr[i] == 'of' || arr[i] == 'and' || arr[i] == 'for' || arr[i] == 'at' || arr[i] == 'by' || arr[i] == 'from'){
        arr[i] = arr[i].toLowerCase();
      }
      else {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
    }
    return arr.join(" ");
  }
}