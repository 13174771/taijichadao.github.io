var rule = {
	title: '天空影视[V2]', // csp_AppYsV2
	host: 'https://www.tkys.tv',
	homeUrl:'/xgapp.php/v2/index_video',
	// url: '/xgapp.php/v2/video?tid=fyclass&class=&area=&lang=&year=&limit=20&pg=fypage',
	url: '/xgapp.php/v2/video?tid=fyclassfyfilter&limit=20&pg=fypage',
	filter_url:'&class={{fl.class}}&area={{fl.area}}&lang={{fl.lang}}&year={{fl.year}}',
	filter: {
		"1":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"喜剧","v":"喜剧"},{"n":"爱情","v":"爱情"},{"n":"恐怖","v":"恐怖"},{"n":"动作","v":"动作"},{"n":"科幻","v":"科幻"},{"n":"剧情","v":"剧情"},{"n":"战争","v":"战争"},{"n":"警匪","v":"警匪"},{"n":"犯罪","v":"犯罪"},{"n":"动画","v":"动画"},{"n":"奇幻","v":"奇幻"},{"n":"武侠","v":"武侠"},{"n":"冒险","v":"冒险"},{"n":"枪战","v":"枪战"},{"n":"恐怖","v":"恐怖"},{"n":"悬疑","v":"悬疑"},{"n":"惊悚","v":"惊悚"},{"n":"经典","v":"经典"},{"n":"青春","v":"青春"},{"n":"文艺","v":"文艺"},{"n":"微电影","v":"微电影"},{"n":"古装","v":"古装"},{"n":"历史","v":"历史"},{"n":"运动","v":"运动"},{"n":"农村","v":"农村"},{"n":"儿童","v":"儿童"},{"n":"网络电影","v":"网络电影"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"大陆"},{"n":"香港","v":"香港"},{"n":"台湾","v":"台湾"},{"n":"美国","v":"美国"},{"n":"法国","v":"法国"},{"n":"英国","v":"英国"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"德国","v":"德国"},{"n":"泰国","v":"泰国"},{"n":"印度","v":"印度"},{"n":"意大利","v":"意大利"},{"n":"西班牙","v":"西班牙"},{"n":"加拿大","v":"加拿大"},{"n":"其他","v":"其他"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"法语","v":"法语"},{"n":"德语","v":"德语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016-2011","v":"2016-2011"},{"n":"2010-2000","v":"2010-2000"},{"n":"1999-1990","v":"1999-1990"},{"n":"1989-1980","v":"1989-1980"}]}],
		"2":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"古装","v":"古装"},{"n":"言情","v":"言情"},{"n":"武侠","v":"武侠"},{"n":"偶像","v":"偶像"},{"n":"家庭","v":"家庭"},{"n":"青春","v":"青春"},{"n":"都市","v":"都市"},{"n":"喜剧","v":"喜剧"},{"n":"战争","v":"战争"},{"n":"军旅","v":"军旅"},{"n":"谍战","v":"谍战"},{"n":"悬疑","v":"悬疑"},{"n":"罪案","v":"罪案"},{"n":"穿越","v":"穿越"},{"n":"宫廷","v":"宫廷"},{"n":"历史","v":"历史"},{"n":"神话","v":"神话"},{"n":"科幻","v":"科幻"},{"n":"年代","v":"年代"},{"n":"农村","v":"农村"},{"n":"商战","v":"商战"},{"n":"剧情","v":"剧情"},{"n":"奇幻","v":"奇幻"},{"n":"网剧","v":"网剧"},{"n":"真人动漫","v":"真人动漫"},{"n":"体育电竞","v":"体育电竞"},{"n":"竖短片","v":"竖短片"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"台湾","v":"台湾"},{"n":"英国","v":"英国"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016-2011","v":"2016-2011"},{"n":"2010-2000","v":"2010-2000"},{"n":"1999-1990","v":"1999-1990"},{"n":"1989-1980","v":"1989-1980"}]}],
		"3":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"表演","v":"表演"},{"n":"播报","v":"播报"},{"n":"访谈","v":"访谈"},{"n":"体验","v":"体验"},{"n":"养成","v":"养成"},{"n":"游戏","v":"游戏"},{"n":"亲子","v":"亲子"},{"n":"美食","v":"美食"},{"n":"情感","v":"情感"},{"n":"选秀","v":"选秀"},{"n":"益智","v":"益智"},{"n":"晚会","v":"晚会"},{"n":"音乐","v":"音乐"},{"n":"文化","v":"文化"},{"n":"喜剧","v":"喜剧"},{"n":"曲艺","v":"曲艺"},{"n":"职场","v":"职场"},{"n":"脱口秀","v":"脱口秀"},{"n":"真人秀","v":"真人秀"},{"n":"竞技","v":"竞技"},{"n":"潮流文化","v":"潮流文化"},{"n":"体育","v":"体育"},{"n":"资讯","v":"资讯"},{"n":"萌宠","v":"萌宠"},{"n":"生活服务","v":"生活服务"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"香港","v":"香港"},{"n":"韩国","v":"韩国"},{"n":"美国","v":"美国"},{"n":"日本","v":"日本"},{"n":"台湾","v":"台湾"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016-2011","v":"2016-2011"},{"n":"2010-2000","v":"2010-2000"},{"n":"1999-1990","v":"1999-1990"},{"n":"1989-1980","v":"1989-1980"}]}],
		"4":[{"key":"class","name":"剧情","value":[{"n":"全部","v":""},{"n":"热门","v":"热门"},{"n":"搞笑","v":"搞笑"},{"n":"番剧","v":"番剧"},{"n":"国创","v":"国创"},{"n":"大电影","v":"大电影"},{"n":"热血","v":"热血"},{"n":"催泪","v":"催泪"},{"n":"治愈","v":"治愈"},{"n":"励志","v":"励志"},{"n":"机战","v":"机战"},{"n":"战斗","v":"战斗"},{"n":"恋爱","v":"恋爱"},{"n":"科幻","v":"科幻"},{"n":"奇幻","v":"奇幻"},{"n":"魔幻","v":"魔幻"},{"n":"推理","v":"推理"},{"n":"校园","v":"校园"},{"n":"日常","v":"日常"},{"n":"经典","v":"经典"},{"n":"历史","v":"历史"},{"n":"美食","v":"美食"},{"n":"职场","v":"职场"},{"n":"偶像","v":"偶像"},{"n":"泡面","v":"泡面"},{"n":"冒险","v":"冒险"},{"n":"竞技","v":"竞技"},{"n":"合家欢","v":"合家欢"},{"n":"武侠","v":"武侠"},{"n":"玄幻","v":"玄幻"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"内地","v":"内地"},{"n":"日本","v":"日本"},{"n":"欧美","v":"欧美"},{"n":"其它","v":"其它"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"国语"},{"n":"英语","v":"英语"},{"n":"粤语","v":"粤语"},{"n":"闽南语","v":"闽南语"},{"n":"韩语","v":"韩语"},{"n":"日语","v":"日语"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016-2011","v":"2016-2011"},{"n":"2010-2000","v":"2010-2000"},{"n":"1999-1990","v":"1999-1990"},{"n":"1989-1980","v":"1989-1980"}]}]
		},
	detailUrl:'/xgapp.php/v2/video_detail?id=fyid',
	searchUrl: '/xgapp.php/v2/search?text=**&pg=fypage',
	searchable: 2,
	quickSearch: 0,
	filterable:1,//是否启用分类筛选,
	headers:{'User-Agent':'Dart/2.14 (dart:io)'},
	timeout:5000,
	class_name:'连续剧&电影&综艺&动漫', // 分类筛选 /xgapp.php/v2/nav
	class_url:'2&1&3&4',
	play_parse:true,
	// lazy:'js:input=/m3u8|mp4/.test(input)?input:/BYGA/.test(input)?"https://vip2.ckllk.com/API.php?appkey=404164cdd1472561b4c61f1845e0bff8&url="+input:"https://vip.ckllk.com/API.php?appkey=404164cdd1472561b4c61f1845e0bff8&url="+input',
	lazy:'js:input=/m3u8|mp4/.test(input)?input:/BYGA/.test(input)?"https://jx.playerjy.com/?url="+input:input',
	limit:6,
	推荐:'json:data[0].vlist;*;*;*;*',
	一级:'json:data;vod_name;vod_pic;vod_remarks;vod_id',
	二级:'js:try{let html=request(input);print(html);html=JSON.parse(html);let node=html.data.vod_info;VOD={vod_id:node["vod_id"],vod_name:node["vod_name"].replace(/amp;/g,""),vod_pic:node["vod_pic"],type_name:node["vod_class"],vod_year:node["vod_year"],vod_area:node["vod_area"],vod_remarks:node["vod_remarks"],vod_actor:node["vod_actor"],vod_director:node["vod_director"],vod_content:node["vod_content"].strip()};let episodes=node.vod_url_with_player;let playMap={};if(typeof play_url==="undefined"){var play_url=""}episodes.forEach(function(ep){let source=ep["code"];if(!playMap.hasOwnProperty(source)){playMap[source]=[]}playMap[source].append(ep["url"])});let playFrom=[];let playList=[];Object.keys(playMap).forEach(function(key){playFrom.append(key);playList.append(playMap[key])});let vod_play_from=playFrom.join("$$$");let vod_play_url=playList.join("$$$");VOD["vod_play_from"]=vod_play_from;VOD["vod_play_url"]=vod_play_url}catch(e){log("获取二级详情页发生错误:"+e.message)}',
	搜索:'*',
}
