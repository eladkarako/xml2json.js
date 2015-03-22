# xml2json.js
[javascript] minimal xml-json parser - [to be contributed for phpjs as simplexml over json_encode alternative)

fetching YouTube DASH-manifest (from `ytplayer.config.args.dashmpd`) will result with:
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<MPD xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="urn:mpeg:DASH:schema:MPD:2011" xmlns:yt="http://youtube.com/yt/2012/10/10" xsi:schemaLocation="urn:mpeg:DASH:schema:MPD:2011 DASH-MPD.xsd" minBufferTime="PT1.500S" profiles="urn:mpeg:dash:profile:isoff-on-demand:2011" type="static" mediaPresentationDuration="PT1593.399S">
  <Period>
    <AdaptationSet mimeType="audio/mp4" subsegmentAlignment="true">
      <Role schemeIdUri="urn:mpeg:DASH:role:2011" value="main" />
      <Representation id="140" codecs="mp4a.40.2" audioSamplingRate="44100" startWithSAP="1" bandwidth="131043">
        <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2" />
        <BaseURL yt:contentLength="25581413">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=140&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=audio/mp4&amp;gir=yes&amp;clen=25581413&amp;lmt=1401085174237198&amp;dur=1593.399&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=7585E2388D0392DF0D2E4EEF15C9D63F711807CC.71D8C5BEC7CE67A9B133D53EC74920849E02E6C8&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL>
        <SegmentBase indexRange="592-2543" indexRangeExact="true">
          <Initialization range="0-591" />
        </SegmentBase>
      </Representation>
      <Representation id="141" codecs="mp4a.40.2" audioSamplingRate="44100" startWithSAP="1" bandwidth="257337">
        <AudioChannelConfiguration schemeIdUri="urn:mpeg:dash:23003:3:audio_channel_configuration:2011" value="2" />
        <BaseURL yt:contentLength="50801805">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=141&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=audio/mp4&amp;gir=yes&amp;clen=50801805&amp;lmt=1401085174239522&amp;dur=1593.399&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=8F50FD1168298593EF1BC816ACD200502BEA5BB4.02D8C322D4B4F7A955CD543BCD45729B30C57626&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL>
        <SegmentBase indexRange="592-2543" indexRangeExact="true">
          <Initialization range="0-591" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
    <AdaptationSet mimeType="video/mp4" subsegmentAlignment="true">
      <Role schemeIdUri="urn:mpeg:DASH:role:2011" value="main" />
      <Representation id="133" codecs="avc1.4d400d" width="320" height="240" startWithSAP="1" bandwidth="256324" frameRate="30">
        <BaseURL yt:contentLength="15130379">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=133&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=video/mp4&amp;gir=yes&amp;clen=15130379&amp;lmt=1401086996930801&amp;dur=1593.234&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=437A0E8D459ECB68E8AC5E84AF5244A9FB0658D2.913F4E629E5A4FF3DDE8D66361A718900A4A75ED&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL>
        <SegmentBase indexRange="674-4533" indexRangeExact="true">
          <Initialization range="0-673" />
        </SegmentBase>
      </Representation>
      <Representation id="134" codecs="avc1.4d401e" width="480" height="360" startWithSAP="1" bandwidth="185779" frameRate="30">
        <BaseURL yt:contentLength="5234434">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=134&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=video/mp4&amp;gir=yes&amp;clen=5234434&amp;lmt=1401087386905110&amp;dur=1593.234&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=54ACCC7A224D2A4F656DAE83274F9AD0A03F0499.0DB1AC3AA7B60E3A3FCBE8EDD628D7A1B8C40B0D&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL>
        <SegmentBase indexRange="711-4570" indexRangeExact="true">
          <Initialization range="0-710" />
        </SegmentBase>
      </Representation>
      <Representation id="135" codecs="avc1.4d401e" width="640" height="480" startWithSAP="1" bandwidth="398441" frameRate="30">
        <BaseURL yt:contentLength="8159171">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=135&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=video/mp4&amp;gir=yes&amp;clen=8159171&amp;lmt=1401087060023800&amp;dur=1593.234&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=7F5EF1C63C3E68617D7DF0F082F31EF54A7D2ECF.8F6E633DAACD239FC9272FC47A6C35B4E82A1105&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL>
        <SegmentBase indexRange="709-4568" indexRangeExact="true">
          <Initialization range="0-708" />
        </SegmentBase>
      </Representation>
      <Representation id="160" codecs="avc1.4d400c" width="192" height="144" startWithSAP="1" bandwidth="111502" frameRate="15">
        <BaseURL yt:contentLength="9314748">https://r5---sn-nhpax-ua8z.googlevideo.com/videoplayback?id=18506390d1ae0ddd&amp;itag=160&amp;source=youtube&amp;requiressl=yes&amp;mm=31&amp;mv=m&amp;pl=22&amp;ms=au&amp;ratebypass=yes&amp;mime=video/mp4&amp;gir=yes&amp;clen=9314748&amp;lmt=1401087048705541&amp;dur=1593.234&amp;fexp=900720,907263,929243,934050,934954,9406572,9407103,9407589,9407819,9407872,9408087,9408102,940940,943607,945049,948124,951511,951703,952302,952612,952901,955301,957201,959701,961404&amp;key=dg_yt0&amp;sver=3&amp;mt=1427006698&amp;signature=678F3CA20B97A85792D97442D641C520207FADFD.2B8920F8313AB8D1CADF15FA3DCF16CB60B07AC6&amp;upn=jolKCuJ3pcc&amp;__=1427007595659&amp;ip=77.126.203.81&amp;ipbits=0&amp;expire=1427028379&amp;sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mv,pl,ms,ratebypass,mime,gir,clen,lmt,dur</BaseURL>
        <SegmentBase indexRange="673-4532" indexRangeExact="true">
          <Initialization range="0-672" />
        </SegmentBase>
      </Representation>
    </AdaptationSet>
  </Period>
</MPD>
```

->

```javascript
JSON.stringify(node_parse(doc));
```

->

```javascript
{
  "#document": {
    "__attributes": {},
    "__text_cntnt": "",
    "MPD": {
      "__attributes": {
        "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
        "xmlns": "urn:mpeg:DASH:schema:MPD:2011",
        "xmlns:yt": "http://youtube.com/yt/2012/10/10",
        "xsi:schemaLocation": "urn:mpeg:DASH:schema:MPD:2011 DASH-MPD.xsd",
        "minBufferTime": "PT1.500S",
        "profiles": "urn:mpeg:dash:profile:isoff-on-demand:2011",
        "type": "static",
        "mediaPresentationDuration": "PT1593.399S"
      },
      "__text_cntnt": "",
      "Period": {
        "__attributes": {},
        "__text_cntnt": "",
        "AdaptationSet": [{
          "__attributes": {
            "mimeType": "audio/mp4",
            "subsegmentAlignment": "true"
          },
          "__text_cntnt": "",
          "Role": {
            "__attributes": {
              "schemeIdUri": "urn:mpeg:DASH:role:2011",
              "value": "main"
            },
            "__text_cntnt": ""
          },
          "Representation": [{
            "__attributes": {
              "id": "140",
              "codecs": "mp4a.40.2",
              "audioSamplingRate": "44100",
              "startWithSAP": "1",
              "bandwidth": "131043"
            },
            "__text_cntnt": "",
            "AudioChannelConfiguration": {
              "__attributes": {
                "schemeIdUri": "urn:mpeg:dash:23003:3:audio_channel_configuration:2011",
                "value": "2"
              },
              "__text_cntnt": ""
            },
            "BaseURL": {
              "__attributes": {
                "yt:contentLength": "25581413"
              },
              "__text_cntnt": ""
            },
            "SegmentBase": {
              "__attributes": {
                "indexRange": "592-2543",
                "indexRangeExact": "true"
              },
              "__text_cntnt": "",
              "Initialization": {
                "__attributes": {
                  "range": "0-591"
                },
                "__text_cntnt": ""
              }
            }
          }, {
            "__attributes": {
              "id": "141",
              "codecs": "mp4a.40.2",
              "audioSamplingRate": "44100",
              "startWithSAP": "1",
              "bandwidth": "257337"
            },
            "__text_cntnt": "",
            "AudioChannelConfiguration": {
              "__attributes": {
                "schemeIdUri": "urn:mpeg:dash:23003:3:audio_channel_configuration:2011",
                "value": "2"
              },
              "__text_cntnt": ""
            },
            "BaseURL": {
              "__attributes": {
                "yt:contentLength": "50801805"
              },
              "__text_cntnt": ""
            },
            "SegmentBase": {
              "__attributes": {
                "indexRange": "592-2543",
                "indexRangeExact": "true"
              },
              "__text_cntnt": "",
              "Initialization": {
                "__attributes": {
                  "range": "0-591"
                },
                "__text_cntnt": ""
              }
            }
          }]
        }, {
          "__attributes": {
            "mimeType": "video/mp4",
            "subsegmentAlignment": "true"
          },
          "__text_cntnt": "",
          "Role": {
            "__attributes": {
              "schemeIdUri": "urn:mpeg:DASH:role:2011",
              "value": "main"
            },
            "__text_cntnt": ""
          },
          "Representation": [{
            "__attributes": {
              "id": "133",
              "codecs": "avc1.4d400d",
              "width": "320",
              "height": "240",
              "startWithSAP": "1",
              "bandwidth": "256324",
              "frameRate": "30"
            },
            "__text_cntnt": "",
            "BaseURL": {
              "__attributes": {
                "yt:contentLength": "15130379"
              },
              "__text_cntnt": ""
            },
            "SegmentBase": {
              "__attributes": {
                "indexRange": "674-4533",
                "indexRangeExact": "true"
              },
              "__text_cntnt": "",
              "Initialization": {
                "__attributes": {
                  "range": "0-673"
                },
                "__text_cntnt": ""
              }
            }
          }, {
            "__attributes": {
              "id": "134",
              "codecs": "avc1.4d401e",
              "width": "480",
              "height": "360",
              "startWithSAP": "1",
              "bandwidth": "185779",
              "frameRate": "30"
            },
            "__text_cntnt": "",
            "BaseURL": {
              "__attributes": {
                "yt:contentLength": "5234434"
              },
              "__text_cntnt": ""
            },
            "SegmentBase": {
              "__attributes": {
                "indexRange": "711-4570",
                "indexRangeExact": "true"
              },
              "__text_cntnt": "",
              "Initialization": {
                "__attributes": {
                  "range": "0-710"
                },
                "__text_cntnt": ""
              }
            }
          }, {
            "__attributes": {
              "id": "135",
              "codecs": "avc1.4d401e",
              "width": "640",
              "height": "480",
              "startWithSAP": "1",
              "bandwidth": "398441",
              "frameRate": "30"
            },
            "__text_cntnt": "",
            "BaseURL": {
              "__attributes": {
                "yt:contentLength": "8159171"
              },
              "__text_cntnt": ""
            },
            "SegmentBase": {
              "__attributes": {
                "indexRange": "709-4568",
                "indexRangeExact": "true"
              },
              "__text_cntnt": "",
              "Initialization": {
                "__attributes": {
                  "range": "0-708"
                },
                "__text_cntnt": ""
              }
            }
          }, {
            "__attributes": {
              "id": "160",
              "codecs": "avc1.4d400c",
              "width": "192",
              "height": "144",
              "startWithSAP": "1",
              "bandwidth": "111502",
              "frameRate": "15"
            },
            "__text_cntnt": "",
            "BaseURL": {
              "__attributes": {
                "yt:contentLength": "9314748"
              },
              "__text_cntnt": ""
            },
            "SegmentBase": {
              "__attributes": {
                "indexRange": "673-4532",
                "indexRangeExact": "true"
              },
              "__text_cntnt": "",
              "Initialization": {
                "__attributes": {
                  "range": "0-672"
                },
                "__text_cntnt": ""
              }
            }
          }]
        }]
      }
    }
  }
}
```

since it will always start with single node (`#document`) the recursive is very efficient (iterating through `nextSibling` loop is not needed! fun!!).

expect `__@attributes`, `__@text_cntnt` on every node (even if empty), every other keys are prototype from `Object` (don't care) and the children's attributes and text-content...

no new syntax used,
no fancy iterators (not needed)
will work even on IE5.5 :)

have fun!

```javascript
/**
 * available under creative-license, fork and use for free, give credit.
 * created from scratch by Elad Karako, Israel. April, 2015.
 * @link http://icompile.eladkarako.com
 **/
