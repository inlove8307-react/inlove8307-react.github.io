import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxTitle from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";

import UxIcon from "@/components/base/UxIcon";

export default function Page() {
  const icons = [
    "clear",
    "calendar",
    "checked",
    "checked-square",
    "unchecked-square",
    "checked-circle",
    "unchecked-circle",
    "selected-circle",
    "unselected-circle",
    "angle-left",
    "angle-right",
    "angle-up",
    "angle-down",
    "angle-left-double",
    "angle-right-double",
    "caret-left",
    "caret-right",
    "caret-up",
    "caret-down",
    "backward",
    "forward",
    "question",
  ];

  return (
    <UxSection>
      <UxArticle className="h3">
        <UxTitle>
          <h3>ICON</h3>
        </UxTitle>
        <UxContent>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.6rem .8rem",
            }}
          >
            {
              icons.map((icon, index) => (
                <li
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: ".4rem",
                    padding: ".8rem",
                    borderRadius: ".8rem",
                    border: ".1rem solid var(--light1)",
                    boxShadow: "0 .2rem .4rem rgba(0, 0, 0, .05)"
                  }}
                >
                  <UxIcon className={icon} />
                  <span>.{icon}</span>
                </li>
              ))
            }
          </ul>
        </UxContent>
      </UxArticle>
    </UxSection>
  )
}