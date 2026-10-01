'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCollapse from "@/components/base/UxCollapse";
import UxForm from "@/components/base/UxForm";
import UxField from "@/components/base/UxField";
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";

export default function Guide() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxSelect</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div slot="summary">UxSelect Props</div>
									<div slot="details">
										<ul>
											<li>[props]</li>
											<li>type(String): 입력 타입 (기본 'text')</li>
											<li>style(Object): 인라인 스타일</li>
											<li>className(String): 추가 클래스</li>
											<li>placeholder(String): 값 없을 경우 표시 문구</li>
											<li>prefix(String): 앞 표시 문구</li>
											<li>suffix(String): 뒤 표시 문구</li>
											<li>value(String): 값</li>
											<li>maxLength(String): 글자 수 제한</li>
											<li>clear(Boolean): 값 초기화 버튼 활성화 여부</li>
											<li>submit(String): 확인 버튼 문구</li>
											<li>valid(Boolean): 유효성 여부</li>
											<li>readonly(Boolean): 읽기전용 여부</li>
											<li>disabled(Boolean): 비활성화 여부</li>
											<li>[event]</li>
											<li>onInput(Func): 값 입력 이벤트 콜백</li>
											<li>onFocus(Func): 포커스 활성화 이벤트 콜백</li>
											<li>onBlur(Func): 포커스 비활성화 이벤트 콜백</li>
											<li>onKeyDown(Func): 키 입력 이벤트 콜백</li>
											<li>onKeyUp(Func): 키 입력 후 이벤트 콜백</li>
											<li>onChange(Func): 값 변경 이벤트 콜백</li>
											<li>onClear(Func): 값 초기화 이벤트 콜백</li>
											<li>onSubmit(Func): 확인 버튼 이벤트 콜백</li>
										</ul>
									</div>
								</UxCollapse>
							</UxGroup>
						</UxSubject>
					</UxArticle>

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>default</h4>
						</UxSubject>
						<UxContent>
							<UxForm>
								<UxField>
									<UxSelect
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										onChange={(value) => console.log(value)}
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										onChange={(value) => console.log(value)}
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxSelect
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										onChange={(value) => console.log(value)}
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxSelect
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										onChange={(value) => console.log(value)}
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										readonly
										onChange={(value) => console.log(value)}
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										disabled
										onChange={(value) => console.log(value)}
									>
										<UxOption value="0">SKT</UxOption>
										<UxOption value="1">KT</UxOption>
										<UxOption value="2">LGU+</UxOption>
									</UxSelect>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
							</UxForm>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};