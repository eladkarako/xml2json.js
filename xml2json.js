function enmr(map){
  var obj = {}
    , value
    ;

  Object.keys(map).forEach(function(key){
    value = map[key].nodeValue || "";
    key = map[key].nodeName || "";
    
    if("" === key) return;

    if(-1 === Object.keys(obj).indexOf(key))
      obj[key] = value;
    else
      if(obj[key] instanceOf Array)
        obj[key]
      
    
    console.log(key,value);
  });
}
