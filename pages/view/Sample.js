import React, { useState, useRef, useEffect } from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxTitle from "@/components/layout/UxTitle";
import UxContent from "@/components/layout/UxContent";
/* BASE */
import UxChip from "@/components/base/UxChip";
import UxDivider from "@/components/base/UxDivider";
import UxFile from "@/components/base/UxFile";
import UxIcon from "@/components/base/UxIcon";
import UxImage from "@/components/base/UxImage";
import UxInput from "@/components/base/UxInput";
import UxLink from "@/components/base/UxLink";
import UxPassword from "@/components/base/UxPassword";
import UxRadio from "@/components/base/UxRadio";
import UxRange from "@/components/base/UxRange";
import UxSelect from "@/components/base/UxSelect";
import UxSpacer from "@/components/base/UxSpacer";
import UxSwitch from "@/components/base/UxSwitch";
import UxText from "@/components/base/UxText";
import UxTextarea from "@/components/base/UxTextarea";
import UxBadge from "@/components/base/UxBadge";
import UxButton from "@/components/base/UxButton";
import UxCheckbox from "@/components/base/UxCheckbox";
/* MIXIN */
import UxAlert from "@/components/mixin/UxAlert";
import UxBottomSheet from "@/components/mixin/UxBottomSheet";
import UxCalendar from "@/components/mixin/UxCalendar";
import UxCard from "@/components/mixin/UxCard";
import UxCollapse from "@/components/mixin/UxCollapse";
import UxConfirm from "@/components/mixin/UxConfirm";
import UxDateCalendar from "@/components/mixin/UxDateCalendar";
import UxDatepicker from "@/components/mixin/UxDatepicker";
import UxDropdown from "@/components/mixin/UxDropdown";
import UxField from "@/components/mixin/UxField";
import UxFieldset from "@/components/mixin/UxFieldset";
import UxFilter from "@/components/mixin/UxFilter";
import UxForm from "@/components/mixin/UxForm";
import UxGroup from "@/components/mixin/UxGroup";
import UxInfo from "@/components/mixin/UxInfo";
import UxKeypad from "@/components/mixin/UxKeypad";
import UxList from "@/components/mixin/UxList";
import UxMasking from "@/components/mixin/UxMasking";
import UxModal from "@/components/mixin/UxModal";
import UxMonthCalendar from "@/components/mixin/UxMonthCalendar";
import UxPagination from "@/components/mixin/UxPagination";
import UxPopover from "@/components/mixin/UxPopover";
import UxProgress from "@/components/mixin/UxProgress";
import UxSwiper from "@/components/mixin/UxSwiper";
import UxTab from "@/components/mixin/UxTab";
import UxTable from "@/components/mixin/UxTable";
import UxTextList from "@/components/mixin/UxTextList";
import UxThumb from "@/components/mixin/UxThumb";
import UxTimeline from "@/components/mixin/UxTimeline";
import UxToast from "@/components/mixin/UxToast";
import UxToggle from "@/components/mixin/UxToggle";
import UxToggleGroup from "@/components/mixin/UxToggleGroup";
import UxTooltip from "@/components/mixin/UxTooltip";
import UxYearCalendar from "@/components/mixin/UxYearCalendar";

export default function Sample() {
  return (
    <UxSection>
      <UxArticle className="h3">
        <UxTitle>
          <h3>Sample</h3>
        </UxTitle>
        <UxContent>
          {/* BASE */}
          <UxArticle className="h4">
            <UxTitle>
              UxInput
            </UxTitle>
            <UxContent>
              <UxInput
                type="text"
                // className="right"
                value="123"
                placeholder="placeholder"
                prefix="prefix"
                suffix="suffix"
                timer="03:00"
                isClear={true}
                // valid={true}
                // invalid={true}
                // readonly={true}
                // disabled={true}
                onInput={(event) => {
                  console.log(`UxInput onInput`, event);
                }}
                onChange={(event) => {
                  console.log(`UxInput onChange`, event);
                }}
                onFocus={(event) => {
                  console.log(`UxInput onFocus`, event);
                }}
                onBlur={(event) => {
                  console.log(`UxInput onBlur`, event);
                }}
                onKeyDown={(event) => {
                  console.log(`UxInput onKeyDown`, event);
                }}
                onKeyUp={(event) => {
                  console.log(`UxInput onKeyUp`, event);
                }}
              />
            </UxContent>
          </UxArticle>

          <UxChip>UxChip</UxChip>
          <UxDivider>UxDivider</UxDivider>
          <UxFile>UxFile</UxFile>
          <UxIcon>UxIcon</UxIcon>
          <UxImage>UxImage</UxImage>
          <UxLink>UxLink</UxLink>
          <UxPassword>UxPassword</UxPassword>
          <UxRadio>UxRadio</UxRadio>
          <UxRange>UxRange</UxRange>
          <UxSelect>UxSelect</UxSelect>
          <UxSpacer>UxSpacer</UxSpacer>
          <UxSwitch>UxSwitch</UxSwitch>
          <UxText>UxText</UxText>
          <UxTextarea>UxTextarea</UxTextarea>
          <UxBadge>UxBadge</UxBadge>
          <UxButton>UxButton</UxButton>
          <UxCheckbox>UxCheckbox</UxCheckbox>
          {/* MIXIN */}
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
}