// 카테고리는 고정 목록이 아니라 글의 frontmatter `category` 값에서 그때그때 뽑아낸다.
// '/'로 구분된 값(예: '프로젝트/SO101')은 트리의 하위 카테고리가 된다.

export interface CategoryNode {
	slug: string; // 전체 경로 (예: '프로젝트/SO101') - 필터링에 쓰는 키
	label: string; // 이 노드만의 이름 (예: 'SO101')
	children: CategoryNode[];
}

export function buildCategoryTree(categoryValues: string[]): CategoryNode[] {
	const roots: CategoryNode[] = [];
	const bySlug = new Map<string, CategoryNode>();

	for (const value of [...new Set(categoryValues)].sort((a, b) => a.localeCompare(b, 'ko'))) {
		const parts = value
			.split('/')
			.map((p) => p.trim())
			.filter(Boolean);
		let path = '';
		let siblings = roots;
		for (const part of parts) {
			path = path ? `${path}/${part}` : part;
			let node = bySlug.get(path);
			if (!node) {
				node = { slug: path, label: part, children: [] };
				bySlug.set(path, node);
				siblings.push(node);
			}
			siblings = node.children;
		}
	}

	return roots;
}

export function categoryLabelPath(value: string): string {
	return value
		.split('/')
		.map((p) => p.trim())
		.filter(Boolean)
		.join(' › ');
}
