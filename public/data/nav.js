const navData = [
	{
		gnb: true,
		category: 'dep',
		label: '예금',
		value: [
			{
				label: '전체예금상품',
			},
			{
				label: '입출금',
				value: [{ label: '참~알찬 IBK저축은행 보통예금' }, { label: 'IBKSB e-파킹통장(판매일시중단)' }, { label: 'IBK 모임통장 (판매일시중단)' }, { label: 'IBK 미성년자 통장' }, { label: '기업자유예금플러스' }],
			},
			{
				label: '목돈 굴리기',
				value: [{ label: '참~특이한 IBK저축은행 정기예금' }, { label: '퇴직연금 정기예금' }, { label: 'ISA 정기예금' }, { label: 'IBKSB 회전정기예금(변동금리)' }],
			},
			{
				label: '목돈 마련',
				value: [{ label: '참~똑똑한 IBK저축은행 신용부금' }, { label: '참~똑똑한 IBK저축은행 정기적금' }, { label: '참~똑똑한 IBK저축은행 자유적립예금' }, { label: 'ISA 정기적금' }, { label: '사랑愛 얼라 정기적금' }],
			},
			{
				label: '절세 혜택 상품',
			},
		],
	},
	{
		gnb: true,
		category: 'loa',
		label: '대출',
		value: [
			{ label: '전체대출상품' },
			{
				label: '대출신청서비스',
				value: [{ label: '통합간편한도조회' }, { label: '본인인증 및 신용조회동의' }, { label: '적합성진단' }],
			},
			{
				label: '신용대출',
				value: [{ label: 'i-빅론U' }, { label: 'i-빅론S' }, { label: '지역사랑 더드림론' }],
			},
			{
				label: '보증부대출',
				value: [{ label: '사잇돌2' }, { label: '햇살론 일반보증' }, { label: '햇살론 특례보증' }, { label: 'BIG3 등대론' }],
			},
			{
				label: '부동산 및 담보대출',
				value: [{ label: '경락잔금대출' }, { label: '부동산 담보대출' }, { label: '할인어음' }, { label: '예적금담보대출' }],
			},
			{
				label: '소상공인 대출',
				value: [{ label: '사업자 햇살론' }, { label: '사업자 아파트 담보대출' }, { label: '소상공인 신용대출' }, { label: '소상공인 부동산담보대출' }],
			},
			{
				label: '의료사업자 대출',
				value: [{ label: '의료사업자 담보대출' }, { label: 'I-medi론(메디칼론)' }, { label: 'IBK실버사업자대출' }],
			},
		],
	},
	{
		gnb: false,
		category: 'ann',
		label: '상품공시실',
		value: [
			{
				label: '상품공시 이용안내',
			},
			{
				label: '상품소식',
			},
			{
				label: '상품목록',
				value: [{ label: '전체예금상품' }, { label: '전체대출상품' }, { label: '판매중단상품' }],
			},
			{
				label: '부대비용',
				value: [{ label: '예금관련수수료' }, { label: '대출관련수수료' }, { label: '기타수수료' }, { label: '연체금리' }, { label: '대출모집수수료율' }],
			},
		],
	},
	{
		gnb: false,
		category: 'pro',
		label: '금융소비자보호',
		value: [
			{
				label: '금융소비자보호 헌장',
			},
			{
				label: '전자민원',
				value: [{ label: '전자민원접수안내' }, { label: '전자민원접수' }, { label: '취약차주 채무조정신청' }, { label: '민원처리결과공시' }, { label: '민원사무편람' }],
			},
			{
				label: '금융뉴스',
			},
			{
				label: '휴먼예금조회',
			},
			{
				label: '비금융 거래정보 등록제도',
			},
			{
				label: '금융상품 판매 준칙',
			},
			{
				label: '상품개발 준칙',
			},
			{
				label: '자료열람요구권',
			},
			{
				label: '위법계약해지요구권',
			},
			{
				label: '두낫콜(연락중지청구)',
			},
			{
				label: '채무조정요청권',
			},
		],
	},
	{
		gnb: true,
		category: 'cus',
		label: '고객지원',
		value: [
			{
				label: '공지사항',
			},
			{
				label: '자주묻는질문',
			},
			{
				label: '문의게시판',
			},
			{
				label: '서식자료',
			},
			{
				label: '제증명서발급신청',
			},
			{
				label: '공동인증서관리',
			},
			{
				label: 'i-Bank앱 다운로드',
			},
			{
				label: '예금가이드',
				value: [{ label: '예금자보호법' }, { label: '보호금융상품등록부' }, { label: '예금거래유의사항' }, { label: '개인정보처리방침' }, { label: '고객권리안내문' }, { label: '신용정보 활용체제의 공시' }, { label: '영상정보처리기기 운영 관리지침' }, { label: '타행자동이체 출금 우선순위 안내' }, { label: '전자금융서비스설명서' }, { label: '고객확인제도 안내' }],
			},
			{
				label: '대출가이드',
				value: [{ label: '대출상환방법안내' }, { label: '금리인하요구권' }, { label: '대출청약철회권' }, { label: '채권추심업무 처리절차' }, { label: '불법추심 대응요령' }, { label: '소멸시효 완성채권 유의사항' }, { label: '기한이익상실(예정) 통지 조회' }, { label: '복합지원 서비스' }, { label: '채무자보호법 대상자 확인' }],
			},
			{
				label: '경·공매 부동산현황 안내',
			},
		],
	},
	{
		gnb: false,
		category: 'int',
		label: '은행소개',
		value: [
			{
				label: 'IBK저축은행 소개',
				value: [{ label: 'CEO인사말' }, { label: '조직도' }, { label: '연혁' }, { label: 'IBK SB 경영체계' }, { label: '영업점 안내' }, { label: 'IBK금융그룹 안내' }],
			},
			{
				label: '경영공시정보',
				value: [{ label: '요약공시' }, { label: '정기공시' }, { label: '수시공시' }, { label: '기타공시' }],
			},
			{
				label: '윤리경영',
				value: [{ label: 'IBK윤리헌장' }, { label: '윤리강령' }, { label: '윤리강령실천수칙' }],
			},
			{
				label: '홍보센터',
				value: [{ label: '보도자료' }, { label: 'IBKSB 활동' }, { label: 'IBKSB 광고(인쇄)' }, { label: 'IBKSB 광고(영상)' }, { label: 'IBKSB 채용정보' }],
			},
		],
	},
];

export default navData;
