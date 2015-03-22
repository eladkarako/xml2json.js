function has(obj, key){
  return -1 !== Object.keys(obj).indexOf(key);
}

function enm(map){
  var obj = {}
    , value
    ;

  Object.keys(map).forEach(function(key){
    value = map[key].nodeValue || "";
    key = map[key].nodeName || "";
    
    if("" === key) return;

    obj[key] = has(obj, key) ? [].concat(obj[key],value) : value;
  });

  return obj;
}


function node_parse(node, parent){
  var key, obj = {};
  parent = "object" === typeof parent ? parent : {};

  key = node.nodeName || "";
  if("" === key) return;

  obj.__@attributes = enm(node.attributes || []);
  obj.__@text_cntnt = node.cloneNode(false).textContent || "";

  //iterate children
  Array.prototype.forEach.call(node.children || [], function(child){  //iterate sub-tree of children.
    obj = node_parse(child, obj);
  });

  parent[key] = has(parent, key) ? [].concat(parent[key], obj) : obj;

  return parent;
}


function parse_xml(xml){
  var doc, json_obj;
  xml = "string" === typeof xml ? xml : '<?xml version="1.0" encoding="UTF-8"?><MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:mpeg:DASH:schema:MPD:2011" xmlns:yt="http://youtube.com/yt/2012/10/10" xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 DASH-MPD.xsd" minBufferTime="PT1.500S" profiles="urn:mpeg:dash:profile:isoff-on-demand:2011" type="static" mediaPresentationDuration="PT1593.399S"><Period><AdaptationSet mimeType="audio/mp4" subsegmentAlignment="true"><Role schemeIdUri="urn:mpeg:DASH:role:2011" value="main"/><Representation id="140" codecs="mp4a.40.2" audioSamplingRate="44100" startWithSAP="1" bandwidth="131043"><AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/><BaseURL yt:contentLength="25581413">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=140&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=audio/mp4&amp;gir=yes&amp;clen=25581413&amp;lmt=1401085174237198&amp;dur=1593.399&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=7585E2388D0392DF0D2E4EEF15C9D63F711807CC.71D8C5BEC7CE67A9B133D53EC74920849E02E6C8&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL><SegmentBase indexRange="592-2543" indexRangeExact="true"><Initialization range="0-591"/></SegmentBase></Representation><Representation id="141" codecs="mp4a.40.2" audioSamplingRate="44100" startWithSAP="1" bandwidth="257337"><AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2"/><BaseURL yt:contentLength="50801805">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=141&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=audio/mp4&amp;gir=yes&amp;clen=50801805&amp;lmt=1401085174239522&amp;dur=1593.399&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=8F50FD1168298593EF1BC816ACD200502BEA5BB4.02D8C322D4B4F7A955CD543BCD45729B30C57626&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL><SegmentBase indexRange="592-2543" indexRangeExact="true"><Initialization range="0-591"/></SegmentBase></Representation></AdaptationSet><AdaptationSet mimeType="video/mp4" subsegmentAlignment="true"><Role schemeIdUri="urn:mpeg:DASH:role:2011" value="main"/><Representation id="133" codecs="avc1.4d400d" width="320" height="240" startWithSAP="1" bandwidth="256324" frameRate="30"><BaseURL yt:contentLength="15130379">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=133&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=video/mp4&amp;gir=yes&amp;clen=15130379&amp;lmt=1401086996930801&amp;dur=1593.234&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=437A0E8D459ECB68E8AC5E84AF5244A9FB0658D2.913F4E629E5A4FF3DDE8D66361A718900A4A75ED&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL><SegmentBase indexRange="674-4533" indexRangeExact="true"><Initialization range="0-673"/></SegmentBase></Representation><Representation id="134" codecs="avc1.4d401e" width="480" height="360" startWithSAP="1" bandwidth="185779" frameRate="30"><BaseURL yt:contentLength="5234434">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=134&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=video/mp4&amp;gir=yes&amp;clen=5234434&amp;lmt=1401087386905110&amp;dur=1593.234&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=54ACCC7A224D2A4F656DAE83274F9AD0A03F0499.0DB1AC3AA7B60E3A3FCBE8EDD628D7A1B8C40B0D&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL><SegmentBase indexRange="711-4570" indexRangeExact="true"><Initialization range="0-710"/></SegmentBase></Representation><Representation id="135" codecs="avc1.4d401e" width="640" height="480" startWithSAP="1" bandwidth="398441" frameRate="30"><BaseURL yt:contentLength="8159171">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=135&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=video/mp4&amp;gir=yes&amp;clen=8159171&amp;lmt=1401087060023800&amp;dur=1593.234&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=7F5EF1C63C3E68617D7DF0F082F31EF54A7D2ECF.8F6E633DAACD239FC9272FC47A6C35B4E82A1105&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL><SegmentBase indexRange="709-4568" indexRangeExact="true"><Initialization range="0-708"/></SegmentBase></Representation><Representation id="160" codecs="avc1.4d400c" width="192" height="144" startWithSAP="1" bandwidth="111502" frameRate="15"><BaseURL yt:contentLength="9314748">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=160&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=video/mp4&amp;gir=yes&amp;clen=9314748&amp;lmt=1401087048705541&amp;dur=1593.234&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=678F3CA20B97A85792D97442D641C520207FADFD.2B8920F8313AB8D1CADF15FA3DCF16CB60B07AC6&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL><SegmentBase indexRange="673-4532" indexRangeExact="true"><Initialization range="0-672"/></SegmentBase></Representation></AdaptationSet></Period></MPD>';
  doc = (new DOMParser()).parseFromString(xml, "text/xml");

  json_obj = node_parse(doc);
}

(function(){
  var xml;

  xhr = new XMLHttpRequest()
  xhr.responseType = "text";
  xhr.onreadystatechange = function(){
    if(xhr.DONE !== xhr.readyState) return;
    if(200 !== xhr.status) return;
    
    xml = xhr.responseText;
    parse_xml(xml);
  };
  xhr.open('GET', ytplayer.config.args.dashmpd, true);
  xhr.send();
}());
