var chartData = {
	"id": 1,
	"name": "固件名称",
	"children": [{
		"name": "组件名称1",
		"version": ["v1.0", "v2.0"],
		"id": 2,
		"children": [{
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}]
	}, {
		"name": "组件名称2",
		"version": ["v1.0", "v2.0"],
		"id": 7,
		"children": [{
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}]
	}, {
		"name": "组件名称3",
		"version": ["v1.0", "v2.0"],
		"id": 8,
		"children": [{
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}]
	}, {
		"name": "组件名称4",
		"version": ["v1.0", "v2.0"],
		"id": 9,
		"children": [{
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}]
	}, {
		"name": "组件名称2",
		"version": ["v1.0", "v2.0"],
		"id": 7,
		"children": [{
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}, {
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}]
	}, {
		"name": "组件名称3",
		"version": ["v1.0", "v2.0"],
		"id": 8,
		"children": [{
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}, {
			"id": 5,
			"name": "漏洞名称3",
			"type": "公有漏洞"
		}]
	}, {
		"name": "组件名称4",
		"version": ["v1.0", "v2.0"],
		"id": 9,
		"children": [{
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}, {
			"id": 4,
			"name": "漏洞名称2",
			"type": "公有漏洞"
		}]
	}, {
		"name": "组件名称4",
		"version": ["v1.0", "v2.0"],
		"id": 9,
		"children": [{
			"id": 3,
			"name": "漏洞名称1",
			"type": "公有漏洞"
		}]
	}]
}


var html = '';
if (chartData.children.length) {

} else {
	$(".orgchart-container").append('<div class="orgchart-list"></div>');
	$(".orgchart-list").append('<div class="orgchart-item orgchart-item-bg1">' + chartData.name + '</div>')
}


function ocInit(data, userOption) {
	var option = {};
	if (userOption) {
		option = {
			itemWidth: userOption.itemWidth ? userOption.itemWidth : "100px",
			itemHeight: userOption.itemHeight ? userOption.itemHeight : "40px",
			itemLineHeight: userOption.itemLineHeight ? userOption.itemLineHeight : "40px"
		}
	} else {
		option = {
			itemWidth: 100,
			itemHeight: 40,
			itemLineHeight: 40
		}
	}
	// 组织图容器宽高
	var $container = $(".orgchart-container");
	var cWidth = $container.width(),
		cHeight = $container.height(),
		lineContainerHeight = '';
	//父节点容器 
	$(".parent-container").css({
		"position": "absolute",
		"top": (cHeight - option.itemHeight) / 2,
		"left": "23px"
	});
	// 监听滚动事件，父节点容器固定
	$(".orgchart-container").scroll(function() {
		$(".parent-container").css({
			"top": (cHeight - option.itemHeight) / 2 + $(".orgchart-container").scrollTop(),
		});
	});

	// 处理数据并渲染
	function chartDataRender(data) {
		// 渲染父节点
		$(".parent-container .parent-node-content").text(data.name);
		var childrenData = data.children;
		if (childrenData && childrenData.length) {
			lineContainerRender(childrenData.length);
			$container.append('<div class="children-container"></div>');
			var $childrenContainer = $(".children-container");
			var childrenContainerLeft = 23 + $(".parent-container").width() + 1;
			$childrenContainer.css({
				"position": "absolute",
				"top": childrenData.length * (option.itemHeight + 30) < cHeight ? (cHeight - lineContainerHeight - 38) / 2 : '25px',
				"left": childrenContainerLeft
			})
			// 儿子节点
			childrenData.forEach(function(item, index) {
				$childrenContainer.append('<div class="children-node-container"></div>');
				var $childrenNodeContainer = $(".children-node-container").eq(index);
				$childrenNodeContainer.css({
					"position": "absolute",
					"top": index * 70
				});
				var $childrenNodeHtml = '<div><span class="item-line-horizontal oc-left"></span>' +
					'<div class="node-item node-item-bg1 children-item oc-left" data-version=' +
					JSON.stringify(item.version) + '>' +
					item.name +
					'</div></div>';
				$childrenNodeContainer.append($childrenNodeHtml);
				// 孙子节点
				if (item.children && item.children.length) {
					$childrenNodeContainer.append('<div class="grandchildren-node-container"></div>');
					var $grandChildrenNodeContainer = $childrenNodeContainer.find(".grandchildren-node-container");
					for (var i = 0; i < item.children.length; i++) {
						var $grandchildrenHtml = ''
						if (i == 0) {
							$grandchildrenHtml = '<div class="grandchildren-item">' +
								'<span class="item-line-horizontal end grandchildren-line oc-left"></span>' +
								'<div class="node-item node-item-bg1 oc-left" data-type="' +
								item.children[0].type + '">' +
								item.children[0].name + '</div>' +
								'</div>';
							$grandChildrenNodeContainer.append($grandchildrenHtml);
							$grandChildrenNodeContainer.find(".grandchildren-item").css({
								"position": "absolute",
								"left": "123px"
							});
							$grandChildrenNodeContainer.find(".grandchildren-item").find(".node-item").css({
								"position": "absolute",
								"left": "31px"
							});
						} else {
							$grandchildrenHtml = '<div class="grandchildren-item">' +
								'<div class="node-item node-item-bg1 oc-left" data-type="' +
								item.children[i].type + '">' +
								item.children[i].name + '</div>' +
								'</div>';
							$grandChildrenNodeContainer.append($grandchildrenHtml);
							$grandChildrenNodeContainer.find(".grandchildren-item").eq(i).find(".node-item").css({
								"position": "absolute",
								"left": (154 + 102 * i) + 'px'
							});
						}
					}
					$grandChildrenNodeContainer.append('<div class="grandchildren-plus">+</div>');
					$(".grandchildren-plus").css({
						"left":(160 + 102 * 7) + 'px'
					})
				}
			});
		}
		// 操作
		// 点+号
		$(".grandchildren-plus").click(function(){
			alert(1)
		})
		
		
		// 版本 tips
		$(".children-item").hover(function() {
			// 移入
			console.log('移入'+$(this).attr("data-version"))
		}, function() {
			// 移出
			console.log('移出')
		})
		// 漏洞类型 tips
		$(".grandchildren-item").find(".node-item").hover(function() {
			// 移入
			console.log('移入'+$(this).attr("data-type"))
		}, function() {
			// 移出
			console.log('移出')
		})
	}
	chartDataRender(data);

	// 父节点容器与子节点之间的线条
	function lineContainerRender(childrenNodeCount) {
		var $lineContainerHtml = '<div class="line-vertical-container">' +
			'<span class="item-line-vertical"></span>' +
			'</div>';
		$container.append($lineContainerHtml)
		var lineContainerLeft = 23 + $(".parent-container").width();
		lineContainerHeight = (childrenNodeCount - 1) * (option.itemHeight + 30);
		$(".line-vertical-container").css({
			"position": "absolute",
			"left": lineContainerLeft,
			"top": childrenNodeCount * (option.itemHeight + 30) < cHeight ? (cHeight - lineContainerHeight) / 2 : '45px',
			"height": lineContainerHeight
		});
		$(".line-vertical-container .item-line-vertical").height(lineContainerHeight)
	}


}

ocInit(chartData);
