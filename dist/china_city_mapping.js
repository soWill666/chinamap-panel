'use strict';

System.register([], function (_export, _context) {
	"use strict";

	function _defineProperty(obj, key, value) {
		if (key in obj) {
			Object.defineProperty(obj, key, {
				value: value,
				enumerable: true,
				configurable: true,
				writable: true
			});
		} else {
			obj[key] = value;
		}

		return obj;
	}

	function py2hz(location_name) {
		var _MAP;

		var MAP = (_MAP = {
			'qinhuangdao': '\u79E6\u7687\u5C9B',
			'beihai': '\u5317\u6D77',
			'dongying': '\u4E1C\u8425',
			'xianyang': '\u54B8\u9633',
			'shaoguan': '\u97F6\u5173',
			'laixi': '\u83B1\u897F',
			'jimo': '\u5373\u58A8',
			'fushun': '\u629A\u987A',
			'zhengzhou': '\u90D1\u5DDE',
			'yixing': '\u5B9C\u5174',
			'jurong': '\u53E5\u5BB9',
			'kaifeng': '\u5F00\u5C01',
			'linyi': '\u4E34\u6C82',
			'shanghai': '\u4E0A\u6D77',
			'laizhou': '\u83B1\u5DDE',
			'wuhu': '\u829C\u6E56',
			'jinan': '\u6D4E\u5357',
			'wafangdian': '\u74E6\u623F\u5E97',
			'deyang': '\u5FB7\u9633',
			'maoming': '\u8302\u540D',
			'zhanjiang': '\u6E5B\u6C5F',
			'jiujiang': '\u4E5D\u6C5F',
			'huaian': '\u6DEE\u5B89',
			'zhangqiu': '\u7AE0\u4E18',
			'yueyang': '\u5CB3\u9633',
			'kuerlei': '\u5E93\u5C14\u52D2',
			'xiamen': '\u53A6\u95E8',
			'sanya': '\u4E09\u4E9A',
			'weihai': '\u5A01\u6D77',
			'zhangjiajie': '\u5F20\u5BB6\u754C',
			'nanning': '\u5357\u5B81',
			'jiaozuo': '\u7126\u4F5C',
			'yangzhou': '\u626C\u5DDE',
			'foshan': '\u4F5B\u5C71',
			'pingdingshan': '\u5E73\u9876\u5C71',
			'guiyang': '\u8D35\u9633',
			'hangzhou': '\u676D\u5DDE',
			'fuzhou': '\u798F\u5DDE',
			'shaoxing': '\u7ECD\u5174',
			'yanan': '\u5EF6\u5B89',
			'heyuan': '\u6CB3\u6E90',
			'linfen': '\u4E34\u6C7E',
			'wuxi': '\u65E0\u9521',
			'jingzhou': '\u8346\u5DDE',
			'zaozhuang': '\u67A3\u5E84',
			'qujing': '\u66F2\u9756',
			'baoding': '\u4FDD\u5B9A',
			'huhehaote': '\u547C\u548C\u6D69\u7279',
			'qiqihaer': '\u9F50\u9F50\u54C8\u5C14',
			'jinhua': '\u91D1\u534E',
			'zhangjiakou': '\u5F20\u5BB6\u53E3',
			'chaozhou': '\u6F6E\u5DDE',
			'kunshan': '\u6606\u5C71',
			'jilin': '\u5409\u6797',
			'shouguang': '\u5BFF\u5149',
			'mudanjiang': '\u7261\u4E39\u6C5F',
			'jining': '\u6D4E\u5B81',
			'wulumuqi': '\u4E4C\u9C81\u6728\u9F50',
			'heze': '\u83CF\u6CFD',
			'pingdu': '\u5E73\u5EA6',
			'handan': '\u90AF\u90F8',
			'changde': '\u5E38\u5FB7',
			'xingtai': '\u90A2\u53F0',
			'dongguan': '\u4E1C\u839E',
			'jiangmen': '\u6C5F\u95E8',
			'nantong': '\u5357\u901A',
			'jiaozhou': '\u80F6\u5DDE',
			'guangzhou': '\u5E7F\u5DDE',
			'xining': '\u897F\u5B81',
			'hefei': '\u5408\u80A5',
			'wuhan': '\u6B66\u6C49',
			'lishui': '\u4E3D\u6C34',
			'xuzhou': '\u5F90\u5DDE',
			'jiayuguan': '\u5609\u5CEA\u5173',
			'tongchuan': '\u94DC\u5DDD',
			'qingdao': '\u9752\u5C9B',
			'chongqing': '\u91CD\u5E86',
			'suqian': '\u5BBF\u8FC1',
			'rongcheng': '\u8363\u6210',
			'cangzhou': '\u6CA7\u5DDE',
			'linan': '\u4E34\u5B89',
			'eerduosi': '\u9102\u5C14\u591A\u65AF',
			'maanshan': '\u9A6C\u978D\u5C71',
			'zigong': '\u81EA\u8D21',
			'lasa': '\u62C9\u8428',
			'changzhou': '\u5E38\u5DDE',
			'hengshui': '\u8861\u6C34',
			'luoyang': '\u6D1B\u9633',
			'rizhao': '\u65E5\u7167',
			'weifang': '\u6F4D\u574A',
			'chengdu': '\u6210\u90FD',
			'binzhou': '\u6EE8\u5DDE',
			'xiangtan': '\u6E58\u6F6D',
			'meizhou': '\u6885\u5DDE',
			'shenyang': '\u6C88\u9633',
			'zibo': '\u6DC4\u535A',
			'qingyuan': '\u6E05\u8FDC',
			'zhuzhou': '\u682A\u6D32',
			'jiaonan': '\u80F6\u5357',
			'langfang': '\u5ECA\u574A',
			'taian': '\u6CF0\u5B89',
			'liyang': '\u6EA7\u9633',
			'zunyi': '\u9075\u4E49',
			'zhenjiang': '\u9547\u6C5F',
			'yibin': '\u5B9C\u5BBE',
			'datong': '\u5927\u540C',
			'dandong': '\u4E39\u4E1C',
			'kelamayi': '\u514B\u62C9\u739B\u4F9D',
			'huizhou': '\u60E0\u5DDE',
			'guilin': '\u6842\u6797',
			'taicang': '\u592A\u4ED3',
			'lianyungang': '\u8FDE\u4E91\u6E2F',
			'yunfu': '\u4E91\u6D6E',
			'zhangjiagang': '\u5F20\u5BB6\u6E2F',
			'shizuishan': '\u77F3\u5634\u5C71',
			'panjin': '\u76D8\u9526',
			'penglai': '\u84EC\u83B1',
			'zhongshan': '\u4E2D\u5C71',
			'lanzhou': '\u5170\u5DDE',
			'jinchang': '\u91D1\u660C',
			'shantou': '\u6C55\u5934',
			'shanwei': '\u6C55\u5C3E',
			'yangquan': '\u9633\u6CC9',
			'yuxi': '\u7389\u6EAA',
			'fuyang': '\u5BCC\u9633',
			'zhuhai': '\u73E0\u6D77',
			'wujiang': '\u5434\u6C5F',
			'kunming': '\u6606\u660E',
			'jiangyin': '\u6C5F\u9634',
			'taizhou': '\u6CF0\u5DDE',
			'dezhou': '\u5FB7\u5DDE',
			'zhaoqing': '\u8087\u5E86',
			'laiwu': '\u83B1\u829C',
			'quzhou': '\u8862\u5DDE',
			'haimen': '\u6D77\u95E8',
			'wenzhou': '\u6E29\u5DDE',
			'zhoushan': '\u821F\u5C71',
			'changsha': '\u957F\u6C99',
			'luzhou': '\u6CF8\u5DDE',
			'weinan': '\u6E2D\u5357',
			'liuzhou': '\u67F3\u5DDE',
			'ningbo': '\u5B81\u6CE2',
			'yichang': '\u5B9C\u660C',
			'suzhou': '\u82CF\u5DDE',
			'changshu': '\u5E38\u719F',
			'anyang': '\u5B89\u9633',
			'yinchuan': '\u94F6\u5DDD',
			'beijing': '\u5317\u4EAC',
			'dalian': '\u5927\u8FDE',
			'benxi': '\u672C\u6EAA',
			'xian': '\u897F\u5B89',
			'sanmenxia': '\u4E09\u95E8\u5CE1',
			'jieyang': '\u63ED\u9633',
			'nanjing': '\u5357\u4EAC',
			'yingkou': '\u8425\u53E3',
			'nanchang': '\u5357\u660C',
			'yiwu': '\u4E49\u4E4C',
			'panzhihua': '\u6500\u679D\u82B1',
			'mianyang': '\u7EF5\u9633',
			'zhuji': '\u8BF8\u66A8',
			'chengde': '\u627F\u5FB7',
			'shenzhen': '\u6DF1\u5733',
			'zhaoyuan': '\u62DB\u8FDC',
			'huzhou': '\u6E56\u5DDE',
			'yantai': '\u70DF\u53F0',
			'wendeng': '\u6587\u767B',
			'yancheng': '\u76D0\u57CE',
			'haerbin': '\u54C8\u5C14\u6EE8',
			'quanzhou': '\u6CC9\u5DDE',
			'changchun': '\u957F\u6625',
			'baotou': '\u5305\u5934',
			'jintan': '\u91D1\u575B',
			'huludao': '\u846B\u82A6\u5C9B',
			'yangjiang': '\u9633\u6C5F',
			'shijiazhuang': '\u77F3\u5BB6\u5E84',
			'chifeng': '\u8D64\u5CF0',
			'jinzhou': '\u9526\u5DDE',
			'baoji': '\u5B9D\u9E21',
			'liaocheng': '\u804A\u57CE',
			'rushan': '\u4E73\u5C71',
			'haikou': '\u6D77\u53E3',
			'daqing': '\u5927\u5E86',
			'nanchong': '\u5357\u5145',
			'tianjin': '\u5929\u6D25',
			'jiaxing': '\u5609\u5174',
			'tangshan': '\u5510\u5C71',
			'zhangzhi': '\u957F\u6CBB',
			'taiyuan': '\u592A\u539F',
			'anshan': '\u978D\u5C71',
			'anhui': '\u5B89\u5FBD',
			'aomen': '\u6FB3\u95E8',
			'fujian': '\u798F\u5EFA',
			'gansu': '\u7518\u8083',
			'guangdong': '\u5E7F\u4E1C',
			'guangxi': '\u5E7F\u897F',
			'guizhou': '\u8D35\u5DDE',
			'hainan': '\u6D77\u5357',
			'hebei': '\u6CB3\u5317',
			'heilongjiang': '\u9ED1\u9F99\u6C5F',
			'henan': '\u6CB3\u5357',
			'hubei': '\u6E56\u5317',
			'hunan': '\u6E56\u5357',
			'jiangsu': '\u6C5F\u82CF',
			'jiangxi': '\u6C5F\u897F'
		}, _defineProperty(_MAP, 'jilin', '\u5409\u6797'), _defineProperty(_MAP, 'liaoning', '\u8FBD\u5B81'), _defineProperty(_MAP, 'neimenggu', '\u5185\u8499\u53E4'), _defineProperty(_MAP, 'ningxia', '\u5B81\u590F'), _defineProperty(_MAP, 'qinghai', '\u9752\u6D77'), _defineProperty(_MAP, 'shandong', '\u5C71\u4E1C'), _defineProperty(_MAP, 'shanxi', '\u9655\u897F'), _defineProperty(_MAP, 'shanxi', '\u5C71\u897F'), _defineProperty(_MAP, 'sichuan', '\u56DB\u5DDD'), _defineProperty(_MAP, 'taiwan', '\u53F0\u6E7E'), _defineProperty(_MAP, 'xianggang', '\u9999\u6E2F'), _defineProperty(_MAP, 'xinjiang', '\u65B0\u7586'), _defineProperty(_MAP, 'xizang', '\u897F\u85CF'), _defineProperty(_MAP, 'yunnan', '\u4E91\u5357'), _defineProperty(_MAP, 'zhejiang', '\u6D59\u6C5F'), _MAP);

		if (MAP.hasOwnProperty(location_name)) {
			return MAP[location_name];
		} else {
			return location_name;
		}
	}

	_export('default', py2hz);

	return {
		setters: [],
		execute: function () {}
	};
});
//# sourceMappingURL=china_city_mapping.js.map