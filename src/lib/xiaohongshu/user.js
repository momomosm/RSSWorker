import { renderRss2 } from '../../utils/util';

let getUser = async (url) => {
	// (保持不变的代码)
};

let deal = async (ctx) => {
	// (保持不变的代码)
	
	const renderNote = (notes) =>
		notes.flatMap((n) =>
			n.map(({ noteCard }) => {
				const guid = noteCard.cover.infoList.pop().url.slice(-57); // 使用封面链接生成guid
				return {
					title: noteCard.displayTitle,
					link: `${url}/${noteCard.noteId}`,
					description: `<img src ="${noteCard.cover.infoList.pop().url}"><br>${noteCard.displayTitle}`,
					author: noteCard.user.nickname,
					upvotes: noteCard.interactInfo.likedCount,
					guid: guid, // 添加guid字段
				};
			})
		);

	const renderCollect = (collect) => {
		// (保持不变的代码)
	};

    ctx.header('Content-Type', 'application/xml');
	return ctx.text(
		renderRss2({
			title,
			description,
			image,
			link: url,
			items: category === 'notes' ? renderNote(notes) : renderCollect(collect),
		})
	);
};

let setup = (route) => {
	route.get('/xiaohongshu/user/:uid', deal);
};

export default { setup };
