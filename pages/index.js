"use client";

import React, { useState } from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxForm from "@/components/base/UxForm";
import UxField from "@/components/base/UxField";
import UxInput from "@/components/base/UxInput";
import UxSelect from "@/components/base/UxSelect";
import UxOption from "@/components/base/UxOption";
import UxCheckbox from "@/components/base/UxCheckbox";
import UxRadio from "@/components/base/UxRadio";
import UxButton from "@/components/base/UxButton";
import UxCollapse from "@/components/base/UxCollapse";
import UxTab from "@/components/base/UxTab";
import UxPanel from "@/components/base/UxPanel";

export default function Home() {
	const [progress, setProgress] = useState(25);

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>HOME</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxContent>
							{/* CONTENTS */}
							<UxTab
								className="synced"
								rootMargin="96"
							>
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary4</div>
									<div slot="details">details4</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary5</div>
									<div slot="details">details5</div>
								</UxPanel>
							</UxTab>
							<UxTab className="linear scroll">
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary4</div>
									<div slot="details">details4</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary5</div>
									<div slot="details">details5</div>
								</UxPanel>
							</UxTab>
							<UxTab className="chip subtle scroll">
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary4</div>
									<div slot="details">details4</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary5</div>
									<div slot="details">details5</div>
								</UxPanel>
							</UxTab>
							<UxTab className="block">
								<UxPanel>
									<div slot="summary">summary1</div>
									<div slot="details">details1</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary2</div>
									<div slot="details">details2</div>
								</UxPanel>
								<UxPanel>
									<div slot="summary">summary3</div>
									<div slot="details">details3</div>
								</UxPanel>
							</UxTab>
							<UxCollapse>
								<div slot="summary">summary</div>
								<div slot="details">details</div>
							</UxCollapse>
							<UxCollapse entire>
								<div slot="summary">summary</div>
								<div slot="details">details</div>
							</UxCollapse>
							<UxGroup
								role="collapse"
								once
							>
								<UxCollapse entire>
									<div slot="summary">summary</div>
									<div slot="details">details</div>
								</UxCollapse>
								<UxCollapse entire>
									<div slot="summary">summary</div>
									<div slot="details">details</div>
								</UxCollapse>
							</UxGroup>
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
							<UxGroup className="auto">
								<UxButton
									className="tertiary h5"
									onClick={() => console.log('click')}
								>
									<span>tertiary h5</span>
								</UxButton>
								<UxButton
									className="tertiary h3 capsule"
									onClick={() => console.log('click')}
								>
									<i className="icon mask clip primary" />
									<span>tertiary h3 capsule</span>
								</UxButton>
								<UxButton
									className="tertiary h4 capsule"
									onClick={() => console.log('click')}
								>
									<i className="icon mask clip primary" />
									<span>tertiary h4 capsule</span>
								</UxButton>
								<UxButton
									className="solid"
									onClick={() => console.log('click')}
								>
									<span>solid</span>
								</UxButton>
								<UxButton
									className="line"
									onClick={() => console.log('click')}
								>
									<span>line</span>
								</UxButton>
								<UxButton
									onClick={() => console.log('click')}
								>
									<span>링크</span>
									<i className="icon mask arrow-right x16" />
								</UxButton>
							</UxGroup>
							<UxButton
								role="select"
								valid={true}
								onClick={() => console.log('click')}
							>
								<span>role(select)</span>
							</UxButton>
							<UxButton
								role="search"
								valid={false}
								onClick={() => console.log('click')}
							>
								<span>role(search)</span>
							</UxButton>
							<UxButton
								role="input"
								readonly
								onClick={() => console.log('click')}
							>
								<span>role(input)</span>
							</UxButton>
							<UxButton
								role="progress"
								progress={progress}
								onClick={() => setProgress(75)}
							>
								<span>role(progress)</span>
							</UxButton>
							<UxForm>
								<UxField>
									<UxGroup className="col2">
										<UxCheckbox
											onChange={(value) => console.log(value)}
										>
											<span>미선택</span>
										</UxCheckbox>
										<UxCheckbox
											onChange={(value) => console.log(value)}
											checked
										>
											<span>선택</span>
										</UxCheckbox>
										<UxCheckbox
											onChange={(value) => console.log(value)}
											disabled
										>
											<span>비활성</span>
										</UxCheckbox>
										<UxCheckbox
											onChange={(value) => console.log(value)}
											checked disabled
										>
											<span>선택 비활성</span>
										</UxCheckbox>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxGroup className="col3">
										<UxCheckbox
											className="thin"
											onChange={(value) => console.log(value)}
										>
											<span>미선택</span>
										</UxCheckbox>
										<UxCheckbox
											className="thin"
											onChange={(value) => console.log(value)}
											checked
										>
											<span>선택</span>
										</UxCheckbox>
										<UxCheckbox
											className="thin"
											onChange={(value) => console.log(value)}
											disabled
										>
											<span>비활성</span>
										</UxCheckbox>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxCheckbox
										role="switch"
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxGroup
										role="radio"
										className="col3"
										value="1"
										onChange={(value) => console.log(value)}
									>
										<UxRadio value="0">
											<span>미선택</span>
										</UxRadio>
										<UxRadio
											value="1"
										>
											<span>선택</span>
										</UxRadio>
										<UxRadio
											value="2"
											disabled
										>
											<span>비활성</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxGroup
										role="radio"
										className="col2"
										value="1"
										disabled
									>
										<UxRadio value="0">
											<span>비활성</span>
										</UxRadio>
										<UxRadio value="1">
											<span>선택 비활성</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxGroup
										role="radio"
										className="chip"
										value="1"
										scroll
										// expand
										onChange={(value) => console.log(value)}
									>
										<UxRadio value="0">
											<span>라벨1</span>
										</UxRadio>
										<UxRadio value="1">
											<span>라벨2</span>
										</UxRadio>
										<UxRadio value="2">
											<span>라벨3</span>
										</UxRadio>
										<UxRadio value="3">
											<span>라벨4</span>
										</UxRadio>
										<UxRadio value="4">
											<span>라벨5</span>
										</UxRadio>
										<UxRadio value="5">
											<span>라벨6</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxGroup
										role="radio"
										className="block col2"
										value="1"
										onChange={(value) => console.log(value)}
									>
										<UxRadio value="0">
											<span>라벨1</span>
										</UxRadio>
										<UxRadio value="1">
											<span>라벨2</span>
										</UxRadio>
										<UxRadio value="2">
											<span>라벨3</span>
										</UxRadio>
										<UxRadio value="3">
											<span>라벨4</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxGroup
										role="radio"
										className="block split col2"
										value="1"
										onChange={(value) => console.log(value)}
									>
										<UxRadio value="0">
											<span>라벨1</span>
										</UxRadio>
										<UxRadio value="1">
											<span>라벨2</span>
										</UxRadio>
										<UxRadio value="2">
											<span>라벨3</span>
										</UxRadio>
										<UxRadio value="3">
											<span>라벨4</span>
										</UxRadio>
									</UxGroup>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										value="김이름"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										value="김이름"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										value="김이름"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										placeholder="이름을 입력하세요"
										label1="이름"
										label2="을 입력하세요"
										value="김이름"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="password"
										placeholder="비밀번호를 입력하세요"
										label1="비밀번호"
										label2="를 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="password"
										placeholder="비밀번호를 입력하세요"
										label1="비밀번호"
										label2="를 입력하세요"
										maxLength="9"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="password"
										placeholder="비밀번호를 입력하세요"
										label1="비밀번호"
										label2="를 입력하세요"
										value="123456789"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="password"
										placeholder="비밀번호를 입력하세요"
										label1="비밀번호"
										label2="를 입력하세요"
										value="123456789"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="password"
										placeholder="비밀번호를 입력하세요"
										label1="비밀번호"
										label2="를 입력하세요"
										value="123456789"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="password"
										placeholder="비밀번호를 입력하세요"
										label1="비밀번호"
										label2="를 입력하세요"
										value="123456789"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="textarea"
										placeholder="내용을 입력하세요"
										label1="내용"
										label2="을 입력하세요"
										rows="1"
										fluid
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="textarea"
										placeholder="내용을 입력하세요"
										label1="내용"
										label2="을 입력하세요"
										value="김내용"
										rows="1"
										fluid
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="textarea"
										placeholder="내용을 입력하세요"
										label1="내용"
										label2="을 입력하세요"
										value="김내용"
										rows="1"
										fluid
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="textarea"
										placeholder="내용을 입력하세요"
										label1="내용"
										label2="을 입력하세요"
										value="김내용"
										readonly
										rows="1"
										fluid
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="textarea"
										placeholder="내용을 입력하세요"
										label1="내용"
										label2="을 입력하세요"
										value="김내용"
										disabled
										rows="1"
										fluid
										onChange={(value) => console.log(value)}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										value1="010"
										value2="1234"
										value3="5678"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										value1="010"
										value2="1234"
										value3="5678"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										value1="010"
										value2="1234"
										value3="5678"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										value1="010"
										value2="1234"
										value3="5678"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										value1="010"
										value2="1234"
										value3="5678"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										carrier
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										carrier="kt"
										value1="010"
										value2="1234"
										value3="5678"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										carrier="kt"
										value1="010"
										value2="1234"
										value3="5678"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										carrier="kt"
										value1="010"
										value2="1234"
										value3="5678"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										carrier="kt"
										value1="010"
										value2="1234"
										value3="5678"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="phone"
										placeholder="핸드폰 번호를 입력하세요"
										label1="핸드폰 번호"
										label2="를 입력하세요"
										carrier="kt"
										value1="010"
										value2="1234"
										value3="5678"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1234567"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										gender
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="resident"
										placeholder="주민등록번호를 입력하세요"
										label1="주민등록번호"
										label2="를 입력하세요"
										value1="123456"
										value2="1"
										value3="234567"
										gender
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="license"
										placeholder="운전면허번호를 입력하세요"
										label1="운전면허번호"
										label2="를 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="license"
										placeholder="운전면허번호를 입력하세요"
										label1="운전면허번호"
										label2="를 입력하세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="12"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="license"
										placeholder="운전면허번호를 입력하세요"
										label1="운전면허번호"
										label2="를 입력하세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="12"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="license"
										placeholder="운전면허번호를 입력하세요"
										label1="운전면허번호"
										label2="를 입력하세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="12"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="license"
										placeholder="운전면허번호를 입력하세요"
										label1="운전면허번호"
										label2="를 입력하세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="12"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="license"
										placeholder="운전면허번호를 입력하세요"
										label1="운전면허번호"
										label2="를 입력하세요"
										value1="12"
										value2="34"
										value3="567890"
										value4="12"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="business"
										placeholder="사업자등록번호를 입력하세요"
										label1="사업자등록번호"
										label2="를 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="business"
										placeholder="사업자등록번호를 입력하세요"
										label1="사업자등록번호"
										label2="를 입력하세요"
										value1="123"
										value2="45"
										value3="67890"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="business"
										placeholder="사업자등록번호를 입력하세요"
										label1="사업자등록번호"
										label2="를 입력하세요"
										value1="123"
										value2="45"
										value3="67890"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="business"
										placeholder="사업자등록번호를 입력하세요"
										label1="사업자등록번호"
										label2="를 입력하세요"
										value1="123"
										value2="45"
										value3="67890"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="business"
										placeholder="사업자등록번호를 입력하세요"
										label1="사업자등록번호"
										label2="를 입력하세요"
										value1="123"
										value2="45"
										value3="67890"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="business"
										placeholder="사업자등록번호를 입력하세요"
										label1="사업자등록번호"
										label2="를 입력하세요"
										value1="123"
										value2="45"
										value3="67890"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="search"
										placeholder="검색어를 입력하세요"
										label1="검색어"
										label2="를 입력하세요"
										value="김검색"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="search"
										placeholder="검색어를 입력하세요"
										label1="검색어"
										label2="를 입력하세요"
										value="김검색"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="search"
										placeholder="검색어를 입력하세요"
										label1="검색어"
										label2="를 입력하세요"
										value="김검색"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="search"
										placeholder="검색어를 입력하세요"
										label1="검색어"
										label2="를 입력하세요"
										value="김검색"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="search"
										placeholder="검색어를 입력하세요"
										label1="검색어"
										label2="를 입력하세요"
										value="김검색"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="address"
										placeholder="주소를 입력하세요"
										label1="주소"
										label2="를 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="address"
										placeholder="주소를 입력하세요"
										label1="주소"
										label2="를 입력하세요"
										value="서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="address"
										placeholder="주소를 입력하세요"
										label1="주소"
										label2="를 입력하세요"
										value="서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="address"
										placeholder="주소를 입력하세요"
										label1="주소"
										label2="를 입력하세요"
										value="서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="address"
										placeholder="주소를 입력하세요"
										label1="주소"
										label2="를 입력하세요"
										value="서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="address"
										placeholder="주소를 입력하세요"
										label1="주소"
										label2="를 입력하세요"
										value="서울특별시 마포구 연희로10길 5, 3층 301호 (연희동)"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="datepicker"
										placeholder="날짜를 입력하세요"
										label1="날짜"
										label2="를 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="datepicker"
										placeholder="날짜를 입력하세요"
										label1="날짜"
										label2="를 입력하세요"
										value="2026.09.01"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="datepicker"
										placeholder="날짜를 입력하세요"
										label1="날짜"
										label2="를 입력하세요"
										value="2026.09.01"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="datepicker"
										placeholder="날짜를 입력하세요"
										label1="날짜"
										label2="를 입력하세요"
										value="2026.09.01"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="datepicker"
										placeholder="날짜를 입력하세요"
										label1="날짜"
										label2="를 입력하세요"
										value="2026.09.01"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="datepicker"
										placeholder="날짜를 입력하세요"
										label1="날짜"
										label2="를 입력하세요"
										value="2026.09.01"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="daterange"
										placeholder="기간을 입력하세요"
										label1="기간"
										label2="을 입력하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="daterange"
										placeholder="기간을 입력하세요"
										label1="기간"
										label2="을 입력하세요"
										from="2026.09.01"
										to="2026.09.30"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="daterange"
										placeholder="기간을 입력하세요"
										label1="기간"
										label2="을 입력하세요"
										from="2026.09.01"
										to="2026.09.30"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="daterange"
										placeholder="기간을 입력하세요"
										label1="기간"
										label2="을 입력하세요"
										from="2026.09.01"
										to="2026.09.30"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="daterange"
										placeholder="기간을 입력하세요"
										label1="기간"
										label2="을 입력하세요"
										from="2026.09.01"
										to="2026.09.30"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="daterange"
										placeholder="기간을 입력하세요"
										label1="기간"
										label2="을 입력하세요"
										from="2026.09.01"
										to="2026.09.30"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
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
								<UxField>
									<UxSelect
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
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
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
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
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
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
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
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
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										readonly
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
										role="dropdown"
										placeholder="통신사를 선택하세요"
										label1="통신사"
										label2="를 선택하세요"
										value="0"
										disabled
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
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
										readonly
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxSelect
										role="bank"
										placeholder="선택하세요"
										label1="은행"
										label2="을 선택하세요"
										sector="bank"
										code="000"
										disabled
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="file"
										placeholder="파일을 선택하세요"
										label1="파일"
										label2="을 선택하세요"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={true}>
									<UxInput
										role="file"
										placeholder="파일을 선택하세요"
										label1="파일"
										label2="을 선택하세요"
										value="image.png"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField valid={false}>
									<UxInput
										role="file"
										placeholder="파일을 선택하세요"
										label1="파일"
										label2="을 선택하세요"
										value="image.png"
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="file"
										placeholder="파일을 선택하세요"
										label1="파일"
										label2="을 선택하세요"
										value="image.png"
										readonly
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
								<UxField>
									<UxInput
										role="file"
										placeholder="파일을 선택하세요"
										label1="파일"
										label2="을 선택하세요"
										value="image.png"
										disabled
										clear
										onChange={(value) => console.log(value)}
										onClear={() => console.log('clear')}
									/>
									<p slot="message">도움말</p>
									<p slot="valid">유효성</p>
								</UxField>
							</UxForm>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	);
};