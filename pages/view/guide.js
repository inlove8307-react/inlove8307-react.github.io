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
import UxPhone from "@/components/base/UxPhone";
import UxRrn from "@/components/base/UxRrn";
import UxLrn from "@/components/base/UxLrn";
import UxBrn from "@/components/base/UxBrn";
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
              <UxArticle className="h5">
                <UxSubject>
                  <h5>UxButton - Default</h5>
                </UxSubject>
                <UxContent>
                  <UxButton>
                    <span className="label">label</span>
                  </UxButton>
                </UxContent>
              </UxArticle>

              <UxDivider className="linear" />

              <UxArticle className="h5">
                <UxSubject>
                  <h5>UxButton - Disabled</h5>
                </UxSubject>
                <UxContent>
                  <UxButton disabled>
                    <span className="label">label</span>
                  </UxButton>
                </UxContent>
              </UxArticle>

              <UxDivider className="linear" />

              <UxArticle className="h5">
                <UxSubject>
                  <h5>UxButton - Icon Right</h5>
                </UxSubject>
                <UxContent>
                  <UxButton>
                    <span className="label">icon</span>
                    <UxIcon className="calendar" />
                  </UxButton>
                </UxContent>
              </UxArticle>

              <UxDivider className="linear" />

              <UxArticle className="h5">
                <UxSubject>
                  <h5>UxButton - Icon Left</h5>
                </UxSubject>
                <UxContent>
                  <UxButton>
                    <UxIcon className="calendar" />
                    <span className="label">icon</span>
                  </UxButton>
                </UxContent>
              </UxArticle>
            </UxContent>
          </UxArticle>

          <UxDivider />

          <UxArticle className="h4">
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

          <UxArticle className="h4">
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

          <UxArticle className="h4">
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
                  <h5>UxPhone - Default</h5>
                </UxSubject>
                <UxContent>
                  <UxPhone
                    value1="010"
                    value2="1234"
                    value3="5678"
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

          <UxArticle className="h4">
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

          <UxArticle className="h4">
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
                  <h5>UxLrn - Default</h5>
                </UxSubject>
                <UxContent>
                  <UxLrn
                    value1="010"
                    value2="1234"
                    value3="5678"
                    submit="submit"
                    clear
                  />
                </UxContent>
              </UxArticle>

              <UxDivider className="linear" />

              <UxArticle className="h5">
                <UxSubject>
                  <h5>UxLrn - Valid</h5>
                </UxSubject>
                <UxContent>
                  <UxLrn
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
                  <h5>UxLrn - Invalid</h5>
                </UxSubject>
                <UxContent>
                  <UxLrn
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
                  <h5>UxLrn - Readonly</h5>
                </UxSubject>
                <UxContent>
                  <UxLrn
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
                  <h5>UxLrn - Disabled</h5>
                </UxSubject>
                <UxContent>
                  <UxLrn
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

          <UxArticle className="h4">
            <UxSubject>
              <h4>UxBrn (사업자번호)</h4>
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
                  <h5>UxBrn - Default</h5>
                </UxSubject>
                <UxContent>
                  <UxBrn
                    value1="010"
                    value2="1234"
                    value3="5678"
                    submit="submit"
                    clear
                  />
                </UxContent>
              </UxArticle>

              <UxDivider className="linear" />

              <UxArticle className="h5">
                <UxSubject>
                  <h5>UxBrn - Valid</h5>
                </UxSubject>
                <UxContent>
                  <UxBrn
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
                  <h5>UxBrn - Invalid</h5>
                </UxSubject>
                <UxContent>
                  <UxBrn
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
                  <h5>UxBrn - Readonly</h5>
                </UxSubject>
                <UxContent>
                  <UxBrn
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
                  <h5>UxBrn - Disabled</h5>
                </UxSubject>
                <UxContent>
                  <UxBrn
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

          <UxArticle className="h4">
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

          <UxArticle className="h4">
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

          <UxArticle className="h4">
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