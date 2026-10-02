'use client';

import React, { useState } from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxButton from "@/components/base/UxButton";
import UxGroup from "@/components/base/UxGroup";
import UxCollapse from "@/components/base/UxCollapse";

export default function Guide() {
	const [progress, setProgress] = useState(0);
	const [loaded, setLoaded] = useState(false);

	const handleProgress = () => {
		let percent = progress + 25;
		if (percent > 100) percent = 0;
		setProgress(percent);
	};

	const handleLoaded = () => {
		setLoaded(!loaded);
	};

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxButton</h3>
				</UxSubject>
				<UxContent>
					{/* <UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxButton Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>[event]</li>
										</ul>
									</div>
								</UxCollapse>
							</UxGroup>
						</UxSubject>
					</UxArticle> */}

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>default</h4>
						</UxSubject>
						<UxContent>
							<UxGroup className="col1">
								<UxButton
									className="primary h3"
									onClick={() => console.log('click')}
								>
									<span>primary h3</span>
								</UxButton>
								<UxButton
									className="secondary h3"
									onClick={() => console.log('click')}
								>
									<span>secondary h3</span>
								</UxButton>
								<UxButton
									className="tertiary h3"
									onClick={() => console.log('click')}
								>
									<span>tertiary h3</span>
								</UxButton>
							</UxGroup>
							<UxGroup className="col1">
								<UxButton
									className="primary h4"
									onClick={() => console.log('click')}
								>
									<span>primary h4</span>
								</UxButton>
								<UxButton
									className="secondary h4"
									onClick={() => console.log('click')}
								>
									<span>secondary h4</span>
								</UxButton>
								<UxButton
									className="tertiary h4"
									onClick={() => console.log('click')}
								>
									<span>tertiary h4</span>
								</UxButton>
							</UxGroup>
							<UxGroup className="col1">
								<UxButton
									className="primary h5"
									onClick={() => console.log('click')}
								>
									<span>primary h5</span>
								</UxButton>
								<UxButton
									className="secondary h5"
									onClick={() => console.log('click')}
								>
									<span>secondary h5</span>
								</UxButton>
							</UxGroup>
							<UxGroup className="col1">
								<UxButton
									className="primary h3"
									disabled
									onClick={() => console.log('click')}
								>
									<span>primary h3 disabled</span>
								</UxButton>
								<UxButton
									className="secondary h3"
									disabled
									onClick={() => console.log('click')}
								>
									<span>secondary h3 disabled</span>
								</UxButton>
								<UxButton
									className="tertiary h3"
									disabled
									onClick={() => console.log('click')}
								>
									<span>tertiary h3 disabled</span>
								</UxButton>
							</UxGroup>
							<UxGroup className="auto">
								<UxButton
									className="tertiary h5"
									onClick={() => console.log('click')}
								>
									<span>tertiary h5</span>
								</UxButton>
							</UxGroup>
							<UxGroup className="auto">
								<UxButton
									className="tertiary h3 capsule"
									onClick={() => console.log('click')}
								>
									<i className="icon mask clip primary" />
									<span>tertiary h3 capsule</span>
								</UxButton>
							</UxGroup>
							<UxGroup className="auto">
								<UxButton
									className="tertiary h4 capsule"
									onClick={() => console.log('click')}
								>
									<i className="icon mask clip primary" />
									<span>tertiary h4 capsule</span>
								</UxButton>
							</UxGroup>
							<UxGroup className="auto">
								<UxButton
									className="fill"
									onClick={() => console.log('click')}
								>
									<span>solid</span>
								</UxButton>
							</UxGroup>
							<UxGroup className="auto">
								<UxButton
									className="line"
									onClick={() => console.log('click')}
								>
									<span>line</span>
								</UxButton>
							</UxGroup>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role link</h4>
						</UxSubject>
						<UxContent>
							<UxGroup className="auto">
								<UxButton
									role="link"
									href="/view/guide/button"
									target="_blank"
								>
									<span>링크</span>
									<i className="icon mask arrow-right x16" />
								</UxButton>
							</UxGroup>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role progress</h4>
						</UxSubject>
						<UxContent>
							<UxButton
								role="progress"
								progress={progress}
								loaded={progress === 100}
								onClick={() => handleProgress()}
							>
								<span>Loaded</span>
							</UxButton>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role load</h4>
						</UxSubject>
						<UxContent>
							<UxButton
								role="load"
								className="primary h3"
								loaded={loaded}
								onClick={() => handleLoaded()}
							>
								<span>Loaded</span>
							</UxButton>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role select</h4>
						</UxSubject>
						<UxContent>
							<UxButton
								role="select"
								placeholder="통신사를 선택하세요"
								label1="통신사"
								label2="를 선택하세요"
								onClick={() => console.log('click')}
							>
							</UxButton>
							<UxButton
								role="select"
								placeholder="통신사를 선택하세요"
								label1="통신사"
								label2="를 선택하세요"
								onClick={() => console.log('click')}
							>
								<span>SKT</span>
							</UxButton>
							<UxButton
								role="select"
								placeholder="통신사를 선택하세요"
								label1="통신사"
								label2="를 선택하세요"
								readonly
								onClick={() => console.log('click')}
							>
								<span>SKT</span>
							</UxButton>
							<UxButton
								role="select"
								placeholder="통신사를 선택하세요"
								label1="통신사"
								label2="를 선택하세요"
								disabled
								onClick={() => console.log('click')}
							>
								<span>SKT</span>
							</UxButton>
							<UxButton
								role="select"
								placeholder="통신사를 선택하세요"
								label1="통신사"
								label2="를 선택하세요"
								valid={true}
								onClick={() => console.log('click')}
							>
								<span>SKT</span>
							</UxButton>
							<UxButton
								role="select"
								placeholder="통신사를 선택하세요"
								label1="통신사"
								label2="를 선택하세요"
								valid={false}
								onClick={() => console.log('click')}
							>
								<span>SKT</span>
							</UxButton>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role search</h4>
						</UxSubject>
						<UxContent>
							<UxButton
								role="search"
								placeholder="검색어를 입력하세요"
								label1="검색어"
								label2="를 입력하세요"
								onClick={() => console.log('click')}
							>
							</UxButton>
							<UxButton
								role="search"
								placeholder="검색어를 입력하세요"
								label1="검색어"
								label2="를 입력하세요"
								onClick={() => console.log('click')}
							>
								<span>검색어</span>
							</UxButton>
							<UxButton
								role="search"
								placeholder="검색어를 입력하세요"
								label1="검색어"
								label2="를 입력하세요"
								readonly
								onClick={() => console.log('click')}
							>
								<span>검색어</span>
							</UxButton>
							<UxButton
								role="search"
								placeholder="검색어를 입력하세요"
								label1="검색어"
								label2="를 입력하세요"
								disabled
								onClick={() => console.log('click')}
							>
								<span>검색어</span>
							</UxButton>
							<UxButton
								role="search"
								placeholder="검색어를 입력하세요"
								label1="검색어"
								label2="를 입력하세요"
								valid={true}
								onClick={() => console.log('click')}
							>
								<span>검색어</span>
							</UxButton>
							<UxButton
								role="search"
								placeholder="검색어를 입력하세요"
								label1="검색어"
								label2="를 입력하세요"
								valid={false}
								onClick={() => console.log('click')}
							>
								<span>검색어</span>
							</UxButton>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role input</h4>
						</UxSubject>
						<UxContent>
							<UxButton
								role="input"
								placeholder="이름을 입력하세요"
								label1="이름"
								label2="을 입력하세요"
								onClick={() => console.log('click')}
							>
							</UxButton>
							<UxButton
								role="input"
								placeholder="이름을 입력하세요"
								label1="이름"
								label2="을 입력하세요"
								onClick={() => console.log('click')}
							>
								<span>이름</span>
							</UxButton>
							<UxButton
								role="input"
								placeholder="이름을 입력하세요"
								label1="이름"
								label2="을 입력하세요"
								readonly
								onClick={() => console.log('click')}
							>
								<span>이름</span>
							</UxButton>
							<UxButton
								role="input"
								placeholder="이름을 입력하세요"
								label1="이름"
								label2="을 입력하세요"
								disabled
								onClick={() => console.log('click')}
							>
								<span>이름</span>
							</UxButton>
							<UxButton
								role="input"
								placeholder="이름을 입력하세요"
								label1="이름"
								label2="을 입력하세요"
								valid={true}
								onClick={() => console.log('click')}
							>
								<span>이름</span>
							</UxButton>
							<UxButton
								role="input"
								placeholder="이름을 입력하세요"
								label1="이름"
								label2="을 입력하세요"
								valid={false}
								onClick={() => console.log('click')}
							>
								<span>이름</span>
							</UxButton>
						</UxContent>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>:role address</h4>
						</UxSubject>
						<UxContent>
							<UxButton
								role="address"
								placeholder="주소를 입력하세요"
								label1="주소"
								label2="를 입력하세요"
								onClick={() => console.log('click')}
							>
							</UxButton>
							<UxButton
								role="address"
								placeholder="주소를 입력하세요"
								label1="주소"
								label2="를 입력하세요"
								onClick={() => console.log('click')}
							>
								<span>서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)</span>
							</UxButton>
							<UxButton
								role="address"
								placeholder="주소를 입력하세요"
								label1="주소"
								label2="를 입력하세요"
								readonly
								onClick={() => console.log('click')}
							>
								<span>서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)</span>
							</UxButton>
							<UxButton
								role="address"
								placeholder="주소를 입력하세요"
								label1="주소"
								label2="를 입력하세요"
								disabled
								onClick={() => console.log('click')}
							>
								<span>서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)</span>
							</UxButton>
							<UxButton
								role="address"
								placeholder="주소를 입력하세요"
								label1="주소"
								label2="를 입력하세요"
								valid={true}
								onClick={() => console.log('click')}
							>
								<span>서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)</span>
							</UxButton>
							<UxButton
								role="address"
								placeholder="주소를 입력하세요"
								label1="주소"
								label2="를 입력하세요"
								valid={false}
								onClick={() => console.log('click')}
							>
								<span>서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)</span>
							</UxButton>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};