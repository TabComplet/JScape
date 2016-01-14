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

escaper[6] = ""+
"function escape(s) {\n"+
"   var m = s.split(/#/);\n"+
"   var a = document.createElement('div');\n"+
"   a.appendChild(document['create'+m[0]].apply(document, m.slice(1)));\n"+
"   return a.innerHTML;\n"+
"}";

escaper[7] = ""+
"function escape(s) {\n"+
"   var m = s.split(/#/)\n"+
"   if (!/^[a-zA-Z\\\[\\\]']*$/.test(m[0])) return 'Función invalida';\n"+
"   var obj = {'userdata': m[1]};\n"+
"   var json = JSON.stringify(obj).replace(/</g, '\\\\u003c');\n"+
"   return '<script>'+m[0]+'('+json+')</script>';\n"+
"}";

escaper[8] = ""+
"function escape(s) {\n"+
"   return '<script>console.log(\"'+ s.toUpperCase() +'\")</script>';\n"+
"}";

escaper[9] = ""+
"function escape(s) {\n"+
"   if (/[\\\\<>]/.test(s)) return 'Se detectó un intento de inyección de código'\n"+
"   return '<script>console.log(\"'+ s.toUpperCase() +'\")</script>';\n"+
"}";

//escaper[n] = ""+
//"function escape(s) {\n"+
//""+
//"}";
