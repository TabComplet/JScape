var escaper = [];

escaper[0] = ""+
"function escape(s) {\n"+
"   return '<script>console.log(\"' + s +'\");</script>\'\n"+
"}";

escaper[1] = ""+
"function escape(s) {\n"+
"   s = s.replace(/\"/g, '\\\\\"');\n"+
"   return '<script>console.log(\"' + s + '\");</script>'\n"+
"}";

escaper[2] = ""+
"function escape(s) {\n"+
"   s = JSON.stringify(s);\n"+
"   return '<script>console.log(' + s + ');</script>';\n"+
"}";

escaper[3] = ""+
"function escape(s) {\n"+
"   var url = 'javascript:console.log('+ JSON.stringify(s) +')';\n"+
"   console.log(url);\n"+
"\n"+
"   var a = document.createElement('a');\n"+
"   a.href = url;\n"+
"   document.body.appendChild(a);\n"+
"   a.click();\n"+
"}";

escaper[4] = ""+
"function escape(s) {\n"+
"   var text = s.replace(/</g, '&lt;').replace('\"', '&quot;');\n"+
"   text = text.replace(/(http:\\\/\\\/\\\S+)/g, '<a href=\"$1\">$1</a>');\n"+
"   text = text.replace(/\\\[\\\[(\\\w+)\\|(.+?)\\\]\\\]/g, '<img alt=\"$2\" src=\"$1.gif\">');\n"+
"   return text;\n"+
"}";

escaper[5] = ""+
"function escape(s) {\n"+
"   var text = s.replace(/</g, '&lt;').replace('/\"/g', '&quot;');\n"+
"   text = text.replace(/(http:\\\/\\\/\\\S+)/g, '<a href=\"$1\">$1</a>');\n"+
"   text = text.replace(/\\\[\\\[(\\\w+)\\|(.+?)\\\]\\\]/g, '<img alt=\"$2\" src=\"$1.gif\">');\n"+
"   return text;"+
"}";
