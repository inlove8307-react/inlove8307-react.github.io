'use client';

import React, { useState, useRef, useEffect } from "react";
import { slotArray, mergeProps, getRole, getRandomChar } from "@/utils/core";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxDivider from "@/components/base/UxDivider";
import UxSpacer from "@/components/base/UxSpacer";
import UxIcon from "@/components/base/UxIcon";
import UxImage from "@/components/base/UxImage";
import UxButton from "@/components/base/UxButton";
import UxLink from "@/components/base/UxLink";
import UxChip from "@/components/base/UxChip";
import UxBadge from "@/components/base/UxBadge";
import UxThumb from "@/components/base/UxThumb";
import UxForm from "@/components/base/UxForm";
import UxField from "@/components/base/UxField";
import UxFieldset from "@/components/base/UxFieldset";
import UxInput from "@/components/base/UxInput";
import UxPhoneNumber from "@/components/base/UxPhoneNumber";
import UxTextarea from "@/components/base/UxTextarea";
import UxCheckbox from "@/components/base/UxCheckbox";
import UxCheckboxGroup from "@/components/base/UxCheckboxGroup";
import UxRadio from "@/components/base/UxRadio";
import UxRadioGroup from "@/components/base/UxRadioGroup";
import UxSwitch from "@/components/base/UxSwitch";
import UxFile from "@/components/base/UxFile";
import UxMasking from "@/components/base/UxMasking";
import UxPassword from "@/components/base/UxPassword";
import UxSelect from "@/components/base/UxSelect";
import UxRange from "@/components/base/UxRange";
import UxCard from "@/components/base/UxCard";
import UxCardGroup from "@/components/base/UxCardGroup";
import UxToggle from "@/components/base/UxToggle";
import UxToggleGroup from "@/components/base/UxToggleGroup";
import UxDropdown from "@/components/base/UxDropdown";
import UxFilter from "@/components/base/UxFilter";
import UxGroup from "@/components/base/UxGroup";
import UxList from "@/components/base/UxList";
import UxInfo from "@/components/base/UxInfo";
import UxTimeline from "@/components/base/UxTimeline";
import UxText from "@/components/base/UxText";
import UxTextList from "@/components/base/UxTextList";
import UxTable from "@/components/base/UxTable";
import UxPagination from "@/components/base/UxPagination";
import UxProgress from "@/components/base/UxProgress";
import UxKeypad from "@/components/base/UxKeypad";
import UxPopover from "@/components/base/UxPopover";
import UxTooltip from "@/components/base/UxTooltip";
import UxSwiper from "@/components/base/UxSwiper";
import UxSwiperSlide from "@/components/base/UxSwiperSlide";
import UxCollapse from "@/components/base/UxCollapse";
import UxCollapseGroup from "@/components/base/UxCollapseGroup";
import UxTab from "@/components/base/UxTab";
import UxTabPanel from "@/components/base/UxTabPanel";
import UxDatepicker from "@/components/base/UxDatepicker";
import UxCalendar from "@/components/base/UxCalendar";
import UxDateCalendar from "@/components/base/UxDateCalendar";
import UxMonthCalendar from "@/components/base/UxMonthCalendar";
import UxYearCalendar from "@/components/base/UxYearCalendar";
import UxModal from "@/components/base/UxModal";
import UxAlert from "@/components/base/UxAlert";
import UxConfirm from "@/components/base/UxConfirm";
import UxBottomSheet from "@/components/base/UxBottomSheet";
import UxToast from "@/components/base/UxToast";

export default function Sample() {
  useEffect(() => {
    console.log(getRandomChar());
  }, []);

  return (
    <UxSection>
      <UxArticle className="h3">
        <UxSubject>
          <h3>Sample</h3>
        </UxSubject>
        <UxContent>
          <UxArticle className="h4">
            <UxSubject>
              <h4>UxButton</h4>
            </UxSubject>
            <UxContent>
              <UxButton>
                <span className="label">label</span>
              </UxButton>
              <UxButton disabled>
                <span className="label">label</span>
              </UxButton>
              <UxButton>
                <span className="label">icon</span>
                <UxIcon className="calendar" />
              </UxButton>
              <UxButton>
                <UxIcon className="calendar" />
                <span className="label">icon</span>
              </UxButton>
              <UxButton className="fill">
                <span className="label">label</span>
                <UxIcon
                  className="calendar"
                  color="white"
                />
              </UxButton>
            </UxContent>
          </UxArticle>

          <UxArticle className="h4">
            <UxSubject>
              <h4>UxInput</h4>
            </UxSubject>
            <UxContent>
              <UxInput
                type="text"
                value="default"
                placeholder="placeholder"
                clear
              />
              <UxInput
                type="text"
                value="valid"
                placeholder="placeholder"
                clear
                valid={true}
              />
              <UxInput
                type="text"
                value="invalid"
                placeholder="placeholder"
                clear
                valid={false}
              />
              <UxInput
                type="text"
                value="readonly"
                placeholder="placeholder"
                clear
                readonly
              />
              <UxInput
                type="text"
                value="disabled"
                placeholder="placeholder"
                clear
                disabled
              />
              <UxInput
                type="text"
                value="value"
                placeholder="placeholder"
                clear
                prefix="prefix"
              />
              <UxInput
                type="text"
                value="value"
                placeholder="placeholder"
                clear
                suffix="suffix"
              />
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

          <UxArticle className="h4">
            <UxSubject>
              <h4>UxPhoneNumber</h4>
            </UxSubject>
            <UxContent>
              <UxPhoneNumber clear />
              <UxPhoneNumber
                value1="010"
                value2="1234"
                value3="5678"
                submit="submit"
                clear
              />
              <UxPhoneNumber
                value1="010"
                value2="1234"
                value3="5678"
                submit="submit"
                clear
                valid={true}
              />
              <UxPhoneNumber
                value1="010"
                value2="1234"
                value3="5678"
                submit="submit"
                clear
                valid={false}
              />
              <UxPhoneNumber
                value1="010"
                value2="1234"
                value3="5678"
                clear
                readonly
              />
              <UxPhoneNumber
                value1="010"
                value2="1234"
                value3="5678"
                clear
                disabled
              />
            </UxContent>
          </UxArticle>

          <UxArticle className="h4">
            <UxSubject>
              <h4>UxCheckbox</h4>
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

          <UxArticle className="h4">
            <UxSubject>
              <h4>UxRadio</h4>
            </UxSubject>
            <UxContent>
              <UxRadioGroup>
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
              <UxRadioGroup className="column">
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
            </UxContent>
          </UxArticle>

          <UxChip>UxChip</UxChip>
          <UxDivider>UxDivider</UxDivider>
          <UxFile>UxFile</UxFile>
          <UxIcon>UxIcon</UxIcon>
          <UxImage>UxImage</UxImage>
          <UxLink>UxLink</UxLink>
          <UxPassword>UxPassword</UxPassword>
          <UxRange>UxRange</UxRange>
          <UxSelect>UxSelect</UxSelect>
          <UxSpacer>UxSpacer</UxSpacer>
          <UxSwitch>UxSwitch</UxSwitch>
          <UxText>UxText</UxText>
          <UxTextarea>UxTextarea</UxTextarea>
          <UxBadge>UxBadge</UxBadge>
          <UxAlert>UxAlert</UxAlert>
          <UxBottomSheet>UxBottomSheet</UxBottomSheet>
          <UxCalendar>UxCalendar</UxCalendar>
          <UxCard>UxCard</UxCard>
          <UxCollapse>UxCollapse</UxCollapse>
          <UxConfirm>UxConfirm</UxConfirm>
          <UxDateCalendar>UxDateCalendar</UxDateCalendar>
          <UxDatepicker>UxDatepicker</UxDatepicker>
          <UxDropdown>UxDropdown</UxDropdown>
          <UxField>UxField</UxField>
          <UxFieldset>UxFieldset</UxFieldset>
          <UxFilter>UxFilter</UxFilter>
          <UxForm>UxForm</UxForm>
          <UxGroup>UxGroup</UxGroup>
          <UxInfo>UxInfo</UxInfo>
          <UxKeypad>UxKeypad</UxKeypad>
          <UxList>UxList</UxList>
          <UxMasking>UxMasking</UxMasking>
          <UxModal>UxModal</UxModal>
          <UxMonthCalendar>UxMonthCalendar</UxMonthCalendar>
          <UxPagination>UxPagination</UxPagination>
          <UxPopover>UxPopover</UxPopover>
          <UxProgress>UxProgress</UxProgress>
          <UxSwiper>UxSwiper</UxSwiper>
          <UxTab>UxTab</UxTab>
          <UxTable>UxTable</UxTable>
          <UxTextList>UxTextList</UxTextList>
          <UxThumb>UxThumb</UxThumb>
          <UxTimeline>UxTimeline</UxTimeline>
          <UxToast>UxToast</UxToast>
          <UxToggle>UxToggle</UxToggle>
          <UxToggleGroup>UxToggleGroup</UxToggleGroup>
          <UxTooltip>UxTooltip</UxTooltip>
          <UxYearCalendar>UxYearCalendar</UxYearCalendar>
        </UxContent>
      </UxArticle>
    </UxSection>
  )
};