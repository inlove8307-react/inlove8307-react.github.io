'use client';

import React, { useEffect, useState } from "react";
import useModal from "@/hook/useModal";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxDivider from "@/components/base/UxDivider";
import UxButton from "@/components/base/UxButton";
import UxInput from "@/components/base/UxInput";
import UxPhone from "@/components/base/UxPhone";
import UxRrn from "@/components/base/UxRrn";
import UxLrn from "@/components/base/UxLrn";
import UxBrn from "@/components/base/UxBrn";
import UxCheckbox from "@/components/base/UxCheckbox";
import UxCheckboxGroup from "@/components/base/UxCheckboxGroup";
import UxRadio from "@/components/base/UxRadio";
import UxRadioGroup from "@/components/base/UxRadioGroup";
import UxPassword from "@/components/base/UxPassword";
import UxCollapse from "@/components/base/UxCollapse";
import UxCollapseGroup from "@/components/base/UxCollapseGroup";
import UxCalendar from "@/components/base/UxCalendar";
import UxDateCalendar from "@/components/base/UxDateCalendar";
import UxMonthCalendar from "@/components/base/UxMonthCalendar";
import UxYearCalendar from "@/components/base/UxYearCalendar";
import UxToggle from "@/components/base/UxToggle";
import UxToggleGroup from "@/components/base/UxToggleGroup";
import UxCard from "@/components/base/UxCard";
import UxCardGroup from "@/components/base/UxCardGroup";
import UxTab from "@/components/base/UxTab";
import UxTabGroup from "@/components/base/UxTabGroup";
import UxSlider from "@/components/base/UxSlider";
import UxGrid from "@/components/base/UxGrid";
import UxSortList from "@/components/base/UxSortList";

import { useSortable } from '@dnd-kit/react/sortable';

function Sortable({id, index}) {
	const {ref} = useSortable({id, index});

	return (
		<li ref={ref} className="ux-sort-item">
			<div className="ux-sort-base">
				<span>Item {id}</span>
				<button type="button" className="ux-sort-button"></button>
			</div>
		</li>
	);
}

export default function Sample() {
	const modal = useModal();
	const items = [1, 2, 3, 4];

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>
						<strong>Guide</strong>
					</h3>
				</UxSubject>
				<UxContent>
					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxSortList</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSortList - Default</h5>
								</UxSubject>
								<UxContent>
									<ul className="ux-sort-list">
										{items.map((id, index) =>
											<Sortable key={id} id={id} index={index} />
										)}
									</ul>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSortList - Default</h5>
								</UxSubject>
								<UxContent>
									<UxSortList
										items={[
											{ id: '1', label: 'item01' },
											{ id: '2', label: 'item02' },
											{ id: '3', label: 'item03' },
											{ id: '4', label: 'item04' },
											{ id: '5', label: 'item05' },
										]}
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					{/* <UxArticle className="h4 space">
						<UxSubject>
							<h4>UxModal</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxModal</h5>
								</UxSubject>
								<UxContent>
									<UxGrid className="gap8 col1">
										<UxButton className="outline h3">
											<span className="text">center</span>
										</UxButton>
										<UxButton className="outline h3">
											<span className="text">bottom</span>
										</UxButton>
										<UxButton className="outline h3">
											<span className="text">full</span>
										</UxButton>
									</UxGrid>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxAlert</h5>
								</UxSubject>
								<UxContent>
									<UxGrid className="gap8 col1">
										<UxButton
											className="outline h3"
											onClick={() => {
												modal.openAlert('message');
											}}
										>
											<span className="text">alert</span>
										</UxButton>
									</UxGrid>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxConfirm</h5>
								</UxSubject>
								<UxContent>
									<UxGrid className="gap8 col1">
										<UxButton
											className="outline h3"
											onClick={() => {
												modal.openConfirm('message');
											}}
										>
											<span className="text">confirm</span>
										</UxButton>
									</UxGrid>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider /> */}

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxButton</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Outline</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="outline h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Contain</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="contain h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Primary</h5>
								</UxSubject>
								<UxContent>
									<UxButton className="primary h3">
										<span className="text">label</span>
									</UxButton>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxButton - Grid</h5>
								</UxSubject>
								<UxContent>
									<UxGrid className="gap8">
										<UxButton className="contain h3 grow small">
											<span className="text">cancel</span>
										</UxButton>
										<UxButton className="primary h3 grow full">
											<span className="text">submit</span>
										</UxButton>
									</UxGrid>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxInput</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Default</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="default"
										placeholder="placeholder"
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="valid"
										placeholder="placeholder"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="invalid"
										placeholder="placeholder"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="readonly"
										placeholder="placeholder"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="disabled"
										placeholder="placeholder"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Prefix</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="value"
										placeholder="placeholder"
										clear
										prefix="prefix"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Suffix</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="value"
										placeholder="placeholder"
										clear
										suffix="suffix"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxInput - Timer</h5>
								</UxSubject>
								<UxContent>
									<UxInput
										type="text"
										value="value"
										placeholder="placeholder"
										clear
										timer="03:00"
										submit="submit"
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxPassword</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxPassword - Default</h5>
								</UxSubject>
								<UxContent>
									<UxPassword
										placeholder="비밀번호를 입력해주세요."
										scrollIntoView
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxPassword - MaxLength</h5>
								</UxSubject>
								<UxContent>
									<UxPassword
										placeholder="비밀번호를 입력해주세요."
										maxLength={7}
										clear
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxPassword - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxPassword
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
									<h5>UxPassword - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxPassword
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
									<h5>UxPassword - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxPassword
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
									<h5>UxPassword - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxPassword
										maxLength={7}
										value="1234567"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxPhone</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxPhone - Default</h5>
								</UxSubject>
								<UxContent>
									<UxPhone
										clear
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxPhone - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxPhone
										value1="010"
										value2="1234"
										value3="5678"
										submit="submit"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxPhone - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxPhone
										value1="010"
										value2="1234"
										value3="5678"
										submit="submit"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxPhone - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxPhone
										value1="010"
										value2="1234"
										value3="5678"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxPhone - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxPhone
										value1="010"
										value2="1234"
										value3="5678"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxRrn (주민등록번호)</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Default</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										clear
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										value1="987654"
										value2="9876543"
										clear
										valid={true}
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										value1="987654"
										value2="9876543"
										clear
										valid={false}
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										value1="987654"
										value2="9876543"
										clear
										readonly
										submit="submit"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRrn - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxRrn
										value1="987654"
										value2="9876543"
										clear
										disabled
										submit="submit"
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxLrn (운전면허번호)</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Default</h5>
								</UxSubject>
								<UxContent>
									<UxLrn clear />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxLrn
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="submit"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxLrn
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										submit="submit"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxLrn
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxLrn - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxLrn
										value1="12"
										value2="34"
										value3="567890"
										value4="89"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxBrn (사업자등록번호)</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Default</h5>
								</UxSubject>
								<UxContent>
									<UxBrn clear />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Valid</h5>
								</UxSubject>
								<UxContent>
									<UxBrn
										value1="123"
										value2="45"
										value3="12345"
										submit="submit"
										clear
										valid={true}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Invalid</h5>
								</UxSubject>
								<UxContent>
									<UxBrn
										value1="123"
										value2="45"
										value3="12345"
										submit="submit"
										clear
										valid={false}
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Readonly</h5>
								</UxSubject>
								<UxContent>
									<UxBrn
										value1="123"
										value2="45"
										value3="12345"
										clear
										readonly
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxBrn - Disabled</h5>
								</UxSubject>
								<UxContent>
									<UxBrn
										value1="123"
										value2="45"
										value3="12345"
										clear
										disabled
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxCheckbox</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCheckbox - Default</h5>
								</UxSubject>
								<UxContent>
									<UxCheckboxGroup>
										<UxCheckbox
											checked={true}
										>
											CHECKBOX_01
										</UxCheckbox>
										<UxCheckbox
											checked={false}
										>
											CHECKBOX_02
										</UxCheckbox>
									</UxCheckboxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCheckbox - Column</h5>
								</UxSubject>
								<UxContent>
									<UxCheckboxGroup className="column">
										<UxCheckbox
											checked={true}
										>
											CHECKBOX_01
										</UxCheckbox>
										<UxCheckbox
											checked={false}
										>
											CHECKBOX_02
										</UxCheckbox>
									</UxCheckboxGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxRadio</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRadio - Default</h5>
								</UxSubject>
								<UxContent>
									<UxCheckboxGroup className="column">
										<UxRadioGroup
											selected="value01"
										>
											<UxRadio
												value="value01"
											>
												RADIO_01
											</UxRadio>
											<UxRadio
												value="value02"
											>
												RADIO_02
											</UxRadio>
										</UxRadioGroup>
									</UxCheckboxGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxRadio - Column</h5>
								</UxSubject>
								<UxContent>
									<UxCheckboxGroup className="column">
										<UxRadioGroup
											className="column"
											selected="value01"
										>
											<UxRadio
												value="value01"
											>
												RADIO_01
											</UxRadio>
											<UxRadio
												value="value02"
											>
												RADIO_02
											</UxRadio>
										</UxRadioGroup>
									</UxCheckboxGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxToggle</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxToggle - Default</h5>
								</UxSubject>
								<UxContent>
									<UxToggleGroup>
										<UxToggle
											value="value01"
										>
											Toggle 01
										</UxToggle>
										<UxToggle
											value="value02"
										>
											Toggle 02
										</UxToggle>
									</UxToggleGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxToggle - Selected</h5>
								</UxSubject>
								<UxContent>
									<UxToggleGroup selected="value01">
										<UxToggle
											value="value01"
										>
											Toggle 01
										</UxToggle>
										<UxToggle
											value="value02"
										>
											Toggle 02
										</UxToggle>
									</UxToggleGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxToggle - Col2</h5>
								</UxSubject>
								<UxContent>
									<UxToggleGroup
										className="col2"
									>
										<UxToggle
											value="value01"
										>
											Toggle 01
										</UxToggle>
										<UxToggle
											value="value02"
										>
											Toggle 02
										</UxToggle>
										<UxToggle
											value="value03"
										>
											Toggle 03
										</UxToggle>
										<UxToggle
											value="value04"
										>
											Toggle 04
										</UxToggle>
									</UxToggleGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxToggle - Col3</h5>
								</UxSubject>
								<UxContent>
									<UxToggleGroup
										className="col3"
									>
										<UxToggle
											value="value01"
										>
											Toggle 01
										</UxToggle>
										<UxToggle
											value="value02"
										>
											Toggle 02
										</UxToggle>
										<UxToggle
											value="value03"
										>
											Toggle 03
										</UxToggle>
										<UxToggle
											value="value04"
										>
											Toggle 04
										</UxToggle>
										<UxToggle
											value="value05"
										>
											Toggle 05
										</UxToggle>
										<UxToggle
											value="value06"
										>
											Toggle 06
										</UxToggle>
									</UxToggleGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxCard</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCard - Default</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup>
										<UxCard>
											CARD 01
										</UxCard>
										<UxCard>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCard - col2</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup
										className="col2"
									>
										<UxCard>
											CARD 01
										</UxCard>
										<UxCard>
											CARD 02
										</UxCard>
										<UxCard>
											CARD 03
										</UxCard>
										<UxCard>
											CARD 04
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCard - Checkbox</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup
										type="checkbox"
									>
										<UxCard
											value="value01"
											checked={true}
										>
											CARD 01
										</UxCard>
										<UxCard
											value="value02"
										>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCard - Radio</h5>
								</UxSubject>
								<UxContent>
									<UxCardGroup
										type="radio"
										selected="value01"
									>
										<UxCard
											value="value01"
										>
											CARD 01
										</UxCard>
										<UxCard
											value="value02"
										>
											CARD 02
										</UxCard>
									</UxCardGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxCollapse</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCollapse - Default</h5>
								</UxSubject>
								<UxContent>
									<UxCollapse>
										<div data-role="summary">summary</div>
										<div data-role="details">details</div>
									</UxCollapse>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCollapse - Expanded</h5>
								</UxSubject>
								<UxContent>
									<UxCollapse
										expanded
									>
										<div data-role="summary">summary</div>
										<div data-role="details">details</div>
									</UxCollapse>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCollapse - Group</h5>
								</UxSubject>
								<UxContent>
									<UxCollapseGroup>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
									</UxCollapseGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCollapse - Group Selected</h5>
								</UxSubject>
								<UxContent>
									<UxCollapseGroup
										selected={0}
									>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
									</UxCollapseGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCollapse - Group Once</h5>
								</UxSubject>
								<UxContent>
									<UxCollapseGroup
										once
									>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
										<UxCollapse>
											<div data-role="summary">summary</div>
											<div data-role="details">details</div>
										</UxCollapse>
									</UxCollapseGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxTab</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTab - Default</h5>
								</UxSubject>
								<UxContent>
									<UxTabGroup>
										<UxTab>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxTab>
										<UxTab>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxTab>
									</UxTabGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTab - Linear</h5>
								</UxSubject>
								<UxContent>
									<UxTabGroup linear>
										<UxTab>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxTab>
										<UxTab>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxTab>
									</UxTabGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTab - Scroll</h5>
								</UxSubject>
								<UxContent>
									<UxTabGroup
										linear
										scroll
									>
										<UxTab>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxTab>
										<UxTab>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxTab>
										<UxTab>
											<div data-role="summary">
												summary03
											</div>
											<div data-role="details">
												details03
											</div>
										</UxTab>
										<UxTab>
											<div data-role="summary">
												summary04
											</div>
											<div data-role="details">
												details04
											</div>
										</UxTab>
										<UxTab>
											<div data-role="summary">
												summary05
											</div>
											<div data-role="details">
												details05
											</div>
										</UxTab>
									</UxTabGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTab - Full</h5>
								</UxSubject>
								<UxContent>
									<UxTabGroup
										className="full"
										linear
									>
										<UxTab>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxTab>
										<UxTab>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxTab>
									</UxTabGroup>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxTab - Block</h5>
								</UxSubject>
								<UxContent>
									<UxTabGroup
										className="full block"
										linear
									>
										<UxTab>
											<div data-role="summary">
												summary01
											</div>
											<div data-role="details">
												details01
											</div>
										</UxTab>
										<UxTab>
											<div data-role="summary">
												summary02
											</div>
											<div data-role="details">
												details02
											</div>
										</UxTab>
									</UxTabGroup>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxSlider</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSlider Default</h5>
								</UxSubject>
								<UxContent>
									<UxSlider
										min="0"
										max="100"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSlider Step</h5>
								</UxSubject>
								<UxContent>
									<UxSlider
										min="0"
										max="100"
										step="10"
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxSlider Range</h5>
								</UxSubject>
								<UxContent>
									<UxSlider
										type="range"
										min="0"
										max="100"
									/>
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4>UxCalendar</h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCalendar</h5>
								</UxSubject>
								<UxContent>
									<UxCalendar
										scrollIntoView
									/>
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCalendar - DateCalendar</h5>
								</UxSubject>
								<UxContent>
									<UxDateCalendar />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCalendar - MonthCalendar</h5>
								</UxSubject>
								<UxContent>
									<UxMonthCalendar />
								</UxContent>
							</UxArticle>

							<UxDivider className="linear" />

							<UxArticle className="h5">
								<UxSubject>
									<h5>UxCalendar - YearCalendar</h5>
								</UxSubject>
								<UxContent>
									<UxYearCalendar />
								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>

					<UxDivider />

					<UxArticle className="h4 space">
						<UxSubject>
							<h4></h4>
						</UxSubject>
						<UxContent>
							<UxArticle className="h5">
								<UxSubject>
									<h5></h5>
								</UxSubject>
								<UxContent>

								</UxContent>
							</UxArticle>
						</UxContent>
					</UxArticle>
				</UxContent>
			</UxArticle>
		</UxSection>
	)
};