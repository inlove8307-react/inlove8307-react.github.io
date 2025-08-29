'use client';

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from "@/components/base/UxInput";
import UxDivider from "@/components/base/UxDivider";
import UxCollapse from "@/components/base/UxCollapse";
import UxGroup from "@/components/base/UxGroup";

export default function Sample() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>UxInput</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<UxGroup
								role="collapse"
								className="sample"
							>
								<UxCollapse entire>
									<div data-role="summary">UxInput Props</div>
									<div data-role="details">
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
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>default</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										value="입력 값"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										value="유효성 여부"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										value="유효성 여부"
										valid={false}
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										value="읽기전용 여부"
										readonly
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										value="비활성화 여부"
										disabled
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:prefix</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										value="10,000"
										prefix="금액"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:suffix</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										className="right"
										placeholder="입력해주세요"
										value="10,000"
										prefix="금액"
										suffix="원"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:submit</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										value="9876"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:timer</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										placeholder="입력해주세요"
										value="9876"
										timer="03:00"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role password</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="password"
										placeholder="입력해주세요"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="password"
										placeholder="입력해주세요"
										value="1234567"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:maxLength</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="password"
										placeholder="입력해주세요"
										maxLength={7}
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="password"
										maxLength={7}
										value="1234567"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="password"
										maxLength={7}
										value="1234567"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="password"
										maxLength={7}
										value="1234567"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="password"
										maxLength={7}
										value="1234567"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role phone</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="phone"
										placeholder="입력해주세요"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="phone"
										placeholder="입력해주세요"
										value1="010"
										value2="1234"
										value3="5678"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="phone"
										placeholder="입력해주세요"
										value1="010"
										value2="1234"
										value3="5678"
										submit="인증"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="phone"
										placeholder="입력해주세요"
										value1="010"
										value2="1234"
										value3="5678"
										submit="인증"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="phone"
										placeholder="입력해주세요"
										value1="010"
										value2="1234"
										value3="5678"
										submit="인증"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="phone"
										placeholder="입력해주세요"
										value1="010"
										value2="1234"
										value3="5678"
										submit="인증"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role resident</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="resident"
										placeholder="입력해주세요"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="resident"
										placeholder="입력해주세요"
										value1="987654"
										value2="9876543"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:gender</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="resident"
										placeholder="입력해주세요"
										value1="987654"
										value2="1"
										value3="876543"
										gender
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="resident"
										placeholder="입력해주세요"
										value1="987654"
										value2="9876543"
										submit="인증"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="resident"
										placeholder="입력해주세요"
										value1="987654"
										value2="9876543"
										submit="인증"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="resident"
										placeholder="입력해주세요"
										value1="987654"
										value2="9876543"
										submit="인증"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="resident"
										placeholder="입력해주세요"
										value1="987654"
										value2="9876543"
										submit="인증"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role license</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="license"
										placeholder="입력해주세요"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="license"
										placeholder="입력해주세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="license"
										placeholder="입력해주세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="인증"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="license"
										placeholder="입력해주세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="인증"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="license"
										placeholder="입력해주세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="인증"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="license"
										placeholder="입력해주세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="인증"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:role business</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="business"
										placeholder="입력해주세요"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:value</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="business"
										placeholder="입력해주세요"
										value1="123"
										value2="45"
										value3="12345"
										submit="인증"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid true</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="business"
										placeholder="입력해주세요"
										value1="123"
										value2="45"
										value3="12345"
										submit="인증"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:valid false</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="business"
										placeholder="입력해주세요"
										value1="123"
										value2="45"
										value3="12345"
										submit="인증"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:readonly</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="business"
										placeholder="입력해주세요"
										value1="123"
										value2="45"
										value3="12345"
										submit="인증"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>:disabled</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										role="business"
										placeholder="입력해주세요"
										value1="123"
										value2="45"
										value3="12345"
										submit="인증"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};