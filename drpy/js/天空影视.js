// 网址发布页 http://tkznp9.com/
muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text'
muban.mxpro.二级.tabs = '#y-playList .module-tab-item'
var rule = {
	title:'天空影视',
	模板:'mxpro',
	host:'https://tkznp.com',
	// host:'https://www.tkys6.com',
	// url: '/vodshow/id/fyclass/page/fypage.html',
	url:'/vodshow/id/fyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}{{fl.area}}{{fl.by}}{{fl.class}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter: {
		"1":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"1"},{"n":"动作","v":"5"},{"n":"喜剧","v":"6"},{"n":"爱情","v":"7"},{"n":"科幻","v":"8"},{"n":"恐怖","v":"9"},{"n":"剧情","v":"11"},{"n":"战争","v":"12"},{"n":"惊悚","v":"17"},{"n":"犯罪","v":"18"},{"n":"冒险","v":"19"},{"n":"悬疑","v":"20"},{"n":"动画","v":"21"},{"n":"武侠","v":"22"},{"n":"奇幻","v":"23"},{"n":"记录","v":"24"},{"n":"喜剧片","v":"31"},{"n":"灾难","v":"35"},{"n":"伦理","v":"36"},{"n":"歌舞片","v":"41"},{"n":"传记片","v":"42"},{"n":"历史片","v":"43"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"/class/喜剧"},{"n":"爱情","v":"/class/爱情"},{"n":"恐怖","v":"/class/恐怖"},{"n":"动作","v":"/class/动作"},{"n":"科幻","v":"/class/科幻"},{"n":"剧情","v":"/class/剧情"},{"n":"战争","v":"/class/战争"},{"n":"警匪","v":"/class/警匪"},{"n":"犯罪","v":"/class/犯罪"},{"n":"动画","v":"/class/动画"},{"n":"奇幻","v":"/class/奇幻"},{"n":"武侠","v":"/class/武侠"},{"n":"冒险","v":"/class/冒险"},{"n":"枪战","v":"/class/枪战"},{"n":"恐怖","v":"/class/恐怖"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"经典","v":"/class/经典"},{"n":"青春","v":"/class/青春"},{"n":"文艺","v":"/class/文艺"},{"n":"微电影","v":"/class/微电影"},{"n":"古装","v":"/class/古装"},{"n":"历史","v":"/class/历史"},{"n":"运动","v":"/class/运动"},{"n":"农村","v":"/class/农村"},{"n":"儿童","v":"/class/儿童"},{"n":"网络电影","v":"/class/网络电影"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"法国","v":"/area/法国"},{"n":"英国","v":"/area/英国"},{"n":"日本","v":"/area/日本"},{"n":"韩国","v":"/area/韩国"},{"n":"德国","v":"/area/德国"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"意大利","v":"/area/意大利"},{"n":"西班牙","v":"/area/西班牙"},{"n":"加拿大","v":"/area/加拿大"},{"n":"其他","v":"/area/其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016-2011","v":"/year/2016-2011"},{"n":"2010-2000","v":"/year/2010-2000"},{"n":"1999-1990","v":"/year/1999-1990"},{"n":"1989-1980","v":"/year/1989-1980"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"2":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"13"},{"n":"港台剧","v":"14"},{"n":"日韩剧","v":"32"},{"n":"欧美剧","v":"33"},{"n":"泰国剧","v":"34"},{"n":"海外剧","v":"45"},{"n":"其他剧","v":"46"},{"n":"其他剧","v":"47"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"/class/古装"},{"n":"言情","v":"/class/言情"},{"n":"武侠","v":"/class/武侠"},{"n":"偶像","v":"/class/偶像"},{"n":"家庭","v":"/class/家庭"},{"n":"青春","v":"/class/青春"},{"n":"都市","v":"/class/都市"},{"n":"喜剧","v":"/class/喜剧"},{"n":"战争","v":"/class/战争"},{"n":"军旅","v":"/class/军旅"},{"n":"谍战","v":"/class/谍战"},{"n":"悬疑","v":"/class/悬疑"},{"n":"罪案","v":"/class/罪案"},{"n":"穿越","v":"/class/穿越"},{"n":"宫廷","v":"/class/宫廷"},{"n":"历史","v":"/class/历史"},{"n":"神话","v":"/class/神话"},{"n":"科幻","v":"/class/科幻"},{"n":"年代","v":"/class/年代"},{"n":"农村","v":"/class/农村"},{"n":"商战","v":"/class/商战"},{"n":"剧情","v":"/class/剧情"},{"n":"奇幻","v":"/class/奇幻"},{"n":"网剧","v":"/class/网剧"},{"n":"真人动漫","v":"/class/真人动漫"},{"n":"体育电竞","v":"/class/体育电竞"},{"n":"竖短片","v":"/class/竖短片"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"香港","v":"/area/香港"},{"n":"韩国","v":"/area/韩国"},{"n":"美国","v":"/area/美国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"台湾","v":"/area/台湾"},{"n":"英国","v":"/area/英国"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016-2011","v":"/year/2016-2011"},{"n":"2010-2000","v":"/year/2010-2000"},{"n":"1999-1990","v":"/year/1999-1990"},{"n":"1989-1980","v":"/year/1989-1980"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"3":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"3"},{"n":"国内综艺","v":"38"},{"n":"海外综艺","v":"39"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"表演","v":"/class/表演"},{"n":"播报","v":"/class/播报"},{"n":"访谈","v":"/class/访谈"},{"n":"体验","v":"/class/体验"},{"n":"养成","v":"/class/养成"},{"n":"游戏","v":"/class/游戏"},{"n":"亲子","v":"/class/亲子"},{"n":"美食","v":"/class/美食"},{"n":"情感","v":"/class/情感"},{"n":"选秀","v":"/class/选秀"},{"n":"益智","v":"/class/益智"},{"n":"晚会","v":"/class/晚会"},{"n":"音乐","v":"/class/音乐"},{"n":"文化","v":"/class/文化"},{"n":"喜剧","v":"/class/喜剧"},{"n":"曲艺","v":"/class/曲艺"},{"n":"职场","v":"/class/职场"},{"n":"脱口秀","v":"/class/脱口秀"},{"n":"真人秀","v":"/class/真人秀"},{"n":"竞技","v":"/class/竞技"},{"n":"潮流文化","v":"/class/潮流文化"},{"n":"体育","v":"/class/体育"},{"n":"资讯","v":"/class/资讯"},{"n":"萌宠","v":"/class/萌宠"},{"n":"生活服务","v":"/class/生活服务"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"香港","v":"/area/香港"},{"n":"韩国","v":"/area/韩国"},{"n":"美国","v":"/area/美国"},{"n":"日本","v":"/area/日本"},{"n":"台湾","v":"/area/台湾"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016-2011","v":"/year/2016-2011"},{"n":"2010-2000","v":"/year/2010-2000"},{"n":"1999-1990","v":"/year/1999-1990"},{"n":"1989-1980","v":"/year/1989-1980"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"4":[{"key":"cateId","name":"类型","value":[{"n":"全部","v":"4"},{"n":"国产动漫","v":"26"},{"n":"日本动漫","v":"27"},{"n":"欧美动漫","v":"37"}]},{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"热门","v":"/class/热门"},{"n":"搞笑","v":"/class/搞笑"},{"n":"番剧","v":"/class/番剧"},{"n":"国创","v":"/class/国创"},{"n":"大电影","v":"/class/大电影"},{"n":"热血","v":"/class/热血"},{"n":"催泪","v":"/class/催泪"},{"n":"治愈","v":"/class/治愈"},{"n":"励志","v":"/class/励志"},{"n":"机战","v":"/class/机战"},{"n":"战斗","v":"/class/战斗"},{"n":"恋爱","v":"/class/恋爱"},{"n":"科幻","v":"/class/科幻"},{"n":"奇幻","v":"/class/奇幻"},{"n":"魔幻","v":"/class/魔幻"},{"n":"推理","v":"/class/推理"},{"n":"校园","v":"/class/校园"},{"n":"日常","v":"/class/日常"},{"n":"经典","v":"/class/经典"},{"n":"历史","v":"/class/历史"},{"n":"美食","v":"/class/美食"},{"n":"职场","v":"/class/职场"},{"n":"偶像","v":"/class/偶像"},{"n":"泡面","v":"/class/泡面"},{"n":"冒险","v":"/class/冒险"},{"n":"竞技","v":"/class/竞技"},{"n":"合家欢","v":"/class/合家欢"},{"n":"武侠","v":"/class/武侠"},{"n":"玄幻","v":"/class/玄幻"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"/area/内地"},{"n":"日本","v":"/area/日本"},{"n":"欧美","v":"/area/欧美"},{"n":"其它","v":"/area/其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"其它","v":"/lang/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016-2011","v":"/year/2016-2011"},{"n":"2010-2000","v":"/year/2010-2000"},{"n":"1999-1990","v":"/year/1999-1990"},{"n":"1989-1980","v":"/year/1989-1980"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"16":[{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016-2011","v":"/year/2016-2011"},{"n":"2010-2000","v":"/year/2010-2000"},{"n":"1999-1990","v":"/year/1999-1990"},{"n":"1989-1980","v":"/year/1989-1980"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"15":[{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"29":[{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]
		},
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
		16:{cateId:'16'},
		15:{cateId:'15'},
		29:{cateId:'29'}
	},
    searchable:2,//是否启用全局搜索,
	quickSearch:0,//是否启用快速搜索,
	class_parse:'.navbar-items li:gt(1):lt(9);a&&Text;a&&href;/(\\d+).html',
	searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
	// 搜索:'#searchList&&li;h4&&Text;a&&data-original;.detail&&p:eq(2)&&Text;a&&href;.detail&&p:eq(3)&&Text',
	搜索:'json:list;name;pic;;id',
}
